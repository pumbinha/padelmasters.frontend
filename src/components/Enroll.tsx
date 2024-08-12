import { signIn } from "auth-astro/client";

type EnrollProps = {
	championshipId: string;
	text: string
}


const Enroll: React.FC<EnrollProps> = ({ championshipId, text }) => {
	const handleClick = async () => {
    const data = { championshipId }; // Replace with your actual data

    const response = await fetch('/api/championships/enroll', {
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
			className="rounded-md bg-primary-800 px-6 py-2 text-primary-foreground text-m transition-colors hover:bg-primary-1000 w-full"
		>
			{text}
		</button>
	);
};

export default Enroll;
