import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { LayoutWrapperScroll, Paragraph } from "../../components/Layout"
import { FadeInView } from "../../components/Transitions"
import {
    FixedButton,
    HomeLoader,
    HomeRefreshControl,
    HomeWrapper,
    NoTournamentsParagraph,
} from "./styled"
import HelloBox from "./HelloBox"
import TournamentFeedItem from "./TournamentFeedItem"
import AddTournamentModal from "./AddTournamentModal"

import { useDispatch, useSelector } from "react-redux"
import { setFeed } from "../../redux/actions/dataActions"
import useCurrentLocation from "../../hooks/useCurrentLocation"

const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout))
}

const homeView = ({ navigation }) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [refreshing, setRefreshing] = React.useState(false)
    const [location, errorMsg] = useCurrentLocation()

    const onRefresh = React.useCallback(() => {
        setRefreshing(true)
        wait(2000).then(() => {
            dispatch(setFeed(location))
            setRefreshing(false)
        })
    }, [])

    const dispatch = useDispatch()
    const tournaments = useSelector((state) => state.data.tournaments)
    const loadingData = useSelector((state) => state.data.loading)

    useEffect(() => {
        if (location) {
            dispatch(setFeed(location))
        }
    }, [location])

    return (
        <FadeInView>
            <LayoutWrapperScroll
                refreshControl={
                    <HomeRefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                <HomeWrapper>
                    <HelloBox />
                    {loadingData ? (
                        <HomeLoader />
                    ) : tournaments && tournaments.length > 0 ? (
                        tournaments.map((tournament, index) => (
                            <TournamentFeedItem
                                navigation={navigation}
                                tournament={tournament}
                                key={index}
                            />
                        ))
                    ) : (
                        <NoTournamentsParagraph>
                            There are no tournaments nearby :(
                        </NoTournamentsParagraph>
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
