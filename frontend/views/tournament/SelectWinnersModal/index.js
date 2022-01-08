import React, { useState } from "react"
import PropTypes from "prop-types"
import { Modal } from "../../../components/misc"
import { DropdownFormInput } from "./styled"
import { TitleSmaller } from "../../../components/Layout"

const SelectWinnersModal = ({ isOpen, onCancel, onSubmit, match }) => {
    const [winner, setWinner] = useState(null)
    const items =
        match &&
        match.teams.map((team) => ({
            value: team.teamname,
        }))

    console.log(winner)

    return (
        <Modal
            type="confirm"
            title="Choose a winner"
            submitText="Submit"
            isOpen={isOpen}
            onCancel={onCancel}
            onSubmit={() => {
                console.log("Send request")
                setWinner(null)
                onSubmit()
            }}
        >
            <TitleSmaller>Which team won?</TitleSmaller>
            <DropdownFormInput
                title="Select a winner"
                items={items}
                value={winner}
                onChange={setWinner}
            />
        </Modal>
    )
}

SelectWinnersModal.propTypes = {
    isOpen: PropTypes.bool,
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func,
    match: PropTypes.object,
}

export default SelectWinnersModal
