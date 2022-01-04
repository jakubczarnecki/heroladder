import styled from "styled-components/native"
import { CircleButton } from "../../components/Form"
import { Tile } from "../../components/Layout"
import theme from "../../styles/Theme"

export const HomeWrapper = styled.View`
    padding-top: 25px;
    align-items: center;
    padding-bottom: 35px;
`

export const FixedButton = styled(CircleButton)`
    position: absolute;
    bottom: 10px;
    right: 10px;
`
