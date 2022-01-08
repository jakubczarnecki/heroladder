import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { DetailText } from "../../Layout"
import {
    InputWrapper,
    DatePickerModal,
    DateWrapper,
    DateElement,
    DateText,
} from "./styled"

const DateInput = ({ title, style, value, onChange }) => {
    const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        onChange(new Date())
    }, [])

    return (
        <InputWrapper style={style}>
            <DetailText>{title}</DetailText>
            <DateWrapper>
                <DateElement onPress={() => setModalOpen(true)}>
                    <DateText>{value && value.getDate()}</DateText>
                </DateElement>
                <DateElement onPress={() => setModalOpen(true)}>
                    <DateText>{value && value.getMonth() + 1}</DateText>
                </DateElement>
                <DateElement onPress={() => setModalOpen(true)}>
                    <DateText>{value && value.getFullYear()}</DateText>
                </DateElement>
            </DateWrapper>
            <DatePickerModal
                isVisible={modalOpen}
                mode="single"
                onCancel={() => setModalOpen(false)}
                onConfirm={(e) => {
                    setModalOpen(false)
                    onChange(new Date(e))
                }}
            />
        </InputWrapper>
    )
}

DateInput.propTypes = {
    title: PropTypes.string,
    style: PropTypes.array,
    value: PropTypes.object,
    onChange: PropTypes.func,
    abc: PropTypes.string,
}

export default DateInput
