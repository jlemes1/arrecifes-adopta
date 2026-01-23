import Link from 'next/link';

export default function Faq() {
  return (
    <>
      <section className='bg-accent flex flex-col lg:flex-row  px-4 sm:px-12 lg:px-72 pt-8 lg:pt-20 '>
        <div className='pb-8 lg:pb-12.5 text-center lg:text-left'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-4'>
            FAQ
          </h1>
          <Link href='/' className='font-medium'>
            Volver
          </Link>
        </div>
      </section>

      <section className='flex flex-col justify-center items-center bg-base-200 w-full max-w-3xl lg:max-w-4xl mx-auto h-auto shadow-sm rounded-none border border-accent p-4 sm:p-5 lg:p-6 m-20'>
        <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold'>
          Sobre Arrecifes Adopta
        </h2>
        <div className='divider divider-accent'></div>
        <div tabIndex={0} className='collapse collapse-plus bg-base-200 w-full'>
          <div className='collapse-title text-lg font-semibold'>Qué es?</div>
          <div className='collapse-content text-md'>
            Arrecifes Adopta es un espacio para publicar y adoptar mascotas.
          </div>
        </div>
        <div tabIndex={0} className='collapse collapse-plus bg-base-200 w-full'>
          <div className='collapse-title text-lg font-semibold'>
            Necesito una cuenta?
          </div>
          <div className='collapse-content text-md'>
            No, no es necesario registrarse.
          </div>
        </div>
        <div tabIndex={0} className='collapse collapse-plus bg-base-200 w-full'>
          <div className='collapse-title text-lg font-semibold'>
            Tiene algún costo?
          </div>
          <div className='collapse-content text-md'>
            No, es totalmente gratuito.
          </div>
        </div>
        <div className='divider divider-accent'></div>
        <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold'>
          Sobre las publicaciones
        </h2>
        <div className='divider divider-accent'></div>
        <div tabIndex={0} className='collapse collapse-plus bg-base-200 w-full'>
          <div className='collapse-title text-lg font-semibold'>
            Cómo publico una mascota?
          </div>
          <div className='collapse-content text-md'>
            En la seccion Servicios, podras crear una publicacion de tu mascota
            completando un formulario. Una vez enviada, si tu publicación cumple
            con los datos solicitados aparecerá en la lista de mascotas
            disponibles.
          </div>
        </div>
        <div tabIndex={0} className='collapse collapse-plus bg-base-200 w-full'>
          <div className='collapse-title text-lg font-semibold'>
            Por qué no aparece mi publicación?
          </div>
          <div className='collapse-content text-md'>
            Si no aparece, es porque todavía no la revisó un administrador o fue
            rechazada.
          </div>
        </div>
        <div className='divider divider-accent'></div>
        <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold'>
          Sobre la adopción
        </h2>
        <div className='divider divider-accent'></div>
        <div tabIndex={0} className='collapse collapse-plus bg-base-200 w-full'>
          <div className='collapse-title text-lg font-semibold'>
            Cómo adopto una mascota?
          </div>
          <div className='collapse-content text-md'>
            Completando un formulario en la seccion Mascotas.
          </div>
        </div>
        <div tabIndex={0} className='collapse collapse-plus bg-base-200 w-full'>
          <div className='collapse-title text-lg font-semibold'>
            Cuáles son los pasos a seguir?
          </div>
          <div className='collapse-content text-md'>
            Después de completar el formulario con tus datos, deberas esperar a
            que te contacte el dueño de la mascota.
          </div>
        </div>
      </section>
    </>
  );
}
