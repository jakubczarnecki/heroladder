import React, { useState } from "react"
import PropTypes from "prop-types"
import { Modal } from "../../../components/misc"
import { DropdownFormInput } from "./styled"
import { TitleSmaller } from "../../../components/Layout"
import { useDispatch } from "react-redux"
import { selectWinner } from "../../../redux/actions/dataActions"

const SelectWinnersModal = ({
    isOpen,
    onCancel,
    onSubmit,
    match,
    currentStage,
    tournamentID,
    formData,
    setFormData,
}) => {
    const [winner, setWinner] = useState(null)
    const items =
        match &&
        match.teams.map((team) => ({
            value: team.teamName,
        }))

    const dispatch = useDispatch()

    return (
        <Modal
            type="confirm"
            title="Choose a winner"
            submitText="Submit"
            isOpen={isOpen}
            onCancel={onCancel}
            onSubmit={() => {
                setWinner(null)
                dispatch(selectWinner(tournamentID, formData))
                onSubmit()
            }}
        >
            <TitleSmaller>Which team won?</TitleSmaller>
            <DropdownFormInput
                title="Select a winner"
                items={items}
                value={winner}
                onChange={(item, index) => {
                    setWinner(item)
                    setFormData({
                        ...formData,
                        winner: index + 1,
                    })
                }}
            />
        </Modal>
    )
}

SelectWinnersModal.propTypes = {
    isOpen: PropTypes.bool,
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func,
    match: PropTypes.object,
    currentStage: PropTypes.number,
    tournamentID: PropTypes.string,
    formData: PropTypes.object,
    setFormData: PropTypes.func,
}

export default SelectWinnersModal
