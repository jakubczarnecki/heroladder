import React from "react"
import PropTypes from "prop-types"
import { Title } from "../../Layout"
import {
    ButtonsWrapper,
    ModalBackdrop,
    ModalContent,
    ModalHeader,
    ModalWrapper,
} from "./styled"
import { Modal as RNModal } from "react-native"
import { Button } from "../../Form"

const Modal = ({
    type,
    isOpen,
    onCancel,
    cancelText,
    onSubmit,
    submitText,
    title,
    children,
}) => {
    if (!cancelText) {
        cancelText = "Cancel"
    }

    if (!submitText) {
        submitText = "S"
    }

    return (
        <RNModal visible={isOpen} transparent={true}>
            <ModalBackdrop>
                <ModalWrapper>
                    {title && (
                        <ModalHeader>
                            <Title>{title}</Title>
                        </ModalHeader>
                    )}
                    <ModalContent>{children}</ModalContent>
                    <ButtonsWrapper>
                        {type === "confirm" && (
                            <Button
                                type="text"
                                title={cancelText}
                                onPress={onCancel}
                            />
                        )}
                        <Button
                            type="contained"
                            title={submitText}
                            onPress={onSubmit}
                            size="wide"
                        />
                    </ButtonsWrapper>
                </ModalWrapper>
            </ModalBackdrop>
        </RNModal>
    )
}

Modal.propTypes = {
    type: PropTypes.oneOf(["confirm", "info"]),
    isOpen: PropTypes.bool,
    onCancel: PropTypes.func,
    cancelText: PropTypes.string,
    onSubmit: PropTypes.func,
    submitText: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.object,
}

export default Modal
