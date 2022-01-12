import styled from "styled-components/native"
import { CircleButton } from "../../components/Form"
import { Tile } from "../../components/Layout"
import { Loader } from "../../components/misc"
import theme from "../../styles/Theme"

export const HomeWrapper = styled.View`
    padding-top: 25px;
    align-items: center;
    padding-bottom: 35px;
`

export const HomeRefreshControl = styled.RefreshControl.attrs({
    colors: [theme.colors.primary],
})``

export const FixedButton = styled(CircleButton)`
    position: absolute;
    bottom: 10px;
    right: 10px;
`

export const HomeLoader = styled(Loader).attrs({
    size: 35,
    color: theme.colors.grayDark,
})`
    margin-top: 30px;
`
