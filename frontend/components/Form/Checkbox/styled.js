import styled from "styled-components/native"
import ToggleSwitch from "toggle-switch-react-native"
import theme from "../../../styles/Theme"

export const CheckboxInput = styled(ToggleSwitch).attrs(() => ({
    onColor: theme.colors.primary,
    offColor: theme.colors.gray,
    size: "medium",
}))``
