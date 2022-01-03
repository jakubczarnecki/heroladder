import React from "react"
import PropTypes from "prop-types"
import { LayoutWrapperScroll } from "../../components/Layout"
import { FadeInView } from "../../components/Transitions"
import { HomeWrapper } from "./styled"
import HelloBox from "./HelloBox"

const homeView = ({ navigation }) => {
    return (
        <FadeInView>
            <LayoutWrapperScroll>
                <HomeWrapper>
                    <HelloBox />
                </HomeWrapper>
            </LayoutWrapperScroll>
        </FadeInView>
    )
}

homeView.propTypes = {
    navigation: PropTypes.object,
}

export default homeView
