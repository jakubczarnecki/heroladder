import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import PropTypes from "prop-types"
import { LogoImg } from "../../components/Layout"
import { FadeInView } from "../../components/Transitions"
import { Loader } from "../../components/misc"
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
import { ErrorBox } from "../../components/Form"

const loginView = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const loading = useSelector((state) => state.ui.loading)
    const errors = useSelector((state) => state.ui.errors)

    // skip login page
    useEffect(() => {
        dispatch(loginUser({ email: "oskar@gmail.com", password: "qwerty123" }))
    }, [])

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
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                            />
                            <FormInput
                                title="Password"
                                password={true}
                                placeholder="***** ***"
                                value={password}
                                onChangeText={setPassword}
                                errors={errors}
                                errorType="login"
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
