import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import PropTypes from "prop-types"
import { LogoImg } from "../../components/Layout"
import { FadeInView } from "../../components/Transitions"
import Loader from "frontend/components/misc/Loader.js"
import {
    ButtonWrapper,
    LoginWrapper,
    LoginWrapperScroll,
    StyledTile,
    LoginTitle,
    FormInput,
    LogoWrapper,
    LoginButton,
    LoadingWrapper,
    LoadingView,
} from "./styled"
import LogoWhite from "../../assets/img/logo-01.png"

import { loginUser } from "../../redux/actions/userActions"

const loginView = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const loading = useSelector((state) => state.ui.loading)
    const error = useSelector((state) => state.ui.errors)

    // skip login page
    dispatch(loginUser({ email: "piponsz@gmail.com", password: "qwerty123" }))

    const onSubmit = () => {
        dispatch(loginUser({ email, password }))
    }

    return (
        <FadeInView>
            <LoginWrapper>
                <LoginWrapperScroll>
                    <LogoWrapper>
                        <LogoImg source={LogoWhite} width="250" />
                    </LogoWrapper>
                    <LoadingView>
                        <StyledTile>
                            <LoginTitle>Log in</LoginTitle>
                            <FormInput
                                title="Email"
                                placeholder="Email"
                                onChangeText={setEmail}
                                keyboardType="email-address"
                            />
                            <FormInput
                                title="Password"
                                password={true}
                                placeholder="***** ***"
                                onChangeText={setPassword}
                                error={error}
                            />

                            <ButtonWrapper>
                                <LoginButton
                                    title="Register"
                                    size="wide"
                                    color="primaryDarker"
                                    onPress={() =>
                                        navigation.navigate("Register")
                                    }
                                />
                                <LoginButton
                                    type="contained"
                                    color="primary"
                                    title="Log in"
                                    size="wide"
                                    onPress={onSubmit}
                                />
                            </ButtonWrapper>
                        </StyledTile>
                        {loading && (
                            <LoadingWrapper>
                                <Loader size={40} color="white" />
                            </LoadingWrapper>
                        )}
                    </LoadingView>
                </LoginWrapperScroll>
            </LoginWrapper>
        </FadeInView>
    )
}

loginView.propTypes = {
    navigation: PropTypes.object,
}

export default loginView
