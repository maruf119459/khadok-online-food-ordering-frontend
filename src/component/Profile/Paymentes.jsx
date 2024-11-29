

import React from "react";

const Paymentes = () => {
    // Dummy payment data
    const payments = [
        {
            id: 1,
            date: "2024-11-01",
            amount: "৳ 500",
            method: "Credit Card",
            status: "Completed",
        },
        {
            id: 2,
            date: "2024-10-25",
            amount: "৳ 1200",
            method: "Credit Card",
            status: "Completed",
        },

    ];

    return (
        <div>
            <div className="flex flex-col items-center p-5">
            <h1 className="text-2xl font-semibold mb-6">Payment History</h1>
            <div className="w-full lg:w-3/4">
                <div className="grid grid-cols-4 gap-4 p-4 bg-[#EC7755] rounded-t-lg text-sm font-semibold">
                    <p>Date</p>
                    <p>Amount</p>
                    <p>Method</p>
                    <p>Status</p>
                </div>
                {payments.map((payment) => (
                    <div
                        key={payment.id}
                        className="grid grid-cols-4 gap-4 p-4 border-b bg-[#FFF2E9] text-sm hover:bg-gray-50"
                    >
                        <p>{payment.date}</p>
                        <p>{payment.amount}</p>
                        <p>{payment.method}</p>
                        <p
                            className={`font-medium ${
                                payment.status === "Completed"
                                    ? "text-green-600"
                                    : "text-yellow-500"
                            }`}
                        >
                            {payment.status}
                        </p>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default Paymentes;
