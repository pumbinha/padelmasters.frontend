import {
	MatchStatus,
	MatchType,
	type GroupDto,
	type GroupMatchDto,
	type GroupMatchResultDto,
	type UserDto,
} from "./api";

export const generateMockGroupDto = () => {
	return {
		Id: "",
		Name: "Sample Group",
		Description: "This is a mock description for the group.",
	};
};

export const generateGroupDtosMock = (count: number): GroupDto[] => {
	return Array.from({ length: count }, () => generateMockGroupDto());
};

export const generateGroupMatchDto = (numResults: number): GroupMatchDto => {
	const results: GroupMatchResultDto[] = [];

	for (let i = 1; i <= numResults; i++) {
		results.push({
			MatchSet: i,
			ResultTeam1: Math.floor(Math.random() * 5), // Random score for Team1
			ResultTeam2: Math.floor(Math.random() * 5), // Random score for Team2
		});
	}

	// Example players
	const player1: UserDto = {
		Id: "123e4567-e89b-12d3-a456-426614174001",
		FirstName: "Alice",
		LastName: "Smith",
	};

	const player2: UserDto = {
		Id: "123e4567-e89b-12d3-a456-426614174002",
		FirstName: "Bob",
		LastName: "Johnson",
	};

	return {
		Team1: {
			Team: {
				Id: "111e4567-e89b-12d3-a456-426614174000",
				Name: "Team A",
				Player1: player1,
				Player2: player2,
			},
			IsWinner: false, // Determine if Team1 is the winner
		},
		Team2: {
			Team: {
				Id: "222e4567-e89b-12d3-a456-426614174000",
				Name: "Team B",
				Player1: player1,
				Player2: player2,
			},
			IsWinner: true, // Determine if Team2 is the winner
		},
		Date: new Date().toISOString(),
		RoundNumber: 1,
		Status: MatchStatus.Played,
		MatchType: MatchType.Classic,

		ResultSet1: results[0] || null, // First result
		ResultSet2: results[1] || null, // Second result, if exists
		ResultSet3: results[2] || null, // Third result, if exists
		CurrentUserIsPlayer: true,
		CurrentUserCanEdit: true,
		CurrentUserCanDelete: false,
	};
};
