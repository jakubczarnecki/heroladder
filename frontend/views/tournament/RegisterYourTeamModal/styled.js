import styled from "styled-components/native"
import {
    TextInput,
    DateInput,
    Dropdown,
    Button,
} from "../../../components/Form"
import { Avatar } from "../../../components/misc"

export const Section = styled.View`
    padding-top: 10px;
    padding-bottom: 15px;
`

export const SectionHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
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

export const TeamItemWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
`

export const UserAvatar = styled(Avatar)`
    margin-right: 10px;
`

export const TeammateWrapper = styled.View`
    flex-direction: row;
    align-items: center;
`

export const DeleteButton = styled(Button)``
