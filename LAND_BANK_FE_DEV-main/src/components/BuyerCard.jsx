import React from 'react'
import Buyer from '../assets/SalesCard/BuyerLogo.svg'

const BuyerCard = () => {
    const BuyerDetails = [
        { label: 'Buyer Name', value: 'Saleh Alrobah' },
        { label: 'Buyer Id', value: ' 2346986532' },
        { label: 'Company Name', value: 'Awj' },
        { label: 'Mobile', value: '94567934' },
        { label: 'Email', value: 'S.robah@awj.com.sa' },
    ]
    return (
        <div className="px-6 py-6 grid gap-4">
            <div>
                <img src={Buyer} alt="buyer" />
            </div>
            <h2 className="text-[32px] leading-6 font-semibold text-primary-Main mb-4">
                Buyer Details
            </h2>
            <div className="grid gap-2">
                {BuyerDetails.map((buyer, index) => (
                    <div key={index} className="grid grid-cols-2 gap-4">
                        <span className="font-medium text-neutral-600 text-lg ">
                            {buyer.label}
                        </span>
                        <span className="font-medium text-primary-600 text-lg ">
                            {buyer.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BuyerCard
