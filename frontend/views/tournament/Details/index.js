import React, { useState } from "react"
import PropTypes from "prop-types"
import {
    Section,
    SectionHeader,
    SectionTitle,
    SectionContent,
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

import moment from "moment"
import bg2 from "../../../assets/img/bg2.jpg"
import RegisterYourTeamModal from "../RegisterYourTeamModal"

const Details = ({ tournament }) => {
    const [modalOpen, setModalOpen] = useState(false)

    console.log("TOURNAMENT", tournament)

    return (
        <DetailsWrapper>
            <Section>
                <SectionHeader>
                    <SectionTitle>{tournament.tournamentName}</SectionTitle>
                </SectionHeader>
                <SectionContent>
                    <TournamentDescription>
                        {tournament.description}
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
                            <Paragraph>*</Paragraph>
                            <Paragraph>
                                {moment(tournament.date).format("DD/MM/YYYY")}
                            </Paragraph>
                            <Paragraph>{tournament.discipline}</Paragraph>
                            <Paragraph>
                                {tournament.teams && tournament.teams.length}/
                                {tournament.bracketSize}
                            </Paragraph>
                            <Paragraph>{tournament.teamSize}</Paragraph>
                        </ContentColumn>
                    </Row>
                </SectionContent>
            </Section>

            <Section>
                <SectionHeader>
                    <SectionTitle>Teams</SectionTitle>
                    <SectionTitle>
                        {tournament.teams && tournament.teams.length}/
                        {tournament.bracketSize}
                    </SectionTitle>
                </SectionHeader>
                <SectionContent>
                    <Stretch>
                        {tournament.teams ? (
                            tournament.teams.map((team, teamIndex) => (
                                <Team key={teamIndex}>
                                    <TitleSmaller>{team.teamName}</TitleSmaller>
                                    <TeamSquad>
                                        {team.members.map(
                                            (member, memberIndex) => (
                                                <UserAvatar
                                                    size={45}
                                                    key={`member${memberIndex}`}
                                                />
                                            )
                                        )}
                                    </TeamSquad>
                                </Team>
                            ))
                        ) : (
                            <ParagraphBold>
                                Noone has registered yet
                            </ParagraphBold>
                        )}

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

Details.propTypes = {
    tournament: PropTypes.object,
}

export default Details
