import AHC from '../assets/AHCLogo.svg'
import AssetDetails from './LandAssetsDetails'
import TitleDeedCard from './LandTitleCard'

const LandCard = ({ data }) => {
    return (
        <>
            <div className="relative landoverview rounded grid grid-cols-[15%,55%,30%] p-6 ">
                <div className="flex items-center justify-center">
                    <img src={AHC} alt="Asset Logo" />
                </div>
                <div>
                    <AssetDetails data={data} />
                </div>
                <div className="absolute top-0 right-8 w-[280px]">
                    <TitleDeedCard />
                </div>
            </div>
        </>
    )
}

export default LandCard
