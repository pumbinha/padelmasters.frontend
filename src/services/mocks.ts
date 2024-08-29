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
