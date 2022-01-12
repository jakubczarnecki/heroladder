import React, { useState, useRef } from "react"
import PropTypes from "prop-types"
import {
    AddIcon,
    Input,
    InputIcon,
    ListItem,
    ListWrapper,
    SearchBoxWrapper,
    UserAvatar,
    UserWrapper,
} from "./styled"
import bg2 from "../../../assets/img/bg2.jpg"
import { ParagraphBold } from "../../Layout"

const Searchbox = ({ list, onSelect, exclude, style }) => {
    const [value, setValue] = useState("")
    const input = useRef(null)

    return (
        <SearchBoxWrapper style={style}>
            <Input onChangeText={(text) => setValue(text)} ref={input} />
            {value.length > 0 ? (
                <InputIcon
                    name="times"
                    onPress={() => {
                        setValue("")
                        input.current.clear()
                    }}
                />
            ) : (
                <InputIcon name="search" />
            )}

            {value.length > 0 ? (
                <ListWrapper>
                    {list
                        .filter((user) => exclude.indexOf(user) === -1)
                        .map((user, index) => (
                            <ListItem
                                key={index}
                                onPress={() => {
                                    onSelect(user)
                                }}
                            >
                                <UserWrapper>
                                    <UserAvatar img={bg2} />
                                    <ParagraphBold>
                                        {user.username}
                                    </ParagraphBold>
                                </UserWrapper>
                                <AddIcon name="plus" />
                            </ListItem>
                        ))}
                </ListWrapper>
            ) : null}
        </SearchBoxWrapper>
    )
}

Searchbox.propTypes = {
    list: PropTypes.array,
    onSelect: PropTypes.func,
    exclude: PropTypes.array,
    style: PropTypes.array,
}

export default Searchbox
