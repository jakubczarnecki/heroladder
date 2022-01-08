import React, { useState } from "react"
import PropTypes from "prop-types"
import { Avatar, Modal } from "../../../components/misc"
import bg2 from "../../../assets/img/bg2.jpg"
import {
    Paragraph,
    ParagraphBold,
    TitleSmaller,
} from "../../../components/Layout"
import {
    DeleteButton,
    FormInput,
    DateFormInput,
    Section,
    SectionHeader,
    TeamItemWrapper,
    TeammateWrapper,
    UserAvatar,
} from "./styled"
import { LocationInput } from "../../../components/Form"

const EditTournamentModal = ({ isOpen, onCancel, onSubmit }) => {
    const [formData, setFormData] = useState({
        tournamentName: "",
        date: "",
        location: {},
        description: "",
    })

    return (
        <Modal
            type="confirm"
            title="Edit your tournament"
            submitText="Submit"
            isOpen={isOpen}
            onCancel={onCancel}
            onSubmit={onSubmit}
        >
            <Section>
                <TitleSmaller>Tournament informations</TitleSmaller>
                <FormInput title="Tournament name" />
                <FormInput title="Tournament description" />
                <DateFormInput
                    title="Tournament date"
                    value={formData.date}
                    onChangeA={(e) => {
                        setFormData({
                            ...formData,
                            date: e,
                        })
                    }}
                />
                <LocationInput
                    value={formData.location}
                    onChange={(loc) =>
                        setFormData({
                            ...formData,
                            location: loc,
                        })
                    }
                />
            </Section>
        </Modal>
    )
}

EditTournamentModal.propTypes = {
    isOpen: PropTypes.bool,
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func,
}

export default EditTournamentModal
