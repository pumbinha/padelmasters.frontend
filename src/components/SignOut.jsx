import {signOut} from 'auth-astro/client';

const SignOut = ({children}) => {
   

  const handle = () => {
    signOut();
  };

  return (
    <button onClick={handle} className='rounded-md bg-primary px-6 py-3 text-primary-foreground transition-colors hover:bg-primary/90'>
      {children}
    </button>
  );
};

export default SignOut;
