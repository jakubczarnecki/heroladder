import styled from "styled-components/native"
import theme from "../../../styles/Theme"
import { Tile } from "../../Layout"

export const ModalBackdrop = styled.View`
    background-color: #00000097;
    position: absolute;
    justify-content: center;
    width: 100%;
    height: 100%;
`

export const ModalWrapper = styled(Tile)`
    padding: 20px;
    margin-left: 20px;
    margin-right: 20px;
`

export const ModalHeader = styled.View`
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom-width: 1px;
    border-bottom-color: ${theme.colors.gray};
`

export const ModalContent = styled.View`
    padding-top: 20px;
    padding-bottom: 20px;
`

export const ButtonsWrapper = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`
