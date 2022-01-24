import React from "react"
import { useSelector } from "react-redux"
import { HelloWrapper, TextWrapper, AvatarWrapper } from "./styled"
import { Title } from "../../../components/Layout"
import { Avatar, RandomSentences } from "../../../components/misc"

const HelloBox = () => {
    const user = useSelector((state) => state.user)

    return (
        <HelloWrapper>
            <TextWrapper>
                <Title>Hello {user.username}!</Title>
                <RandomSentences />
            </TextWrapper>
            <AvatarWrapper>
                <Avatar size={70} img={user.avatar} />
            </AvatarWrapper>
        </HelloWrapper>
    )
}

export default HelloBox
