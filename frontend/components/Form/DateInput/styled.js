import styled from "styled-components/native"
import DateField from "react-native-datefield"
import DatePicker from "react-native-neat-date-picker"
import theme from "../../../styles/Theme"
import { DetailText, Paragraph, Pressable } from "../../Layout"

export const InputWrapper = styled.View``

export const InputText = styled(DetailText)`
    margin-bottom: -25px;
`

export const DateWrapper = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
`

export const DateElement = styled(Pressable)`
    min-width: 80px;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    margin-right: 10px;
    padding: 8px;
    padding-left: 20px;
    padding-right: 20px;
    border-bottom-color: ${theme.colors.gray};
    border-bottom-width: 1px;
`

export const DateText = styled(Paragraph)``

export const Input = styled(DateField).attrs(() => ({
    containerStyle: {
        alignSelf: "center",
    },
    styleInput: {
        marginLeft: 10,
        marginRight: 10,
        padding: 8,
        paddingLeft: 20,
        paddingRight: 20,
        borderBottomColor: theme.colors.gray,
        borderBottomWidth: 1,
        fontSize: 16,
    },
}))``

export const DatePickerModal = styled(DatePicker).attrs(() => ({
    colorOptions: {
        headerColor: theme.colors.primary,
        weekDaysColor: theme.colors.primaryDark,
        selectedDateBackgroundColor: theme.colors.primary,
        confirmButtonColor: theme.colors.primaryDark,
    },
}))``
