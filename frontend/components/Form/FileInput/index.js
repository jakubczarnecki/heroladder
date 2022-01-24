import React, { useState } from "react"
import PropTypes from "prop-types"
import { FileText, InputWrapper, FileWrapper } from "./styled"
import Button from "../../../components/Form/Button"
import { DetailText } from "../../Layout/Typography"
import * as ImagePicker from "expo-image-picker"

const FileInput = ({ title, onChange }) => {
    const [errorMsg, setErrorMsg] = useState(null)
    const [value, setValue] = useState("")

    const pickImage = async () => {
        let { status } = await ImagePicker.requestCameraPermissionsAsync()
        if (status !== "granted") {
            setErrorMsg("Permission to access camera was denied")
            return
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.4,
        })

        if (!result.cancelled) {
            let localUri = result.uri
            // let filename = localUri.split("/").pop()
            setValue(localUri)

            // let match = /\.(\w+)$/.exec(filename)
            // let type = match ? `image/${match[1]}` : "image"

            // onChange(localUri, filename, type)
            onChange(result.uri)
        }
    }

    return (
        <InputWrapper>
            {title && <DetailText>{title}</DetailText>}

            <FileWrapper>
                <Button
                    title="Upload"
                    type="contained"
                    size="wide"
                    onPress={pickImage}
                />
                <FileText>
                    {value === ""
                        ? "Not selected"
                        : value.substring(value.lastIndexOf("/") + 1)}
                </FileText>
            </FileWrapper>
        </InputWrapper>
    )
}

FileInput.propTypes = {
    title: PropTypes.string,
    onChange: PropTypes.func,
}

export default FileInput
