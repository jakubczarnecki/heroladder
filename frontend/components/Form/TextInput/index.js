import React, { useState } from "react"
import PropTypes from "prop-types"
import {
    ErrorText,
    EyeIcon,
    EyeIconWrapper,
    Input,
    InputWrapper,
} from "./styled"
import { DetailText } from "../../Layout"

const TextInput = ({ style, errors, errorType, title, password, ...rest }) => {
    const [hidden, setHidden] = useState(true)

    const error =
        errors && errors.length > 0
            ? errors.find((error) => error.type === errorType)
            : null
    const errorMsg = error && error.message

    return (
        <InputWrapper style={style}>
            <DetailText>{title}</DetailText>
            <Input
                secureTextEntry={password ? hidden : false}
                error={errorMsg}
                {...rest}
            />
            {password && (
                <EyeIconWrapper onPress={() => setHidden(!hidden)}>
                    <EyeIcon name={hidden ? "eye" : "eye-slash"} />
                </EyeIconWrapper>
            )}
            {errorMsg && <ErrorText>{errorMsg}</ErrorText>}
        </InputWrapper>
    )
}

TextInput.propTypes = {
    style: PropTypes.array,
    errors: PropTypes.array,
    errorType: PropTypes.string,
    title: PropTypes.string,
    password: PropTypes.bool,
}

export default TextInput
