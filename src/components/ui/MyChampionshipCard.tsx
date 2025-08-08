"use client";

import React from "react";
import { 
	TrophyIcon, 
	CalendarDaysIcon, 
	UserGroupIcon,
	CheckCircleIcon,
	XCircleIcon,
	ClockIcon,
	PlayIcon,
	ChartBarIcon
} from "@heroicons/react/24/outline";

type ChampionshipStats = {
	played: number;
	won: number;
	lost: number;
	draws: number;
	pending: number;
	winPercentage: number;
	position?: number;
	totalParticipants?: number;
};

type MyChampionshipProps = {
	id: string;
	name: string;
	groupId: string;
	groupName: string;
	status: "Created" | "Open" | "Started" | "Finished" | "Cancelled";
	startDate: string;
	endDate: string;
	stats: ChampionshipStats;
};

const MyChampionshipCard: React.FC<MyChampionshipProps> = ({
	id,
	name,
	groupId,
	groupName,
	status,
	startDate,
	endDate,
	stats
}) => {
	const getStatusInfo = (status: string) => {
		switch (status) {
			case "Created":
				return {
					icon: PlayIcon,
					text: "Creado",
					bgColor: "bg-gray-500/20 border-gray-400/30",
					textColor: "text-gray-300"
				};
			case "Open":
				return {
					icon: CheckCircleIcon,
					text: "Abierto",
					bgColor: "bg-blue-500/20 border-blue-400/30",
					textColor: "text-blue-300"
				};
			case "Started":
				return {
					icon: ClockIcon,
					text: "En Curso",
					bgColor: "bg-green-500/20 border-green-400/30",
					textColor: "text-green-300"
				};
			case "Finished":
				return {
					icon: TrophyIcon,
					text: "Finalizado",
					bgColor: "bg-purple-500/20 border-purple-400/30",
					textColor: "text-purple-300"
				};
			case "Cancelled":
				return {
					icon: XCircleIcon,
					text: "Cancelado",
					bgColor: "bg-red-500/20 border-red-400/30",
					textColor: "text-red-300"
				};
			default:
				return {
					icon: PlayIcon,
					text: status,
					bgColor: "bg-gray-500/20 border-gray-400/30",
					textColor: "text-gray-300"
				};
		}
	};

	const statusInfo = getStatusInfo(status);
	const StatusIcon = statusInfo.icon;

	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		return date.toLocaleDateString('es-ES', { 
			day: '2-digit', 
			month: '2-digit',
			year: '2-digit'
		});
	};

	const getWinPercentageColor = (percentage: number) => {
		if (percentage >= 70) return "text-green-400";
		if (percentage >= 50) return "text-yellow-400";
		return "text-red-400";
	};

	return (
		<div className="rounded-lg border border-white/20 p-5 mb-6 hover:bg-white/5 hover:border-white/30 transition-all duration-300 hover:scale-[1.01]">
			{/* Header with Championship Name and Status */}
			<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
				<div className="flex-1">
					<div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
						<a
							href={`/championships/${id}`}
							className="text-base font-semibold text-blue-300 hover:text-blue-200 transition-colors underline decoration-blue-400/30 hover:decoration-blue-300/50"
						>
							{name}
						</a>
						<span className="hidden sm:inline text-white/40">/</span>
						<a
							href={`/championships/${id}/${groupId}`}
							className="text-base font-semibold text-blue-300 hover:text-blue-200 transition-colors underline decoration-blue-400/30 hover:decoration-blue-300/50"
						>
							{groupName}
						</a>
					</div>

					{/* Tournament Dates */}
					<div className="flex items-center gap-2 text-sm text-white/70">
						<CalendarDaysIcon className="h-4 w-4" />
						<span>{formatDate(startDate)} - {formatDate(endDate)}</span>
					</div>
				</div>

				{/* Status Badge */}
				<div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-medium ${statusInfo.bgColor} ${statusInfo.textColor}`}>
					<StatusIcon className="h-4 w-4" />
					<span>{statusInfo.text}</span>
				</div>
			</div>

			{/* Statistics Grid */}
			<div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-4">
				{/* Matches Played */}
				<div className="text-center">
					<div className="flex items-center justify-center gap-1 mb-1">
						<PlayIcon className="h-4 w-4 text-blue-400" />
						<span className="text-lg font-bold text-blue-400">{stats.played}</span>
					</div>
					<p className="text-xs text-white/70">Jugados</p>
				</div>

				{/* Victories */}
				<div className="text-center">
					<div className="flex items-center justify-center gap-1 mb-1">
						<CheckCircleIcon className="h-4 w-4 text-green-400" />
						<span className="text-lg font-bold text-green-400">{stats.won}</span>
					</div>
					<p className="text-xs text-white/70">Victorias</p>
				</div>

				{/* Draws */}
				<div className="text-center">
					<div className="flex items-center justify-center gap-1 mb-1">
						<span className="text-lg font-bold text-yellow-400">=</span>
						<span className="text-lg font-bold text-yellow-400">{stats.draws}</span>
					</div>
					<p className="text-xs text-white/70">Empates</p>
				</div>

				{/* Defeats */}
				<div className="text-center">
					<div className="flex items-center justify-center gap-1 mb-1">
						<XCircleIcon className="h-4 w-4 text-red-400" />
						<span className="text-lg font-bold text-red-400">{stats.lost}</span>
					</div>
					<p className="text-xs text-white/70">Derrotas</p>
				</div>

				{/* Pending */}
				<div className="text-center">
					<div className="flex items-center justify-center gap-1 mb-1">
						<ClockIcon className="h-4 w-4 text-orange-400" />
						<span className="text-lg font-bold text-orange-400">{stats.pending}</span>
					</div>
					<p className="text-xs text-white/70">Pendientes</p>
				</div>
			</div>

			{/* Performance Summary */}
			<div className="border-t border-white/20 pt-3">
				<div className="flex items-center justify-between">
					{/* Win Percentage */}
					<div className="flex items-center gap-2">
						<ChartBarIcon className="h-4 w-4 text-white/70" />
						<span className="text-sm text-white/70">Rendimiento:</span>
						<span className={`text-sm font-semibold ${getWinPercentageColor(stats.winPercentage)}`}>
							{stats.winPercentage}%
						</span>
					</div>

					{/* Position (if available) */}
					{stats.position && stats.totalParticipants && (
						<div className="flex items-center gap-2">
							<UserGroupIcon className="h-4 w-4 text-white/70" />
							<span className="text-sm text-white/70">
								<span className="font-semibold text-white/90">#{stats.position}</span> de {stats.totalParticipants}
							</span>
						</div>
					)}
				</div>

				{/* Progress Bar */}
				{stats.played > 0 && (
					<div className="mt-2">
						<div className="flex justify-between text-xs text-white/60 mb-1">
							<span>Progreso del torneo</span>
							<span>{Math.round(((stats.played) / (stats.played + stats.pending)) * 100)}%</span>
						</div>
						<div className="w-full bg-white/20 rounded-full h-2">
							<div 
								className="bg-green-400 h-2 rounded-full transition-all duration-300"
								style={{ width: `${Math.round(((stats.played) / (stats.played + stats.pending)) * 100)}%` }}
							></div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default MyChampionshipCard;