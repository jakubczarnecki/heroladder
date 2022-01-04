import React, { useState } from "react"
import PropTypes from "prop-types"
import { DetailText, TitleSmaller } from "../../Layout"
import {
    DropdownIcon,
    DropdownWrapper,
    Item,
    ItemIcon,
    ItemsWrapper,
    ItemText,
    ItemTextSelected,
    SelectWrapper,
    TitleIcon,
    TitleWrapper,
} from "./styled"

const Dropdown = ({ title, items, value, onChange }) => {
    const [open, setOpen] = useState(false)

    return (
        <DropdownWrapper>
            <DetailText>{title}</DetailText>
            <SelectWrapper onPress={() => setOpen(!open)}>
                <TitleWrapper>
                    {value && (
                        <TitleIcon
                            name={
                                items.find((item) => item.value == value).icon
                            }
                        />
                    )}
                    <TitleSmaller>{value ? value : "Select"}</TitleSmaller>
                </TitleWrapper>
                <DropdownIcon name={open ? "chevron-up" : "chevron-down"} />
            </SelectWrapper>
            {open && (
                <ItemsWrapper>
                    {items.map((item, index) => (
                        <Item
                            key={index}
                            onPress={() => {
                                onChange(item.value)
                                setOpen(false)
                            }}
                            selected={item.value === value}
                        >
                            {item.icon && <ItemIcon name={item.icon} />}

                            {item.value === value ? (
                                <ItemTextSelected>
                                    {item.value}
                                </ItemTextSelected>
                            ) : (
                                <ItemText>{item.value}</ItemText>
                            )}
                        </Item>
                    ))}
                </ItemsWrapper>
            )}
        </DropdownWrapper>
    )
}

Dropdown.propTypes = {
    title: PropTypes.string,
    items: PropTypes.array,
    value: PropTypes.string,
    onChange: PropTypes.func,
}

export default Dropdown
