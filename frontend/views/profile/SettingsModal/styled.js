import styled from "styled-components/native"
import { Button, TextInput } from "../../../components/Form"
import { DetailText } from "../../../components/Layout"

export const Section = styled.View`
    padding-top: 10px;
    padding-bottom: 15px;
`

export const FormInput = styled(TextInput)`
    margin-top: 6px;
    margin-bottom: 6px;
`

export const FileInputWrapper = styled.View`
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
    flex-direction: row;
    align-items: center;
`

export const FileName = styled(DetailText)`
    padding: 20px;
`

export const DeleteAccountButton = styled(Button)`
    align-self: flex-start;
`
