import styled from "styled-components/native"
import { Button } from "../../../components/Form"
import { Paragraph } from "../../../components/Layout"
import theme from "../../../styles/Theme"

export const TournamentDescription = styled(Paragraph)`
    padding-bottom: 20px;
`

export const Team = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 5px;
    padding-bottom: 5px;

    border-color: ${theme.colors.gray};
    border-bottom-width: 1px;
`

export const TeamSquad = styled.ScrollView.attrs(() => ({
    horizontal: true,
}))`
    flex-direction: row;
    max-width: 155px;
`

export const RegisterButton = styled(Button)`
    align-self: flex-end;
    width: 200px;
    margin-top: 15px;
`
export const ContentColumn = styled.View`
    flex: 1;
`

export const Stretch = styled.View`
    flex: 1;
`
