import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Modal } from "../../../components/misc"
import { Paragraph, TitleSmaller } from "../../../components/Layout"
import { DeleteAccountButton, FormInput, Section } from "./styled"
import { FileInput } from "../../../components/Form"
import DeleteAccountModal from "../DeleteAccountModal"
import { useDispatch, useSelector } from "react-redux"
import { STATUS_PROFILE_UPDATED } from "../../../redux/types"
import { updateProfile } from "../../../redux/actions/userActions"

const SettingsModal = ({ isOpen, onCancel, onSubmit }) => {
    const [modalConfirmIsOpen, setModalConfirmIsOpen] = useState(false)
    const [modalSuccessIsOpen, setModalSuccessIsOpen] = useState(false)
    const [modalDeleteAccIsOpen, setModalDeleteAccIsOpen] = useState(false)

    const [userPassword, setUserPassword] = useState("")
    const [formData, setFormData] = useState({
        username: "",
        password1: "",
        password2: "",
        avatar: null,
        background: null,
    })

    const dispatch = useDispatch()
    const uiData = useSelector((state) => state.ui)

    useEffect(() => {
        if (uiData.actionStatus == STATUS_PROFILE_UPDATED) {
            setModalSuccessIsOpen(true)
        }
    }, [uiData.actionStatus])

    return (
        <Modal
            type="confirm"
            title="Profile settings"
            isOpen={isOpen}
            onCancel={onCancel}
            onSubmit={() => {
                setModalConfirmIsOpen(true)
            }}
        >
            <Section>
                <TitleSmaller>Change username</TitleSmaller>
                <FormInput
                    title="New username"
                    onChangeText={(text) =>
                        setFormData({
                            ...formData,
                            username: text,
                        })
                    }
                />
            </Section>
            <Section>
                <TitleSmaller>Change password</TitleSmaller>
                <FormInput
                    password={true}
                    title="New password"
                    onChangeText={(text) =>
                        setFormData({
                            ...formData,
                            password1: text,
                        })
                    }
                />
                <FormInput
                    password={true}
                    title="Confirm password"
                    onChangeText={(text) =>
                        setFormData({
                            ...formData,
                            password2: text,
                        })
                    }
                />
            </Section>
            <Section>
                <TitleSmaller>Change profile image</TitleSmaller>
                <FileInput
                    onChange={(localUri, filename, type) => {
                        let formData = new FormData()
                        formData.append("avatar", {
                            uri: localUri,
                            name: filename,
                            type,
                        })
                        setFormData({
                            ...formData,
                            avatar: formData,
                        })
                    }}
                />
            </Section>
            <Section>
                <TitleSmaller>Change profile background</TitleSmaller>
                <FileInput
                    onChange={(localUri, filename, type) => {
                        let formData = new FormData()
                        formData.append("background", {
                            uri: localUri,
                            name: filename,
                            type,
                        })
                        setFormData({
                            ...formData,
                            background: formData,
                        })
                    }}
                />
            </Section>
            <Section>
                <TitleSmaller>Delete account</TitleSmaller>
                <DeleteAccountButton
                    title="Delete account"
                    type="contained"
                    onPress={() => {
                        setModalDeleteAccIsOpen(true)
                    }}
                />
            </Section>
            <DeleteAccountModal
                modalOpen={modalDeleteAccIsOpen}
                setModalOpen={setModalDeleteAccIsOpen}
            />

            <Modal
                type="confirm"
                title="Confirm your changes"
                isOpen={modalConfirmIsOpen}
                onSubmit={() => dispatch(updateProfile(formData, userPassword))}
                submitText="Submit"
                onCancel={() => setModalConfirmIsOpen(false)}
            >
                <Section>
                    <TitleSmaller>Confirm password</TitleSmaller>
                    <FormInput
                        title="Your password"
                        password={true}
                        value={userPassword}
                        onChangeText={(text) => setUserPassword(text)}
                    />
                </Section>
            </Modal>

            <Modal
                type="info"
                title="Account updated"
                isOpen={modalSuccessIsOpen}
                onSubmit={() => {
                    setModalSuccessIsOpen(false)
                    onSubmit()
                }}
                submitText="Confirm"
            >
                <Paragraph>
                    Your account has been successfully updated.
                </Paragraph>
            </Modal>
        </Modal>
    )
}

SettingsModal.propTypes = {
    isOpen: PropTypes.bool,
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func,
}

export default SettingsModal
