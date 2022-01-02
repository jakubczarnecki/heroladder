import React from "react"
import PropTypes from "prop-types"
import { Modal } from "../../../components/misc"
import { DetailText, TitleSmaller } from "../../../components/Layout"
import { FileInputWrapper, FileName, FormInput, Section } from "./styled"
import { Button } from "../../../components/Form"

const SettingsModal = ({ isOpen, onCancel, onSubmit }) => {
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
                <FileInputWrapper>
                    <Button title="Upload" type="contained" size="wide" />
                    <FileName>newfile.png</FileName>
                </FileInputWrapper>
            </Section>
            <Section>
                <TitleSmaller>Change profile background</TitleSmaller>
                <FileInputWrapper>
                    <Button title="Upload" type="contained" size="wide" />
                    <FileName>newfile.png</FileName>
                </FileInputWrapper>
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
