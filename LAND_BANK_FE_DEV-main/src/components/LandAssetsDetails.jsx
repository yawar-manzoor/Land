import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    updateLandAssetInfo,
    setInitialLandAssetInfo,
} from '../features/forms/formSlice'
import CustomSelect from './ui/CustomDropdown'
import EditToggle from './EditToggle'
import tick from '../assets/tick-circle.svg'
const AssetDetails = ({ data }) => {
    const dispatch = useDispatch()
    const isEditable = useSelector((state) => state.forms.isEditable)
    const {
        assetName,
        subAssetName,
        businessPlan,
        city,
        district,
        wltStatus,
        area,
    } = useSelector((state) => state.forms.LandAssetInfo)
    console.log(data?.data)
    useEffect(() => {
        const initialData = {
            assetName: data?.assetName,
            subAssetName: data?.subAssetName,
            businessPlan: data?.businessPlan,
            city: data?.city,
            district: data?.district,
            wltStatus: data?.landStatus === 'RAW' ? 'Yes' : 'Yes',
            area: `${data?.area} sq ft`,
            landInformation: data?.landInformation,
            location: data?.location,
            landStatus: data?.landStatus,
            landType: data?.landType,
            landUse: data?.landUse,
        }

        dispatch(setInitialLandAssetInfo(initialData))
    }, [dispatch, data])

    const handleInputChange = (e) => {
        const { name, value } = e.target
        dispatch(updateLandAssetInfo({ [name]: value }))
    }
    const BussinessOptions = [
        { label: 'For Sale', value: 'For Sale' },
        { label: 'For Rent', value: 'For Rent' },
    ]
    const CityOptions = [
        { label: 'Nishat', value: 'Nishat' },
        { label: 'Hawal', value: 'Hawal' },
    ]
    const DistrictOptions = [
        { label: 'Srinagar', value: 'Srinagar' },
        { label: 'Ganderbal', value: 'Ganderbal' },
    ]
    return (
        <div className="px-4 space-y-4">
            <div className="flex justify-between">
                <h2 className="text-primary-Main font-semibold text-2xl">
                    RYD-RBWA-SB01-0001
                </h2>
                {/* <div>
                    <EditToggle />
                </div> */}
            </div>

            {isEditable ? (
                <div className=" grid gap-2">
                    <p className="font-medium text-base flex gap-1">
                        <span className="text-neutral-600">Asset Name:</span>
                        <span className="text-primary-600 text-base font-bold">
                            {assetName}
                        </span>
                    </p>
                    <p className="font-medium text-base flex gap-1 justify-center items-center">
                        <span className="text-neutral-600 whitespace-nowrap ">
                            Sub Asset Name:
                        </span>
                        <input
                            type="text"
                            name="subAssetName"
                            value={subAssetName}
                            onChange={handleInputChange}
                            className="border rounded px-4 py-2 w-full text-primary-500"
                        />
                    </p>
                    <div className="flex  mt-2 justify-between">
                        <div className="flex flex-col gap-2 z-10">
                            <label className="text-neutral-600 text-base font-normal">
                                Area
                            </label>
                            <input
                                placeholder="Type Area"
                                type="text"
                                name="area"
                                value={area}
                                onChange={handleInputChange}
                                className="border rounded px-4 py-1 w-40 text-primary-500"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-neutral-600 text-base font-normal">
                                Business Plan
                            </label>
                            <CustomSelect
                                name="bussinessPlan"
                                value={businessPlan}
                                onChange={handleInputChange}
                                label="Bussiness"
                                options={BussinessOptions}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-neutral-600 text-base font-normal">
                                City
                            </label>
                            <CustomSelect
                                name="city"
                                value={city}
                                onChange={handleInputChange}
                                label="City"
                                options={CityOptions}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-neutral-600 text-base font-normal">
                                District
                            </label>
                            <CustomSelect
                                name="district"
                                value={district}
                                onChange={handleInputChange}
                                label="District"
                                options={DistrictOptions}
                            />
                        </div>
                        <div className="flex flex-col  gap-3">
                            <label className="text-neutral-600 text-base font-normal">
                                WLT Status
                            </label>

                            <div className="flex justify-center items-center space-x-4">
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        name="wltStatus"
                                        value="Yes"
                                        checked={wltStatus === 'Yes'}
                                        onChange={handleInputChange}
                                        className="text-primary-Main"
                                    />
                                    <span>Yes</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        name="wltStatus"
                                        value="No"
                                        checked={wltStatus === 'No'}
                                        onChange={handleInputChange}
                                        className="text-primary-Main"
                                    />
                                    <span>No</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <p className="font-medium text-base flex gap-1">
                        <span className="text-neutral-600">Asset Name:</span>
                        <span className="text-primary-600 text-base font-bold">
                            {assetName}
                        </span>
                    </p>
                    <p className="font-medium text-base flex gap-1">
                        <span className="text-neutral-600">
                            Sub Asset Name:
                        </span>
                        <span className="text-primary-600 text-base font-bold">
                            {subAssetName}
                        </span>
                    </p>
                    <div className="flex justify-between mt-4">
                        <div className="flex flex-col">
                            <label className="text-neutral-400 text-base font-normal">
                                Business Plan
                            </label>
                            <span className="text-neutral-700 font-semibold text-base">
                                {businessPlan}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-neutral-400 text-base font-normal">
                                City
                            </label>
                            <span className="text-neutral-700 font-semibold text-base">
                                {city}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-neutral-400 text-base font-normal">
                                District
                            </label>
                            <span className="text-neutral-700 font-semibold text-base">
                                {district}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-neutral-400 text-base font-normal">
                                WLT Status
                            </label>
                            <span className="text-neutral-700 font-semibold text-base">
                                {wltStatus === 'Yes' ? (
                                    <>
                                        <span className="flex items-center text-success">
                                            <img
                                                src={tick}
                                                alt="tick"
                                                className="mr-2"
                                            />
                                            {wltStatus}
                                        </span>
                                    </>
                                ) : (
                                    <span>{wltStatus}</span>
                                )}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-neutral-400 text-base font-normal">
                                Area
                            </label>
                            <span className="text-neutral-700 font-semibold text-base">
                                {area}
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AssetDetails
