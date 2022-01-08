import React from "react"
import Svg, { G, Line, Rect, Text } from "react-native-svg"
import { LadderWrapper } from "./styled"
import theme from "../../../styles/Theme"

const exampleTournament = {
    bracketSize: 8,
    matches: [
        [
            {
                number: 1,
                teams: [{ teamname: "Team A" }, { teamname: "Team B" }],
                id: 1,
                winnerId: "Team A",
            },
            {
                number: 2,
                teams: [{ teamname: "Team C" }, { teamname: "Team D" }],
                id: 2,
                winnerId: "Team D",
            },
            {
                number: 3,
                teams: [{ teamname: "Team E" }, { teamname: "Team F" }],
                id: 3,
                winnerId: "",
            },
            {
                number: 4,
                teams: [{ teamname: "Team G" }, { teamname: "Team H" }],
                id: 4,
            },
            {
                number: 5,
                teams: [{ teamname: "Team I" }, { teamname: "Team J" }],
                id: 5,
            },
            {
                number: 6,
                teams: [{ teamname: "Team K" }, { teamname: "Team L" }],
                id: 6,
                winnerId: "Team K",
            },
            {
                number: 7,
                teams: [{ teamname: "Team M" }, { teamname: "Team N" }],
                id: 7,
                winnerId: "",
            },
            {
                number: 8,
                teams: [{ teamname: "Team O" }, { teamname: "Team P" }],
                id: 8,
                winnerId: "Team O",
            },
        ],
        [
            {
                number: 9,
                teams: [{ teamname: "Team A" }, { teamname: "Team B" }],
                id: 9,
            },
            {
                number: 10,
                teams: [{ teamname: "Team C" }, { teamname: "Team D" }],
                id: 10,
            },
            {
                number: 11,
                teams: [{ teamname: "Team E" }, { teamname: "Team F" }],
                id: 11,
            },
            {
                number: 12,
                teams: [{ teamname: "Team G" }, { teamname: "Team H" }],
                id: 12,
            },
        ],
        [
            {
                number: 13,
                teams: [{ teamname: "Team A" }, { teamname: "Team B" }],
                id: 13,
            },
            {
                number: 14,
                teams: [],
                id: 14,
            },
        ],
        [
            {
                number: 15,
                teams: [],
                id: 15,
            },
        ],
    ],
}

const ladderSizes = {
    BOX_WIDTH: 170,
    BOX_HEIGHT: 70,
    BOX_V_SPACE: 35,
    BOX_H_SPACE: 40,

    LINE_WIDTH: 20,
}

const GenerateLadder = () => {
    let nextBaseHeight = 1
    let baseHeight = 0

    return exampleTournament.matches.map((column, columnIndex) => {
        if (columnIndex > 0) {
            baseHeight = nextBaseHeight
            nextBaseHeight = columnIndex * 3 + baseHeight
        }
        return column.map((match, matchIndex) => {
            const x =
                columnIndex * (ladderSizes.BOX_WIDTH + ladderSizes.BOX_H_SPACE)
            const y =
                (baseHeight +
                    (columnIndex != 0) * 0.5 +
                    matchIndex * (2 + nextBaseHeight)) *
                ladderSizes.BOX_V_SPACE

            return (
                <G key={`${columnIndex}${matchIndex}`}>
                    {[{}, {}].map((team, teamIndex) => {
                        return (
                            <G
                                key={`${columnIndex}${matchIndex}${teamIndex}`}
                                onPress={() =>
                                    console.log(match.teams[teamIndex])
                                }
                            >
                                <Rect
                                    x={x}
                                    y={
                                        y +
                                        ((teamIndex % 2) *
                                            ladderSizes.BOX_HEIGHT) /
                                            2
                                    }
                                    width={ladderSizes.BOX_WIDTH}
                                    height={ladderSizes.BOX_HEIGHT / 2}
                                    stroke={theme.colors.dark}
                                    strokeWidth="1"
                                />
                                <Text
                                    fill={theme.colors.dark}
                                    fontSize="16"
                                    x={x + 25}
                                    y={
                                        y +
                                        23 +
                                        ((teamIndex % 2) *
                                            ladderSizes.BOX_HEIGHT) /
                                            2
                                    }
                                >
                                    {match.teams[teamIndex] &&
                                        match.teams[teamIndex].teamname}
                                </Text>
                                <Rect
                                    x={x}
                                    y={
                                        y +
                                        ((teamIndex % 2) *
                                            ladderSizes.BOX_HEIGHT) /
                                            2
                                    }
                                    height={ladderSizes.BOX_HEIGHT / 2}
                                    width={15}
                                    fill={
                                        match.winnerId
                                            ? match.winnerId ===
                                                  match.teams[teamIndex]
                                                      .teamname &&
                                              match.teams[teamIndex].teamname
                                                ? theme.colors.green
                                                : theme.colors.accent
                                            : theme.colors.gray
                                    }
                                    stroke={theme.colors.dark}
                                    strokeWidth="1"
                                />
                            </G>
                        )
                    })}
                    <Line
                        x1={x + ladderSizes.BOX_WIDTH}
                        x2={
                            x +
                            ladderSizes.BOX_WIDTH +
                            ladderSizes.BOX_H_SPACE / 2
                        }
                        y1={y + ladderSizes.BOX_V_SPACE}
                        y2={y + ladderSizes.BOX_V_SPACE}
                        stroke="black"
                        strokeWidth={1}
                    />
                    {matchIndex % 2 != 0 && (
                        <G>
                            <Line
                                x1={
                                    x +
                                    ladderSizes.BOX_WIDTH +
                                    ladderSizes.BOX_H_SPACE / 2
                                }
                                x2={
                                    x +
                                    ladderSizes.BOX_WIDTH +
                                    ladderSizes.BOX_H_SPACE / 2
                                }
                                y1={
                                    y +
                                    ladderSizes.BOX_V_SPACE -
                                    (nextBaseHeight + 2) *
                                        ladderSizes.BOX_V_SPACE
                                }
                                y2={y + ladderSizes.BOX_V_SPACE}
                                stroke={theme.colors.dark}
                                strokeWidth={1}
                            />
                            <Line
                                x1={
                                    x +
                                    ladderSizes.BOX_WIDTH +
                                    ladderSizes.BOX_H_SPACE / 2
                                }
                                x2={
                                    x +
                                    ladderSizes.BOX_WIDTH +
                                    +ladderSizes.BOX_H_SPACE
                                }
                                y1={
                                    y +
                                    ladderSizes.BOX_V_SPACE -
                                    ((nextBaseHeight + 2) *
                                        ladderSizes.BOX_V_SPACE) /
                                        2
                                }
                                y2={
                                    y +
                                    ladderSizes.BOX_V_SPACE -
                                    ((nextBaseHeight + 2) *
                                        ladderSizes.BOX_V_SPACE) /
                                        2
                                }
                                stroke={theme.colors.dark}
                                strokeWidth={1}
                            />
                        </G>
                    )}
                </G>
            )
        })
    })
}

const Ladder = () => {
    return (
        <LadderWrapper>
            <Svg
                width={
                    exampleTournament.matches.length *
                        (ladderSizes.BOX_WIDTH + ladderSizes.BOX_H_SPACE) -
                    ladderSizes.BOX_H_SPACE
                }
                height={
                    exampleTournament.matches[0].length *
                        (ladderSizes.BOX_HEIGHT + ladderSizes.BOX_V_SPACE) -
                    ladderSizes.BOX_V_SPACE
                }
            >
                <GenerateLadder />
            </Svg>
        </LadderWrapper>
    )
}

export default Ladder
