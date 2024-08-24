import BuyerCard from '../../../components/BuyerCard'
import SalesCard from '../../../components/SalesCard'
import PaymnetCard from '../../../components/PaymentCard'
import ReetInfo from '../../../components/ReetInfo'

const LandSalesInfo = () => {
    return (
        <div className="">
            <div className="rounded-lg  grid xl:grid-cols-3 gap-8">
                <div>
                    <BuyerCard />
                </div>
                <div className="bg-white shadow rounded-2xl border-primary-200 border">
                    <SalesCard />
                </div>
                <div>
                    <PaymnetCard />
                </div>
            </div>
            <div>
                <ReetInfo />
            </div>
        </div>
    )
}

export default LandSalesInfo
