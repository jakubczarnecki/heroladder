import React from "react"
import PropTypes from "prop-types"
import { LayoutWrapperScroll } from "../../components/Layout"
import { FadeInView } from "../../components/Transitions"
import { HomeWrapper } from "./styled"
import HelloBox from "./HelloBox"
import { View } from "react-native"
import TournamentFeedItem from "./TournamentFeedItem"

const homeView = ({ navigation }) => {
    return (
        <FadeInView>
            <LayoutWrapperScroll>
                <HomeWrapper>
                    <HelloBox />
                    <TournamentFeedItem />
                    <TournamentFeedItem />
                    <TournamentFeedItem />
                    <TournamentFeedItem />
                    <TournamentFeedItem />
                </HomeWrapper>
            </LayoutWrapperScroll>
        </FadeInView>
    )
}

homeView.propTypes = {
    navigation: PropTypes.object,
}

export default homeView
