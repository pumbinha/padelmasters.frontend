import { signIn } from "auth-astro/client";

type LeaveProps = {
	championshipId: string;
	text: string
}


const Leave: React.FC<LeaveProps> = ({ championshipId, text }) => {
	const handleClick = async () => {
    const data = { championshipId }; 

    const response = await fetch('/api/championships/leave', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log('Enriched data:', result);
  };

	return (
		<button
			onClick={handleClick}
			className="rounded-md bg-supporting-red-500 px-6 py-2 text-primary-foreground text-m transition-colors hover:bg-supporting-red-700 w-full"
		>
			{text}
		</button>
	);
};

export default Leave;
