import React from "react"
import MapView from "react-native"
import {
    Paragraph,
    ParagraphSmall,
    TitleSmall,
    TitleSmaller,
} from "../../../components/Layout"
import { Avatar } from "../../../components/misc"
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
import { Button } from "../../../components/Form"
import { Marker } from "react-native-maps"

const TournamentFeedItem = () => {
    return (
        <FeedWrapper>
            <FeedHeader>
                <Avatar size={50} img={bg2} />
                <HeaderTextWrapper>
                    <DateText>Saturday, 20.11.2021 16:00</DateText>
                    <TitleSmaller>Michał Dzieciuchowicz</TitleSmaller>
                    <ActionText>has created a new tournament</ActionText>
                </HeaderTextWrapper>
            </FeedHeader>
            <FeedContent>
                <Description>
                    <DescriptionHeader>
                        <HeaderIcon name="volleyball-ball" />
                        <TitleSmaller>Volleyball</TitleSmaller>
                    </DescriptionHeader>
                    <DescriptionItem>
                        <ItemIcon name="user-alt" />
                        <ItemText>Team size: 6</ItemText>
                    </DescriptionItem>
                    <DescriptionItem>
                        <ItemIcon name="users" />
                        <ItemText>Slots: 3/4</ItemText>
                    </DescriptionItem>
                    <DescriptionItem>
                        <ItemIcon name="calendar" />
                        <ItemText>30.11.2021 16:00</ItemText>
                    </DescriptionItem>
                    <RegisterButton
                        title="Register a team"
                        type="contained"
                        size="thin"
                    />
                </Description>
                <MapWrapper
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    pitchEnabled={false}
                    rotateEnabled={false}
                    zoomEnabled={false}
                    scrollEnabled={false}
                >
                    <Marker
                        coordinate={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                        }}
                    />
                </MapWrapper>
                {/* <MapView height={140} width={140} /> */}
            </FeedContent>
        </FeedWrapper>
    )
}

export default TournamentFeedItem
