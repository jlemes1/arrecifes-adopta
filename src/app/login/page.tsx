import { LoginForm } from '@/components/forms/LoginForm';

export function Login() {
  return (
    <>
      <section className='bg-accent flex flex-col lg:flex-row  px-4 sm:px-12 lg:px-72 pt-8 lg:pt-20 '>
        <div className='pb-8 lg:pb-12.5 text-center lg:text-left'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-4'>
            Administrador
          </h1>
        </div>
      </section>

      <section className='flex items-center justify-center px-6 sm:px-8 h-[calc(100vh-450px)]'>
        <LoginForm />
      </section>
    </>
  );
}

export default Login;
