import React, { useState } from "react"
import PropTypes from "prop-types"
import { Modal } from "../../../components/misc"
import { Paragraph, TitleSmaller } from "../../../components/Layout"
import { DateFormInput, DropdownFormInput, FormInput, Section } from "./styled"
import { LocationInput } from "../../../components/Form"

const AddTournamentModal = ({ isOpen, onCancel, onSubmit }) => {
    const [formData, setFormData] = useState({
        tournamentName: "",
        description: "",
        date: "",
        discipline: "",
        bracketSize: "",
        teamSize: "",
        location: null,
        premium: false,
    })

    console.log(formData)

    return (
        <Modal
            type="confirm"
            title="Add new tournament"
            submitText="Create"
            isOpen={isOpen}
            onCancel={onCancel}
            onSubmit={onSubmit}
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
                    items={[
                        { icon: "volleyball-ball", value: "volleyball" },
                        { icon: "baseball-ball", value: "tennis" },
                        { icon: "table-tennis", value: "table tennis" },
                        { icon: "basketball-ball", value: "basketball" },
                        { icon: "futbol", value: "football" },
                        { icon: "running", value: "custom" },
                    ]}
                    value={formData.discipline}
                    onChange={(discipline) => {
                        setFormData({
                            ...formData,
                            discipline,
                        })
                    }}
                />
                {formData.discipline === "custom" && (
                    <FormInput title="Custom discipline name" />
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
    )
}

AddTournamentModal.propTypes = {
    isOpen: PropTypes.bool,
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func,
}

export default AddTournamentModal
