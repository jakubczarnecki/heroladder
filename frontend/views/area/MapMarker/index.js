import React, { useMemo } from "react"
import PropTypes from "prop-types"
import moment from "moment"
import { Paragraph, ParagraphBold } from "../../../components/Layout"
import {
    ButtonsWrapper,
    Column,
    ContentDetails,
    ContentHeader,
    ContentWrapper,
    DetailsButton,
    MarkerIcon,
    MarkerIconWrapper,
    CustomMarker,
    Row,
    MarkerWrapper,
} from "./styled"

const MapMarker = ({
    icon,
    title,
    date,
    teamSize,
    teamCount,
    teamsAvailible,
    coordinate,
    markerScale,
}) => {
    return (
        <CustomMarker coordinate={coordinate}>
            <MarkerIconWrapper
                style={{
                    transform: [{ scale: markerScale }],
                }}
            >
                <MarkerIcon name={icon} />
            </MarkerIconWrapper>

            <MarkerWrapper>
                <ContentWrapper>
                    <ContentHeader>
                        <ParagraphBold>{title}</ParagraphBold>
                    </ContentHeader>

                    <ContentDetails>
                        <Row>
                            <Paragraph>
                                {moment(date).format("DD/MM/YY hh:mm")}
                            </Paragraph>
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
                                onPress={() => console.log("Details")}
                            />
                        </ButtonsWrapper>
                    </ContentDetails>
                </ContentWrapper>
            </MarkerWrapper>
        </CustomMarker>
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
    coordinate: PropTypes.object,
    markerScale: PropTypes.number,
}

export default MapMarker
