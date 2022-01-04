import styled from "styled-components/native"
import { TextInput, DateInput, Dropdown } from "../../../components/Form"

export const Section = styled.View`
    padding-top: 10px;
    padding-bottom: 15px;
`

export const FormInput = styled(TextInput)`
    margin-top: 6px;
    margin-bottom: 6px;
`

export const DateFormInput = styled(DateInput)`
    margin-top: 8px;
    margin-bottom: 8px;
`

export const DropdownFormInput = styled(Dropdown)`
    margin-top: 8px;
    margin-bottom: 8px;
`
