import paid from '../../../assets/ApprovedLandBank.svg'
import ok from '../../../assets/AssetCardIcons/tick-circle.svg'
import minus from '../../../assets/AssetCardIcons/minus-circle.svg'
import left from '../../../assets/AssetCardIcons/left-btn.svg'
import right from '../../../assets/AssetCardIcons/right-btn.svg'
import { useState } from 'react'

const pricingData = [
    { label: 'Area', value: '98,562 MSQ' },
    { label: 'Latest Value', value: '725,416,320 SAR' },
    { label: 'Valuation Price Per SQM YTD', value: '7,360 SAR' },
    { label: 'Book Value', value: '70,570,392 SAR' },
    { label: 'Cost Price Per MSQ In 2015', value: '716 SAR' },
]

export default function LandFinance() {
    const years = [2022, 2023, 2024]

    const data2022 = {
        phase: 9,
        tdNumber: '985236548',
        amount: '563225 SAR',
        invoiceNumber: '9852634',
        dueDate: '14-4-2024',
        paymentDeadline: '14-4-2024',
        notificationDate: '14-4-2024',
        paymentStatusLabel: '6 Days For Next Payment',
        paymentStatus: true,
        objectionDeadline: '14-4-2024',
        objectionStatus: true,
        objectionDescription: 'In the context of various processes...',
    }

    const data2023 = {
        phase: 1,
        tdNumber: '985236548',
        amount: '5635 SAR',
        invoiceNumber: '9852634',
        dueDate: '14-4-2024',
        paymentDeadline: '14-4-2024',
        notificationDate: '14-4-2024',
        paymentStatusLabel: '6 Days For Next Payment',
        paymentStatus: false,
        objectionDeadline: '14-4-2024',
        objectionStatus: true,
        objectionDescription: 'In the context of various processes...',
    }

    const data2024 = {
        phase: 2,
        tdNumber: '123456789',
        amount: '9999 SAR',
        invoiceNumber: '1234567',
        dueDate: '20-5-2024',
        paymentDeadline: '20-5-2024',
        notificationDate: '20-5-2024',
        paymentStatusLabel: '10 Days For Next Payment',
        paymentStatus: true,
        objectionDeadline: '20-5-2024',
        objectionStatus: false,
        objectionDescription:
            'Description for 2024 Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus magnam fuga dolore officiis aliquam cumque libero eveniet nemo! Asperiores fugit debitis accusantium, error ad suscipit dolores aliquid et impe',
    }

    const [selectedYear, setSelectedYear] = useState(2024)
    const [financeData, setfinanceData] = useState(data2024)
    const [selectedYearIndex, setSelectedYearIndex] = useState(2)

    // Function to handle year change
    const handleYearChange = (year) => {
        setSelectedYear(year)
        if (year === 2023) {
            setfinanceData(data2023)
        } else if (year === 2024) {
            setfinanceData(data2024)
        } else if (year === 2022) {
            setfinanceData(data2022)
        }
    }

    const handlePrevYear = () => {
        setSelectedYearIndex((prevIndex) => {
            const newIndex = prevIndex > 0 ? prevIndex - 1 : years.length - 1
            const newYear = years[newIndex]
            setSelectedYear(newYear)
            handleYearChange(newYear)
            return newIndex
        })
    }

    const handleNextYear = () => {
        setSelectedYearIndex((prevIndex) => {
            const newIndex = prevIndex < years.length - 1 ? prevIndex + 1 : 0
            const newYear = years[newIndex]
            setSelectedYear(newYear)
            handleYearChange(newYear)
            return newIndex
        })
    }

    const cardItems = [
        { label: 'TD Number', value: financeData.tdNumber },
        { label: 'Amount', value: financeData.amount, color: 'text-secondary' },
        { label: 'Invoice Number', value: financeData.invoiceNumber },
        { label: 'Due Date', value: financeData.dueDate },
        { label: 'Payment Deadline', value: financeData.paymentDeadline },
        { label: 'Date of Notification', value: financeData.notificationDate },
    ]

    const cardArr = [
        {
            label: 'Implication Detail',
            value: financeData.objectionStatus,
            icon: financeData.objectionStatus,
        },
        {
            label: 'Zakat Value',
            value: financeData.amount,
            color: 'text-secondary',
        },
        {
            label: 'Invoice Number',
            value: financeData.objectionStatus,
            icon: financeData.objectionStatus,
        },
    ]

    return (
        <>
            <ChartPricingSummary />

            <TaxDetails
                selectedYear={selectedYear}
                years={years}
                financeData={financeData}
                handlePrevYear={handlePrevYear}
                handleNextYear={handleNextYear}
                handleYearChange={handleYearChange}
                cardItems={cardItems}
                paidIcon={paid}
                minusIcon={minus}
            />

            <ZakatDetails cardArr={cardArr} />
        </>
    )
}

