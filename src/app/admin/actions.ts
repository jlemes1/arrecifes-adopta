'use server';

import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function approvePet(petId: number) {
  const supabase = await createClient();

  const { error } = await supabase
    .from('pets')
    .update({ status: 'approved' })
    .eq('id', petId);

  if (error) throw new Error('Error al aprobar la publicación');

  revalidatePath('/admin/publications');
  revalidatePath('/admin/approved');
}

export async function rejectPet(petId: number) {
  const supabase = await createClient();

  // Obtiene la mascota para borrar la imagen del storage
  const { data: pet } = await supabase
    .from('pets')
    .select('src')
    .eq('id', petId)
    .single();

  // Si la mascota tiene una imagen, la borra del storage
  if (pet?.src) {
    const fileName = pet.src.split('/').pop();
    if (fileName) {
      await supabase.storage.from('pets-images').remove([fileName]);
    }
  }

  // Borra la publicación
  const { error } = await supabase.from('pets').delete().eq('id', petId);

  if (error) throw new Error('Error al rechazar la publicación');

  revalidatePath('/admin/publications');
}

export async function deletePet(petId: number) {
  const supabase = await createClient();

  // Obtiene la mascota para borrar la imagen del storage
  const { data: pet } = await supabase
    .from('pets')
    .select('src')
    .eq('id', petId)
    .single();

  if (pet?.src) {
    const fileName = pet.src.split('/').pop();
    if (fileName) {
      await supabase.storage.from('pets-images').remove([fileName]);
    }
  }

  // Borra las solicitudes de adopción asociadas
  await supabase.from('adoption_requests').delete().eq('pet_id', petId);

  const { error } = await supabase.from('pets').delete().eq('id', petId);

  if (error) throw new Error('Error al eliminar la mascota');

  revalidatePath('/admin/approved');
}

export async function acceptAdoption(requestId: number, petId: number) {
  const supabase = await createClient();

  // Marca la mascota como adoptada
  const { error: petError } = await supabase
    .from('pets')
    .update({ adopted: true })
    .eq('id', petId);

  if (petError) throw new Error('Error al actualizar la mascota');

  // Cambia el estado de la solicitud a 'accepted'
  const { error: requestError } = await supabase
    .from('adoption_requests')
    .update({ status: 'accepted' })
    .eq('id', requestId);

  if (requestError) throw new Error('Error al aceptar la solicitud');

  // Borra las demás solicitudes pendientes para la misma mascota
  await supabase
    .from('adoption_requests')
    .delete()
    .eq('pet_id', petId) // misma mascota
    .neq('id', requestId) // que no sea la aceptada
    .eq('status', 'pending'); // solo las pendientes

  revalidatePath('/admin/adoptions');
  revalidatePath('/admin/approved');
  revalidatePath('/admin/history');
}

export async function rejectAdoption(requestId: number) {
  const supabase = await createClient();

  // Rechaza la solicitud y la borra de la base de datos
  const { error } = await supabase
    .from('adoption_requests')
    .delete()
    .eq('id', requestId);

  if (error) throw new Error('Error al rechazar la solicitud');

  revalidatePath('/admin/adoptions');
}

export async function logout() {
  // Cierra la sesión de Supabase (borra las cookies) y redirige a /login
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect('/login');
}
