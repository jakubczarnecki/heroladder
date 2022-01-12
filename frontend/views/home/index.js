import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { LayoutWrapperScroll } from "../../components/Layout"
import { FadeInView } from "../../components/Transitions"
import { FixedButton, HomeWrapper } from "./styled"
import HelloBox from "./HelloBox"
import TournamentFeedItem from "./TournamentFeedItem"
import AddTournamentModal from "./AddTournamentModal"

import { useDispatch, useSelector } from "react-redux"
import { setFeed } from "../../redux/actions/dataActions"
import { Loader } from "../../components/misc"

const homeView = ({ navigation }) => {
    const [modalOpen, setModalOpen] = useState(false)

    const dispatch = useDispatch()
    const tournaments = useSelector((state) => state.data.tournaments)
    const loadingData = useSelector((state) => state.data.loading)

    useEffect(() => {
        dispatch(setFeed())
    }, [])

    return (
        <FadeInView>
            <LayoutWrapperScroll>
                <HomeWrapper>
                    <HelloBox />
                    {loadingData ? (
                        <Loader color="red" size={30} />
                    ) : (
                        tournaments &&
                        tournaments.map((tournament, index) => (
                            <TournamentFeedItem
                                navigation={navigation}
                                tournament={tournament}
                                key={index}
                            />
                        ))
                    )}
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
