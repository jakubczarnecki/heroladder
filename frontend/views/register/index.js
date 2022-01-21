import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loginUser, registerUser } from "../../redux/actions/userActions"
import PropTypes from "prop-types"
import { LogoImg, Paragraph } from "../../components/Layout"
import { Modal, Loader } from "../../components/misc"
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
    LoadingWrapper,
    LoadingView,
} from "./styled"
import LogoWhite from "../../assets/img/logo-01.png"

const registerView = ({ navigation }) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password1: "",
        password2: "",
    })

    const dispatch = useDispatch()
    const uiData = useSelector((state) => state.ui)

    const SuccessfullyRegisteredModal = () => (
        <Modal
            type="info"
            title="Register complete"
            submitText="Go to app!"
            onSubmit={() => {
                setModalOpen(false)
                dispatch(
                    loginUser({
                        email: formData.email,
                        password: formData.password1,
                    })
                )
            }}
            isOpen={modalOpen}
        >
            <Paragraph>
                You have been successfully registered! You can now start using
                our application.
            </Paragraph>
        </Modal>
    )

    const onSubmit = () => {
        dispatch(registerUser(formData))
    }

    useEffect(() => {
        if (uiData.actionSuccess) {
            setModalOpen(true)
        }
    }, [uiData.actionSuccess])

    return (
        <FadeInView>
            <LoginWrapper>
                <LoginWrapperScroll>
                    <LogoWrapper>
                        <LogoImg source={LogoWhite} width="250" />
                    </LogoWrapper>
                    <LoadingView>
                        <StyledTile>
                            <LoginTitle>Register</LoginTitle>
                            <FormInput
                                placeholder="Username"
                                title="Username"
                                value={formData.username}
                                errors={uiData.errors}
                                errorType="username"
                                onChangeText={(text) =>
                                    setFormData({ ...formData, username: text })
                                }
                            />
                            <FormInput
                                placeholder="E-mail"
                                title="E-mail"
                                value={formData.email}
                                errors={uiData.errors}
                                errorType="email"
                                onChangeText={(text) =>
                                    setFormData({ ...formData, email: text })
                                }
                            />
                            <FormInput
                                password={true}
                                placeholder="Password"
                                title="Password"
                                value={formData.password1}
                                errors={uiData.errors}
                                errorType="password1"
                                onChangeText={(text) =>
                                    setFormData({
                                        ...formData,
                                        password1: text,
                                    })
                                }
                            />
                            <FormInput
                                password={true}
                                placeholder="Confirm password"
                                title="Confirm password"
                                value={formData.password2}
                                errors={uiData.errors}
                                errorType="password2"
                                onChangeText={(text) =>
                                    setFormData({
                                        ...formData,
                                        password2: text,
                                    })
                                }
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
                                    onPress={onSubmit}
                                />
                            </ButtonWrapper>
                        </StyledTile>
                        {uiData.loading && (
                            <LoadingWrapper>
                                <Loader size={40} color="white" />
                            </LoadingWrapper>
                        )}
                    </LoadingView>
                </LoginWrapperScroll>
            </LoginWrapper>
            <SuccessfullyRegisteredModal />
        </FadeInView>
    )
}

registerView.propTypes = {
    navigation: PropTypes.object,
}

export default registerView
