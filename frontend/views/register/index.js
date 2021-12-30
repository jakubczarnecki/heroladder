import React from "react"
import PropTypes from "prop-types"
import { LogoImg } from "../../components/Layout"
import { FadeInView } from "../../components/Transitions"
import {
    ButtonWrapper,
    LoginWrapper,
    LoginWrapperScroll,
    StyledTile,
    FormInput,
    LoginTitle,
    LogoWrapper,
    LoginButton,
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
                        <FormInput placeholder="Login" />
                        <FormInput placeholder="E-mail" />
                        <FormInput password={true} placeholder="Password" />
                        <FormInput
                            password={true}
                            placeholder="Repeat password"
                        />
                        <ButtonWrapper>
                            <LoginButton
                                title="Back to login"
                                color="primaryDarker"
                                size="wide"
                                onPress={() => navigation.navigate("Login")}
                            />
                            <LoginButton
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
