import React, { useState } from 'react'
import LandOverview from '../pages/Reports/LandDetails/LandOverview'
import Button from '../components/ui/Button'
import LandSalesInfo from '../pages/Reports/LandDetails/LandSalesInfo'
import DocumentLibrary from '../pages/Reports/LandDetails/LandDocuments'
import OwnershipDetailsTable from './OwnershipDetailsTable'
import Timeline from './Timeline'
import LandFinance from '../pages/Reports/LandDetails/LandFinance'

const Tabs = ({ activeTab, setActiveTab }) => {
    // const [activeTab, setActiveTab] = useState('land-overview')

    const tabs = [
        { id: 'land-overview', label: 'Land Overview' },
        { id: 'ownership', label: 'Ownership' },
        { id: 'sales', label: 'Sales' },
        { id: 'development', label: 'Development' },
        { id: 'leased', label: 'Leased' },
        { id: 'finance', label: 'Finance' },
        { id: 'documents', label: 'Documents' },
    ]

    const renderContent = () => {
        switch (activeTab) {
            case 'land-overview':
                return <LandOverview />
            case 'ownership':
                return (
                    <div className="space-y-12">
                        <OwnershipDetailsTable />
                        <Timeline />
                    </div>
                )
            case 'sales':
                return <LandSalesInfo />
            case 'development':
                return <div>Development Content</div>
            case 'leased':
                return <div>Leased Content</div>
            case 'finance':
                return <LandFinance />
            case 'documents':
                return <DocumentLibrary />
            default:
                return null
        }
    }

    return (
        <div className="grid gap-8 pt-28">
            <div className="border-b px-10 ">
                <nav className="flex gap-2">
                    {tabs.map((tab) => (
                        <Button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={` rounded-t-lg  px-6 py-4 text-primary-600  text-base font-semibold ${
                                activeTab === tab.id
                                    ? 'bg-primary-300'
                                    : 'bg-primary-100'
                            }`}
                        >
                            {tab.label}
                        </Button>
                    ))}
                </nav>
            </div>
            <div className="px-16 py-8">{renderContent()}</div>
        </div>
    )
}

export default Tabs
