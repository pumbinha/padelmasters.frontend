type GroupItemLinkProps = {
	url: string;
	name: string;
	description: string;
};

const GroupItemLink: React.FC<GroupItemLinkProps> = ({ url, name, description }) => {
	const handleClick = () => {
		window.location.href = url;
	};

	return (
		<li className="group-card rounded-lg bg-background p-4 shadow-md" onClick={handleClick}>
			<div className="mb-2 flex items-center justify-between">
				<div className="font-medium text-neutral-700">{name}</div>
			</div>
			<div className="text-sm text-muted-foreground">{description}</div>
		</li>
	);
};

export default GroupItemLink;
