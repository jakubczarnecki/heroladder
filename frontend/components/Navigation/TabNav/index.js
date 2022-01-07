import React, { useState } from "react"
import PropTypes from "prop-types"
import { HeaderItem, NavContent, NavHeader, NavWrapper } from "./styled"
import { Title, TitleSmall } from "../../Layout"

const TabNav = ({ pages }) => {
    const [activePage, setActivePage] = useState(0)

    return (
        <NavWrapper>
            <NavHeader>
                {pages.map((page, index) => (
                    <HeaderItem
                        key={index}
                        active={index === activePage}
                        onPress={() => setActivePage(index)}
                    >
                        <TitleSmall>{page.name}</TitleSmall>
                    </HeaderItem>
                ))}
            </NavHeader>
            <NavContent>{pages[activePage].content}</NavContent>
        </NavWrapper>
    )
}

TabNav.propTypes = {
    pages: PropTypes.array,
}

export default TabNav
