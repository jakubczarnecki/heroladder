import styled from "styled-components"
import DateField from "react-native-datefield"
import theme from "../../../styles/Theme"
import { DetailText } from "../../Layout"

export const InputWrapper = styled.View``

export const InputText = styled(DetailText)`
    margin-bottom: -25px;
`

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
