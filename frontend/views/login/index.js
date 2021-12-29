import React from "react"
import PropTypes from "prop-types"
import { LogoImg } from "../../components/Layout"
import { FadeInView } from "../../components/Transitions"
import { TextInput, Button } from "../../components/Form"
import {
    ButtonWrapper,
    LoginWrapper,
    StyledTile,
    LoginTitle,
    LoginInput,
} from "./styled"
import LogoWhite from "../../assets/img/logo-01.png"

const loginView = ({ navigation }) => {
    return (
        <FadeInView>
            <LoginWrapper>
                <LogoImg source={LogoWhite} width="275" />
                <StyledTile>
                    <LoginTitle>Logowanie</LoginTitle>
                    <LoginInput placeholder="Login" />
                    <LoginInput password={true} placeholder="***** ***" />
                    <ButtonWrapper>
                        <Button
                            title="Register"
                            onPress={() => navigation.navigate("Register")}
                        />
                        <Button
                            type="contained"
                            color="primary"
                            title="Log in"
                            onPress={() => navigation.navigate("Home")}
                        />
                    </ButtonWrapper>
                </StyledTile>
            </LoginWrapper>
        </FadeInView>
    )
}

loginView.propTypes = {
    navigation: PropTypes.object,
}

export default loginView
