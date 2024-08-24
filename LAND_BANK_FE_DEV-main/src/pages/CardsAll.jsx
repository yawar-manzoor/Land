import { useEffect, useRef, useState } from 'react'
import chevron from '../assets/chevron-down.svg'
import useFetchData from '../lib/FetchData'
import { baseURL } from '../lib/global'

const CardsAll = () => {
    // -----SORT------
    const [isSortOpen, setIsSortOpen] = useState(false)
    const [selectedSort, setSelectedSort] = useState('latest')
    // ---ASSET----
    const [selectedAsset, setSelectedAsset] = useState('asset1')
    const [isAssetOpen, setIsAssetOpen] = useState(false)
    // ---CITY----
    const [selectedCity, setSelectedCity] = useState()
    const [isCityOpen, setIsCityOpen] = useState(false)

    // ---DISTRICT----
    const [selectedDistrict, setSelectedDistrict] = useState('district1')
    const [isDistrictOpen, setIsDistrictOpen] = useState(false)

    const sortRef = useRef(null)
    const assetRef = useRef(null)
    const cityRef = useRef(null)
    const districtRef = useRef(null)

    const {
        data: asset,
        // isLoading,
        // isError,
    } = useFetchData(`${baseURL}Asset/GetAssets`)
    const {
        data: city,
        // isLoading,
        // isError,
    } = useFetchData(`${baseURL}Asset/GetAllCities`)
    const {
        data: district,
        // isLoading,
        // isError,
    } = useFetchData(
        `${baseURL}Asset/GetDistrictsByCityId?cityId=${selectedCity?.id}`
    )
    console.log(city)
    console.log(district)

    const sorts = [
        { value: 'latest', label: 'Latest Update' },
        { value: 'oldest', label: 'Oldest Update' },
    ]

    // const assets = [
    //     { value: 'asset1', label: 'Asset' },
    //     { value: 'asset2', label: 'Asset 2' },
    //     { value: 'asset3', label: 'Asset 3' },
    // ]
    // const city = [
    //     { value: 'city1', label: 'City' },
    //     { value: 'city2', label: 'City 2' },
    //     { value: 'city3', label: 'City 3' },
    // ]
    // const district = [
    //     { value: 'district1', label: 'District' },
    //     { value: 'district', label: 'District 2' },
    //     { value: 'district', label: 'District 3' },
    // ]

    const handleClickOutside = (event) => {
        if (
            !sortRef.current?.contains(event.target) &&
            !assetRef.current?.contains(event.target) &&
            !cityRef.current?.contains(event.target) &&
            !districtRef.current?.contains(event.target)
        ) {
            setIsAssetOpen(false)
            setIsSortOpen(false)
            setIsCityOpen(false)
            setIsDistrictOpen(false)
        }
    }

    useEffect(() => {
        // Add event listener on document mount
        document.addEventListener('onclick', handleClickOutside)

        // Cleanup function on component unmount
        return () => document.removeEventListener('onclick', handleClickOutside)
    }, [])
    const handleSortClick = (sortValue) => {
        setSelectedSort(sortValue)
        setIsSortOpen(false)
    }

    const handleAssetClick = (value) => {
        console.log(value)

        setSelectedAsset(value)
        setIsAssetOpen(!isAssetOpen)
    }
    const handleCityClick = (value) => {
        setSelectedCity(value)
        setIsCityOpen(!isCityOpen)
        console.log(value)
    }
    const handleDistrictClick = (value) => {
        setSelectedDistrict(value)
        setIsDistrictOpen(!isDistrictOpen)
    }

    return (
        <>
            <section className="section1 h-screen px-12 2xl:px-24">
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold font-messiri text-primary-Main my-4">
                        AWJ Land Bank Hub
                    </h1>
                    {/* ---SORT--- */}
                    <div className="relative max-w-xs flex items-center">
                        <h1 className="text-sm text-primary-Main font-bold mr-2">
                            Sort by:
                        </h1>
                        <button
                            onClick={() => setIsSortOpen(!isSortOpen)}
                            className="flex items-center justify-between p-3 rounded-lg border border-primary-Main bg-white text-sm text-left"
                        >
                            {sorts.find((sort) => sort.value === selectedSort)
                                ?.label || 'Sort by'}
                            <img
                                src={chevron}
                                alt="Chevron Down"
                                className={`transform transition duration-200 ml-2 ease-in-out ${
                                    isSortOpen ? 'rotate-180' : ''
                                }`}
                            />
                        </button>
                        {isSortOpen && (
                            <ul
                                className="absolute top-[72%] right-[3%] bg-white border border-primary-Main rounded-lg mt-2 z-10"
                                ref={sortRef}
                            >
                                {sorts.map((sort) => (
                                    <li
                                        key={sort.value}
                                        onClick={() =>
                                            handleSortClick(sort.value)
                                        }
                                        className="p-2 hover:bg-gray-100 cursor-pointer"
                                    >
                                        {sort.label}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                <div className="flex justify-between p-8 bg-white rounded-2xl space-x-4 mt-10">
                    <input
                        type="text"
                        name="search"
                        id="search-keywords"
                        placeholder="Search Keywords"
                        className="p-3 rounded-lg border border-primary-Main text-primary-Main bg-white text-sm w-full"
                    />
                    {/* --------------------- ASSET ------------------------------ */}
                    <div className="relative w-full max-w-xs">
                        <button
                            onClick={() => setIsAssetOpen(!isAssetOpen)}
                            className="w-full flex items-center justify-between p-3 text-primary-Main rounded-lg border border-primary-Main bg-white text-sm text-left"
                        >
                            {/* {asset.data.find(
                                (asset) => asset.value === selectedAsset
                            )?.label || 'Select an option'} */}
                            {selectedAsset?.assetName || 'Asset'}
                            <img
                                src={chevron}
                                alt="Chevron Down"
                                className={`transform transition duration-200 ease-in-out ${
                                    isAssetOpen ? 'rotate-180' : ''
                                }`}
                            />
                        </button>
                        {isAssetOpen && (
                            <ul
                                className="absolute w-full bg-white border border-primary-Main rounded-lg mt-2 h-52 overflow-y-auto z-10"
                                ref={assetRef}
                            >
                                {asset?.data.map((asset) => (
                                    <li
                                        key={asset.id}
                                        onClick={() => handleAssetClick(asset)}
                                        className="p-2 hover:bg-gray-100 cursor-pointer"
                                    >
                                        {asset.assetName}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    {/* --------------------- CITY ------------------------------ */}
                    <div className="relative w-full max-w-xs">
                        <button
                            onClick={() => setIsCityOpen(!isCityOpen)}
                            className="w-full flex items-center justify-between p-3 rounded-lg text-primary-Main border border-primary-Main bg-white text-sm text-left"
                        >
                            {/* {city.find((city) => city.value === selectedCity)
                                ?.label || 'Select an option'} */}
                            {selectedCity?.cityName || 'City'}

                            <img
                                src={chevron}
                                alt="Chevron Down"
                                className={`transform transition duration-200 ease-in-out ${
                                    isCityOpen ? 'rotate-180' : ''
                                }`}
                            />
                        </button>
                        {isCityOpen && (
                            <ul
                                className="absolute w-full bg-white border border-primary-Main h-52 overflow-y-auto rounded-lg mt-2 z-10"
                                ref={cityRef}
                            >
                                {city?.data.map((city) => (
                                    <li
                                        key={city.id}
                                        onClick={() => handleCityClick(city)}
                                        className="p-2 hover:bg-gray-100 cursor-pointer"
                                    >
                                        {city.cityName}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    {/* --------------------- DISTRICT ------------------------------ */}
                    <div className="relative w-full max-w-xs">
                        <button
                            onClick={() => setIsDistrictOpen(!isDistrictOpen)}
                            className="w-full flex items-center justify-between p-3 rounded-lg border text-primary-Main border-primary-Main bg-white text-sm text-left"
                        >
                            {/* {district.find(
                                (district) =>
                                    district.value === selectedDistrict
                            )?.label || 'Select an option'} */}
                            {selectedDistrict?.districtName || 'District'}

                            <img
                                src={chevron}
                                alt="Chevron Down"
                                className={`transform transition duration-200 ease-in-out ${
                                    isDistrictOpen ? 'rotate-180' : ''
                                }`}
                            />
                        </button>
                        {isDistrictOpen && (
                            <ul
                                className={`absolute w-full bg-white border border-primary-Main rounded-lg overflow-y-auto mt-2 z-10 ${
                                    district?.data.length > 0 ? 'h-52' : 'h-8'
                                }`}
                                ref={districtRef}
                            >
                                {district?.data.length > 0 ? (
                                    district.data.map((district) => (
                                        <li
                                            key={district.id}
                                            onClick={() =>
                                                handleDistrictClick(district)
                                            }
                                            className="p-2 hover:bg-gray-100 cursor-pointer"
                                        >
                                            {district.districtName}
                                        </li>
                                    ))
                                ) : (
                                    <li className="text-center text-gray-500">
                                        No Data Found
                                    </li>
                                )}
                            </ul>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default CardsAll
