import theme from "../../styles/Theme"
import styled from "styled-components/native"
import { LinearGradient } from "expo-linear-gradient"

const GradientWrapper = styled(LinearGradient).attrs({
    colors: [theme.colors.primary, theme.colors.accent],
})``

export default GradientWrapper
