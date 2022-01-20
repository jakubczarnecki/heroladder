import React from "react"
import { useSelector } from "react-redux"
import { HelloWrapper, TextWrapper, AvatarWrapper } from "./styled"
import { Title, Paragraph } from "../../../components/Layout"
import { Avatar } from "../../../components/misc"
import bg2 from "../../../assets/img/bg2.jpg"

const HelloBox = () => {
    const username = useSelector((state) => state.user.username)

    return (
        <HelloWrapper>
            <TextWrapper>
                <Title>Hello {username}!</Title>
                <Paragraph>
                    Słuchaczy o mocnych nerwach zapraszmy na porcję ostrego,
                    metalowego łojenia, przed państwem zespół ,
                </Paragraph>
            </TextWrapper>
            <AvatarWrapper>
                <Avatar size={70} />
            </AvatarWrapper>
        </HelloWrapper>
    )
}

export default HelloBox
