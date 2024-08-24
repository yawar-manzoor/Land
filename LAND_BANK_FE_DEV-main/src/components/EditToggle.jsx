import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setEditable } from '../features/forms/formSlice'
import Button from '../components/ui/Button'
const EditToggle = () => {
    const dispatch = useDispatch()
    const isEditable = useSelector((state) => state.forms.isEditable)

    const toggleEditMode = () => {
        dispatch(setEditable(!isEditable))
    }

    return (
        <Button
            onClick={toggleEditMode}
            className="bg-primary-Main border rounded px-6 py-2 text-white"
        >
            {isEditable ? 'Cancel' : 'Edit'}
        </Button>
    )
}

export default EditToggle
