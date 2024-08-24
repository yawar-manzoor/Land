import { useCallback, useState } from 'react'
import AssetCard from '../components/AssetCard'
import CloseIcon from '../../src/assets/AssetCardIcons/close-circle.svg'
import { useLocation } from 'react-router-dom'
import useFetchData from '../lib/FetchData'
import { baseURL } from '../lib/global'

const Analytics = () => {
    const location = useLocation()
    const { assetId } = location.state || {}
    console.log('🚀 ~ Analytics ~ assetId:', assetId)
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedFilters, setSelectedFilters] = useState({
        asset: '',
        city: null,
        district: '',
        owner: '',
        wltStatus: '',
        landUse: '',
        businessPlan: '',
        sortBy: '',
    })
    const [dropdownStates, setDropdownStates] = useState({
        asset: false,
        city: false,
        district: false,
        owner: false,
        wltStatus: false,
        landUse: false,
        businessPlan: false,
        sortBy: false,
    })

    const {
        data: assetsData,
        isError,
        isLoading,
    } = useFetchData(`${baseURL}Land/GetLandsByAssetId?assetId=${assetId}`)
    const { data: assets } = useFetchData(`${baseURL}Asset/GetAssets`)
    const { data: cities } = useFetchData(`${baseURL}Asset/GetAllCities`)
    const { data: districts } = useFetchData(
        selectedFilters.city
            ? `${baseURL}Asset/GetDistrictsByCityId?cityId=${selectedFilters.city?.id}`
            : null
    )

    const handleSelect = (type, value) => {
        setSelectedFilters((prevFilters) => ({ ...prevFilters, [type]: value }))
        setDropdownStates((prevStates) => ({ ...prevStates, [type]: false }))
    }

    const toggleDropdown = (type) => {
        setDropdownStates((prevStates) => ({
            ...prevStates,
            [type]: !prevStates[type],
        }))
    }

    const clearAllFilters = () => {
        setSelectedFilters({
            asset: '',
            city: null,
            district: '',
            owner: '',
            wltStatus: '',
            landUse: '',
            businessPlan: '',
            sortBy: '',
        })
    }

    return (
        <>
            <h1 className="text-primary-Main font-messiri font-bold text-4xl mt-4 mb-7 mx-12 2xl:mx-24">
                AWJ Land Bank Hub
            </h1>
            <div className="bg-white mx-12 2xl:mx-24 mb-8 rounded-3xl border py-8">
                <div className="grid 2xl:grid-cols-9 grid-cols-5 gap-2 items-center px-4 pb-2">
                    <input
                        type="text"
                        className="border border-primary-200 py-2 rounded-lg px-2"
                        placeholder="Search By Keyword.."
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />

                    {/* Asset Dropdown */}
                    <div className="relative">
                        <button
                            className="bg-white border border-primary-200 py-2 px-2 rounded-md w-full text-left flex justify-between items-center"
                            onClick={() => toggleDropdown('asset')}
                        >
                            <span className="text-primary-Main">
                                {selectedFilters.asset || 'Asset'}
                            </span>
                            <svg
                                className={`w-4 h-4 text-primary-Main transform transition-transform duration-200 ${
                                    dropdownStates.asset ? 'rotate-180' : ''
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        {dropdownStates.asset && (
                            <div
                                className={`absolute left-0 right-0 mt-1 global-scroll bg-white border border-primary-200 rounded shadow-lg z-10 ${
                                    assets?.data.length > 5
                                        ? 'h-52'
                                        : `h-${assets?.data.length * 12}`
                                } overflow-y-auto`}
                            >
                                {assets?.data.length > 0 ? (
                                    <ul>
                                        {assets?.data.map((asset, index) => (
                                            <li
                                                key={index}
                                                className="p-2 hover:bg-gray-200 cursor-pointer"
                                                onClick={() =>
                                                    handleSelect(
                                                        'asset',
                                                        asset.assetName
                                                    )
                                                }
                                            >
                                                {asset.assetName}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <div className="p-2 text-center text-neutral-50">
                                        No assets found
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* City Dropdown */}
                    <div className="relative">
                        <button
                            className="bg-white border border-primary-200 py-2 px-2 rounded-md w-full text-left flex justify-between items-center"
                            onClick={() => toggleDropdown('city')}
                        >
                            <span className="text-primary-Main">
                                {selectedFilters.city?.cityName || 'City'}
                            </span>
                            <svg
                                className={`w-4 h-4 text-primary-Main transform transition-transform duration-200 ${
                                    dropdownStates.city ? 'rotate-180' : ''
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        {dropdownStates.city && (
                            <div
                                className={`absolute left-0 right-0 mt-1 global-scroll bg-white border border-primary-200 rounded shadow-lg z-10 ${
                                    cities?.data?.length > 5
                                        ? 'h-52'
                                        : `h-${cities?.data?.length * 12}`
                                } overflow-y-auto`}
                            >
                                {cities?.data.length > 0 ? (
                                    <ul>
                                        {cities?.data.map((city, index) => (
                                            <li
                                                key={index}
                                                className="p-2 hover:bg-gray-200 cursor-pointer"
                                                onClick={() =>
                                                    handleSelect('city', city)
                                                }
                                            >
                                                {city.cityName}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <div className="p-2 text-center text-neutral-50">
                                        No cities found
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* District Dropdown */}
                    <div className="relative">
                        <button
                            className="bg-white border border-primary-200 py-2 px-2 rounded-md w-full text-left flex justify-between items-center"
                            onClick={() => toggleDropdown('district')}
                        >
                            <span className="text-primary-Main">
                                {console.log(selectedFilters.districtName)}
                                {selectedFilters?.district || 'District'}
                            </span>
                            <svg
                                className={`w-4 h-4 text-primary-Main transform transition-transform duration-200 ${
                                    dropdownStates.district ? 'rotate-180' : ''
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        {dropdownStates.district && (
                            <div
                                className={`absolute left-0 right-0 mt-1 overflow-y-auto global-scroll bg-white border border-primary-200 rounded shadow-lg z-10 ${
                                    districts?.data.length > 5
                                        ? 'h-52'
                                        : `h-${districts?.data.length * 12}`
                                }`}
                            >
                                {' '}
                                <ul>
                                    {districts?.data.length > 0 ? (
                                        districts?.data.map(
                                            (district, index) => (
                                                <li
                                                    key={index}
                                                    className="p-2 hover:bg-gray-200 cursor-pointer"
                                                    onClick={() =>
                                                        handleSelect(
                                                            'district',
                                                            district.districtName
                                                        )
                                                    }
                                                >
                                                    {district.districtName}
                                                </li>
                                            )
                                        )
                                    ) : (
                                        <li className="text-center text-neutral-50 p-2">
                                            No districts found.
                                        </li>
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Owner Dropdown */}
                    <div className="relative">
                        <button
                            className="bg-white border border-primary-200 py-2 px-2 rounded-md w-full text-left flex justify-between items-center"
                            onClick={() => toggleDropdown('owner')}
                        >
                            <span className="text-primary-Main">
                                {selectedFilters.owner || 'Owner'}
                            </span>
                            <svg
                                className={`w-4 h-4 text-primary-Main transform transition-transform duration-200 ${
                                    dropdownStates.owner ? 'rotate-180' : ''
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        {dropdownStates.owner && (
                            <div className="absolute left-0 right-0 mt-1 global-scroll h-52 overflow-y-auto bg-white border border-primary-200 rounded shadow-lg z-10">
                                <ul>
                                    {['Owner 1', 'Owner 2'].map(
                                        (owner, index) => (
                                            <li
                                                key={index}
                                                className="p-2 hover:bg-gray-200 cursor-pointer"
                                                onClick={() =>
                                                    handleSelect('owner', owner)
                                                }
                                            >
                                                {owner}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* WLT Status Dropdown */}
                    <div className="relative">
                        <button
                            className="bg-white border border-primary-200 py-2 px-2 rounded-md w-full text-left flex justify-between items-center"
                            onClick={() => toggleDropdown('wltStatus')}
                        >
                            <span className="text-primary-Main">
                                {selectedFilters.wltStatus || 'WLT Status'}
                            </span>
                            <svg
                                className={`w-4 h-4 text-primary-Main transform transition-transform duration-200 ${
                                    dropdownStates.wltStatus ? 'rotate-180' : ''
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        {dropdownStates.wltStatus && (
                            <div className="absolute left-0 right-0 mt-1 h-52 overflow-y-auto bg-white border border-primary-200 rounded shadow-lg z-10">
                                <ul>
                                    {['Active', 'Inactive'].map(
                                        (status, index) => (
                                            <li
                                                key={index}
                                                className="p-2 hover:bg-gray-200 cursor-pointer"
                                                onClick={() =>
                                                    handleSelect(
                                                        'wltStatus',
                                                        status
                                                    )
                                                }
                                            >
                                                {status}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Land Use Dropdown */}
                    <div className="relative">
                        <button
                            className="bg-white border border-primary-200 py-2 px-2 rounded-md w-full text-left flex justify-between items-center"
                            onClick={() => toggleDropdown('landUse')}
                        >
                            <span className="text-primary-Main">
                                {selectedFilters.landUse || 'Land Use'}
                            </span>
                            <svg
                                className={`w-4 h-4 text-primary-Main transform transition-transform duration-200 ${
                                    dropdownStates.landUse ? 'rotate-180' : ''
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        {dropdownStates.landUse && (
                            <div className="absolute left-0 right-0 mt-1 global-scroll h-52 overflow-y-auto bg-white border border-primary-200 rounded shadow-lg z-10">
                                <ul>
                                    {['Commercial', 'Residential'].map(
                                        (use, index) => (
                                            <li
                                                key={index}
                                                className="p-2 hover:bg-gray-200 cursor-pointer"
                                                onClick={() =>
                                                    handleSelect('landUse', use)
                                                }
                                            >
                                                {use}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Business Plan Dropdown */}
                    <div className="relative">
                        <button
                            className="bg-white border border-primary-200 py-2 px-2 rounded-md w-full text-left flex justify-between items-center"
                            onClick={() => toggleDropdown('businessPlan')}
                        >
                            <span className="text-primary-Main">
                                {selectedFilters.businessPlan ||
                                    'Business Plan'}
                            </span>
                            <svg
                                className={`w-4 h-4 text-primary-Main transform transition-transform duration-200 ${
                                    dropdownStates.businessPlan
                                        ? 'rotate-180'
                                        : ''
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        {dropdownStates.businessPlan && (
                            <div className="absolute left-0 right-0 mt-1 h-52 overflow-y-auto global-scroll bg-white border border-primary-200 rounded shadow-lg z-10">
                                <ul>
                                    {['Plan A', 'Plan B'].map((plan, index) => (
                                        <li
                                            key={index}
                                            className="p-2 hover:bg-gray-200 cursor-pointer"
                                            onClick={() =>
                                                handleSelect(
                                                    'businessPlan',
                                                    plan
                                                )
                                            }
                                        >
                                            {plan}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Sort By Dropdown */}
                    <div className="relative">
                        <button
                            className="bg-white border border-primary-200 py-2 px-2 rounded-md w-full text-left flex justify-between items-center"
                            onClick={() => toggleDropdown('sortBy')}
                        >
                            <span className="text-primary-Main">
                                {selectedFilters.sortBy || 'Sort By'}
                            </span>
                            <svg
                                className={`w-4 h-4 text-primary-Main transform transition-transform duration-200 ${
                                    dropdownStates.sortBy ? 'rotate-180' : ''
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        {dropdownStates.sortBy && (
                            <div className="absolute left-0 right-0 mt-1 h-52 global-scroll overflow-y-auto bg-white border border-primary-200 rounded shadow-lg z-10">
                                <ul>
                                    {['Price', 'Area'].map((sort, index) => (
                                        <li
                                            key={index}
                                            className="p-2 hover:bg-gray-200 cursor-pointer"
                                            onClick={() =>
                                                handleSelect('sortBy', sort)
                                            }
                                        >
                                            {sort}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                {/*  selected filters */}
                <div
                    className={`flex flex-wrap   ${
                        Object.values(selectedFilters).some((value) => value)
                            ? 'py-4 border-t  my-4'
                            : ''
                    } `}
                >
                    {Object.entries(selectedFilters)
                        .filter(([key, value]) => value)
                        .map(([key, value]) => (
                            <div
                                key={key}
                                className="flex items-center bg-primary-100  rounded-2xl  mx-4 px-6 py-2"
                            >
                                <span className="mr-2 font-semibold text-primary-Main">
                                    <p className="font-normal uppercase">
                                        {key.replace(/([A-Z])/g, ' $1').trim()}
                                    </p>
                                    {value?.cityName || value}
                                </span>
                                <button onClick={() => handleSelect(key, '')}>
                                    <img src={CloseIcon} alt="close" />
                                </button>
                            </div>
                        ))}
                    {Object.values(selectedFilters).some((value) => value) && (
                        <button
                            onClick={clearAllFilters}
                            className="bg-primary-Main text-white px-10 py-2 rounded-xl"
                        >
                            Clear All
                        </button>
                    )}
                </div>
            </div>

            <div className="mx-12 2xl:mx-24">
                {isLoading ? (
                    <p>Loading...</p>
                ) : isError ? (
                    <p className="text-center pt-12 text-neutral-50">
                        No Data Found!
                    </p>
                ) : (
                    <div className="grid lg:grid-cols-3 my-12 md:grid-cols-2 gap-5">
                        <AssetCard assetInfo={assetsData?.data} />
                    </div>
                )}
            </div>
        </>
    )
}

export default Analytics
