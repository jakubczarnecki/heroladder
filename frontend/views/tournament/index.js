import React from "react"
import PropTypes from "prop-types"
import { View } from "react-native"
import { FadeInView } from "../../components/Transitions"
import {
    LayoutWrapperScroll,
    Paragraph,
    ParagraphBold,
    Title,
    TitleSmaller,
} from "../../components/Layout"
import {
    ContentColumn,
    MapWrapper,
    RegisterButton,
    Section,
    SectionContent,
    SectionHeader,
    SectionTitle,
    Stretch,
    Team,
    TeamSquad,
} from "./styled"
import { Avatar } from "../../components/misc"
import bg2 from "../../assets/img/bg2.jpg"
import { Marker } from "react-native-maps"
import Ladder from "./Ladder"

const tournamentView = ({ navigation }) => {
    return (
        <FadeInView>
            <LayoutWrapperScroll>
                <Section>
                    <SectionHeader>
                        <SectionTitle>Ladder</SectionTitle>
                    </SectionHeader>
                    <SectionContent>
                        <Ladder />
                    </SectionContent>
                </Section>
                <Section>
                    <SectionHeader>
                        <SectionTitle>Tournament details</SectionTitle>
                    </SectionHeader>
                    <SectionContent>
                        <ContentColumn>
                            <ParagraphBold>Created by:</ParagraphBold>
                            <ParagraphBold>Tournament date:</ParagraphBold>
                            <ParagraphBold>Discipline:</ParagraphBold>
                            <ParagraphBold>Teams:</ParagraphBold>
                            <ParagraphBold>Team size:</ParagraphBold>
                        </ContentColumn>
                        <ContentColumn>
                            <Paragraph>Piponsz</Paragraph>
                            <Paragraph>24.12.2021</Paragraph>
                            <Paragraph>Volleyball</Paragraph>
                            <Paragraph>3/4</Paragraph>
                            <Paragraph>4</Paragraph>
                        </ContentColumn>
                    </SectionContent>
                </Section>

                <Section>
                    <SectionHeader>
                        <SectionTitle>Location</SectionTitle>
                    </SectionHeader>
                    <MapWrapper
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    >
                        <Marker
                            coordinate={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                            }}
                        />
                    </MapWrapper>
                </Section>

                <Section>
                    <SectionHeader>
                        <SectionTitle>Teams</SectionTitle>
                        <SectionTitle>3/4</SectionTitle>
                    </SectionHeader>
                    <SectionContent>
                        <Stretch>
                            <Team>
                                <TitleSmaller>Team A</TitleSmaller>
                                <TeamSquad>
                                    <Avatar img={bg2} size={45} />
                                    <Avatar img={bg2} size={45} />
                                    <Avatar img={bg2} size={45} />
                                    <Avatar img={bg2} size={45} />
                                </TeamSquad>
                            </Team>
                            <Team>
                                <TitleSmaller>Team B</TitleSmaller>
                                <TeamSquad>
                                    <Avatar img={bg2} size={45} />
                                    <Avatar img={bg2} size={45} />
                                    <Avatar img={bg2} size={45} />
                                    <Avatar img={bg2} size={45} />
                                </TeamSquad>
                            </Team>
                            <Team>
                                <TitleSmaller>Team C</TitleSmaller>
                                <TeamSquad>
                                    <Avatar img={bg2} size={45} />
                                    <Avatar img={bg2} size={45} />
                                    <Avatar img={bg2} size={45} />
                                    <Avatar img={bg2} size={45} />
                                </TeamSquad>
                            </Team>
                            <RegisterButton
                                title="Register your team"
                                type="contained"
                            />
                        </Stretch>
                    </SectionContent>
                </Section>
            </LayoutWrapperScroll>
        </FadeInView>
    )
}

tournamentView.propTypes = {
    navigation: PropTypes.object,
}

export default tournamentView
