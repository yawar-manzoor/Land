import PropertyIcon from '../assets/AssetCardIcons/PropertyIcon.svg'
import PropertyIconOrange from '../assets/AssetCardIcons/PropertyIconOrange.svg'

import Property from '../assets/AssetCardIcons/Property.svg'
import PropertyType from '../assets/AssetCardIcons/PropertyType.svg'
import Building from '../assets/AssetCardIcons/Buildings.svg'
import Location from '../assets/AssetCardIcons/location.svg'
import AreaIcon from '../assets/AssetCardIcons/AreaSize.svg'
import { useNavigate } from 'react-router-dom'

const AssetCard = ({ assetInfo }) => {
    const navigate = useNavigate()
    const handleNavigate = (landId) => {
        console.log('🚀 ~ handleNavigate ~ landId:', landId)
        navigate(`/reports`, { state: { landId: landId } })
    }

    return (
        <>
            {assetInfo?.map((asset) => (
                <div
                    key={asset.landId}
                    className="flex flex-col bg-white shadow-card  hover:border-primary-200 hover:border rounded-2xl cursor-pointer py-6 space-y-4 transition-all duration-300"
                    onClick={() => handleNavigate(asset.landId)}
                >
                    <div className="flex justify-between px-5 items-start">
                        <div>
                            <p className="text-xl font-semibold mb-1 text-primary-Main">
                                {asset.landId}
                            </p>
                            <p className="text-base font-medium mb-1 text-primary-600">
                                Asset : {asset.assetName}
                            </p>
                            <p className="text-sm font-medium text-neutral-700">
                                Sub Asset : {asset.subAssetName}
                            </p>
                        </div>
                        <div className="flex flex-col items-end space-y-4">
                            <p className="bg-[#132D5E1A] text-secondary font-medium py-1 px-3 rounded">
                                {asset.landType}
                            </p>
                            <div className="inline-flex items-center gap-x-2">
                                <span
                                    className={`inline-block ${
                                        asset.landStatus == 'Developed'
                                            ? 'bg-success'
                                            : 'bg-primaryYellow-500'
                                    } w-2 h-2  rounded-full`}
                                ></span>
                                <p
                                    className={`${
                                        asset.landStatus === 'Developed'
                                            ? 'text-success'
                                            : ''
                                    } text-primaryYellow-500 font-medium py-1 `}
                                >
                                    {asset.landStatus}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`${
                            asset.landType === 'Developed'
                                ? 'bg-primaryGreen-200'
                                : 'bg-primaryYellow-100'
                        }  flex items-center space-x-3 py-5 px-5`}
                    >
                        <img
                            src={
                                asset.landType === 'Developed'
                                    ? PropertyIcon
                                    : PropertyIconOrange
                            }
                            loading="lazy"
                            alt=""
                        />
                        <div>
                            <span className="flex space-x-2 py-2">
                                <img src={Property} alt="" loading="lazy" />{' '}
                                <p className="font-semibold text-[18px] text-neutral-700">
                                    {asset.propertyHolder}
                                </p>
                            </span>
                            <span className="flex space-x-2">
                                <img src={PropertyType} alt="" loading="lazy" />{' '}
                                <p className="font-medium text-neutral-700 text-base">
                                    {asset.landUse}
                                </p>
                            </span>
                        </div>
                    </div>
                    <div className="px-5">
                        <p className="text-neutral-600">Valuation</p>
                        <p className="text-secondary font-semibold text-[18px]">
                            SAR {asset.valuation}
                        </p>
                    </div>
                    <div className="text-primary-Main grid grid-cols-2 gap-4 items-center text-sm px-4">
                        <span className="font-semibold inline-flex items-center gap-x-2 rounded-full bg-primary-100 min-w-44 ps-1 py-2">
                            <span className="rounded-full bg-primary-200 w-10 h-10 flex justify-center items-center">
                                <img src={Building} loading="lazy" />
                            </span>{' '}
                            {asset.landUse}
                        </span>
                        <span
                            className={`font-semibold ${
                                asset.wltStatus
                                    ? 'bg-[#2997641A] text-success '
                                    : 'bg-[#F768081A] text-warning'
                            } inline-flex items-center gap-x-2 rounded-full min-w-44 ps-1 py-2`}
                        >
                            <span
                                className={`rounded-full ${
                                    asset.wltStatus
                                        ? 'bg-[#2997641A]'
                                        : 'bg-[#fdd5ba]'
                                }  w-10 h-10 flex justify-center items-center`}
                            >
                                {/* <img src={TickCircle} loading="lazy" /> */}
                                <svg
                                    width="25"
                                    height="25"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12.3008 22.8229C17.8008 22.8229 22.3008 18.3229 22.3008 12.8229C22.3008 7.32288 17.8008 2.82288 12.3008 2.82288C6.80078 2.82288 2.30078 7.32288 2.30078 12.8229C2.30078 18.3229 6.80078 22.8229 12.3008 22.8229Z"
                                        stroke={`${
                                            asset.wltStatus
                                                ? '#299764'
                                                : '#F76808'
                                        }`}
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M8.05078 12.8229L10.8808 15.6529L16.5508 9.99288"
                                        stroke={`${
                                            asset.wltStatus
                                                ? '#299764'
                                                : '#F76808'
                                        }`}
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>{' '}
                            WLT {asset.wltStatus ? 'Yes' : 'No'}
                        </span>
                        <span className="font-semibold inline-flex items-center gap-x-2 rounded-full bg-primary-100 min-w-44 ps-1 py-2">
                            <span className="rounded-full bg-primary-200 w-10 h-10 flex justify-center items-center">
                                {' '}
                                <img src={Location} loading="lazy" />{' '}
                            </span>{' '}
                            {asset.cityName}
                        </span>
                        <span className="font-semibold inline-flex items-center gap-x-2 rounded-full bg-primary-100 min-w-44 ps-1 py-2">
                            <span className="rounded-full bg-primary-200 w-10 h-10 flex justify-center items-center">
                                {' '}
                                <img src={AreaIcon} loading="lazy" />{' '}
                            </span>{' '}
                            {asset.landArea}
                        </span>
                    </div>
                </div>
            ))}
        </>
    )
}

export default AssetCard
