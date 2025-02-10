function HomeFeature({data}) {
    return(
        <>
            <div className="w-[100%] md:w-[30%]">
                {/* card1 */}
                <div className="shadow-md rounded-md p-3 my-3 border">
                    <div className="text-gray-500 tracking-wide text-xs">TOTAL VOLUME</div>
                    <div className="flex justify-between items-end my-3 flex-wrap gap-2">
                        <div className="text-2xl font-bold"><i className="bi bi-currency-rupee"></i>{data.total_volume}</div>
                        <p className="text-xs text-green-500 font-semibold"><i className="bi bi-plus-lg"></i> 36% <i className="bi bi-arrow-up"></i></p>
                    </div>
                </div>
                {/* card2 */}
                <div className="shadow-md rounded-md p-3 my-3 border">
                    <div className="text-gray-700 font-bold tracking-wide text-sm">CREATE PAYMENT LINK</div>
                    <p className="text-xs font-light text-gray-500 my-2">Receive Crypto Payments For Anything</p>
                    <button className="bg-primary border-none px-2 py-1 rounded-md text-xs text-white my-3"> <i className="bi bi-plus-lg"></i> Create</button>
                </div>
                {/* card3 */}
                <div className="shadow-md rounded-md p-3 my-3 border">
                    <div className="text-gray-700 font-bold tracking-wide text-sm">CREATE INVOICE LINK</div>
                    <p className="text-xs font-light text-gray-500 my-2">Create And Send Crypto Invoice To Your Customer</p>
                    <button className="bg-primary border-none px-2 py-1 rounded-md text-xs text-white my-3"> <i className="bi bi-plus-lg"></i> Create</button>
                </div>
            </div>
        </>
    )
}

export default HomeFeature;