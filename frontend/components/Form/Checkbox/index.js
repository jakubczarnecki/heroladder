import React from "react"
import PropTypes from "prop-types"
import { CheckboxInput } from "./styled"

const CheckBox = ({ value, onChange, ...rest }) => {
    return <CheckboxInput isOn={value} onToggle={onChange} {...rest} />
}

CheckBox.propTypes = {
    value: PropTypes.bool,
    onChange: PropTypes.func,
}

export default CheckBox
