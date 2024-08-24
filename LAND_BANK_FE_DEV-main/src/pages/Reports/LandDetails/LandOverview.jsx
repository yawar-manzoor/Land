import Approved from '../../../assets/ApprovedLandBank.svg'
import Map from '../../../assets/Map.svg'
import Partial from '../../../assets/PartialIcon.svg'
import { useSelector } from 'react-redux'
const LandOverview = () => {
    const { landInformation, landType, landUse, landStatus, businessPlan } =
        useSelector((state) => state.forms.LandAssetInfo)
    return (
        <div className="">
            <h1 className="text-[32px] leading-6 font-semibold mb-4 text-neutral-600">
                Land Overview
            </h1>
            <h2 className="text-base text-neutral-600 font-normal">
                Land Description
            </h2>
            <p className="text-neutral-50 font-normal text-base mb-6">
                {landInformation}
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-[44%,28%,28%] gap-6 box-border">
                <div className="relative w-full  h-[280px]  bg-gray-200 rounded-lg overflow-hidden">
                    <img
                        src={Map}
                        alt="Map"
                        className="object-cover w-full h-full"
                    />
                    {/* <div className="absolute inset-0 bg-orange-300 opacity-50"></div> */}
                </div>

                <Card title="Land Use & Business Plan">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <p className="text-neutral-600 font-normal text-base whitespace-nowrap">
                                Land Use
                            </p>
                            <p className="text-neutral-700 font-semibold text-base ">
                                {landUse}
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-neutral-600 font-normal text-base whitespace-nowrap">
                                Land Status
                            </p>
                            <p className="text-neutral-700 font-semibold text-base ">
                                {landStatus}
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-neutral-600 font-normal text-base whitespace-nowrap">
                                Business Plan
                            </p>
                            <p className="text-neutral-700 font-semibold text-base ">
                                {businessPlan}
                            </p>
                        </div>
                        <div className="flex flex-col ">
                            <p className="text-neutral-600 font-normal text-base ">
                                Business Plan Status
                            </p>
                            <p className="text-neutral-700 font-semibold text-base ">
                                Fund
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col mt-2">
                        <p className="text-neutral-600 font-normal text-base whitespace-nowrap">
                            Business Plan Details
                        </p>
                        <p className="text-neutral-700 font-semibold text-base inline-block ">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                    </div>
                </Card>

                <Card title="Construction & Infra Details">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1">
                            <p className="text-neutral-600 font-normal text-base whitespace-nowrap">
                                Masterplan
                            </p>
                            <p className=" text-success text-base font-medium flex items-center">
                                <img
                                    src={Approved}
                                    alt="approved"
                                    className="mr-2"
                                />
                                Approved
                            </p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-neutral-600 font-normal text-base whitespace-nowrap">
                                Infra Approval
                            </p>
                            <p className="text-success text-base font-medium flex items-center">
                                <img
                                    src={Approved}
                                    alt="approved"
                                    className="mr-2"
                                />
                                Approved
                            </p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-neutral-600 font-normal text-base whitespace-nowrap">
                                Infra Contraction
                            </p>
                            <p className="text-success text-base font-medium flex items-center">
                                <img
                                    src={Approved}
                                    alt="approved"
                                    className="mr-2"
                                />
                                Approved
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col mt-2 gap-1">
                        <p className="text-neutral-600 font-normal text-base whitespace-nowrap">
                            Municipality Handing Over
                        </p>
                        <p className="text-primary-500 text-base font-medium flex items-center">
                            <img
                                src={Partial}
                                alt="approved"
                                className="mr-2"
                            />
                            Partial Handed Over
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    )
}

const Card = ({ title, children }) => {
    return (
        <div className="bg-[#dfd9ca]/25 rounded-2xl px-6 py-4">
            <h2 className="text-xl leading-6 text-primary-Main font-semibold mb-4">
                {title}
            </h2>
            {children}
        </div>
    )
}

export default LandOverview
