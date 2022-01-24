import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { HelloWrapper, TextWrapper, AvatarWrapper } from "./styled"
import { Title, Paragraph } from "../../../components/Layout"
import { Avatar } from "../../../components/misc"
import { sentences } from "./sentences"

const HelloBox = () => {
    const user = useSelector((state) => state.user)

    const [rnd, setRnd] = useState(null)

    useEffect(() => {
        setRnd(Math.floor(Math.random() * sentences.length))
        console.log(rnd)
    }, [])

    return (
        <HelloWrapper>
            <TextWrapper>
                <Title>Hello {user.username}!</Title>
                <Paragraph>{rnd ? sentences[rnd] : null}</Paragraph>
            </TextWrapper>
            <AvatarWrapper>
                <Avatar size={70} img={user.avatar} />
            </AvatarWrapper>
        </HelloWrapper>
    )
}

export default HelloBox
