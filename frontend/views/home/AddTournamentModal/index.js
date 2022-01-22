import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import { Modal } from "../../../components/misc"
import { TitleSmaller } from "../../../components/Layout"
import {
    DateFormInput,
    DropdownFormInput,
    FormInput,
    PremiumInfo,
    PremiumInfoWrapper,
    Section,
} from "./styled"
import { LocationInput, CheckBox } from "../../../components/Form"
import { Disciplines } from "../../../util/Disciplines"
import { addTournament } from "../../../redux/actions/dataActions"
import SuccessfullyCreatedModal from "../SuccessfullyCreatedModal"

const AddTournamentModal = ({ isOpen, onCancel, onSubmit }) => {
    const [disciplineValue, setDisciplineValue] = useState("")
    const [successModalIsOpen, setSuccessModalIsOpen] = useState(false)
    const [formData, setFormData] = useState({
        tournamentName: "",
        discipline: "",
        date: "",
        bracketSize: "",
        teamSize: "",
        location: null,
        description: "",
        premium: false,
    })

    const dispatch = useDispatch()
    const successfullyAdded = useSelector((state) => state.ui.actionSuccess)
    const user = useSelector((state) => ({
        username: state.user.username,
        avatar: state.user.avatar,
    }))

    useEffect(() => {
        if (successfullyAdded) {
            setSuccessModalIsOpen(true)
        }
    }, [successfullyAdded])

    return (
        <>
            <Modal
                type="confirm"
                title="Add new tournament"
                submitText="Create"
                isOpen={isOpen}
                onCancel={onCancel}
                onSubmit={() => {
                    dispatch(addTournament(formData, user))
                }}
            >
                <Section>
                    <TitleSmaller>Basic informations</TitleSmaller>
                    <FormInput
                        title="Tournament title"
                        onChangeText={(tournamentName) => {
                            setFormData({
                                ...formData,
                                tournamentName,
                            })
                        }}
                    />
                    <DateFormInput
                        title="Tournament date"
                        value={new Date(formData.date)}
                        onChange={(date) => {
                            setFormData({
                                ...formData,
                                date,
                            })
                        }}
                    />
                    <FormInput
                        title="Description"
                        multiline={true}
                        numberOfLines={2}
                        onChangeText={(description) => {
                            setFormData({
                                ...formData,
                                description,
                            })
                        }}
                    />
                    <DropdownFormInput
                        title="Discipline"
                        items={Disciplines}
                        value={disciplineValue}
                        onChange={(discipline) => {
                            setDisciplineValue(discipline)
                            if (discipline != "custom") {
                                setFormData({
                                    ...formData,
                                    discipline,
                                })
                            } else {
                                setFormData({
                                    ...formData,
                                    discipline: "",
                                })
                            }
                        }}
                    />
                    {disciplineValue === "custom" && (
                        <FormInput
                            title="Custom discipline name"
                            onChangeText={(discipline) =>
                                setFormData({
                                    ...formData,
                                    discipline,
                                })
                            }
                        />
                    )}
                </Section>

                <Section>
                    <TitleSmaller>Teams details</TitleSmaller>
                    <DropdownFormInput
                        title="Teams count"
                        items={[
                            { value: "2" },
                            { value: "4" },
                            { value: "8" },
                            { value: "16" },
                        ]}
                        value={formData.bracketSize}
                        onChange={(bracketSize) => {
                            setFormData({
                                ...formData,
                                bracketSize,
                            })
                        }}
                    />
                    <FormInput
                        title="Team size"
                        keyboardType="numeric"
                        onChangeText={(teamSize) => {
                            setFormData({
                                ...formData,
                                teamSize,
                            })
                        }}
                    />
                </Section>

                <Section>
                    <TitleSmaller>Premium tournament</TitleSmaller>
                    <PremiumInfoWrapper>
                        <PremiumInfo>
                            You can pay 1$ to set your tournament as premium (It
                            will be highlighted on map)
                        </PremiumInfo>
                        <CheckBox
                            value={formData.premium}
                            onChange={(premium) =>
                                setFormData({
                                    ...formData,
                                    premium,
                                })
                            }
                        />
                    </PremiumInfoWrapper>
                </Section>

                <Section>
                    <TitleSmaller>Location</TitleSmaller>
                    <LocationInput
                        value={formData.location}
                        onChange={(location) => {
                            setFormData({
                                ...formData,
                                location,
                            })
                        }}
                    />
                </Section>
            </Modal>
            <SuccessfullyCreatedModal
                isOpen={successModalIsOpen}
                onSubmit={() => {
                    setSuccessModalIsOpen(false)
                    onSubmit()
                }}
            />
        </>
    )
}

AddTournamentModal.propTypes = {
    isOpen: PropTypes.bool,
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func,
}

export default AddTournamentModal
