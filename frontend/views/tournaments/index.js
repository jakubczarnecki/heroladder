import React from "react"
import PropTypes from "prop-types"
import { Text } from "react-native"
import * as SecureStore from "expo-secure-store"
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
import MapMarker from "../area/MapMarker"

async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key)
    if (result) {
        console.log(result)
    } else {
        console.log("No values stored under that key.")
    }
}

const tournamentsView = ({ navigation }) => {
    return (
        <FadeInView>
            <LayoutWrapperScroll>
                <Text>TOURNAMENTS</Text>
                <TextInput placeholder="Login" />
                <TextInput password={true} placeholder="***** ***" />
                <Button title="Do rejestracji" />
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
                    onPress={() => getValueFor("authToken")}
                />
                <Title>Title</Title>
                <Subtitle>Subtitle</Subtitle>
                <CircleButton icon="plus" />
                <DetailText>28.12.2021 21:37</DetailText>
                <MapMarker
                    title="Turniej - siatkówka"
                    icon="volleyball-ball"
                    premium={false}
                    date="30.11.2021 16:00"
                    teamSize={6}
                    teamCount={4}
                    teamsAvailible={3}
                />
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
