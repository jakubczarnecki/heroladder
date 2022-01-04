import styled from "styled-components/native"
import { FontAwesome5 } from "@expo/vector-icons"
import { ParagraphBold, Paragraph } from "../../Layout"
import theme from "../../../styles/Theme"

export const DropdownWrapper = styled.View``

export const SelectWrapper = styled.Pressable`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.grayLight};
    padding: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-color: ${theme.colors.gray};
    border-bottom-width: 2px;
`

export const TitleWrapper = styled.View`
    flex-direction: row;
    align-items: center;
`

export const TitleIcon = styled(FontAwesome5).attrs(() => ({
    size: 24,
    color: theme.colors.primaryDark,
}))`
    padding-right: 10px;
`

export const DropdownIcon = styled(FontAwesome5).attrs(() => ({}))``

export const ItemsWrapper = styled.ScrollView`
    max-height: 300px;
    background-color: ${theme.colors.grayLight};
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`

export const Item = styled.Pressable`
    padding: 12px;
    flex-direction: row;

    background-color: ${(props) =>
        props.selected ? theme.colors.gray : theme.colors.grayLight};
`

export const ItemIcon = styled(FontAwesome5).attrs(() => ({
    size: 20,
    color: theme.colors.primaryDarker,
}))`
    padding-right: 10px;
`

export const ItemText = styled(Paragraph)``

export const ItemTextSelected = styled(ParagraphBold)``
