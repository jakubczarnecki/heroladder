import React from "react"
import PropTypes from "prop-types"
import { TitleSmaller } from "../../../components/Layout"
import { Avatar } from "../../../components/misc"
import Disciplines from "../../../util/Disciplines"
import bg2 from "../../../assets/img/bg2.jpg"
import {
    ActionText,
    DateText,
    Description,
    DescriptionHeader,
    DescriptionItem,
    FeedContent,
    FeedHeader,
    FeedWrapper,
    HeaderIcon,
    HeaderTextWrapper,
    ItemIcon,
    ItemText,
    MapWrapper,
    RegisterButton,
} from "./styled"
import { Marker } from "react-native-maps"
import moment from "moment"

const TournamentFeedItem = ({ navigation, tournament }) => {
    const discipline = Disciplines.find(
        (d) => d.value === tournament.discipline
    )

    return (
        <FeedWrapper>
            <FeedHeader>
                <Avatar size={50} img={bg2} />
                <HeaderTextWrapper>
                    <DateText>
                        {moment(tournament.createdAt).fromNow()}
                    </DateText>
                    <TitleSmaller>{tournament.creatorUsername}</TitleSmaller>
                    <ActionText>has created a new tournament</ActionText>
                </HeaderTextWrapper>
            </FeedHeader>
            <FeedContent>
                <Description>
                    <DescriptionHeader>
                        <HeaderIcon
                            name={discipline ? discipline.icon : "running"}
                        />
                        <TitleSmaller>{tournament.discipline}</TitleSmaller>
                    </DescriptionHeader>
                    <DescriptionItem>
                        <ItemIcon name="user-alt" />
                        <ItemText>Team size: {tournament.teamSize}</ItemText>
                    </DescriptionItem>
                    <DescriptionItem>
                        <ItemIcon name="users" />
                        <ItemText>
                            Slots: {tournament.bracketTaken}/
                            {tournament.bracketSize}
                        </ItemText>
                    </DescriptionItem>
                    <DescriptionItem>
                        <ItemIcon name="calendar" />
                        <ItemText>
                            {moment(tournament.date).format("DD/MM/YY hh:mm")}
                        </ItemText>
                    </DescriptionItem>
                    <RegisterButton
                        title="Details"
                        type="contained"
                        size="thin"
                        onPress={() =>
                            navigation.navigate("Tournament", {
                                tournamentID: tournament._id,
                            })
                        }
                    />
                </Description>
                <MapWrapper
                    initialRegion={{
                        latitude: tournament.location.latitude,
                        longitude: tournament.location.longitude,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.015,
                    }}
                    pitchEnabled={false}
                    rotateEnabled={false}
                    zoomEnabled={false}
                    scrollEnabled={false}
                >
                    <Marker
                        coordinate={{
                            latitude: tournament.location.latitude,
                            longitude: tournament.location.longitude,
                        }}
                    />
                </MapWrapper>
            </FeedContent>
        </FeedWrapper>
    )
}

TournamentFeedItem.propTypes = {
    navigation: PropTypes.object,
    tournament: PropTypes.object,
}

export default TournamentFeedItem
