import React from "react"
import theme from "../../../styles/Theme"
import { useDispatch, useSelector } from "react-redux"
import PropTypes from "prop-types"
import { LayoutWrapper, Tile } from "../../Layout"
import {
    DrawerWrapper,
    TileContent,
    TileCaption,
    TileIcon,
    MenuDetailText,
    MenuLogo,
    DrawerFooter,
    DrawerContent,
} from "./styled"
import navContent from "./content"
import LogoWhite from "../../../assets/img/logo-01.png"

const Drawer = ({ navigation }) => {
    const dispatch = useDispatch()
    const currentUserID = useSelector((state) => state.user.id)

    return (
        <LayoutWrapper>
            <DrawerWrapper>
                <DrawerContent>
                    {navContent.map((tile, index) => (
                        <Tile boxMargin="15" key={index}>
                            <TileContent
                                onPress={() =>
                                    tile.onPress(
                                        navigation,
                                        dispatch,
                                        currentUserID
                                    )
                                }
                            >
                                <TileIcon name={tile.icon} />
                                <TileCaption>{tile.title}</TileCaption>
                            </TileContent>
                        </Tile>
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

Drawer.propTypes = {
    navigation: PropTypes.object,
}

export default Drawer
