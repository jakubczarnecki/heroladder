import React from "react"
import theme from "../../../styles/Theme"
import { useDispatch, useSelector } from "react-redux"
import PropTypes from "prop-types"
import { LayoutWrapper } from "../../Layout"
import {
    DrawerWrapper,
    OptionContent,
    OptionCaption,
    OptionIcon,
    MenuDetailText,
    MenuLogo,
    DrawerFooter,
    DrawerContent,
    DrawerHeader,
    IconWrapper,
    OptionWrapper,
    BackgroundWrapper,
    GradientOverlay,
    UserCaption,
} from "./styled"
import navContent from "./content"
import { Avatar } from "../../../components/misc"
import LogoWhite from "../../../assets/img/logo-01.png"
// import bg2 from "../../..assets/img/bg2.jpg"

const DrawerB = ({ navigation }) => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)

    return (
        <LayoutWrapper>
            <DrawerWrapper>
                <DrawerHeader>
                    <BackgroundWrapper img={user.background}>
                        <GradientOverlay>
                            <Avatar img={user.avatar} size={60}></Avatar>
                            <UserCaption>{user.username}</UserCaption>
                        </GradientOverlay>
                    </BackgroundWrapper>
                </DrawerHeader>
                <DrawerContent>
                    {navContent.map((tile, index) => (
                        <OptionWrapper key={index}>
                            <OptionContent
                                onPress={() =>
                                    tile.onPress(navigation, dispatch)
                                }
                            >
                                <IconWrapper>
                                    <OptionIcon name={tile.icon} />
                                </IconWrapper>
                                <OptionCaption>{tile.title}</OptionCaption>
                            </OptionContent>
                        </OptionWrapper>
                    ))}
                </DrawerContent>
                <DrawerFooter>
                    <MenuLogo
                        source={LogoWhite}
                        width="85"
                        style={{ tintColor: theme.colors.gray }}
                    />
                    <MenuDetailText>© All Rights Reserved 2022</MenuDetailText>
                </DrawerFooter>
            </DrawerWrapper>
        </LayoutWrapper>
    )
}

DrawerB.propTypes = {
    navigation: PropTypes.object,
}

export default DrawerB
