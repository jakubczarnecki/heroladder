import React from "react"
import { useSelector } from "react-redux"
import { HelloWrapper, TextWrapper, AvatarWrapper } from "./styled"
import { Title, Paragraph } from "../../../components/Layout"
import { Avatar } from "../../../components/misc"

const HelloBox = () => {
    const user = useSelector((state) => state.user)

    return (
        <HelloWrapper>
            <TextWrapper>
                <Title>Hello {user.username}!</Title>
                <Paragraph>
                    Słuchaczy o mocnych nerwach zapraszmy na porcję ostrego,
                    metalowego łojenia, przed państwem zespół ,
                </Paragraph>
            </TextWrapper>
            <AvatarWrapper>
                <Avatar size={70} img={user.avatar} />
            </AvatarWrapper>
        </HelloWrapper>
    )
}

export default HelloBox
