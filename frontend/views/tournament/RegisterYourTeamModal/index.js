import React, { useState } from "react"
import PropTypes from "prop-types"
import { Modal } from "../../../components/misc"
import bg2 from "../../../assets/img/bg2.jpg"
import { ParagraphBold, TitleSmaller } from "../../../components/Layout"
import {
    DeleteButton,
    FormInput,
    SearchUserInput,
    Section,
    SectionHeader,
    TeamItemWrapper,
    TeammateWrapper,
    UserAvatar,
} from "./styled"

const RegisterYourTeamModal = ({ isOpen, onCancel, onSubmit }) => {
    const [team, setTeam] = useState([])

    const addUser = (user) => {
        team.indexOf(user) === -1
            ? setTeam([...team, user])
            : console.log("already exist")
    }

    return (
        <Modal
            type="confirm"
            title="Register your team"
            submitText="Submit"
            isOpen={isOpen}
            onCancel={onCancel}
            onSubmit={onSubmit}
        >
            <Section>
                <TitleSmaller>Team informations</TitleSmaller>
                <FormInput title="Tournament title" />
            </Section>
            <Section>
                <SectionHeader>
                    <TitleSmaller>Your team</TitleSmaller>
                    <TitleSmaller>{team.length + 1}/8</TitleSmaller>
                </SectionHeader>

                <SearchUserInput onSelect={addUser} exclude={team} />

                <TeamItemWrapper>
                    <TeammateWrapper>
                        <UserAvatar size={40} />
                        <ParagraphBold>You</ParagraphBold>
                    </TeammateWrapper>
                </TeamItemWrapper>
                {team.map((user, index) => (
                    <TeamItemWrapper key={index}>
                        <TeammateWrapper>
                            <UserAvatar size={40} />
                            <ParagraphBold>{user.username}</ParagraphBold>
                        </TeammateWrapper>
                        <DeleteButton
                            icon="trash"
                            onPress={() =>
                                setTeam(
                                    team.filter(
                                        (u) => u.username !== user.username
                                    )
                                )
                            }
                        />
                    </TeamItemWrapper>
                ))}
            </Section>
        </Modal>
    )
}

RegisterYourTeamModal.propTypes = {
    isOpen: PropTypes.bool,
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func,
}

export default RegisterYourTeamModal
