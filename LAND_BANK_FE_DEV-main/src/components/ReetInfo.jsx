import paid from '../assets/ApprovedLandBank.svg'
const ReetInfo = () => {
    return (
        <div className="grid gap-4 py-4">
            <h2 className="text-xl font-semibold  text-primary-Main">
                Reet Information
            </h2>
            <div className="grid grid-cols-6 gap-4 rounded-lg bg-primary-200 px-8 py-4">
                <div className="flex flex-col">
                    <span className="font-normal text-base text-neutral-400">
                        REET Number
                    </span>
                    <span className="font-semibold text-base text-primary-600">
                        9862543
                    </span>
                </div>
                <div className="flex flex-col">
                    <span className="font-normal text-base text-neutral-400">
                        REET Amount
                    </span>
                    <span className="font-semibold text-base text-primary-600">
                        36259 SQM
                    </span>
                </div>
                <div className="flex flex-col">
                    <span className="font-normal text-base text-neutral-400">
                        REET Status
                    </span>
                    <span className="flex gap-2 text-success text-bold text-lg">
                        <img src={paid} alt="approved" />
                        Paid
                    </span>
                </div>
                <div className="flex flex-col">
                    <span className="font-normal text-base text-neutral-400">
                        REET Date
                    </span>
                    <span className="font-semibold text-base text-primary-600">
                        14-8-2024
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ReetInfo
