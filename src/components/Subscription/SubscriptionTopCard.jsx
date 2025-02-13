function SubscriptionTopCard({data}) {
    return (
        <>
            <div className="flex justify-between items-center my-1 lg:my-3 flex-wrap">
                {/* card1 */}
                <div className="w-[45%] md:w-[24%] shadow-md rounded-md p-3 my-3 border">
                    <div className="text-gray-500 tracking-wide text-xs">CURRENT PLAN</div>
                    <div className="flex justify-between items-end my-3 flex-wrap gap-2">
                        <div className="text-2xl font-bold"><i className="bi bi-currency-rupee"></i>{data.tier || 0}</div>
                        <p className="text-xs text-green-500 font-semibold"><i className="bi bi-plus-lg"></i> 36% <i className="bi bi-arrow-up"></i></p>
                    </div>
                </div>
                {/* Card2 */}
                <div className="w-[45%] md:w-[24%] shadow-md rounded-md p-3 my-3 border">
                    <div className="text-gray-500 tracking-wide text-xs">VALID TILL</div>
                    <div className="flex justify-between items-end my-3 flex-wrap gap-2">
                        <div className="text-2xl font-bold">{data.end_date || "00-00-0000"}</div>
                        <p className="text-xs text-green-500 font-semibold"><i className="bi bi-plus-lg"></i> 36% <i className="bi bi-arrow-up"></i></p>
                    </div>
                </div>
                {/* Card3 */}
                <div className="w-[45%] md:w-[24%] shadow-md rounded-md p-3 my-3 border">
                    <div className="text-gray-500 tracking-wide text-xs">LAST PAYMENT AMOUNT</div>
                    <div className="flex justify-between items-end my-3 flex-wrap gap-2">
                        <div className="text-2xl font-bold">{data.created_at || 0}</div>
                        <p className="text-xs text-green-500 font-semibold"><i className="bi bi-plus-lg"></i> 36% <i className="bi bi-arrow-up"></i></p>
                    </div>
                </div>
                {/* Card4 */}
                <div className="w-[45%] md:w-[24%] shadow-md rounded-md p-3 my-3 border">
                    <div className="text-gray-500 tracking-wide text-xs">PAYMENT DUE</div>
                    <div className="flex justify-between items-end my-3 flex-wrap gap-2">
                        <div className="text-2xl font-bold">{data.unique_users || 0}</div>
                        <p className="text-xs text-green-500 font-semibold"><i className="bi bi-plus-lg"></i> 36% <i className="bi bi-arrow-up"></i></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubscriptionTopCard;