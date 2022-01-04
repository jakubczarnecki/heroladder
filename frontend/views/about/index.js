import React from "react"
import PropTypes from "prop-types"
import { Paragraph, Title } from "../../components/Layout"

import {
    AboutTile,
    AboutWrapper,
    AboutIcon,
    AboutHeader,
    AboutDetailText,
} from "./styled"

import { FadeInView } from "../../components/Transitions"

const aboutView = ({ navigation }) => {
    return (
        <FadeInView>
            <AboutWrapper>
                <AboutTile>
                    <AboutHeader>
                        <AboutIcon name="info-circle" />
                        <Title>About the application</Title>
                    </AboutHeader>

                    <Paragraph>
                        Gdyby album „Typhoons” mógł być miejscem pracy, byłby to
                        placem budowy. Perkusista Ben Thatcher atakuje tam swój
                        zestaw jak operator młota pneumatycznego, natomiast
                        wokalista, klawiszowiec i basista Mike Kerr wycina
                        basowe solówki z kunsztem godnym najlepszego
                        rzemieślnika. Nie tylko słychać, ale i czuć, że zespół
                        Royal Blood wycisnął z siebie siódme poty, aby całe
                        dzieło tworzyło spójną całość. Gotowi? Przed Wami jedna
                        z naszych płyt roku - ostrzegamy, że nasza stacja nie
                        ponosi odpowiedzialności za sypiące się tynki.
                    </Paragraph>
                </AboutTile>
                <AboutDetailText>© All Rights Reserved 2022</AboutDetailText>
            </AboutWrapper>
        </FadeInView>
    )
}

aboutView.propTypes = {
    navigation: PropTypes.object,
}

export default aboutView
