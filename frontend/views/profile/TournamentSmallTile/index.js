import React from "react"
import PropTypes from "prop-types"
import { DetailText, ParagraphBold } from "../../../components/Layout"
import {
    TournamentIcon,
    TournamentPressable,
    TournamentWrapper,
} from "./styled"

const TournamentSmallTile = ({ icon, title, date, tournamentID, onPress }) => {
    return (
        <TournamentWrapper>
            <TournamentPressable onPress={onPress}>
                <TournamentIcon name={icon} />
                <ParagraphBold>{title}</ParagraphBold>
                <DetailText>{date}</DetailText>
            </TournamentPressable>
        </TournamentWrapper>
    )
}

TournamentSmallTile.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    tournamentID: PropTypes.string,
    date: PropTypes.string,
    onPress: PropTypes.func,
}

export default TournamentSmallTile
