import React from "react"
import PropTypes from "prop-types"
import { ErrorText, ErrorWrapper } from "./styled"

const ErrorBox = ({ style, errors, types, staticErrorText }) => {
    const errorsToWrite =
        !staticErrorText && errors.filter((error) => types.includes(error.type))

    return errorsToWrite || staticErrorText ? (
        <ErrorWrapper style={style}>
            {staticErrorText ? (
                <ErrorText>{staticErrorText}</ErrorText>
            ) : (
                errorsToWrite.map((error, index) => (
                    <ErrorText key={index}>{error.message}</ErrorText>
                ))
            )}
        </ErrorWrapper>
    ) : null
}

ErrorBox.propTypes = {
    style: PropTypes.array,
    errors: PropTypes.array,
    types: PropTypes.array,
    staticErrorText: PropTypes.string,
}

export default ErrorBox
