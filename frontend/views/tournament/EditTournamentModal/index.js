import React, { useState } from "react"
import PropTypes from "prop-types"
import { Avatar, Modal } from "../../../components/misc"
import bg2 from "../../../assets/img/bg2.jpg"
import {
    DetailText,
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
        location: null,
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
                <FormInput
                    title="Tournament name"
                    value={formData.tournamentName}
                    onChangeText={(tournamentName) =>
                        setFormData({
                            ...formData,
                            tournamentName,
                        })
                    }
                />
                <FormInput
                    title="Tournament description"
                    multiline={true}
                    numberOfLines={2}
                    value={formData.description}
                    onChangeText={(description) =>
                        setFormData({ ...formData, description })
                    }
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
        </Modal>
    )
}

EditTournamentModal.propTypes = {
    isOpen: PropTypes.bool,
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func,
}

export default EditTournamentModal
