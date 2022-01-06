import React from "react"
import Svg, { G, Line, Rect, Text } from "react-native-svg"
import { LadderWrapper } from "./styled"

const exampleTournament = {
    bracketSize: 8,
    matches: [
        [
            {
                number: 1,
                teams: ["Team A", "Team B"],
                id: 1,
            },
            {
                number: 2,
                teams: ["Team C", "Team D"],
                id: 2,
            },
            {
                number: 3,
                teams: ["Team E", "Team F"],
                id: 3,
            },
            {
                number: 4,
                teams: ["Team G", "Team H"],
                id: 4,
            },
            {
                number: 5,
                teams: ["Team I", "Team J"],
                id: 5,
            },
            {
                number: 6,
                teams: ["Team K", "Team L"],
                id: 6,
            },
            {
                number: 7,
                teams: ["Team M", "Team N"],
                id: 7,
            },
            {
                number: 8,
                teams: ["Team O", "Team P"],
                id: 8,
            },
        ],
        [
            {
                number: 9,
                teams: ["Team A", "Team B"],
                id: 9,
            },
            {
                number: 10,
                teams: ["Team C", "Team D"],
                id: 10,
            },
            {
                number: 11,
                teams: ["Team E", "Team F"],
                id: 11,
            },
            {
                number: 12,
                teams: ["Team G", "Team H"],
                id: 12,
            },
        ],
        [
            {
                number: 13,
                teams: ["Team A", "Team B"],
                id: 13,
            },
            {
                number: 14,
                teams: ["Team C", "Team D"],
                id: 14,
            },
        ],
        [
            {
                number: 15,
                teams: ["Team A", "Team B"],
                id: 15,
            },
        ],
    ],
}

const ladderSizes = {
    BOX_WIDTH: 120,
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
                    {match.teams.map((team, teamIndex) => {
                        return (
                            <G
                                key={`${columnIndex}${matchIndex}${teamIndex}`}
                                onPress={() => console.log(team)}
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
                                    stroke="black"
                                    strokeWidth="1"
                                />
                                <Text
                                    fill="black"
                                    fontSize="16"
                                    x={x + 15}
                                    y={
                                        y +
                                        23 +
                                        ((teamIndex % 2) *
                                            ladderSizes.BOX_HEIGHT) /
                                            2
                                    }
                                >
                                    {team}
                                </Text>
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
                                stroke="black"
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
                                stroke="black"
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
