import React from "react"
import PropTypes from "prop-types"
import { Title } from "../../components/Layout"
import theme from "frontend/styles/Theme.js"
import {
    AboutTile,
    AboutWrapper,
    AboutIcon,
    AboutHeader,
    AboutDetailText,
    AboutLogo,
    AboutText,
    AboutTextLastLine,
} from "./styled"
import LogoWhite from "../../assets/img/logo-01.png"
import { FadeInView } from "../../components/Transitions"

const aboutView = () => {
    return (
        <FadeInView>
            <AboutWrapper>
                <AboutTile>
                    <AboutHeader>
                        <AboutIcon name="info-circle" />
                        <Title>About the application</Title>
                    </AboutHeader>
                    <AboutText>
                        HeroLadder™ is an innovative incentive for (not only!)
                        young people to improve their physical and mental health
                        by participating in various sport tournaments.
                    </AboutText>
                    <AboutText>
                        Apart from that, our mission is to create a friendly
                        community that gives opportunities to meet up and
                        develop good sportmanship, get to know new people and
                        simply have fun. Everyone can make their own tournament
                        and join the rivalry.
                    </AboutText>
                    <AboutText>
                        One may ask: "What sports can I find here?" - the answer
                        is whatever you can think of! It can be football,
                        volleyball, ping pong, but also some other games that
                        are not so popular, because we wanted to make
                        HeroLadder™ as flexible as we can imagine.
                    </AboutText>
                    <AboutTextLastLine>
                        So, what are you waiting for? Join us right now! 🧡
                    </AboutTextLastLine>
                </AboutTile>
                <AboutLogo
                    source={LogoWhite}
                    width="85"
                    style={{ tintColor: theme.colors.gray }}
                />
                <AboutDetailText>© All Rights Reserved 2022</AboutDetailText>
            </AboutWrapper>
        </FadeInView>
    )
}

aboutView.propTypes = {
    navigation: PropTypes.object,
}

export default aboutView
