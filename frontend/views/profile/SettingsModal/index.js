import React, { useState } from "react"
import PropTypes from "prop-types"
import { Modal } from "../../../components/misc"
import { TitleSmaller } from "../../../components/Layout"
import { DeleteAccountButton, FormInput, Section } from "./styled"
import { FileInput } from "../../../components/Form"
import DeleteAccountModal from "../DeleteAccountModal"

const SettingsModal = ({ isOpen, onCancel, onSubmit }) => {
    const [modalConfirmIsOpen, setModalConfirmIsOpen] = useState(false)
    const [modalDeleteAccIsOpen, setModalDeleteAccIsOpen] = useState(false)

    const [userPassword, setUserPassword] = useState("")
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        profileImg: "",
        backgroundImg: "",
    })

    const ConfirmModal = () => (
        <Modal
            type="confirm"
            title={"Confirm your changes"}
            isOpen={modalConfirmIsOpen}
            onSubmit={onSubmit}
            submitText="Submit"
            onCancel={() => setModalConfirmIsOpen(false)}
        >
            <Section>
                <TitleSmaller>Confirm password</TitleSmaller>
                <FormInput
                    title="Your password"
                    onChangeText={(text) => setUserPassword(text)}
                />
            </Section>
        </Modal>
    )

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
                            password: text,
                        })
                    }
                />
                <FormInput
                    password={true}
                    title="Confirm password"
                    onChangeText={(text) =>
                        setFormData({
                            ...formData,
                            confirmPassword: text,
                        })
                    }
                />
            </Section>
            <Section>
                <TitleSmaller>Change profile image</TitleSmaller>
                <FileInput
                    value={formData.profileImg}
                    onChange={(data) =>
                        setFormData({
                            ...formData,
                            profileImg: data,
                        })
                    }
                />
            </Section>
            <Section>
                <TitleSmaller>Change profile background</TitleSmaller>
                <FileInput
                    value={formData.backgroundImg}
                    onChange={(data) =>
                        setFormData({
                            ...formData,
                            backgroundImg: data,
                        })
                    }
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
            <ConfirmModal />
            <DeleteAccountModal
                modalOpen={modalDeleteAccIsOpen}
                setModalOpen={setModalDeleteAccIsOpen}
            />
        </Modal>
    )
}

SettingsModal.propTypes = {
    isOpen: PropTypes.bool,
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func,
}

export default SettingsModal
