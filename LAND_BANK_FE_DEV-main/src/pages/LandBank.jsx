import Card from '../components/Card'
import CardReports from '../components/CardReports'
import Image from '../assets/image.svg'
import LandIcon from '../assets/Card Image/LandIcon.svg'
import M2 from '../assets/Card Image/ImageM2.svg'
import GPSIcon from '../assets/Card Image/GpsLogo.svg'
import GreenTick from '../assets/Card Image/TickCircle.svg'
import Button from '../components/ui/Button'
import Frame1 from '../assets/Analytics/frame1.svg'
import Frame2 from '../assets/Analytics/frame2.svg'
import Frame3 from '../assets/Analytics/frame3.svg'
import Art2 from '../assets/Analytics/section2art.svg'
import { Link } from 'react-router-dom'
import chevron from '../assets/chevron-down.svg'
import { useEffect, useRef, useState } from 'react'
import useFetchData from '../lib/FetchData'
import axios from 'axios'

const LandBank = () => {
    // -----SORT------
    const [isSortOpen, setIsSortOpen] = useState(false)
    const [selectedSort, setSelectedSort] = useState('latest')
    const sortRef = useRef(null)

    const sorts = [
        { value: 'latest', label: 'Latest Update' },
        { value: 'oldest', label: 'Oldest Update' },
    ]
    const { data, isLoading, isError } = useFetchData(
        'http://68.178.165.107:5001/api/Asset/GetAssets'
    )
    console.log(data)

    const cardsData = [
        {
            image: Image,
            title: 'Rabwa',
            sub: 'Riyadh-Rabwa-AA',
            icon: LandIcon,
            totalLands: 272,
            m2Img: M2,
            m2Data: '270,061.53 m2',
            location: '90ft',
            gpsIcon: GPSIcon,
        },
        {
            image: Image,
            title: 'Harmian',
            sub: 'Jeddah-Harmian',
            icon: LandIcon,
            totalLands: 299,
            m2Img: M2,
            m2Data: '274,060.53 m2',
            location: 'Rainawari',
            gpsIcon: GPSIcon,
        },
        {
            image: Image,
            title: 'Al Wessam Land',
            sub: 'Taif-Al Wessam Land-AA',
            icon: LandIcon,
            totalLands: 270,
            m2Img: M2,
            m2Data: '499,060.53 m2',
            location: 'Gojwara',
            gpsIcon: GPSIcon,
        },
        {
            image: Image,
            title: 'Al Wessam Land',
            sub: 'Taif-Al Wessam Land-AA',
            icon: LandIcon,
            totalLands: 270,
            m2Img: M2,
            m2Data: '499,060.53 m2',
            location: 'Nowhatta',
            gpsIcon: GPSIcon,
        },
        {
            image: Image,
            title: 'Al Wessam Land',
            sub: 'Taif-Al Wessam Land-AA',
            icon: LandIcon,
            totalLands: 270,
            m2Img: M2,
            m2Data: '499,060.53 m2',
            location: 'Gojwara',
            gpsIcon: GPSIcon,
        },
        {
            image: Image,
            title: 'Rabwa',
            sub: 'Riyadh-Rabwa-AA',
            icon: LandIcon,
            totalLands: 272,
            m2Img: M2,
            m2Data: '270,061.53 m2',
            location: '90ft',
            gpsIcon: GPSIcon,
        },
        {
            image: Image,
            title: 'Harmian',
            sub: 'Jeddah-Harmian',
            icon: LandIcon,
            totalLands: 299,
            m2Img: M2,
            m2Data: '274,060.53 m2',
            location: 'Rainawari',
            gpsIcon: GPSIcon,
        },
        {
            image: Image,
            title: 'Al Wessam Land',
            sub: 'Taif-Al Wessam Land-AA',
            icon: LandIcon,
            totalLands: 270,
            m2Img: M2,
            m2Data: '499,060.53 m2',
            location: 'Gojwara',
            gpsIcon: GPSIcon,
        },
        {
            image: Image,
            title: 'Harmian',
            sub: 'Jeddah-Harmian',
            icon: LandIcon,
            totalLands: 299,
            m2Img: M2,
            m2Data: '274,060.53 m2',
            location: 'Rainawari',
            gpsIcon: GPSIcon,
        },
        {
            image: Image,
            title: 'Al Wessam Land',
            sub: 'Taif-Al Wessam Land-AA',
            icon: LandIcon,
            totalLands: 270,
            m2Img: M2,
            m2Data: '499,060.53 m2',
            location: 'Gojwara',
            gpsIcon: GPSIcon,
        },
    ]
    // -------REPORTS CARD---------
    const cardsReportData = [
        {
            RType: 'Weekly Report',
            Date: '19th Week / 2024',
            Image: GreenTick,
            PublishedDate: ' 4/8/2024',
            DocumentType: 'PDF',
            FileSize: '12mb',
        },

        {
            RType: 'Monthly Report',
            Date: 'October / 2024',
            Image: GreenTick,
            PublishedDate: ' 4/8/2024',
            DocumentType: 'PDF',
            FileSize: '10mb',
        },
        {
            RType: 'Quaterly Report',
            Date: 'First 1/4',
            Image: GreenTick,
            PublishedDate: ' 4/8/2024',
            DocumentType: 'PDF',
            FileSize: '10mb',
        },
        {
            RType: 'Yearly Report',
            Date: '2024 Jan 01 - YTD ',
            Image: GreenTick,
            PublishedDate: ' 4/8/2024',
            DocumentType: 'PDF',
            FileSize: '12mb',
        },
        {
            RType: 'Monthly Report',
            Date: 'October / 2024',
            Image: GreenTick,
            PublishedDate: ' 4/8/2024',
            DocumentType: 'PDF',
            FileSize: '10mb',
        },
    ]
    const handleClickOutside = (event) => {
        // Check if the sort dropdown contains the clicked element
        const isSortDropdownOpen = sortRef.current?.contains(event.target)

        // Close the sort dropdown only if a click happens outside it
        if (!isSortDropdownOpen) {
            setIsSortOpen(false)
        }
    }
    const handleSortClick = (sortValue) => {
        setSelectedSort(sortValue)
        setIsSortOpen(false)
    }

    useEffect(() => {
        // Add event listener on document mount
        document.addEventListener('mousedown', handleClickOutside)

        // Cleanup function on component unmount
        return () =>
            document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <>
            <section className="section1 px-12 2xl:px-24">
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold font-messiri text-primary-Main my-4">
                        AWJ Land Bank Hub
                    </h1>
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

                {/* First set of cards */}
                <div
                    className="grid grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        2xl:grid-cols-5
        3xl:grid-cols-6
        gap-5 mt-4"
                >
                    {data?.data?.length > 0 ? (
                        <>
                            {data.data.slice(0, 8).map((asset, index) => (
                                <Card
                                    key={index}
                                    // image={card.image}
                                    assetId={asset.assetId}
                                    title={asset.assetName}
                                    sub={asset.subAssetName}
                                    icon={LandIcon}
                                    totalLands={asset.landCount}
                                    // m2={card.m2Img}
                                    m2Data={asset.totalArea}
                                    // location={card.location}
                                    // gpsIcon={card.gpsIcon}
                                />
                            ))}
                            {data.data.length > 8 && (
                                <div className="col-span-full text-center my-10">
                                    <Link to="/view-all">
                                        <Button
                                            variant="primary"
                                            size="medium"
                                            className="bg-primary-Main border rounded-lg font-bold text-white px-6 py-2"
                                        >
                                            View All
                                        </Button>
                                    </Link>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="col-span-full text-center p-20 text-gray-500">
                            NO DATA FOUND
                        </div>
                    )}
                </div>
            </section>

            <div className="relative">
                {/* Background Image */}
                <img
                    src={Art2}
                    alt="art-image"
                    className="absolute w-full h-full object-cover right-[25%]"
                />

                <section className="section2 px-12 2xl:px-24 py-6">
                    {/* Centered Heading and Paragraph */}
                    <div className="text-center p-4 rounded-lg">
                        <h1 className="font-bold text-4xl font-messiri text-primary-Main mb-4">
                            Land Bank Hub Analytics & Dashboard
                        </h1>
                        <p className="text-center text-sm text-neutral-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed sed feugiat diam. Quisque vitae
                            sollicitudin nisl. Suspendisse in sollicitudin
                            dolor. Fusce risus purus, viverra et dapibus sed,
                            ornare ut lacus. Pellentesque ut mauris id elit
                            luctus iaculis vitae ac ante. Quisque id velit in
                            odio pharetra elementum id ut est. Nulla fringilla
                            rhoncus sapien, vel fringilla lorem vulputate eu.
                            Pellentesque habitant morbi tristique senectus et
                            netus et malesuada fames ac turpis egestas.
                        </p>
                        <div className="grid grid-cols-3 grid-rows-4 gap-4 my-6">
                            <div className="col-span-3 rounded-xl row-span-4 dgradient p-8 z-10">
                                <div className="text-left">
                                    <h1 className="font-bold font-messiri text-2xl text-primary-Main">
                                        Our Stats
                                    </h1>
                                    <p className="text-primary-Main text-sm pt-3 max-w-96">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Sed sed feugiat diam.
                                        Quisque vitae sollicitudin nisl.
                                        Suspendisse in sollicitudin dolor. Fusce
                                        risus purus, viverra et dapibus sed,
                                        ornare ut lacus.
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-y-20 text-start py-8">
                                    <div className="flex flex-col items-start">
                                        <h1 className="font-bold text-5xl text-primary-500">
                                            7629
                                        </h1>
                                        <p className="text-primary-Main">
                                            Total Lands
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <h1 className="font-bold text-5xl text-primary-500">
                                            2400
                                        </h1>
                                        <p className="text-primary-Main">
                                            Transactable Land
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <h1 className="font-bold text-5xl text-primary-500">
                                            1300
                                        </h1>
                                        <p className="text-primary-Main">
                                            Non Transactable
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <h1 className="font-bold text-5xl text-primary-500">
                                            785
                                        </h1>
                                        <p className="text-primary-Main">
                                            WLT Lands
                                        </p>
                                    </div>
                                </div>

                                <div className="text-left mt-6">
                                    <Button
                                        variant="primary"
                                        size="medium"
                                        className="bg-primary-Main rounded-lg font-bold text-white px-6 py-3"
                                    >
                                        View More
                                    </Button>
                                </div>
                            </div>
                            <div className="col-span-2 row-span-2 col-start-4 rounded-xl dgradient2 z-10">
                                <img src={Frame1} alt="frame-1" />
                            </div>
                            <div className="row-span-2 col-start-4 row-start-3 rounded-xl dgradient2 z-10">
                                <img src={Frame2} alt="frame-2" />
                            </div>
                            <div className="row-span-2 col-start-5 row-start-3 rounded-xl dgradient2 z-10">
                                <img src={Frame3} alt="frame-3" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section className="bg-white px-12 2xl:px-24 py-6 ">
                <div className="flex justify-between my-8">
                    <h1 className="text-4xl font-bold font-messiri text-primary-Main text-center">
                        AWJ Land Bank Hub Reports
                    </h1>
                    <Button
                        variant="primary"
                        size="small"
                        className="bg-primary-Main border rounded-lg font-bold text-white px-4 py-2 text-sm"
                    >
                        More Reports
                    </Button>
                </div>
                {/* Second set of cards */}
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5"> */}
                <div
                    className="grid grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
                2xl:grid-cols-5
                3xl:grid-cols-6
                gap-5 mt-4"
                >
                    {cardsReportData.map((card, index) => (
                        <CardReports
                            key={index}
                            RType={card.RType}
                            Date={card.Date}
                            Image={card.Image}
                            PublishedDate={card.PublishedDate}
                            DocumentType={card.DocumentType}
                            FileSize={card.FileSize}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}

export default LandBank
