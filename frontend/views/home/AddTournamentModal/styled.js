import styled from "styled-components/native"
import { TextInput, DateInput, Dropdown } from "../../../components/Form"
import { Paragraph } from "../../../components/Layout"

export const Section = styled.View`
    padding-top: 10px;
    padding-bottom: 15px;
`

export const FormInput = styled(TextInput)`
    margin-top: 6px;
    margin-bottom: 6px;
`

export const PremiumInfoWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

export const PremiumInfo = styled(Paragraph)`
    flex-grow: 1;
    margin-right: 15px;
`

export const DateFormInput = styled(DateInput)`
    margin-top: 8px;
    margin-bottom: 8px;
`

export const DropdownFormInput = styled(Dropdown)`
    margin-top: 8px;
    margin-bottom: 8px;
`
