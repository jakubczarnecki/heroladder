import React, { useState } from "react"
import PropTypes from "prop-types"
import { EyeIcon, EyeIconWrapper, Input, InputWrapper } from "./styled"

const TextInput = (props) => {
    const [hidden, setHidden] = useState(true)

    return (
        <InputWrapper>
            <Input
                secureTextEntry={props.password ? hidden : false}
                {...props}
            />
            {props.password && (
                <EyeIconWrapper onPress={() => setHidden(!hidden)}>
                    <EyeIcon name={hidden ? "eye" : "eye-slash"} />
                </EyeIconWrapper>
            )}
        </InputWrapper>
    )
}

TextInput.propTypes = {
    password: PropTypes.bool,
}

export default TextInput
