import styled from "styled-components/native"
import theme from "../../../styles/Theme"
import { ParagraphBold } from "../../Layout"

export const ErrorWrapper = styled.View`
    background-color: ${theme.colors.accentLighter};
    border-radius: 10px;
    border-color: ${theme.colors.accent};
    border-width: 1px;
    padding: 8px;
    padding-top: 10px;
    padding-bottom: 10px;
`

export const ErrorText = styled(ParagraphBold)`
    color: ${theme.colors.accent};
`
