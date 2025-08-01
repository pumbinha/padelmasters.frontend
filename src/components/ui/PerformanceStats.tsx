"use client";

import React from "react";
import { ChartBarIcon, CalendarDaysIcon, TrophyIcon, StarIcon } from "@heroicons/react/24/outline";

type PerformanceStatsProps = {
	winPercentage: number;
	matchesThisMonth: number;
	bestStreak: number;
	currentRanking?: number;
	totalPlayers?: number;
};

const PerformanceStats: React.FC<PerformanceStatsProps> = ({
	winPercentage,
	matchesThisMonth,
	bestStreak,
	currentRanking,
	totalPlayers
}) => {
	const getWinPercentageColor = (percentage: number) => {
		if (percentage >= 70) return "text-green-400";
		if (percentage >= 50) return "text-yellow-400";
		return "text-red-400";
	};

	const getWinPercentageBg = (percentage: number) => {
		if (percentage >= 70) return "bg-green-500/20 border-green-400/30";
		if (percentage >= 50) return "bg-yellow-500/20 border-yellow-400/30";
		return "bg-red-500/20 border-red-400/30";
	};

	return (
		<div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-2xl">
			{/* Header */}
			<div className="flex items-center gap-3 mb-4">
				<ChartBarIcon className="h-6 w-6 text-white" />
				<div className="flex-1">
					<h3 className="text-base sm:text-lg font-semibold text-white">
						Estadísticas Clave
					</h3>
					<p className="text-sm text-white/80">Rendimiento actual</p>
				</div>
			</div>

			{/* Separator */}
			<div className="border-b border-white/20 mb-4"></div>

			{/* Stats Grid */}
			<div className="grid grid-cols-2 gap-4">
				{/* Win Percentage */}
				<div className="text-center">
					<div className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg border ${getWinPercentageBg(winPercentage)} mb-2`}>
						<TrophyIcon className="h-5 w-5 text-white/90" />
						<span className={`text-2xl font-bold ${getWinPercentageColor(winPercentage)}`}>
							{winPercentage}%
						</span>
					</div>
					<p className="text-xs text-white/70">Porcentaje de victorias</p>
					<p className="text-xs text-white/60">Este mes</p>
				</div>

				{/* Matches This Month */}
				<div className="text-center">
					<div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-500/20 border border-blue-400/30 mb-2">
						<CalendarDaysIcon className="h-5 w-5 text-white/90" />
						<span className="text-2xl font-bold text-blue-400">
							{matchesThisMonth}
						</span>
					</div>
					<p className="text-xs text-white/70">Partidos jugados</p>
					<p className="text-xs text-white/60">Últimos 30 días</p>
				</div>

				{/* Best Streak */}
				<div className="text-center">
					<div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-purple-500/20 border border-purple-400/30 mb-2">
						<StarIcon className="h-5 w-5 text-white/90" />
						<span className="text-2xl font-bold text-purple-400">
							{bestStreak}
						</span>
					</div>
					<p className="text-xs text-white/70">Mejor racha</p>
					<p className="text-xs text-white/60">Esta temporada</p>
				</div>

				{/* Current Ranking */}
				<div className="text-center">
					{currentRanking && totalPlayers ? (
						<>
							<div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-orange-500/20 border border-orange-400/30 mb-2">
								<span className="text-lg">🏆</span>
								<span className="text-2xl font-bold text-orange-400">
									#{currentRanking}
								</span>
							</div>
							<p className="text-xs text-white/70">Ranking actual</p>
							<p className="text-xs text-white/60">de {totalPlayers} jugadores</p>
						</>
					) : (
						<>
							<div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-500/20 border border-gray-400/30 mb-2">
								<span className="text-lg">🎯</span>
								<span className="text-sm font-bold text-gray-400">
									Sin ranking
								</span>
							</div>
							<p className="text-xs text-white/70">Participa en más</p>
							<p className="text-xs text-white/60">torneos para obtener ranking</p>
						</>
					)}
				</div>
			</div>

			{/* Performance Indicator */}
			<div className="mt-4 pt-4 border-t border-white/20">
				<div className="flex items-center justify-between text-sm">
					<span className="text-white/70">Rendimiento general:</span>
					<span className={`font-semibold ${getWinPercentageColor(winPercentage)}`}>
						{winPercentage >= 70 ? "Excelente" : 
						 winPercentage >= 50 ? "Bueno" : "Necesita mejorar"}
					</span>
				</div>
				
				{/* Progress Bar */}
				<div className="mt-2 w-full bg-white/20 rounded-full h-2">
					<div 
						className={`h-2 rounded-full transition-all duration-300 ${
							winPercentage >= 70 ? "bg-green-400" :
							winPercentage >= 50 ? "bg-yellow-400" : "bg-red-400"
						}`}
						style={{ width: `${winPercentage}%` }}
					></div>
				</div>
			</div>
		</div>
	);
};

export default PerformanceStats;