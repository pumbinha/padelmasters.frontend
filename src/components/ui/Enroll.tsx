import { UserPlusIcon } from "@heroicons/react/24/outline";

type EnrollProps = {
	championshipId: string;
	text: string
}


const Enroll: React.FC<EnrollProps> = ({ championshipId, text }) => {
	const handleClick = async () => {
    const data = { championshipId };

    const response = await fetch('/api/championships/enroll', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });      
    
    if(response.ok) {
      
      const result = await response.json();
      window.location.href = `/championships/${championshipId}`;
    }else{
      console.error('Failed to process data');  
    }
  };

	return (
		<button
			onClick={handleClick}
			className="rounded-md bg-primary-800 px-6 py-2 text-primary-foreground text-m transition-colors hover:bg-primary-1000 w-full"
		>
      <UserPlusIcon className="h-6 w-6 inline-block mr-2" /> 
			{text}
		</button>
	);
};

export default Enroll;
