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
import {
    TextInput,
    Button,
    CircleButton,
    Dropdown,
} from "../../components/Form"

const tournamentsView = ({ navigation }) => {
    const [dropdownValue, setDropdownValue] = useState(null)

    return (
        <FadeInView>
            <LayoutWrapperScroll>
                <Text>TOURNAMENTS</Text>
                <TextInput placeholder="Login" />
                <TextInput password={true} placeholder="***** ***" />
                <Button title="Do rejestracji" />
                <Dropdown
                    title="Discipline"
                    items={[
                        { icon: "volleyball-ball", value: "volleyball" },
                        { icon: "baseball-ball", value: "baseball" },
                        { icon: "table-tennis", value: "table tenis" },
                        { icon: "futbol", value: "football" },
                    ]}
                    value={dropdownValue}
                    onChange={setDropdownValue}
                />
                <Button
                    type="contained"
                    icon="eye"
                    disabled={true}
                    title="Do rejestracji"
                />
                <Button
                    type="outlined"
                    icon="eye"
                    color="accent"
                    title="Do rejestracji"
                />
                <Title>Title</Title>
                <Subtitle>Subtitle</Subtitle>
                <CircleButton icon="plus" />
                <DetailText>28.12.2021 21:37</DetailText>
                <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore possimus exercitationem, quas facilis eveniet est
                    minus incidunt reprehenderit perspiciatis, a fugit,
                    consectetur aliquid. Esse numquam cupiditate neque eveniet,
                    non in.
                </Paragraph>
                <ParagraphBold>Lorem ipsum</ParagraphBold>
                <ParagraphSmall>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore possimus exercitationem, quas facilis eveniet est
                    minus incidunt reprehenderit perspiciatis, a fugit,
                    consectetur aliquid. Esse numquam cupiditate neque eveniet,
                    non in.
                </ParagraphSmall>
            </LayoutWrapperScroll>
        </FadeInView>
    )
}

tournamentsView.propTypes = {
    navigation: PropTypes.object,
}

export default tournamentsView
