import { useEffect, useState } from "react";
import { PencilIcon } from "@heroicons/react/20/solid";

interface MatchEditLinkProps {
	matchId: string;
	returnUrl?: string;
}

export default function MatchEditLink({ matchId, returnUrl }: MatchEditLinkProps) {
	const [editUrl, setEditUrl] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchMatchDetails = async () => {
			try {
				// First, try to get the match via the dedicated API
				const response = await fetch(`/api/matches/details?matchId=${matchId}`);

				if (response.ok) {
					const data = await response.json();
					if (data.championshipId && data.groupId) {
						// Append returnUrl as a query parameter if provided
						const editUrlBase = `/championships/${data.championshipId}/${data.groupId}/matches/${matchId}/edit`;
						setEditUrl(
							returnUrl ? `${editUrlBase}?returnUrl=${encodeURIComponent(returnUrl)}` : editUrlBase
						);
					} else {
						// Fallback to our redirect endpoint
						const redirectUrl = `/matches/${matchId}/edit`;
						setEditUrl(
							returnUrl ? `${redirectUrl}?returnUrl=${encodeURIComponent(returnUrl)}` : redirectUrl
						);
					}
				} else {
					// Fallback to our redirect endpoint
					const redirectUrl = `/matches/${matchId}/edit`;
					setEditUrl(
						returnUrl ? `${redirectUrl}?returnUrl=${encodeURIComponent(returnUrl)}` : redirectUrl
					);
				}
			} catch (err) {
				console.error("Error fetching match details:", err);
				// Fallback to our redirect endpoint
				setEditUrl(`/matches/${matchId}/edit`);
			} finally {
				setIsLoading(false);
			}
		};

		fetchMatchDetails();
	}, [matchId]);

	if (isLoading) {
		return (
			<span className="opacity-50">
				<PencilIcon className="h-4 w-4" />
			</span>
		);
	}

	return (
		<a href={editUrl || `/matches/${matchId}/edit`}>
			<PencilIcon className="h-4 w-4" />
		</a>
	);
}
