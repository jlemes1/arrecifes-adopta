import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';

// Callback para manejar el intercambio de código por sesión
export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const next = searchParams.get('next') ?? '/admin';

  // Si hay código, intenta intercambiarlo por una sesión
  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    // Si no hay error, redirige a la página siguiente
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // Si no hay código o falló el intercambio, redirigir a login
  return NextResponse.redirect(`${origin}/login`);
}
