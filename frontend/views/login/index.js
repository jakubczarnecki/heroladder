import React from "react"
import PropTypes from "prop-types"
import { LogoImg } from "../../components/Layout"
import { FadeInView } from "../../components/Transitions"
import { Button } from "../../components/Form"
import {
    ButtonWrapper,
    LoginWrapper,
    LoginWrapperScroll,
    StyledTile,
    LoginTitle,
    FormInput,
    LogoWrapper,
} from "./styled"
import LogoWhite from "../../assets/img/logo-01.png"

const loginView = ({ navigation }) => {
    return (
        <FadeInView>
            <LoginWrapper>
                <LoginWrapperScroll>
                    <LogoWrapper>
                        <LogoImg source={LogoWhite} width="250" />
                    </LogoWrapper>
                    <StyledTile>
                        <LoginTitle>Log in</LoginTitle>
                        <FormInput placeholder="Login" />
                        <FormInput password={true} placeholder="***** ***" />
                        <ButtonWrapper>
                            <Button
                                title="Register"
                                size="wide"
                                color="primaryDarker"
                                onPress={() => navigation.navigate("Register")}
                            />
                            <Button
                                type="contained"
                                color="primary"
                                title="Log in"
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

loginView.propTypes = {
    navigation: PropTypes.object,
}

export default loginView
