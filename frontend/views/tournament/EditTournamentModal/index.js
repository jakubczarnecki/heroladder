import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Modal } from "../../../components/misc"
import { DetailText, Paragraph, TitleSmaller } from "../../../components/Layout"
import { FormInput, DateFormInput, Section } from "./styled"
import { LocationInput } from "../../../components/Form"
import { useDispatch, useSelector } from "react-redux"
import { updateTournament } from "../../../redux/actions/dataActions"
import { CLEAR_ACTION, STATUS_TOURNAMENT_UPDATED } from "../../../redux/types"

const EditTournamentModal = ({ isOpen, onCancel, onSubmit, tournament }) => {
    const [successModalIsOpen, setSuccessModalIsOpen] = useState(false)
    const [formData, setFormData] = useState({
        tournamentName: "",
        date: "",
        discipline: "",
        location: null,
        description: "",
    })

    const dispatch = useDispatch()
    const uiData = useSelector((state) => state.ui)

    useEffect(() => {
        if (uiData.actionStatus == STATUS_TOURNAMENT_UPDATED) {
            dispatch({ type: CLEAR_ACTION })
            setSuccessModalIsOpen(true)
        }
    }, [uiData.actionStatus])

    // load current tournament data
    useEffect(() => {
        setFormData({
            tournamentName: tournament.tournamentName,
            date: tournament.date,
            discipline: tournament.discipline,
            location: tournament.location,
            description: tournament.description,
        })
    }, [tournament])

    return (
        <Modal
            type="confirm"
            title="Edit your tournament"
            submitText="Submit"
            isOpen={isOpen}
            onCancel={onCancel}
            onSubmit={() => {
                dispatch(updateTournament(formData, tournament._id))
            }}
        >
            <Section>
                <TitleSmaller>Tournament informations</TitleSmaller>
                <FormInput
                    title="Tournament name"
                    value={formData.tournamentName}
                    errors={uiData.errors}
                    errorType="tournamentName"
                    onChangeText={(tournamentName) =>
                        setFormData({
                            ...formData,
                            tournamentName,
                        })
                    }
                />
                <FormInput
                    title="Tournament description"
                    value={formData.description}
                    errors={uiData.errors}
                    errorType="description"
                    multiline={true}
                    numberOfLines={2}
                    onChangeText={(description) =>
                        setFormData({ ...formData, description })
                    }
                />
                <DateFormInput
                    title="Tournament date"
                    errorType="date"
                    value={new Date(formData.date)}
                    onChange={(date) => {
                        setFormData({
                            ...formData,
                            date,
                        })
                    }}
                />
                <DetailText>Tournament location</DetailText>
                <LocationInput
                    value={formData.location}
                    onChange={(location) =>
                        setFormData({
                            ...formData,
                            location,
                        })
                    }
                />
            </Section>
            <Modal
                title="Successfully updated"
                isOpen={successModalIsOpen}
                type="info"
                onSubmit={() => {
                    setSuccessModalIsOpen(false)
                    onSubmit()
                }}
            >
                <Paragraph>
                    Your tournament has been successfully edited
                </Paragraph>
            </Modal>
        </Modal>
    )
}

EditTournamentModal.propTypes = {
    isOpen: PropTypes.bool,
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func,
    tournament: PropTypes.object,
}

export default EditTournamentModal
