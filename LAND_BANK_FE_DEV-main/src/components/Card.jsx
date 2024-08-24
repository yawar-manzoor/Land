import { useNavigate } from 'react-router-dom'
import Image from '../assets/image.svg'
import M2 from '../assets/Card Image/ImageM2.svg'

const Card = ({
    assetId,
    title,
    sub,
    image,
    icon,
    totalLands,
    m2,
    m2Data,
    gpsIcon,
    location,
}) => {
    const navigate = useNavigate()

    const handleAssetClick = (assetId) => {
        console.log('🚀 ~ handleAssetClick ~ assetId:', assetId)
        navigate('/analytics', { state: { assetId } })
    }

    return (
        <div
            onClick={() => handleAssetClick(assetId)}
            className="max-w-sm py-7 rounded-2xl overflow-hidden shadow-lg bg-white cursor-pointer flex flex-col"
        >
            <div className="flex px-7">
                {Image && (
                    <img
                        className="h-auto"
                        src={Image}
                        alt={title}
                        loading="lazy"
                    />
                )}
                <div className="p-4 flex flex-col justify-center">
                    {title && (
                        <h2 className="text-base 2xl:text-xl text-primary-Main font-bold">
                            {title}
                        </h2>
                    )}

                    {sub && (
                        <h3 className="text-primary-600 text-sm mb-2">{sub}</h3>
                    )}
                </div>
            </div>
            <div className="px-7 py-2 bg-primary-50 flex">
                {icon && (
                    <img
                        className="p-2 border bg-primary-100  object-contain rounded-full h-14 w-14"
                        src={icon}
                        alt={title}
                        loading="lazy"
                    />
                )}
                <div className="flex flex-col ps-4">
                    <h2 className="text-neutral-600">Total Lands</h2>
                    {totalLands && (
                        <h2 className="font-bold text-neutral-700">
                            {totalLands}
                        </h2>
                    )}
                </div>
            </div>
            <div className="px-7 py-4 flex">
                {M2 && <img className="h-[24px]" src={M2} />}
                {m2Data && (
                    <h2 className="ps-4 font-bold text-neutral-700">
                        {m2Data}
                    </h2>
                )}
                {/* <h2 className="ps-4">{m2Data}</h2> */}
            </div>
            <div className="px-7 flex">
                {gpsIcon && (
                    <img className="h-[24px]" src={gpsIcon} alt={location} />
                )}
                {location && (
                    <h2 className="ps-4 font-bold text-neutral-700">
                        {location}
                    </h2>
                )}
            </div>
        </div>
    )
}
export default Card
