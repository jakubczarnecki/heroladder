import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import {
    AddIcon,
    Input,
    InputIcon,
    ListItem,
    ListWrapper,
    SearchBoxWrapper,
    SearchLoader,
    SearchLoaderWrapper,
    UserAvatar,
    UserWrapper,
} from "./styled"
import bg2 from "../../../assets/img/bg2.jpg"
import { ParagraphBold } from "../../Layout"
import {
    clearSearchUsers,
    searchUsers,
} from "../../../redux/actions/dataActions"

const Searchbox = ({ onSelect, exclude, style }) => {
    const [value, setValue] = useState("")
    const input = useRef(null)

    const dispatch = useDispatch()
    const users = useSelector((state) => state.data.usersFound)
    const errors = useSelector((state) => state.ui.errors)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        let timeout
        setLoading(true)
        if (value) {
            timeout = setTimeout(() => {
                dispatch(searchUsers(value))
                setLoading(false)
            }, 1000)
        } else {
            setLoading(false)
            dispatch(clearSearchUsers())
        }

        return () => clearTimeout(timeout)
    }, [value])

    const renderItems = () => {
        if (loading) {
            return (
                <SearchLoaderWrapper>
                    <SearchLoader />
                </SearchLoaderWrapper>
            )
        }

        const err = errors.find((error) => error.type == "search")
        if (err) {
            return (
                <ListItem>
                    <ParagraphBold>{err.message}</ParagraphBold>
                </ListItem>
            )
        }

        console.log(users)

        return users
            .filter(
                (user) => !exclude.some((excluded) => excluded._id === user._id)
            )
            .map((user, index) => (
                <ListItem
                    key={index}
                    onPress={() => {
                        onSelect(user)
                    }}
                >
                    <UserWrapper>
                        <UserAvatar />
                        <ParagraphBold>{user.username}</ParagraphBold>
                    </UserWrapper>
                    <AddIcon name="plus" />
                </ListItem>
            ))
    }

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
            {value.length != 0 && <ListWrapper>{renderItems()}</ListWrapper>}
        </SearchBoxWrapper>
    )
}

Searchbox.propTypes = {
    onSelect: PropTypes.func,
    exclude: PropTypes.array,
    style: PropTypes.array,
}

export default Searchbox
