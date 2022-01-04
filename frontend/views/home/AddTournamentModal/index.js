import React from "react"
import PropTypes from "prop-types"
import { Modal } from "../../../components/misc"
import { Paragraph, TitleSmaller } from "../../../components/Layout"
import { DateFormInput, FormInput, Section } from "./styled"

const AddTournamentModal = ({ isOpen, onCancel, onSubmit }) => {
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
            </Section>
            <Section>
                <TitleSmaller>Discipline</TitleSmaller>
                <Paragraph>Insert drop list here</Paragraph>
            </Section>
            <Section>
                <TitleSmaller>Teams details</TitleSmaller>
                <Paragraph>Insert drop list here but without icons</Paragraph>
                <FormInput title="Team size" keyboardType="numeric" />
            </Section>
            <Section>
                <TitleSmaller>Location</TitleSmaller>
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
