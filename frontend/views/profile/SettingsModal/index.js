import React, { useState } from "react"
import PropTypes from "prop-types"
import { Modal } from "../../../components/misc"
import { DetailText, TitleSmaller } from "../../../components/Layout"
import { FileInputWrapper, FileName, FormInput, Section } from "./styled"
import { Button, FileInput } from "../../../components/Form"

const SettingsModal = ({ isOpen, onCancel, onSubmit }) => {
    const [profileImg, setProfileImg] = useState(null)

    return (
        <Modal
            type="confirm"
            title="Profile settings"
            isOpen={isOpen}
            onCancel={onCancel}
            onSubmit={onSubmit}
        >
            <Section>
                <TitleSmaller>Change username</TitleSmaller>
                <FormInput title="New username" />
            </Section>
            <Section>
                <TitleSmaller>Change password</TitleSmaller>
                <FormInput password={true} title="New password" />
                <FormInput password={true} title="Confirm password" />
            </Section>
            <Section>
                <TitleSmaller>Change profile image</TitleSmaller>
                <FileInput value={profileImg} onChange={setProfileImg} />
            </Section>
            <Section>
                <TitleSmaller>Change profile background</TitleSmaller>
                <FileInput />
            </Section>
        </Modal>
    )
}

SettingsModal.propTypes = {
    isOpen: PropTypes.bool,
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func,
}

export default SettingsModal
