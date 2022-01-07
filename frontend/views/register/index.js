import React, { useState } from "react"
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
        password: "",
        confirmPassword: "",
    })

    const dispatch = useDispatch()
    const loading = useSelector((state) => state.ui.loading)
    const errors = useSelector((state) => state.ui.errors)

    const SuccessfullyRegisteredModal = () => (
        <Modal
            type="info"
            title="Register complete"
            submitText="Go to app!"
            onSubmit={() => {
                setModalOpen(false)
                dispatch(loginUser(formData))
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
        console.log("register")
        const res = dispatch(registerUser(formData))
        if (!errors) {
            setModalOpen(true)
            console.log("brak errorow")
        } else {
            console.log(errors)
        }
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
                            <LoginTitle>Register</LoginTitle>
                            <FormInput
                                placeholder="Username"
                                title="Username"
                                onChangeText={(text) =>
                                    setFormData({ ...formData, username: text })
                                }
                            />
                            <FormInput
                                placeholder="E-mail"
                                title="E-mail"
                                onChangeText={(text) =>
                                    setFormData({ ...formData, email: text })
                                }
                            />
                            <FormInput
                                password={true}
                                placeholder="Password"
                                title="Password"
                                onChangeText={(text) =>
                                    setFormData({ ...formData, password: text })
                                }
                            />
                            <FormInput
                                password={true}
                                placeholder="Confirm password"
                                title="Confirm password"
                                onChangeText={(text) =>
                                    setFormData({
                                        ...formData,
                                        confirmPassword: text,
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
                        {loading && (
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
