import React, { useState } from "react"
import PropTypes from "prop-types"
import { Text } from "react-native"
import {
    LayoutWrapperScroll,
    Paragraph,
    Title,
    Subtitle,
    ParagraphSmall,
    DetailText,
    ParagraphBold,
} from "../../components/Layout"
import { FadeInView } from "../../components/Transitions"
import { TextInput, Button, CircleButton } from "../../components/Form"
import Modal from "../../components/misc/Modal"

const loginView = ({ navigation }) => {
    const [modalOpen, setModalOpen] = useState(true)

    return (
        <FadeInView>
            <LayoutWrapperScroll>
                <Text>Strona Logowania</Text>
                <TextInput placeholder="Login" />
                <TextInput password={true} placeholder="***** ***" />
                <Button
                    title="Do rejestracji"
                    onPress={() => navigation.navigate("Register")}
                />
                <Button
                    type="contained"
                    icon="eye"
                    disabled={true}
                    title="Do rejestracji"
                    onPress={() => navigation.navigate("Register")}
                />
                <Button
                    type="outlined"
                    icon="eye"
                    color="accent"
                    title="Do rejestracji"
                    onPress={() => navigation.navigate("Register")}
                />
                <Title>Title</Title>
                <Subtitle>Subtitle</Subtitle>
                <DetailText>28.12.2021 21:37</DetailText>
                <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore possimus exercitationem, quas facilis eveniet est
                    minus incidunt reprehenderit perspiciatis, a fugit,
                    consectetur aliquid. Esse numquam cupiditate neque eveniet,
                    non in.
                </Paragraph>
                <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore possimus exercitationem, quas facilis eveniet est
                    minus incidunt reprehenderit perspiciatis, a fugit,
                    consectetur aliquid. Esse numquam cupiditate neque eveniet,
                    non in.
                </Paragraph>
                <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore possimus exercitationem, quas facilis eveniet est
                    minus incidunt reprehenderit perspiciatis, a fugit,
                    consectetur aliquid. Esse numquam cupiditate neque eveniet,
                    non in.
                </Paragraph>
                <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore possimus exercitationem, quas facilis eveniet est
                    minus incidunt reprehenderit perspiciatis, a fugit,
                    consectetur aliquid. Esse numquam cupiditate neque eveniet,
                    non in.
                </Paragraph>
                <ParagraphBold>Lorem ipsum</ParagraphBold>
                <CircleButton icon="plus" onPress={() => setModalOpen(true)} />

                <Modal
                    isOpen={modalOpen}
                    title="Modal title"
                    type="confirm"
                    onSubmit={() => {
                        setModalOpen(false)
                    }}
                >
                    <ParagraphSmall>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolore possimus exercitationem, quas facilis eveniet est
                        minus incidunt reprehenderit perspiciatis, a fugit,
                        consectetur aliquid. Esse numquam cupiditate neque
                        eveniet, non in.
                    </ParagraphSmall>
                </Modal>
            </LayoutWrapperScroll>
        </FadeInView>
    )
}

loginView.propTypes = {
    navigation: PropTypes.object,
}

export default loginView
