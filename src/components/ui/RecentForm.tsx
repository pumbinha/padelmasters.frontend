"use client";

import React from "react";
import { TrophyIcon, FireIcon, CalendarDaysIcon, ClockIcon } from "@heroicons/react/24/outline";

type MatchResult = {
	id: string;
	result: "win" | "loss" | "draw";
	opponent: string;
	score: string;
	date: string;
	tournament?: string;
};

type NextMatch = {
	team1Player1: string;
	team1Player1Flag?: string;
	team1Player2: string;
	team1Player2Flag?: string;
	team2Player1: string;
	team2Player1Flag?: string;
	team2Player2: string;
	team2Player2Flag?: string;
	date: string;
	time: string;
	tournament: string;
};

type RecentFormProps = {
	matches: MatchResult[];
	currentStreak?: {
		type: "win" | "loss";
		count: number;
	};
	nextMatch?: NextMatch;
};

const RecentForm: React.FC<RecentFormProps> = ({ matches, currentStreak, nextMatch }) => {
	const getResultColor = (result: MatchResult["result"]) => {
		switch (result) {
			case "win":
				return "bg-green-500/80 border-green-400/60";
			case "loss":
				return "bg-red-500/80 border-red-400/60";
			case "draw":
				return "bg-yellow-500/80 border-yellow-400/60";
			default:
				return "bg-gray-500/80 border-gray-400/60";
		}
	};

	const getResultLabel = (result: MatchResult["result"]) => {
		switch (result) {
			case "win":
				return "V";
			case "loss":
				return "D";
			case "draw":
				return "E";
			default:
				return "?";
		}
	};

	const getStreakText = () => {
		if (!currentStreak) return null;
		
		const streakText = currentStreak.type === "win" 
			? `${currentStreak.count} victorias consecutivas`
			: `${currentStreak.count} derrotas seguidas`;
			
		return streakText;
	};

	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		return date.toLocaleDateString('es-ES', { 
			day: '2-digit', 
			month: '2-digit'
		});
	};

	return (
		<div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-2xl">
			{/* Header */}
			<div className="flex items-center gap-3 mb-4">
				<FireIcon className="h-6 w-6 text-white" />
				<div className="flex-1">
					<h3 className="text-base sm:text-lg font-semibold text-white">
						Forma Actual
					</h3>
					<p className="text-sm text-white/80">Últimos {matches.length} partidos</p>
				</div>
			</div>

			{/* Separator */}
			<div className="border-b border-white/20 mb-4"></div>

			{/* Match Results Visualization */}
			<div className="flex items-center justify-center gap-1 sm:gap-2 mb-4 flex-wrap">
				{matches.map((match) => (
					<div
						key={match.id}
						className={`group relative w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 ${getResultColor(match.result)} 
							flex items-center justify-center text-white text-xs font-bold 
							hover:scale-110 transition-all duration-200 cursor-pointer`}
						title={`vs ${match.opponent} (${match.score}) - ${match.date}`}
					>
						{getResultLabel(match.result)}
						
						{/* Tooltip */}
						<div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
							px-3 py-2 bg-black/90 backdrop-blur-sm text-white text-xs rounded-lg 
							opacity-0 group-hover:opacity-100 transition-opacity duration-200 
							pointer-events-none whitespace-nowrap z-10">
							<div className="font-semibold">vs {match.opponent}</div>
							<div>{match.score}</div>
							<div className="text-white/70">{match.date}</div>
							{match.tournament && (
								<div className="text-white/70 text-xs">{match.tournament}</div>
							)}
						</div>
					</div>
				))}
			</div>

			{/* Current Streak */}
			{currentStreak && currentStreak.count > 1 && (
				<div className="text-center">
					<div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-sm font-medium
						${currentStreak.type === "win" 
							? "bg-green-500/20 border border-green-400/30 text-green-300" 
							: "bg-red-500/20 border border-red-400/30 text-red-300"
						}`}>
						{currentStreak.type === "win" ? (
							<TrophyIcon className="h-4 w-4" />
						) : (
							<span className="text-lg">💔</span>
						)}
						<span>{getStreakText()}</span>
					</div>
				</div>
			)}

			{/* Legend */}
			<div className="flex items-center justify-center gap-4 mt-4 text-xs text-white/70">
				<div className="flex items-center gap-1">
					<div className="w-3 h-3 rounded-full bg-green-500/80 border border-green-400/60"></div>
					<span>Victoria</span>
				</div>
				<div className="flex items-center gap-1">
					<div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-400/60"></div>
					<span>Derrota</span>
				</div>
				<div className="flex items-center gap-1">
					<div className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-400/60"></div>
					<span>Empate</span>
				</div>
			</div>

			{/* Next Match Section */}
			{nextMatch && (
				<>
					{/* Separator */}
					<div className="border-t border-white/20 mt-4 pt-4">
						<div className="flex items-center gap-2 mb-3">
							<CalendarDaysIcon className="h-5 w-5 text-white" />
							<h4 className="text-sm font-semibold text-white">
								Próximo Partido
							</h4>
						</div>

						{/* Teams vs Teams */}
						<div className="flex items-center justify-center gap-3 mb-3">
							<div className="text-right">
								<div className="flex items-center justify-end gap-2 mb-1">
									<span className="text-lg">{nextMatch.team1Player1Flag}</span>
									<span className="text-sm font-medium text-white">{nextMatch.team1Player1}</span>
								</div>
								<div className="flex items-center justify-end gap-2">
									<span className="text-lg">{nextMatch.team1Player2Flag}</span>
									<span className="text-sm font-medium text-white">{nextMatch.team1Player2}</span>
								</div>
							</div>
							<span className="text-white/60 text-sm">vs</span>
							<div className="text-left">
								<div className="flex items-center gap-2 mb-1">
									<span className="text-sm font-medium text-white">{nextMatch.team2Player1}</span>
									<span className="text-lg">{nextMatch.team2Player1Flag}</span>
								</div>
								<div className="flex items-center gap-2">
									<span className="text-sm font-medium text-white">{nextMatch.team2Player2}</span>
									<span className="text-lg">{nextMatch.team2Player2Flag}</span>
								</div>
							</div>
						</div>

						{/* Date & Time Row */}
						<div className="flex items-center justify-between text-sm">
							<div className="flex items-center gap-2 text-white/80">
								<CalendarDaysIcon className="h-4 w-4" />
								<span>{formatDate(nextMatch.date)}</span>
							</div>
							<div className="flex items-center gap-2 text-white/80">
								<ClockIcon className="h-4 w-4" />
								<span>{nextMatch.time}</span>
							</div>
						</div>

						{/* Tournament */}
						<div className="text-center mt-2">
							<div className="text-xs text-white/60">{nextMatch.tournament}</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default RecentForm;