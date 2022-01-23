import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectWinner } from "../../../redux/actions/dataActions"
import PropTypes from "prop-types"
import Svg, { G, Line, Rect, Text } from "react-native-svg"
import { LadderWrapper } from "./styled"
import theme from "../../../styles/Theme"
import SelectWinnersModal from "../SelectWinnersModal"

const ladderSizes = {
    BOX_WIDTH: 170,
    BOX_HEIGHT: 70,
    BOX_V_SPACE: 35,
    BOX_H_SPACE: 40,

    LINE_WIDTH: 20,
}

const Ladder = ({ tournament }) => {
    const [winnerModalOpen, setWinnerModalOpen] = useState(false)
    const [matchToEdit, setMatchToEdit] = useState(null)
    const [formData, setFormData] = useState({
        stage: null,
        number: null,
        winner: null,
    })

    const loggedUserID = useSelector((state) => state.user.id)

    const GenerateLadder = () => {
        let nextBaseHeight = 1
        let baseHeight = 0

        return (
            tournament.matches &&
            tournament.matches.map((column, columnIndex) => {
                if (columnIndex > 0) {
                    baseHeight = nextBaseHeight
                    nextBaseHeight = columnIndex * 3 + baseHeight
                }
                return column.map((match, matchIndex) => {
                    const x =
                        columnIndex *
                        (ladderSizes.BOX_WIDTH + ladderSizes.BOX_H_SPACE)
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
                                        onPress={() => {
                                            if (
                                                !match.winner &&
                                                match.teams.length == 2 &&
                                                tournament.organizerId ==
                                                    loggedUserID
                                            ) {
                                                setFormData({
                                                    ...formData,
                                                    stage: columnIndex,
                                                    number: match.number,
                                                })
                                                setMatchToEdit(match)
                                                setWinnerModalOpen(true)
                                            }
                                        }}
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
                                                match.teams[teamIndex].teamName}
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
                                                match.winner
                                                    ? match.winner ===
                                                      teamIndex + 1
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
        )
    }

    return (
        <LadderWrapper>
            <Svg
                width={
                    tournament.matches &&
                    tournament.matches.length *
                        (ladderSizes.BOX_WIDTH + ladderSizes.BOX_H_SPACE) -
                        ladderSizes.BOX_H_SPACE
                }
                height={
                    tournament.matches &&
                    tournament.matches[0].length *
                        (ladderSizes.BOX_HEIGHT + ladderSizes.BOX_V_SPACE) -
                        ladderSizes.BOX_V_SPACE
                }
            >
                <GenerateLadder />
            </Svg>
            <SelectWinnersModal
                isOpen={winnerModalOpen}
                onCancel={() => setWinnerModalOpen(false)}
                onSubmit={() => {
                    setWinnerModalOpen(false)
                }}
                match={matchToEdit}
                tournamentID={tournament._id}
                formData={formData}
                setFormData={setFormData}
            />
        </LadderWrapper>
    )
}

Ladder.propTypes = {
    tournament: PropTypes.object,
}

export default Ladder
