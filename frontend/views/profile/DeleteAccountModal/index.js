import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import { Section } from "../SettingsModal/styled"
import { DeleteAccInfo, FormInput } from "./styled"
import { Modal } from "../../../components/misc"
import {
    Paragraph,
    TitleSmaller,
    ParagraphBold,
} from "../../../components/Layout"
import { logout, deleteAccount } from "../../../redux/actions/userActions"

const DeleteAccountModal = ({ modalOpen, setModalOpen }) => {
    const [goodbyeModalIsOpen, setGoodbyeModalIsOpen] = useState(false)
    const [userPassword, setUserPassword] = useState("")

    const dispatch = useDispatch()
    const accDeleted = useSelector((state) => state.ui.successfullyDeletedAcc)
    const errors = useSelector((state) => state.ui.errors)

    useEffect(() => {
        if (accDeleted) {
            setGoodbyeModalIsOpen(true)
        }
    }, [accDeleted])

    return (
        <>
            <Modal
                type="confirm"
                title="Delete your account"
                isOpen={modalOpen}
                onSubmit={() => {
                    dispatch(deleteAccount(userPassword))
                }}
                submitText="Submit"
                onCancel={() => setModalOpen(false)}
            >
                <Section>
                    <DeleteAccInfo>
                        With deleting you account you will
                        <ParagraphBold> delete all of your data </ParagraphBold>
                        from our services including all of your tournaments.
                        This action is irreversible.
                    </DeleteAccInfo>
                    <TitleSmaller>Confirm password</TitleSmaller>
                    <FormInput
                        title="Your password"
                        password={true}
                        value={userPassword}
                        onChangeText={setUserPassword}
                        errors={errors}
                        errorType="password"
                    />
                </Section>
            </Modal>
            <Modal
                type="info"
                title="Your account has been deleted"
                isOpen={goodbyeModalIsOpen}
                onSubmit={() => {
                    dispatch(logout())
                }}
            >
                <Paragraph>
                    We are sorry to see you go. You will be redirected to the
                    login page.
                </Paragraph>
            </Modal>
        </>
    )
}

DeleteAccountModal.propTypes = {
    modalOpen: PropTypes.bool,
    setModalOpen: PropTypes.func,
    errors: PropTypes.array,
}

export default DeleteAccountModal
