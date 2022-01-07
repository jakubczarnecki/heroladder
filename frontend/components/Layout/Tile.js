import styled from "styled-components/native"
import theme from "../../styles/Theme"

const Tile = styled.View`
    border-radius: 10px;
    overflow: hidden;

    shadow-color: #000;
    shadow-opacity: 0.25;
    shadow-radius: 3px;
    shadow-offset: 0px 2px;

    elevation: ${(props) => {
        return props.elevation ? props.elevation : 5
    }};

    background-color: ${(props) => {
        return props.backgroundColor ? props.backgroundColor : "#fff"
    }};

    margin: ${(props) => {
        return props.boxMargin ? props.boxMargin : 0
    }}px;

    padding: ${(props) => {
        return props.boxPadding ? props.boxPadding : 0
    }}px;
`

export default Tile
