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
    DetailsWrapper,
    UserAvatar,
} from "./styled"

import {
    TitleSmaller,
    ParagraphBold,
    Paragraph,
} from "../../../components/Layout"

import { Avatar } from "../../../components/misc"
import bg2 from "../../../assets/img/bg2.jpg"
import RegisterYourTeamModal from "../RegisterYourTeamModal"

const Details = () => {
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <DetailsWrapper>
            <Section>
                <SectionHeader>
                    <SectionTitle>Tournament title</SectionTitle>
                </SectionHeader>
                <SectionContent>
                    <TournamentDescription>
                        Lorem ipsum dolor sit ame
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
                    <SectionTitle>Teams</SectionTitle>
                    <SectionTitle>3/4</SectionTitle>
                </SectionHeader>
                <SectionContent>
                    <Stretch>
                        <Team>
                            <TitleSmaller>Team A</TitleSmaller>
                            <TeamSquad>
                                <UserAvatar img={bg2} size={45} />
                                <UserAvatar img={bg2} size={45} />
                                <UserAvatar img={bg2} size={45} />
                                <UserAvatar img={bg2} size={45} />
                                <UserAvatar img={bg2} size={45} />
                                <UserAvatar img={bg2} size={45} />
                                <UserAvatar img={bg2} size={45} />
                                <UserAvatar img={bg2} size={45} />
                            </TeamSquad>
                        </Team>
                        <Team>
                            <TitleSmaller>Team B</TitleSmaller>
                            <TeamSquad>
                                <UserAvatar img={bg2} size={45} />
                                <UserAvatar img={bg2} size={45} />
                                <UserAvatar img={bg2} size={45} />
                                <UserAvatar img={bg2} size={45} />
                                <UserAvatar img={bg2} size={45} />
                                <UserAvatar img={bg2} size={45} />
                                <UserAvatar img={bg2} size={45} />
                                <UserAvatar img={bg2} size={45} />
                            </TeamSquad>
                        </Team>
                        <Team>
                            <TitleSmaller>Team C</TitleSmaller>
                            <TeamSquad>
                                <UserAvatar img={bg2} size={45} />
                                <UserAvatar img={bg2} size={45} />
                                <UserAvatar img={bg2} size={45} />
                                <UserAvatar img={bg2} size={45} />
                                <UserAvatar img={bg2} size={45} />
                                <UserAvatar img={bg2} size={45} />
                                <UserAvatar img={bg2} size={45} />
                                <UserAvatar img={bg2} size={45} />
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
        </DetailsWrapper>
    )
}

export default Details
