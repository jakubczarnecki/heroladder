import React, { useEffect, useState } from "react"
import { Paragraph } from "../../../components/Layout"
import { sentences } from "../../../components/misc/RandomSentences/sentences"

const RandomSentences = ({ style }) => {
    const [rnd, setRnd] = useState(null)

    useEffect(() => {
        setRnd(Math.floor(Math.random() * sentences.length))
    }, [])

    return <Paragraph style={style}>{rnd ? sentences[rnd] : null}</Paragraph>
}

export default RandomSentences
