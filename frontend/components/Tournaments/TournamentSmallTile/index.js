import React from "react"
import PropTypes from "prop-types"
import { FontAwesome5 } from "@expo/vector-icons"
import {
    DetailText,
    ParagraphBold,
    Subtitle,
    Tile,
    Title,
    TitleSmall,
} from "../../Layout"
import { TournamentIcon, TournamentWrapper } from "./styled"

const TournamentSmallTile = ({ icon, title, date, tournamentID }) => {
    return (
        <TournamentWrapper boxPadding={10}>
            <TournamentIcon name={icon} />
            <ParagraphBold>{title}</ParagraphBold>
            <DetailText>{date}</DetailText>
        </TournamentWrapper>
    )
}

TournamentSmallTile.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    tournamentID: PropTypes.string,
    date: PropTypes.string,
}

export default TournamentSmallTile
