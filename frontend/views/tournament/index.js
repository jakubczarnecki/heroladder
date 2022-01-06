import React from "react"
import PropTypes from "prop-types"
import { FadeInView } from "../../components/Transitions"
import { LayoutWrapperScroll } from "../../components/Layout"
import { Section, SectionContent, SectionHeader, SectionTitle } from "./styled"
import Ladder from "./Ladder"
import Details from "./Details"

const tournamentView = ({ navigation }) => {
    return (
        <FadeInView>
            <LayoutWrapperScroll>
                <Details />
                <Section>
                    <SectionHeader>
                        <SectionTitle>Ladder</SectionTitle>
                    </SectionHeader>
                    <SectionContent>
                        <Ladder />
                    </SectionContent>
                </Section>
            </LayoutWrapperScroll>
        </FadeInView>
    )
}

tournamentView.propTypes = {
    navigation: PropTypes.object,
}

export default tournamentView
