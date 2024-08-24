import Button from '../components/ui/Button'
import PaymentLogo from '../assets/SalesCard/PaymentLogo.svg'

const PaymentCard = () => {
    const paymentDetails = [
        { label: 'Payment Amount', value: `987654 SAR` },
        { label: 'Discount', value: `234508 SAR` },
        { label: 'VAT', value: `12053467 SAR` },
        { label: 'Payment Terms', value: 'Advance 40%' },
        { label: 'Payment Status', value: 'Partially Paid 40%' },
        { label: 'Payment Method', value: 'Cheque' },
        { label: 'Collected Status', value: 'Yes' },
        { label: 'Deposit Status', value: 'Completed' },
        { label: 'Payment Date', value: '15-08-2024' },
    ]

    return (
        <div className="px-6 py-6 grid gap-4 ">
            <div>
                <img src={PaymentLogo} alt="Payment" />
            </div>
            <h2 className="text-[32px] leading-6 font-semibold text-primary-Main mb-4">
                Payment Details
            </h2>
            <div className="grid gap-2">
                {paymentDetails.map((detail, index) => (
                    <div key={index} className="grid grid-cols-2 gap-4">
                        <span className="font-medium text-neutral-600 text-lg ">
                            {detail.label}
                        </span>
                        <span
                            className={`font-semibold text-lg  ${
                                detail.label === 'Payment Amount' ||
                                detail.label === 'Discount' ||
                                detail.label === 'VAT'
                                    ? 'text-secondary font-bold'
                                    : 'text-primary-600'
                            }`}
                        >
                            {detail.value}
                        </span>
                    </div>
                ))}
            </div>
            <Button className="py-3 px-4 mt-2 font-semibold w-fit bg-primary-200 text-primary-Main text-base rounded">
                Download Invoice
            </Button>
        </div>
    )
}

export default PaymentCard
