import React from "react"
import LayoutWrapper from "../../components/Layout"
import { Tile } from "../../components/Layout/Tile"
import BottomNav from "../../components/Navigation/BottomNav"
import { DrawerWrapper, TileContent, TileCaption, TileIcon } from "./styled"

const navContent = [
    { title: "Home page", icon: "home" },
    { title: "Your area", icon: "map-marker-alt" },
    { title: "Tournaments", icon: "th-list" },
    { title: "", icon: "" },
    { title: "", icon: "" },
    { title: "Logout", icon: "sign-out-alt" },
]

const Drawer = () => (
    <>
        <LayoutWrapper>
            <DrawerWrapper>
                {navContent.map((tile, index) => (
                    <Tile boxMargin="15px" key={index}>
                        <TileContent>
                            <TileIcon name={tile.icon} />
                            <TileCaption>{tile.title}</TileCaption>
                        </TileContent>
                    </Tile>
                ))}
            </DrawerWrapper>
        </LayoutWrapper>
        <BottomNav />
    </>
)

export default Drawer
