import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setEditable } from '../features/forms/formSlice'
import Button from './ui/Button'
const SubmitButton = () => {
    const dispatch = useDispatch()
    const AssetInfo = useSelector((state) => state.forms.LandAssetInfo)
    const TitleInfo = useSelector((state) => state.forms.LandTitleInfo)
    const isEditable = useSelector((state) => state.forms.isEditable)

    const handleSubmit = () => {
        const combinedData = {
            AssetInfo,
            TitleInfo,
        }

        console.log('Submitting data:', combinedData)
        dispatch(setEditable(!isEditable))
    }

    return (
        <Button
            onClick={handleSubmit}
            className="border rounded px-6 py-2 bg-primary-Main text-white"
        >
            Submit
        </Button>
    )
}

export default SubmitButton
