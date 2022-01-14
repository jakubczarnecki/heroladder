import { TextInput } from "react-native"
import styled from "styled-components/native"
import { FontAwesome5 } from "@expo/vector-icons"
import theme from "../../../styles/Theme"
import Pressable from "../../Layout/Pressable"
import Avatar from "../../misc/Avatar"
import Loader from "../../misc/Loader"

export const SearchBoxWrapper = styled.View`
    position: relative;
`

export const Input = styled(TextInput)`
    background-color: ${theme.colors.grayLight};
    font-size: 18px;
    padding: 8px;
    padding-left: 14px;
    padding-right: 55px;

    border-bottom-color: ${theme.colors.gray};
    border-bottom-width: 2.5px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`

export const InputIcon = styled(FontAwesome5).attrs(() => ({
    size: 24,
    color: theme.colors.dark,
}))`
    position: absolute;
    top: 10px;
    right: 30px;
`

export const ListWrapper = styled.View`
    background-color: ${theme.colors.grayLight};
    padding: 10px;
    padding-bottom: 0px;
`

export const ListItem = styled(Pressable)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 5px;
    padding-bottom: 5px;

    border-bottom-color: ${theme.colors.gray};
    border-bottom-width: 1px;
`

export const UserWrapper = styled.View`
    flex-direction: row;
    align-items: center;
`

export const UserAvatar = styled(Avatar).attrs(() => ({
    size: 34,
}))`
    margin-right: 10px;
`

export const AddIcon = styled(FontAwesome5).attrs(() => ({
    size: 24,
    color: theme.colors.dark,
}))`
    margin-right: 17px;
`

export const SearchLoaderWrapper = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-top: 5px;
    padding-bottom: 5px;
    border-bottom-width: 1px;
`

export const SearchLoader = styled(Loader).attrs({
    color: theme.colors.grayDark,
    size: 25,
})`
    padding: 10px;
    align-self: center;
`
