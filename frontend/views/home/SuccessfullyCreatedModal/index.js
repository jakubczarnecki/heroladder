import React from "react"
import PropTypes from "prop-types"
import { Paragraph } from "../../../components/Layout"
import { Modal } from "../../../components/misc"

const SuccessfullyCreatedModal = ({ isOpen, onSubmit }) => {
    return (
        <Modal type="info" title="Success" isOpen={isOpen} onSubmit={onSubmit}>
            <Paragraph>
                Your tournament has been successfully created!
            </Paragraph>
        </Modal>
    )
}

SuccessfullyCreatedModal.propTypes = {
    isOpen: PropTypes.bool,
    onSubmit: PropTypes.func,
}

export default SuccessfullyCreatedModal
