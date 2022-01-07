import React, { useState } from "react"
import PropTypes from "prop-types"
import { Modal } from "../../../components/misc"
import { Paragraph, TitleSmaller } from "../../../components/Layout"
import { DateFormInput, DropdownFormInput, FormInput, Section } from "./styled"
import { LocationInput } from "../../../components/Form"

const AddTournamentModal = ({ isOpen, onCancel, onSubmit }) => {
    const [discipline, setDiscipline] = useState(null)
    const [teamsCount, setTeamsCount] = useState(null)
    const [location, setLocation] = useState(null)

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
                <FormInput title="Tournament title" />
                <DateFormInput title="Tournament date" />
                <FormInput
                    title="Description"
                    multiline={true}
                    numberOfLines={2}
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
                    value={discipline}
                    onChange={setDiscipline}
                />
                {discipline === "custom" && (
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
                    value={teamsCount}
                    onChange={setTeamsCount}
                />
                <FormInput title="Team size" keyboardType="numeric" />
            </Section>
            <Section>
                <TitleSmaller>Location</TitleSmaller>
                <LocationInput value={location} onChange={setLocation} />
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
