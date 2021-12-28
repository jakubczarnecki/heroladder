import React from "react"
import LayoutWrapper from "../../Layout"
import { Tile } from "../../Layout/Tile"
import { DrawerWrapper, TileContent, TileCaption, TileIcon } from "./styled"
import navContent from "./content"

const Drawer = ({ navigation }) => (
    <LayoutWrapper>
        <DrawerWrapper>
            {navContent.map((tile, index) => (
                <Tile boxMargin="15px" key={index}>
                    <TileContent onPress={() => tile.onPress(navigation)}>
                        <TileIcon name={tile.icon} />
                        <TileCaption>{tile.title}</TileCaption>
                    </TileContent>
                </Tile>
            ))}
        </DrawerWrapper>
    </LayoutWrapper>
)

export default Drawer
