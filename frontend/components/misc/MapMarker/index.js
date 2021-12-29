import React, { useState } from "react"
import PropTypes from "prop-types"
import { Paragraph, ParagraphBold } from "../../Layout"
import { Button } from "../../Form"
import { FontAwesome5 } from "@expo/vector-icons"
import {
    ButtonsWrapper,
    Column,
    ContentDetails,
    ContentHeader,
    ContentWrapper,
    DetailsButton,
    MarkerIcon,
    MarkerIconWrapper,
    MarkerWrapper,
    Row,
} from "./styled"

const MapMarker = ({
    icon,
    premium,
    title,
    date,
    teamSize,
    teamCount,
    teamsAvailible,
}) => {
    const [open, setOpen] = useState(false)
    const [openFull, setOpenFull] = useState(false)

    return (
        <MarkerWrapper>
            <MarkerIconWrapper>
                <MarkerIcon name={icon} onPress={() => setOpen(!open)} />
            </MarkerIconWrapper>
            {open && (
                <ContentWrapper>
                    <ContentHeader>
                        <ParagraphBold>ABC</ParagraphBold>
                        <FontAwesome5
                            name="caret-down"
                            size={20}
                            onPress={() => setOpenFull(!openFull)}
                        />
                    </ContentHeader>
                    {openFull && (
                        <ContentDetails>
                            <Row>
                                <Paragraph>{date}</Paragraph>
                            </Row>
                            <Row>
                                <Column>
                                    <Paragraph>Team size:</Paragraph>
                                </Column>
                                <Column>
                                    <Paragraph>{teamSize}</Paragraph>
                                </Column>
                            </Row>
                            <Row>
                                <Column>
                                    <Paragraph>Teams:</Paragraph>
                                </Column>
                                <Column>
                                    <Paragraph>
                                        {teamCount} ({teamsAvailible} availible)
                                    </Paragraph>
                                </Column>
                            </Row>
                            <ButtonsWrapper>
                                <DetailsButton
                                    title="Details"
                                    type="contained"
                                    size="thin"
                                />
                                <DetailsButton
                                    title="Register"
                                    type="contained"
                                    size="thin"
                                />
                            </ButtonsWrapper>
                        </ContentDetails>
                    )}
                </ContentWrapper>
            )}
        </MarkerWrapper>
    )
}

MapMarker.propTypes = {
    icon: PropTypes.string.isRequired,
    premium: PropTypes.bool,
    title: PropTypes.string,
    date: PropTypes.string,
    teamSize: PropTypes.number,
    teamCount: PropTypes.number,
    teamsAvailible: PropTypes.number,
}

export default MapMarker
