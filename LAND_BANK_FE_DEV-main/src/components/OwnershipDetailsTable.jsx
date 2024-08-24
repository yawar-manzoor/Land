const ownershipDetailsData = [
    {
        id: 1,
        tdNumber: '410118048038',
        tdOwner: 'AWJ-RE',
        tdDate: '20-06-2014',
        updatedBy: 'Saleh Alrobah',
        updatedAt: '08-08-2024|12:30PM',
    },
    {
        id: 2,
        tdNumber: '410118048038',
        tdOwner: 'NAJD-RE',
        tdDate: '20-06-2014',
        updatedBy: 'Eli Guiterez',
        updatedAt: '08-08-2024|12:30PM',
    },
    {
        id: 3,
        tdNumber: '410118048038',
        tdOwner: 'SHAM-RE',
        tdDate: '20-06-2014',
        updatedBy: 'Muhammad Ali',
        updatedAt: '08-08-2024|12:30PM',
    },
    {
        id: 4,
        tdNumber: '410456748038',
        tdOwner: 'RAKKA-RE',
        tdDate: '20-06-2014',
        updatedBy: 'Hassan Ali',
        updatedAt: '08-08-2024|12:30PM',
    },
]

function OwnershipDetailsTable() {
    return (
        <div className="flex flex-col gap-12">
            <h3 className="text-[32px] text-[#7A7474] font-semibold">
                Ownership Details
            </h3>
            <table className="bg-[#DFD9CA]/25 rounded-lg overflow-hidden border-separate border-spacing-y-2 py-6 px-8">
                <thead className="text-left text-[#837550] text-[16px] font-medium">
                    <tr className="">
                        <th className="">
                            <span className="mr-10 ml-4 font-normal">#</span>
                            <span>TD Number</span>
                        </th>
                        <th className="px-6 border-s border-[#837550]">
                            TD Owner
                        </th>
                        <th className="px-6 border-s border-[#837550]">
                            TD Date
                        </th>
                        <th className="px-6 border-s border-[#837550]">
                            Updated By
                        </th>
                        <th className="px-6 border-s border-[#837550]">
                            TD File
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {ownershipDetailsData?.map((item) => (
                        <tr key={item.id} className="">
                            <td className="bg-[#EFECE4] py-4 text-[16px] text-[#7A7474] rounded-s-[8px]">
                                <span className="mr-10 ml-4">01</span>
                                <span>{item?.tdNumber}</span>
                            </td>
                            <td className="bg-[#EFECE4] py-4 text-[16px] text-[#7A7474] px-6">
                                {item?.tdOwner}
                            </td>
                            <td className="bg-[#EFECE4] py-4 text-[16px] text-[#7A7474] px-6">
                                {item?.tdDate}
                            </td>
                            <td className="bg-[#EFECE4] py-4 text-[16px] text-[#7A7474] px-6">
                                <div className="w-full  flex">
                                    <span className="flex-1">
                                        {item?.updatedBy}
                                    </span>
                                    <span className="flex-1">
                                        {item?.updatedAt}
                                    </span>
                                </div>
                            </td>
                            <td className="bg-[#EFECE4] py-4 text-[16px] text-[#7A7474] rounded-e-[8px] px-6">
                                <button className="bg-[#DFD9CA] text-[#837550] px-4 py-3 rounded font-semibold">
                                    Download
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default OwnershipDetailsTable