function ChartPricingSummary() {
    return (
        <div className="grid grid-cols-[2.5fr,2fr] gap-1 ">
            <div className="text-primary-Main">
                <h1 className="font-semibold text-2xl">Land Price Chart</h1>
                <p className="text-base font-normal">
                    Collecting data from January 1st Each Year
                </p>
                <div>Chart</div>
            </div>
            <div>
                <h1 className="text-primary-Main font-semibold text-2xl py-2">
                    Pricing Summary
                </h1>
                <div className="bg-gray-50 rounded-2xl">
                    {pricingData &&
                        pricingData?.map((item, index) => (
                            <div
                                key={index}
                                className={`border-b border-gray-200 py-4 flex justify-between ${
                                    index % 2 === 0
                                        ? 'bg-[#DFD9CA]/25'
                                        : 'bg-[#DFD9CA]/10'
                                } ${index === 0 ? 'rounded-t-2xl' : ''} ${
                                    index === pricingData.length - 1
                                        ? 'rounded-b-2xl'
                                        : ''
                                }`}
                            >
                                <span className="text-neutral-600 text-lg px-6">
                                    {item.label}
                                </span>
                                <span className="text-secondary px-6 font-bold">
                                    {item.value}
                                </span>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

function TaxDetails({
    selectedYear,
    years,
    financeData,
    handlePrevYear,
    handleNextYear,
    handleYearChange,
    cardItems,
    paidIcon,
    minusIcon,
}) {
    return (
        <div>
            <div className="my-5 flex justify-between">
                <h1 className="text-primary-Main font-semibold text-2xl ">
                    WLT Tax Details
                </h1>
                <div>
                    <button onClick={handlePrevYear}>
                        <img src={left} alt="" />
                    </button>
                    <button onClick={handleNextYear}>
                        <img src={right} alt="" />
                    </button>
                </div>
            </div>
            <div>
                {years &&
                    years.map((year) => (
                        <button
                            key={year}
                            onClick={() => handleYearChange(year)}
                            className={`border-gray-200 border px-3 py-2 text-base rounded-lg mr-1 ${
                                selectedYear === year
                                    ? 'bg-primary-Main text-[#E4E4E4]'
                                    : 'bg-[#E4E4E4] text-[#908B8B]'
                            }`}
                        >
                            {year}
                        </button>
                    ))}
            </div>
            <div className="border rounded-lg mt-2 shadow-lg bg-primary-100 py-4 ">
                <span className="text-sm font-normal px-4 text-primaryYellow-500 border border-primaryYellow-500 absolute lg:right-36 rounded-xl">
                    {financeData.paymentStatusLabel}
                </span>
                <div className="flex items-end justify-between border-b p-6 pb-7">
                    <div className="flex items-center space-x-2">
                        <div className="bg-primary-300 text-center py-2 px-4 rounded-md text-3xl font-semibold text-primary-Main">
                            {financeData.phase}
                            <div className="text-sm font-medium text-primary-600">
                                Phase
                            </div>
                        </div>
                    </div>

                    {cardItems &&
                        cardItems.map((item, index) => (
                            <div key={index}>
                                <h4 className="text-base font-normal text-gray-500">
                                    {item.label}
                                </h4>
                                <p
                                    className={`text-lg font-semibold ${
                                        item.color || 'text-neutral-700'
                                    }`}
                                >
                                    {item.value}
                                </p>
                            </div>
                        ))}

                    <div>
                        <h4 className="text-base font-normal text-gray-500">
                            Payment Status
                        </h4>
                        <p
                            className={`text-lg font-bold flex items-center ${
                                financeData.paymentStatus
                                    ? 'text-success'
                                    : 'text-primaryYellow-500'
                            }`}
                        >
                            <span className="mr-2">
                                {financeData.paymentStatus ? (
                                    <img src={paidIcon} alt="approved" />
                                ) : (
                                    <img src={minusIcon} alt="rejected" />
                                )}
                            </span>
                            {financeData.paymentStatus ? 'Paid' : 'Not Paid'}
                        </p>
                    </div>
                </div>
                <div className="border-t p-4 px-6">
                    <div className="flex">
                        <div>
                            <h4 className="text-base font-normal leading-6 mb-1 text-gray-500">
                                Objection Deadline
                            </h4>
                            <p className="text-sm font-neutral-700 font-semibold">
                                {financeData.objectionDeadline}
                            </p>
                        </div>
                        <div className="ml-5">
                            <div className="text-base font-normal leading-6 mb-1 text-gray-500">
                                Objection Status
                            </div>
                            <p
                                className={`text-sm font-bold flex items-center ${
                                    financeData.objectionStatus
                                        ? 'text-success'
                                        : 'text-primaryYellow-500'
                                }`}
                            >
                                <span className="mr-2">
                                    {financeData.objectionStatus ? (
                                        <img src={paidIcon} alt="approved" />
                                    ) : (
                                        <img src={minusIcon} alt="rejected" />
                                    )}
                                </span>
                                {financeData.objectionStatus
                                    ? 'Accepted'
                                    : 'Rejected'}
                            </p>
                        </div>
                    </div>
                    <div className="mt-2">
                        <h4 className="text-base font-normal my-2 text-gray-500">
                            Objection Description
                        </h4>
                        <p className="text-base font-semibold text-neutral-700">
                            {financeData.objectionDescription}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
function ZakatDetails({ cardArr }) {
    // Define custom messages for each label
    const getCustomMessage = (label, value) => {
        switch (label) {
            case 'Implication Detail':
                return value ? 'Yes' : 'No'
            case 'Zakat Value':
                return value
            case 'Invoice Number':
                return value ? 'Done' : 'Not Done'
            default:
                return value
        }
    }

    return (
        <div className="my-10">
            <h1 className="text-primary-Main font-semibold text-2xl">
                ZAKAT Details
            </h1>
            <div className="border rounded-lg mt-3 shadow-lg bg-primary-100 flex items-end border-b p-4 py-6">
                {cardArr &&
                    cardArr.map((item, index) => (
                        <div key={index} className="mr-20 flex items-center">
                            <div>
                                <h4 className="text-base font-normal text-gray-500 leading-8">
                                    {item.label}
                                </h4>
                                <p
                                    className={`text-lg font-semibold flex ${
                                        item.label == 'Zakat Value'
                                            ? 'text-secondary'
                                            : item.value
                                            ? 'text-success'
                                            : 'text-primaryYellow-500'
                                    }`}
                                >
                                    {/* Conditionally render the SVG based on the label */}
                                    {item.label !== 'Zakat Value' && (
                                        <span className="mr-2">
                                            {item.icon ? (
                                                <img src={ok} alt="approved" />
                                            ) : (
                                                <img
                                                    src={minus}
                                                    alt="not approved"
                                                />
                                            )}
                                        </span>
                                    )}
                                    {/* Display custom message based on the label */}
                                    {getCustomMessage(item.label, item.value)}
                                </p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}
