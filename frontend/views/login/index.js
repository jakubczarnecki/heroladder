import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import PropTypes from "prop-types"
import { LogoImg, Title } from "../../components/Layout"
import { FadeInView } from "../../components/Transitions"
import {
    ButtonWrapper,
    LoginWrapper,
    LoginWrapperScroll,
    StyledTile,
    LoginTitle,
    FormInput,
    LogoWrapper,
    LoginButton,
} from "./styled"
import LogoWhite from "../../assets/img/logo-01.png"

import { loginUser } from "../../redux/actions/userActions"

const loginView = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const loading = useSelector((state) => state.ui.loading)
    const error = useSelector((state) => state.ui.errors)

    const userID = useSelector((state) => state.user.id)
    console.log("LOGIN: ", userID)

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
                    <StyledTile>
                        {loading && <Title>Loading</Title>}

                        <LoginTitle>Log in</LoginTitle>
                        <FormInput
                            placeholder="Email"
                            onChangeText={setEmail}
                        />
                        <FormInput
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
                                onPress={() => navigation.navigate("Register")}
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
                </LoginWrapperScroll>
            </LoginWrapper>
        </FadeInView>
    )
}

loginView.propTypes = {
    navigation: PropTypes.object,
}

export default loginView
