import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    updateLandTitleInfo,
    setLandTitleInfo,
} from '../features/forms/formSlice'
import CustomSelect from './ui/CustomDropdown'

const TitleDeedCard = () => {
    const dispatch = useDispatch()
    const isEditable = useSelector((state) => state.forms.isEditable)
    const LandTitleInfo = useSelector((state) => state.forms.LandTitleInfo)

    useEffect(() => {
        const fetchedData = {
            status: 'ACTIVE',
            number: '67890',
            owner: 'Jane Smith',
            type: 'Electronic Parcel',
        }

        dispatch(setLandTitleInfo(fetchedData))
    }, [dispatch])
    const handleInputChange = (e) => {
        const { name, value } = e.target
        dispatch(updateLandTitleInfo({ [name]: value }))
    }
    const OwnerOptions = [
        { label: 'Jane Smith', value: 'Jane Smith' },
        { label: 'John smith', value: 'John smith' },
    ]
    const StatusOptions = [
        { label: 'Active', value: 'Active' },
        { label: 'InActive', value: 'InActive' },
    ]
    const TypeOptions = [
        { label: 'Electronic Parcel', value: 'Electronic Parcel' },
        { label: 'Physical Parcel', value: 'Physical Parcel' },
    ]
    return (
        <div className="bg-primaryGreen-200 px-6 py-4  w-[290px] rounded-b-3xl   grid gap-4 shadow-md box-border">
            <h2 className="text-lg font-bold text-neutral-600">Title Deed</h2>

            {isEditable ? (
                <div className="grid gap-2 ">
                    <div className="flex flex-col justify-center gap-1">
                        <label className="text-neutral-400 font-normal text-base">
                            Status
                        </label>

                        <CustomSelect
                            name="status"
                            value={LandTitleInfo?.status}
                            onChange={handleInputChange}
                            options={StatusOptions}
                            label="Status"
                        />
                    </div>

                    <div>
                        <label className="text-neutral-400 font-normal text-base">
                            Number
                        </label>
                        <input
                            type="text"
                            name="number"
                            placeholder="Title Deed Number"
                            value={LandTitleInfo?.number}
                            onChange={handleInputChange}
                            className="font-semibold text-base text-primary-500 border rounded px-4 py-2"
                        />
                    </div>

                    <div>
                        <label className="text-neutral-400 font-normal text-base">
                            Owner
                        </label>

                        <CustomSelect
                            name="owner"
                            value={LandTitleInfo?.owner}
                            onChange={handleInputChange}
                            options={OwnerOptions}
                            label="Owner"
                        />
                    </div>

                    <div>
                        <label className="text-neutral-800 font-normal text-base">
                            Type
                        </label>

                        <CustomSelect
                            name="type"
                            value={LandTitleInfo?.type}
                            onChange={handleInputChange}
                            options={TypeOptions}
                            label="Type"
                        />
                    </div>
                </div>
            ) : (
                <div className="grid gap-2 ">
                    <div className="flex flex-col justify-center gap-1 mb-2">
                        <label className="text-neutral-400 font-normal text-base">
                            Status
                        </label>
                        <span className="px-6 py-1 text-center bg-[#299764]/10 border border-success text-success rounded-lg font-semibold text-base">
                            {LandTitleInfo?.status}
                        </span>
                    </div>

                    <div className="grid">
                        <label className="text-neutral-400 font-normal text-base">
                            Number
                        </label>
                        <span className="text-neutral-700 text-base font-semibold">
                            {LandTitleInfo?.number}
                        </span>
                    </div>

                    <div className="grid">
                        <label className="text-neutral-400 font-normal text-base">
                            Owner
                        </label>
                        <span className="text-neutral-700 text-base font-semibold">
                            {LandTitleInfo?.owner}
                        </span>
                    </div>

                    <div className="grid">
                        <label className="text-neutral-400 font-normal text-base">
                            Type
                        </label>
                        <span className="text-neutral-700 text-base font-semibold">
                            {LandTitleInfo?.type}
                        </span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default TitleDeedCard
