import {signOut} from 'auth-astro/client';

const SignOut = ( {text} ) => {


  const handle = () => {
    
    signOut({ callbackUrl: '/' });


  };

  return (
    <button onClick={handle} className='rounded-md bg-primary px-6 py-3 text-primary-foreground transition-colors hover:bg-primary/90'>
      {text}
    </button>
  );
};

export default SignOut;
