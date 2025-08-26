import React, { useState } from "react";

// Main component to simulate the iPhone with the "My Orders" screen
const IphoneMyOrdersScreen = () => {
  // --- Reusable Icon Components ---
  const SearchIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-gray-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );

  const ArrowDownIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 inline ml-1 text-green-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
      />
    </svg>
  );

  const LockIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-gray-800"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  );

  // --- Mock Data ---
  const transactions = [
    {
      id: 1,
      merchant: "Zomato",
      logoBg: "bg-red-500",
      date: "Today, 1:15 PM",
      amount: "480.00",
      savings: "20.00",
    },
    {
      id: 2,
      merchant: "Swiggy",
      logoBg: "bg-orange-500",
      date: "Yesterday, 8:40 PM",
      amount: "720.50",
      savings: "50.00",
    },
    {
      id: 3,
      merchant: "Instamart",
      logoBg: "bg-green-500",
      date: "Aug 24, 12:00 PM",
      amount: "1,150.00",
      savings: null,
    },
    {
      id: 4,
      merchant: "Blinkit",
      logoBg: "bg-yellow-500",
      date: "Aug 23, 7:11 AM",
      amount: "310.00",
      savings: "15.00",
    },
    {
      id: 5,
      merchant: "Uber",
      logoBg: "bg-black",
      date: "Aug 22, 6:50 PM",
      amount: "245.00",
      savings: null,
    },
    {
      id: 6,
      merchant: "Starbucks",
      logoBg: "bg-green-700",
      date: "Aug 22, 9:02 AM",
      amount: "650.00",
      savings: "75.00",
    },
    {
      id: 7,
      merchant: "Zomato",
      logoBg: "bg-red-500",
      date: "Aug 21, 1:30 PM",
      amount: "520.00",
      savings: null,
    },
  ];

  // --- UI Section Components ---

  const Header = () => (
    <div className="p-4 border-b border-gray-200 mt-4">
      <h1 className="text-2xl font-bold text-center text-black">My Orders</h1>
    </div>
  );

  const Filters = () => {
    const [activeFilter, setActiveFilter] = useState("Food");
    const filters = ["Food", "Travel", "Other"];

    return (
      <div className="p-4">
        <div className="flex bg-gray-100 rounded-lg p-1">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`flex-1 py-2 text-sm font-semibold rounded-md transition-colors duration-300 ${
                activeFilter === filter
                  ? "bg-black text-white shadow"
                  : "text-gray-600"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const SearchBar = () => (
    <div className="px-4 pb-4">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon />
        </div>
        <input
          type="text"
          placeholder="Search by merchant, amount..."
          className="w-full bg-gray-100 border border-transparent rounded-lg py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
        />
      </div>
    </div>
  );

  const SmartInsights = () => (
    <div className="mx-4 my-2 p-4 border border-gray-200 rounded-xl">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500">This Week</p>
          <p className="text-2xl font-bold">
            ₹2,300{" "}
            <span className="text-lg font-semibold text-gray-600">
              / 6 orders
            </span>
          </p>
          <p className="text-sm font-semibold text-green-600 flex items-center">
            15% less than last week <ArrowDownIcon />
          </p>
        </div>
        <div className="text-right relative">
          <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg">
            <LockIcon />
            <p className="text-xs font-bold mt-1">Unlock Insights</p>
          </div>
          <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-lg"></div>
        </div>
      </div>
      <p className="text-xs text-gray-400 text-center mt-3">
        Curious? Subscribe to unlock your full spending story.
      </p>
    </div>
  );

  const TransactionItem = ({ merchant, logoBg, date, amount, savings }) => (
    <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
      <div className="flex items-center">
        <div
          className={`w-10 h-10 ${logoBg} rounded-md mr-4 flex-shrink-0`}
        ></div>
        <div>
          <p className="font-semibold text-black">{merchant}</p>
          <p className="text-xs text-gray-500">{date}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-bold text-black">₹{amount}</p>
        {savings && (
          <p className="text-xs text-green-600 font-semibold">
            Saved ₹{savings}
          </p>
        )}
      </div>
    </div>
  );

  const TransactionList = () => (
    <div className="px-4 py-2">
      <h3 className="font-bold text-gray-500 text-sm px-3 pb-2">August 2025</h3>
      <div className="space-y-1">
        {transactions.map((tx) => (
          <TransactionItem key={tx.id} {...tx} />
        ))}
      </div>
    </div>
  );

  // --- The Main App Screen ---
  const AppScreen = () => (
    <div className="w-full h-full bg-white rounded-[40px] overflow-y-auto pb-20">
      <Header />
      <Filters />
      <SearchBar />
      <SmartInsights />
      <TransactionList />
    </div>
  );

  // --- The iPhone Mockup Frame ---
  return (
    <div className="bg-gray-200 p-10 font-sans">
      <div className="w-[375px] h-[812px] mx-auto bg-black rounded-[60px] border-[14px] border-black relative shadow-2xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-8 bg-black rounded-b-2xl z-20">
          <div className="w-20 h-2 bg-gray-800 absolute top-2 left-1/2 -translate-x-1/2 rounded-full"></div>
        </div>
        <div className="w-full h-full overflow-hidden rounded-[46px]">
          <AppScreen />
        </div>
      </div>
    </div>
  );
};

export default IphoneMyOrdersScreen;
