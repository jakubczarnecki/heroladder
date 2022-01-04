import React from "react"
import PropTypes from "prop-types"
import { DetailText } from "../../Layout"
import { Input, InputWrapper } from "./styled"

const DateInput = ({ title, style, ...rest }) => {
    return (
        <InputWrapper style={style}>
            <DetailText>{title}</DetailText>
            <Input defaultValue={new Date()} {...rest} />
        </InputWrapper>
    )
}

DateInput.propTypes = {
    title: PropTypes.string,
    style: PropTypes.array,
}

export default DateInput
