import {signIn} from 'auth-astro/client';

const SignInComponent = ({children}) => {
   

  const handleLogin = () => {
    signIn("keycloak",  { callbackUrl: '/profile' });    
  };

  return (
    <button onClick={handleLogin} className='rounded-md bg-primary px-6 py-3 text-primary-foreground transition-colors hover:bg-primary/90'>
      {children}
    </button>
  );
};

export default SignInComponent;
