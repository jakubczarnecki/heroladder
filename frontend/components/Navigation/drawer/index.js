import React from "react"
import { useDispatch } from "react-redux"
import PropTypes from "prop-types"
import { LayoutWrapper, Tile } from "../../Layout"
import { DrawerWrapper, TileContent, TileCaption, TileIcon } from "./styled"
import navContent from "./content"

const Drawer = ({ navigation }) => {
    const dispatch = useDispatch()

    return (
        <LayoutWrapper>
            <DrawerWrapper>
                {navContent.map((tile, index) => (
                    <Tile boxMargin="15px" key={index}>
                        <TileContent
                            onPress={() => tile.onPress(navigation, dispatch)}
                        >
                            <TileIcon name={tile.icon} />
                            <TileCaption>{tile.title}</TileCaption>
                        </TileContent>
                    </Tile>
                ))}
            </DrawerWrapper>
        </LayoutWrapper>
    )
}

Drawer.propTypes = {
    navigation: PropTypes.object,
}

export default Drawer
