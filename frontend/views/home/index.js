import React, { useState } from "react"
import PropTypes from "prop-types"
import { LayoutWrapperScroll } from "../../components/Layout"
import { FadeInView } from "../../components/Transitions"
import { FixedButton, HomeWrapper } from "./styled"
import HelloBox from "./HelloBox"
import TournamentFeedItem from "./TournamentFeedItem"
import AddTournamentModal from "./AddTournamentModal"

const homeView = ({ navigation }) => {
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <FadeInView>
            <LayoutWrapperScroll>
                <HomeWrapper>
                    <HelloBox />
                    <TournamentFeedItem navigation={navigation} />
                    <TournamentFeedItem navigation={navigation} />
                    <TournamentFeedItem navigation={navigation} />
                    <TournamentFeedItem navigation={navigation} />
                    <TournamentFeedItem navigation={navigation} />
                </HomeWrapper>
            </LayoutWrapperScroll>
            <FixedButton icon="plus" onPress={() => setModalOpen(true)} />
            <AddTournamentModal
                isOpen={modalOpen}
                onCancel={() => setModalOpen(false)}
                onSubmit={() => setModalOpen(false)}
            />
        </FadeInView>
    )
}

homeView.propTypes = {
    navigation: PropTypes.object,
}

export default homeView
