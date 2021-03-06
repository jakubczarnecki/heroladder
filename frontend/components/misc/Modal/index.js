import React from "react"
import PropTypes from "prop-types"
import { Title } from "../../Layout"
import {
    ButtonsWrapper,
    ModalBackdrop,
    ModalButton,
    ModalContent,
    ModalHeader,
    ModalWrapper,
} from "./styled"
import { Modal as RNModal } from "react-native"

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
        submitText = "Save"
    }

    return (
        <RNModal
            animationType="fade"
            visible={isOpen}
            transparent={true}
            onRequestClose={type === "confirm" ? onCancel : onSubmit}
        >
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
                            <ModalButton
                                type="text"
                                title={cancelText}
                                onPress={onCancel}
                            />
                        )}
                        <ModalButton
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
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

export default Modal
