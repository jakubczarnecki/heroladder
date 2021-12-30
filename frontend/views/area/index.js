import React from "react"
import PropTypes from "prop-types"
import { FadeInView } from "../../components/Transitions"
import { useWindowDimensions } from "react-native"
import { MapPage, MapWrapper } from "./styled"
import { PROVIDER_GOOGLE } from "react-native-maps"

const areaView = ({ navigation }) => {
    const { height, width } = useWindowDimensions()

    return (
        <FadeInView>
            <MapWrapper>
                {/* <Text>areas</Text> */}
                <MapPage
                    height={height}
                    width={width}
                    provider={PROVIDER_GOOGLE}
                />
            </MapWrapper>
        </FadeInView>
    )
}

areaView.propTypes = {
    navigation: PropTypes.object,
}

export default areaView
