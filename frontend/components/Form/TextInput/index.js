import React, { useState } from "react"
import PropTypes from "prop-types"
import { EyeIcon, EyeIconWrapper, Input, InputWrapper } from "./styled"

const TextInput = ({ style, ...rest }) => {
    const [hidden, setHidden] = useState(true)

    return (
        <InputWrapper style={style}>
            <Input secureTextEntry={rest.password ? hidden : false} {...rest} />
            {rest.password && (
                <EyeIconWrapper onPress={() => setHidden(!hidden)}>
                    <EyeIcon name={hidden ? "eye" : "eye-slash"} />
                </EyeIconWrapper>
            )}
        </InputWrapper>
    )
}

TextInput.propTypes = {
    style: PropTypes.array,
    password: PropTypes.bool,
}

export default TextInput
