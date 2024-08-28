import { UserCircleIcon } from "@heroicons/react/24/outline";

type GroupItemLinkProps = {
	url: string;
	name: string;
	description: string;
	currentUserIsRegistered: boolean;
};

const GroupItemLink: React.FC<GroupItemLinkProps> = ({
	url,
	name,
	description,
	currentUserIsRegistered,
}) => {
	const handleClick = () => {
		window.location.href = url;
	};

	return (
		<li
			className="group-card cursor-pointer rounded-lg bg-background p-4 shadow-md"
			onClick={handleClick}
		>
			<div className="mb-2">
				<div className="flex items-center justify-between font-medium text-neutral-700">
					<h3 className="mb-2 text-xl font-bold">{name}</h3>
					{currentUserIsRegistered && (
						<UserCircleIcon aria-hidden="true" className="ml-auto h-6 w-6 text-primary-600" />
					)}
				</div>
			</div>
			<div className="text-sm text-muted-foreground">{description}</div>
		</li>
	);
};

export default GroupItemLink;
