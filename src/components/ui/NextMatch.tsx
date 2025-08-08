"use client";

import React from "react";
import { 
	CalendarDaysIcon, 
	ClockIcon
} from "@heroicons/react/24/outline";

type NextMatchProps = {
	team1Player1: string;
	team1Player2: string;
	team2Player1: string;
	team2Player2: string;
	team1Flag?: string;
	team2Flag?: string;
	date: string;
	time: string;
	tournament: string;
};

const NextMatch: React.FC<NextMatchProps> = ({
	team1Player1,
	team1Player2,
	team2Player1,
	team2Player2,
	team1Flag = "🇪🇸",
	team2Flag = "🇫🇷",
	date,
	time,
	tournament
}) => {
	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		return date.toLocaleDateString('es-ES', { 
			day: '2-digit', 
			month: '2-digit'
		});
	};


	return (
		<div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-2xl">
			{/* Header */}
			<div className="flex items-center gap-2 mb-3">
				<CalendarDaysIcon className="h-5 w-5 text-white" />
				<h3 className="text-sm font-semibold text-white">
					Próximo Partido
				</h3>
			</div>

			{/* Match Info Compact */}
			<div className="space-y-3">
				{/* Teams vs Teams */}
				<div className="flex items-center justify-center gap-3">
					<div className="flex items-center gap-2">
						<span className="text-lg">{team1Flag}</span>
						<div className="text-sm font-medium text-white text-right">
							<div>{team1Player1}</div>
							<div>{team1Player2}</div>
						</div>
					</div>
					<span className="text-white/60 text-sm">vs</span>
					<div className="flex items-center gap-2">
						<div className="text-sm font-medium text-white text-left">
							<div>{team2Player1}</div>
							<div>{team2Player2}</div>
						</div>
						<span className="text-lg">{team2Flag}</span>
					</div>
				</div>

				{/* Date & Time Row */}
				<div className="flex items-center justify-between text-sm">
					<div className="flex items-center gap-2 text-white/80">
						<CalendarDaysIcon className="h-4 w-4" />
						<span>{formatDate(date)}</span>
					</div>
					<div className="flex items-center gap-2 text-white/80">
						<ClockIcon className="h-4 w-4" />
						<span>{time}</span>
					</div>
				</div>

				{/* Tournament */}
				<div className="text-center">
					<div className="text-xs text-white/60">{tournament}</div>
				</div>
			</div>
		</div>
	);
};

export default NextMatch;