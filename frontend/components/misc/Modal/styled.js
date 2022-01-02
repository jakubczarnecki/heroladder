import styled from "styled-components/native"
import theme from "../../../styles/Theme"
import { Tile } from "../../Layout"

export const ModalBackdrop = styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
        justifyContent: "center",
    },
}))`
    background-color: #00000097;
    position: absolute;
    width: 100%;
    height: 100%;
`

export const ModalWrapper = styled(Tile)`
    padding: 20px;
    margin: 20px;
`

export const ModalHeader = styled.View`
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom-width: 1px;
    border-bottom-color: ${theme.colors.gray};
`

export const ModalContent = styled.View`
    padding-top: 25px;
    padding-bottom: 25px;
`

export const ButtonsWrapper = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`
