import React from "react"
import PropTypes from "prop-types"
import { ErrorText, ErrorWrapper } from "./styled"

const ErrorBox = ({ errors, types }) => {
    const errorsToWrite = errors.filter((error) => types.includes(error.type))

    return errorsToWrite ? (
        <ErrorWrapper>
            {errorsToWrite.map((error, index) => (
                <ErrorText key={index}>{error.message}</ErrorText>
            ))}
        </ErrorWrapper>
    ) : null
}

ErrorBox.propTypes = {
    errors: PropTypes.array,
    types: PropTypes.array,
}

export default ErrorBox
