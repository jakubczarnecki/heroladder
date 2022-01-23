import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Modal } from "../../../components/misc"
import bg2 from "../../../assets/img/bg2.jpg"
import {
    Paragraph,
    ParagraphBold,
    TitleSmaller,
} from "../../../components/Layout"
import {
    DeleteButton,
    ErrorFormBox,
    FormInput,
    SearchUserInput,
    Section,
    SectionHeader,
    TeamItemWrapper,
    TeammateWrapper,
    UserAvatar,
} from "./styled"
import { useDispatch, useSelector } from "react-redux"
import { CLEAR_ACTION, STATUS_TEAM_ADDED } from "../../../redux/types"
import { registerYourTeam } from "../../../redux/actions/dataActions"
import { ErrorBox } from "../../../components/Form"

const RegisterYourTeamModal = ({
    isOpen,
    onCancel,
    onSubmit,
    tournamentID,
}) => {
    const [successModalIsOpen, setSuccessModalIsOpen] = useState(false)
    const [team, setTeam] = useState([])
    const [teamName, setTeamName] = useState("")

    const dispatch = useDispatch()
    const uiData = useSelector((state) => state.ui)

    useEffect(() => {
        if (uiData.actionStatus == STATUS_TEAM_ADDED) {
            dispatch({ type: CLEAR_ACTION })
            setSuccessModalIsOpen(true)
        }
    }, [uiData.actionStatus])

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
            onSubmit={() =>
                dispatch(
                    registerYourTeam(
                        {
                            teamName,
                            members: team,
                        },
                        tournamentID
                    )
                )
            }
        >
            <Section>
                <TitleSmaller>Team informations</TitleSmaller>
                <FormInput
                    title="Team name"
                    value={teamName}
                    onChangeText={(text) => setTeamName(text)}
                />
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

                {uiData.errors && uiData.errors.length > 0 && (
                    <ErrorFormBox
                        errors={uiData.errors}
                        types={["join", "members"]}
                    />
                )}
            </Section>

            <Modal
                title="Team registered"
                type="info"
                isOpen={successModalIsOpen}
                onSubmit={() => {
                    setSuccessModalIsOpen(false)
                    onSubmit()
                }}
            >
                <Paragraph>Your team has been registered</Paragraph>
            </Modal>
        </Modal>
    )
}

RegisterYourTeamModal.propTypes = {
    isOpen: PropTypes.bool,
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func,
    tournamentID: PropTypes.string,
}

export default RegisterYourTeamModal
