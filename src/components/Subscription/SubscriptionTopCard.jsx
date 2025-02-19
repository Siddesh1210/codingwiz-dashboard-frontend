function SubscriptionTopCard({data}) {
    return (
        <>
            <div className="flex justify-between items-center my-1 lg:my-3 flex-wrap">
                {/* card1 */}
                <div className="w-[45%] md:w-[24%] shadow-md rounded-md p-3 my-3 border">
                    <div className="text-gray-500 tracking-wide text-xs">CURRENT PLAN</div>
                    <div className="flex justify-between items-end my-3 flex-wrap gap-2">
                        <div className="text-2xl font-bold">{data?.tier && <i className="bi bi-currency-dollar"></i>} {data?.tier || '-'}</div>
                    </div>
                </div>
                {/* Card2 */}
                <div className="w-[45%] md:w-[24%] shadow-md rounded-md p-3 my-3 border">
                    <div className="text-gray-500 tracking-wide text-xs">VALID TILL</div>
                    <div className="flex justify-between items-end my-3 flex-wrap gap-2">
                        <div className="text-2xl font-bold">{data?.end_date || "-"}</div>
                    </div>
                </div>
                {/* Card3 */}
                <div className="w-[45%] md:w-[24%] shadow-md rounded-md p-3 my-3 border">
                    <div className="text-gray-500 tracking-wide text-xs">LAST PAYMENT AMOUNT</div>
                    <div className="flex justify-between items-end my-3 flex-wrap gap-2">
                        <div className="text-2xl font-bold">{data?.created_at || '-'}</div>
                    </div>
                </div>
                {/* Card4 */}
                <div className="w-[45%] md:w-[24%] shadow-md rounded-md p-3 my-3 border">
                    <div className="text-gray-500 tracking-wide text-xs">PAYMENT DUE</div>
                    <div className="flex justify-between items-end my-3 flex-wrap gap-2">
                        <div className="text-2xl font-bold">{data?.unique_users || '-'}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubscriptionTopCard;