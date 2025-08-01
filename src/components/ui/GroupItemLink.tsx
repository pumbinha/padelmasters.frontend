import { 
	CheckCircleIcon,
	TrophyIcon
} from "@heroicons/react/24/solid";
import { 
	UsersIcon, 
	CalendarDateRangeIcon,
	CalendarIcon,
	ChartBarIcon,
	ClockIcon
} from "@heroicons/react/24/outline";

// Import for flag component - will be used as JSX
const CountryFlag = ({ countryCode, className }: { countryCode: string; className?: string }) => (
	<span className={`fi fi-${countryCode.toLowerCase()} ${className || ''}`} title={countryCode}></span>
);

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

	// Mock statistics for now - in real implementation, these would come from props
	const mockStats = {
		players: Math.floor(Math.random() * 16) + 8,  // 8-24 players
		maxPlayers: 24,
		totalMatches: Math.floor(Math.random() * 50) + 20, // 20-70 matches
		playedMatches: Math.floor(Math.random() * 30) + 5, // 5-35 played
		pendingMatches: 0,
		completionPercentage: 0
	};

	mockStats.pendingMatches = mockStats.totalMatches - mockStats.playedMatches;
	mockStats.completionPercentage = Math.round((mockStats.playedMatches / mockStats.totalMatches) * 100);

	// Mock additional data
	const mockLeaderNames = ["Carlos M.", "Ana L.", "Miguel R.", "Sofia P.", "David G.", "Laura C.", "Javier S.", "María F."];
	const mockLeader = mockLeaderNames[Math.floor(Math.random() * mockLeaderNames.length)];
	
	// Mock players with countries and rankings
	const mockPlayers = [
		{ name: "Carlos M", country: "ES", ranking: 15 },
		{ name: "Ana L", country: "ES", ranking: 28 },
		{ name: "Miguel R", country: "ES", ranking: 42 },
		{ name: "Sofia P", country: "AR", ranking: 8 },
		{ name: "David G", country: "ES", ranking: 31 },
		{ name: "Laura C", country: "FR", ranking: 19 },
		{ name: "Javier S", country: "ES", ranking: 7 },
		{ name: "María F", country: "US", ranking: 52 },
		{ name: "Pablo R", country: "AR", ranking: 12 },
		{ name: "Emma N", country: "US", ranking: 35 }
	];

	// Mock next match with players
	const getNextMatch = () => {
		const random = Math.random();
		if (random < 0.3) {
			return null; // Sin partidos programados
		} else {
			const shuffled = [...mockPlayers].sort(() => 0.5 - Math.random());
			const team1 = shuffled.slice(0, 2);
			const team2 = shuffled.slice(2, 4);
			
			let date, time;
			if (random < 0.5) {
				date = "Hoy, 1 de Agosto";
				time = "19:30";
			} else if (random < 0.7) {
				date = "Mañana, 2 de Agosto";
				time = "18:00";
			} else {
				const dates = ["Lunes, 5 de Agosto", "Martes, 6 de Agosto", "Miércoles, 7 de Agosto", "Jueves, 8 de Agosto", "Viernes, 9 de Agosto"];
				date = dates[Math.floor(Math.random() * dates.length)];
				const hours = ["17:00", "18:30", "19:00", "20:30"];
				time = hours[Math.floor(Math.random() * hours.length)];
			}
			
			return {
				date,
				time,
				team1,
				team2
			};
		}
	};

	// Mock last activity with players and result  
	const getLastActivity = () => {
		const random = Math.random();
		if (random < 0.2) {
			return null; // Sin actividad reciente
		}
		
		const shuffled = [...mockPlayers].sort(() => 0.5 - Math.random());
		const team1 = shuffled.slice(0, 2);
		const team2 = shuffled.slice(2, 4);
		
		const results = [
			{ score: "6-4, 6-2", winner: 1, timeAgo: "Ayer, 31 de Julio" },
			{ score: "7-5, 4-6, 6-3", winner: 1, timeAgo: "Martes, 30 de Julio" },
			{ score: "6-1, 6-0", winner: 2, timeAgo: "Lunes, 29 de Julio" },
			{ score: "6-4, 7-6", winner: 1, timeAgo: "Domingo, 28 de Julio" },
			{ score: "4-6, 6-4, 7-5", winner: 2, timeAgo: "Sábado, 27 de Julio" }
		];
		const result = results[Math.floor(Math.random() * results.length)];
		
		return {
			team1,
			team2,
			score: result?.score || "6-4, 6-2",
			winner: result?.winner || 1,
			timeAgo: result?.timeAgo || "hace 1 día"
		};
	};

	const nextMatch = getNextMatch();
	const lastActivity = getLastActivity();

	return (
		<a
			href={url}
			className="group cursor-pointer overflow-hidden rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-105 block"
		>
			{/* Header similar to championship cards */}
			<div className="px-4 py-3 border-b border-white/20 bg-white/5 rounded-t-xl">
				<div className="flex items-center justify-between">
					{/* Left side: Title */}
					<div className="flex-1">
						<h2 className="text-lg font-semibold text-white group-hover:text-blue-200 transition-colors">
							{name}
						</h2>
					</div>

					{/* Right side: Registration status */}
					{currentUserIsRegistered && (
						<div className="flex items-center gap-1 px-2 py-1 bg-green-500/20 border border-green-400/30 rounded-lg backdrop-blur-sm">
							<span className="text-xs">✅</span>
							<span className="text-xs text-green-200 font-medium">Enrolled</span>
						</div>
					)}
				</div>
			</div>

			{/* Content similar to championship cards */}
			<div className="p-4 border-t border-white/20">
				{/* Description */}
				<p className="text-sm text-white/80 mb-4 line-clamp-2">
					{description || "Competitive group with skilled players competing for the championship title."}
				</p>

				{/* Separator between description and statistics */}
				<div className="border-b border-white/20 mb-4"></div>

				{/* Statistics Row */}
				<div className="grid grid-cols-4 gap-4 mb-4">
					<div className="flex flex-col items-center gap-1">
						<div className="flex items-center gap-2">
							<UsersIcon className="h-5 w-5 text-blue-400" />
							<span className="text-sm font-semibold text-white">
								{mockStats.players}/{mockStats.maxPlayers}
							</span>
						</div>
						<span className="text-xs text-blue-300">Players</span>
					</div>
					
					<div className="flex flex-col items-center gap-1">
						<div className="flex items-center gap-2">
							<CalendarDateRangeIcon className="h-5 w-5 text-green-400" />
							<span className="text-sm font-semibold text-white">
								{mockStats.totalMatches}
							</span>
						</div>
						<span className="text-xs text-green-300">Matches</span>
					</div>
					
					<div className="flex flex-col items-center gap-1">
						<div className="flex items-center gap-2">
							<CheckCircleIcon className="h-5 w-5 text-purple-400" />
							<span className="text-sm font-semibold text-white">
								{mockStats.playedMatches}
							</span>
						</div>
						<span className="text-xs text-purple-300">Played</span>
					</div>
					
					<div className="flex flex-col items-center gap-1">
						<div className="flex items-center gap-2">
							<ClockIcon className="h-5 w-5 text-orange-400" />
							<span className="text-sm font-semibold text-white">
								{mockStats.pendingMatches}
							</span>
						</div>
						<span className="text-xs text-orange-300">Pending</span>
					</div>
				</div>

				{/* Separator between statistics and progress */}
				<div className="border-b border-white/20 mb-4"></div>

				{/* Progress Bar */}
				<div className="mb-4">
					<div className="flex items-center justify-between mb-2">
						<span className="text-xs font-medium text-white/80">Group Progress</span>
						<span className="text-xs text-white/70">
							{mockStats.completionPercentage}%
						</span>
					</div>
					<div className="w-full bg-white/20 rounded-full h-2">
						<div 
							className="bg-green-400 h-2 rounded-full transition-all duration-300"
							style={{ width: `${mockStats.completionPercentage}%` }}
						></div>
					</div>
				</div>

				{/* Separator before additional stats */}
				<div className="border-b border-white/20 mb-4"></div>

				{/* Additional Statistics */}
				<div className="space-y-4">
					{/* Group Leader */}
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-2">
							<TrophyIcon className="h-4 w-4 text-yellow-400" />
							<span className="text-xs font-medium text-white/80">Líder del grupo</span>
						</div>
						<span className="text-sm font-semibold text-yellow-300">{mockLeader}</span>
					</div>

					{/* Next Match - Always show with consistent format */}
					<div>
						<div className="flex items-center gap-2 mb-2">
							<CalendarIcon className="h-4 w-4 text-blue-400" />
							<span className="text-xs font-medium text-white/80">Próximo partido</span>
						</div>
						<div className="ml-6 bg-white/5 rounded-lg border border-white/20">
							{/* Header with icons and info */}
							<div className="flex items-center justify-between px-3 py-2 border-b border-white/20">
								<div className="flex items-center gap-2">
									<CalendarIcon className="h-3 w-3 text-white/40" />
									<span className="text-xs text-white/60">{nextMatch?.date || '-'}</span>
								</div>
								<div className="flex items-center gap-2">
									<ClockIcon className="h-3 w-3 text-white/40" />
									<span className="text-xs text-white/60">{nextMatch?.time || '-'}</span>
								</div>
							</div>
							
							<div className="p-3">
								{nextMatch ? (
									<>
									<div className="flex items-center justify-between">
										<div className="text-xs text-white/90">
											<div className="flex items-center gap-2 mb-1">
												<CountryFlag countryCode={nextMatch.team1[0]?.country || 'ES'} className="w-4 h-3" />
												<span>{nextMatch.team1[0]?.name || 'Player'} ({nextMatch.team1[0]?.ranking || 0})</span>
											</div>
											<div className="flex items-center gap-2">
												<CountryFlag countryCode={nextMatch.team1[1]?.country || 'ES'} className="w-4 h-3" />
												<span>{nextMatch.team1[1]?.name || 'Player'} ({nextMatch.team1[1]?.ranking || 0})</span>
											</div>
										</div>
										<div className="text-xs text-white/60">vs</div>
										<div className="text-xs text-white/90 text-right">
											<div className="flex items-center gap-2 mb-1 justify-end">
												<span>{nextMatch.team2[0]?.name || 'Player'} ({nextMatch.team2[0]?.ranking || 0})</span>
												<CountryFlag countryCode={nextMatch.team2[0]?.country || 'ES'} className="w-4 h-3" />
											</div>
											<div className="flex items-center gap-2 justify-end">
												<span>{nextMatch.team2[1]?.name || 'Player'} ({nextMatch.team2[1]?.ranking || 0})</span>
												<CountryFlag countryCode={nextMatch.team2[1]?.country || 'ES'} className="w-4 h-3" />
											</div>
										</div>
									</div>
									</>
								) : (
									<div className="flex items-center justify-center py-4">
										<span className="text-xs text-white/60">Sin partidos programados</span>
									</div>
								)}
							</div>
						</div>
					</div>

					{/* Last Activity - Always show with consistent format */}
					<div>
						<div className="flex items-center gap-2 mb-2">
							<ChartBarIcon className="h-4 w-4 text-purple-400" />
							<span className="text-xs font-medium text-white/80">Último partido</span>
						</div>
						<div className="ml-6 bg-white/5 rounded-lg border border-white/20">
							{/* Header with icon and info */}
							<div className="flex items-center justify-between px-3 py-2 border-b border-white/20">
								<div className="flex items-center gap-2">
									<CalendarIcon className="h-3 w-3 text-white/40" />
									<span className="text-xs text-white/60">{lastActivity?.timeAgo || '-'}</span>
								</div>
							</div>
							
							<div className="p-3">
								{lastActivity ? (
									<>
									
									{/* Vertical layout like the image */}
									<div className="space-y-2">
										{/* Team 1 */}
										<div className="flex items-center justify-between py-2">
											<div className="flex flex-col gap-1">
												<div className="flex items-center gap-2">
													<CountryFlag countryCode={lastActivity.team1[0]?.country || 'ES'} className="w-4 h-3" />
													<span className="text-xs font-medium text-white">{lastActivity.team1[0]?.name || 'Player'} ({lastActivity.team1[0]?.ranking || 0})</span>
												</div>
												<div className="flex items-center gap-2">
													<CountryFlag countryCode={lastActivity.team1[1]?.country || 'ES'} className="w-4 h-3" />
													<span className="text-xs font-medium text-white">{lastActivity.team1[1]?.name || 'Player'} ({lastActivity.team1[1]?.ranking || 0})</span>
												</div>
											</div>
											<div className="flex gap-2 text-xs font-mono">
												{lastActivity.score.split(', ').map((set, index) => {
													const [score1, score2] = set.split('-');
													const team1Won = parseInt(score1 || '0') > parseInt(score2 || '0');
													return (
														<span key={index} className={team1Won ? 'text-white font-semibold' : 'text-white/60'}>
															{score1}
														</span>
													);
												})}
											</div>
										</div>
										
										{/* Team 2 */}
										<div className="flex items-center justify-between py-2">
											<div className="flex flex-col gap-1">
												<div className="flex items-center gap-2">
													<CountryFlag countryCode={lastActivity.team2[0]?.country || 'ES'} className="w-4 h-3" />
													<span className="text-xs font-medium text-white">{lastActivity.team2[0]?.name || 'Player'} ({lastActivity.team2[0]?.ranking || 0})</span>
												</div>
												<div className="flex items-center gap-2">
													<CountryFlag countryCode={lastActivity.team2[1]?.country || 'ES'} className="w-4 h-3" />
													<span className="text-xs font-medium text-white">{lastActivity.team2[1]?.name || 'Player'} ({lastActivity.team2[1]?.ranking || 0})</span>
												</div>
											</div>
											<div className="flex gap-2 text-xs font-mono">
												{lastActivity.score.split(', ').map((set, index) => {
													const [score1, score2] = set.split('-');
													const team2Won = parseInt(score2 || '0') > parseInt(score1 || '0');
													return (
														<span key={index} className={team2Won ? 'text-white font-semibold' : 'text-white/60'}>
															{score2}
														</span>
													);
												})}
											</div>
										</div>
									</div>
									</>
								) : (
									<div className="flex items-center justify-center py-8">
										<span className="text-xs text-white/60">Sin actividad reciente</span>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</a>
	);
};

export default GroupItemLink;
