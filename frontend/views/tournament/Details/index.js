import React, { useState } from "react"
import {
    Section,
    SectionHeader,
    SectionTitle,
    SectionContent,
    MapWrapper,
    Row,
} from "../styled"

import {
    Stretch,
    Team,
    TeamSquad,
    RegisterButton,
    ContentColumn,
    TournamentDescription,
} from "./styled"

import {
    TitleSmaller,
    ParagraphBold,
    Paragraph,
} from "../../../components/Layout"

import { Avatar } from "../../../components/misc"
import bg2 from "../../../assets/img/bg2.jpg"
import { Marker } from "react-native-maps"
import RegisterYourTeamModal from "../RegisterYourTeamModal"

const Details = () => {
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <>
            <Section>
                <SectionHeader>
                    <SectionTitle>Tournament title</SectionTitle>
                </SectionHeader>
                <SectionContent>
                    <TournamentDescription>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Error nesciunt maxime fuga expedita rerum nulla cumque
                        nobis autem adipisci? Ea doloremque voluptatibus ipsa
                        consequuntur nihil nesciunt expedita asperiores.
                        Dignissimos, dolor?
                    </TournamentDescription>

                    <Row>
                        <ContentColumn>
                            <ParagraphBold>Created by:</ParagraphBold>
                            <ParagraphBold>Tournament date:</ParagraphBold>
                            <ParagraphBold>Discipline:</ParagraphBold>
                            <ParagraphBold>Team slots:</ParagraphBold>
                            <ParagraphBold>Team size:</ParagraphBold>
                        </ContentColumn>
                        <ContentColumn>
                            <Paragraph>Piponsz</Paragraph>
                            <Paragraph>24.12.2021</Paragraph>
                            <Paragraph>Volleyball</Paragraph>
                            <Paragraph>3/4</Paragraph>
                            <Paragraph>4</Paragraph>
                        </ContentColumn>
                    </Row>
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
                                <Avatar img={bg2} size={45} />
                                <Avatar img={bg2} size={45} />
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
                                <Avatar img={bg2} size={45} />
                                <Avatar img={bg2} size={45} />
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
                            onPress={() => setModalOpen(!modalOpen)}
                        />
                    </Stretch>
                </SectionContent>
            </Section>
            <RegisterYourTeamModal
                isOpen={modalOpen}
                onCancel={() => setModalOpen(false)}
                onSubmit={() => setModalOpen(false)}
            />
        </>
    )
}

export default Details
