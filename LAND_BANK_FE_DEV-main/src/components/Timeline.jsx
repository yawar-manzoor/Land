function Timeline() {
    const timelineDates = [0, 1, 2, 3]
    return (
        <div
            className="w-full h-96   flex flex-col "
            // style={{
            //   paddingRight: window.innerWidth / 10,
            //   paddingLeft: window.innerWidth / 10,
            // }}
        >
            <h4 className="text-[24px] text-[#837550] font-semibold">
                Ownership Transfer Timeline
            </h4>
            <div className="relative w-full h-80  flex justify-center overflow-x-scroll no-scrollbar px-5">
                {timelineDates.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            width:
                                index == timelineDates.length - 1
                                    ? 0
                                    : (window.innerWidth -
                                          64 -
                                          (2 * window.innerWidth) / 100) /
                                      4,
                        }}
                        className={`relative  shrink-0`}
                    >
                        {index !== timelineDates.length - 1 && (
                            <div
                                className={`absolute top-1/2 -translate-y-1/2 w-full h-[2px]  ${
                                    index !== timelineDates.length - 2
                                        ? ' bg-gradient-to-r from-[#837550] to-[#837550]/20 '
                                        : ' bg-gradient-to-r from-[#299764] to-[#299764]/20 '
                                } z-10 `}
                            ></div>
                        )}
                        <div
                            className={`relative top-1/2 -translate-y-1/2 -left-2 z-20 h-4 w-4 rounded-full before:content-link  before:flex before:items-center before:justify-center  before:w-full before:full  before:absolute before:left-1/2 before:-translate-x-1/2  ${
                                index !== timelineDates.length - 1
                                    ? 'bg-[#837550]'
                                    : 'bg-[#299764]'
                            } ${
                                index % 2 === 0
                                    ? 'before:bottom-1/2 '
                                    : 'before:top-1/2 before:rotate-180'
                            } before:left-1/2 before:z-10 `}
                        >
                            <div
                                className={`absolute flex  z-20 py-4  ${
                                    index !== timelineDates.length - 1
                                        ? ''
                                        : 'right-0 items-end'
                                }  ${
                                    index % 2 === 0
                                        ? 'bottom-10 flex-col-reverse'
                                        : 'top-10 flex-col'
                                }`}
                            >
                                <span className="text-[#837550] text-[16px] font-semibold whitespace-nowrap">
                                    AWJ-RE
                                </span>
                                <span className="text-[#9E8D60] text-[16px] whitespace-nowrap  ">
                                    1998
                                </span>
                                <div className="text-[#837550] text-sm whitespace-nowrap">
                                    <span className="text-[16px] text-[#7A7474]">
                                        TD:{' '}
                                    </span>
                                    <span>410118048038</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Timeline
