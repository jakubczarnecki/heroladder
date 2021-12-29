import React from "react"
import PropTypes from "prop-types"
import { LogoImg } from "../../components/Layout"
import { FadeInView } from "../../components/Transitions"
import { TextInput, Button, CircleButton } from "../../components/Form"
import {
    ButtonWrapper,
    LoginWrapper,
    LoginWrapperScroll,
    StyledTile,
    LoginTitle,
    LoginInput,
    PasswordInput,
    LogoWrapper,
} from "./styled"
import LogoWhite from "../../assets/img/logo-01.png"

const registerView = ({ navigation }) => {
    return (
        <FadeInView>
            <LoginWrapper>
                <LoginWrapperScroll>
                    <LogoWrapper>
                        <LogoImg source={LogoWhite} width="250" />
                    </LogoWrapper>
                    <StyledTile>
                        <LoginTitle>Register</LoginTitle>
                        <LoginInput placeholder="Login" />
                        <LoginInput placeholder="E-mail" />
                        <PasswordInput password={true} placeholder="Password" />
                        <PasswordInput
                            password={true}
                            placeholder="Repeat password"
                        />
                        <ButtonWrapper>
                            <Button
                                title="Cancel"
                                size="wide"
                                color="primaryDarker"
                                onPress={() => navigation.navigate("Login")}
                            />
                            <Button
                                type="contained"
                                color="primary"
                                title="Register"
                                size="wide"
                                onPress={() => navigation.navigate("Home")}
                            />
                        </ButtonWrapper>
                    </StyledTile>
                </LoginWrapperScroll>
            </LoginWrapper>
        </FadeInView>
    )
}

registerView.propTypes = {
    navigation: PropTypes.object,
}

export default registerView
