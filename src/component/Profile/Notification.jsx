import React from "react";

const Notification = () => {
    // Dummy Notification Data
    const notifications = [
        {
            id: 1,
            type: "Order Created",
            message: "Your order #12345 has been successfully created!",
            timestamp: "2024-11-28 10:30 AM",
        },
        {
            id: 2,
            type: "Order Delivered",
            message: "Your order #12345 has been delivered. Thank you for shopping!",
            timestamp: "2024-11-27 05:00 PM",
        },
        {
            id: 3,
            type: "Discount Offer",
            message: "Enjoy 20% off on your next order! Use code: SAVE20",
            timestamp: "2024-11-26 08:00 AM",
        },
        {
            id: 4,
            type: "Order Created",
            message: "Your order #12346 has been successfully created!",
            timestamp: "2024-11-25 01:15 PM",
        },
        {
            id: 5,
            type: "Discount Offer",
            message: "Limited Time Offer: Get free shipping on orders above ৳500!",
            timestamp: "2024-11-24 09:00 AM",
        },
    ];

    return (
        <div className="flex flex-col items-center p-5">
            <h1 className="text-2xl font-semibold mb-6">Notifications</h1>
            <div className="w-full lg:w-3/4 space-y-4">
                {notifications.length > 0 ? (
                    notifications.map((notification) => (
                        <div
                            key={notification.id}
                            className={`p-4 border rounded-lg shadow-md hover:shadow-lg transition ${
                                notification.type === "Order Created"
                                    ? "bg-blue-50 border-blue-300"
                                    : notification.type === "Order Delivered"
                                    ? "bg-green-50 border-green-300"
                                    : "bg-yellow-50 border-yellow-300"
                            }`}
                        >
                            <div className="flex justify-between items-center">
                                <h2
                                    className={`text-lg font-semibold ${
                                        notification.type === "Order Created"
                                            ? "text-blue-600"
                                            : notification.type === "Order Delivered"
                                            ? "text-green-600"
                                            : "text-yellow-600"
                                    }`}
                                >
                                    {notification.type}
                                </h2>
                                <p className="text-sm text-gray-500">
                                    {notification.timestamp}
                                </p>
                            </div>
                            <p className="mt-2 text-gray-700">{notification.message}</p>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-gray-500">
                        <p>No notifications available.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Notification;
