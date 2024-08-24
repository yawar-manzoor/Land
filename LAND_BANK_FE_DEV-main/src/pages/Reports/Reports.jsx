import { useSelector } from 'react-redux'
import LandCard from '../../components/LandCard'
import Tabs from '../../components/LandTabs'
import SubmitButton from '../../components/SubmitButton'
import useFetchData from '../../lib/FetchData'
import { baseURL } from '../../lib/global'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
const LandBankReport = () => {
    const [activeTab, setActiveTab] = useState('land-overview')
    const isEditable = useSelector((state) => state.forms.isEditable)
    const { data } = useFetchData(`${baseURL}Land/GetLandDetails?landId=1`)
    const location = useLocation()
    const { landId } = location?.state || {}
    console.log('🚀 ~ LandBankReport ~ landId:', landId)

    console.log(data)
    return (
        <div className="w-full px-12 2xl:px-24 py-8">
            <div className="grid">
                <LandCard data={data?.data} />
                <div className="bg-white">
                    <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
                </div>
                {isEditable && (
                    <div className="flex justify-end p-2">
                        <SubmitButton />
                    </div>
                )}
            </div>
        </div>
    )
}

export default LandBankReport
