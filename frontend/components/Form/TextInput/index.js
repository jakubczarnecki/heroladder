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

const TextInput = ({ style, error, title, password, ...rest }) => {
    const [hidden, setHidden] = useState(true)

    return (
        <InputWrapper style={style}>
            <DetailText>{title}</DetailText>
            <Input
                secureTextEntry={password ? hidden : false}
                error={error}
                {...rest}
            />
            {password && (
                <EyeIconWrapper onPress={() => setHidden(!hidden)}>
                    <EyeIcon name={hidden ? "eye" : "eye-slash"} />
                </EyeIconWrapper>
            )}
            {error && <ErrorText>{error}</ErrorText>}
        </InputWrapper>
    )
}

TextInput.propTypes = {
    style: PropTypes.array,
    error: PropTypes.string,
    title: PropTypes.string,
    password: PropTypes.bool,
}

export default TextInput
