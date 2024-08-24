import Button from './ui/Button'
import SalesLogo from '../assets/SalesCard/SalesLogo.svg'

const SalesCard = () => {
    const salesDetails = [
        { label: 'Ref Number', value: 'REF-98624' },
        { label: 'Sales Method', value: 'Direct' },
        { label: 'Sales Representative', value: 'Fahad Al Rashid' },
        { label: 'Agent Name', value: 'Muhammed Adil' },
        {
            label: 'Sales Status',
            value: (
                <div className="flex gap-2">
                    <Button className="text-neutral-500 rounded-lg border border-neutral-500 bg-[#908B8B]/20 font-semibold px-4 py-1">
                        Sold
                    </Button>
                    <Button className="text-secondary500 bg-[#487ADA]/20 rounded-lg px-4 py-1 border border-secondary500 font-semibold">
                        Booked
                    </Button>
                </div>
            ),
        },
        { label: 'Sales Value', value: '98562485 SAR' },
        { label: 'Commission', value: '36796 SAR' },
        { label: 'Date', value: '15-8-2024' },
    ]

    return (
        <div className="px-6 py-6 grid gap-4 ">
            <div>
                <img src={SalesLogo} alt="Sales" />
            </div>
            <h2 className="text-[32px] leading-6 font-semibold text-primary-Main mb-4">
                Sales Information
            </h2>
            <div className="grid gap-2">
                {salesDetails.map((detail, index) => (
                    <div key={index} className="grid grid-cols-2 gap-4">
                        <span className="font-medium text-neutral-600 text-lg  whitespace-nowrap">
                            {detail.label}
                        </span>
                        <span
                            className={`font-semibold text-lg  ${
                                detail.label === 'Sales Value' ||
                                detail.label === 'Commission'
                                    ? 'text-secondary font-bold '
                                    : 'text-primary-600'
                            }`}
                        >
                            {detail.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SalesCard
