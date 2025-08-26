import React, { useState } from "react";

// Main component to simulate the iPhone with the "Subscription" screen
const IphoneSubscriptionScreen = () => {
  // --- Reusable Icon Components ---
  const CheckIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-green-500 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );

  const SparklesIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      />
    </svg>
  );

  // --- Mock Data ---
  const premiumFeatures = [
    "Deep Analytics & Spending Insights",
    "Merchant & Category Breakdowns",
    "Time-of-Day Spending Trends",
    "Compare with Community Cohorts",
    "Export Transaction History (PDF/CSV)",
    "Unlock All App Themes Instantly",
    "Priority Customer Support",
  ];

  // --- UI Section Components ---

  const Header = () => (
    <div className="p-4 text-center">
      <div className="w-16 h-16 bg-black text-white rounded-2xl mx-auto flex items-center justify-center mb-3">
        <SparklesIcon />
      </div>
      <h1 className="text-2xl font-bold text-black">Unlock Premium</h1>
      <p className="text-gray-600 mt-1">
        Get the full story behind your spending.
      </p>
    </div>
  );

  const PlanSelector = () => {
    const [selectedPlan, setSelectedPlan] = useState("yearly");

    return (
      <div className="px-4 mt-4">
        <div className="flex flex-col space-y-3">
          {/* Monthly Plan */}
          <div
            onClick={() => setSelectedPlan("monthly")}
            className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${selectedPlan === "monthly" ? "border-black bg-gray-50" : "border-gray-200"}`}
          >
            <div className="flex items-center">
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3 ${selectedPlan === "monthly" ? "border-black" : "border-gray-300"}`}
              >
                {selectedPlan === "monthly" && (
                  <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                )}
              </div>
              <div>
                <p className="font-bold">Premium Monthly</p>
                <p className="text-sm text-gray-600">₹199 / month</p>
              </div>
            </div>
          </div>

          {/* Yearly Plan */}
          <div
            onClick={() => setSelectedPlan("yearly")}
            className={`relative p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${selectedPlan === "yearly" ? "border-black bg-gray-50" : "border-gray-200"}`}
          >
            <div className="absolute -top-3 right-4 bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
              SAVE 20%
            </div>
            <div className="flex items-center">
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3 ${selectedPlan === "yearly" ? "border-black" : "border-gray-300"}`}
              >
                {selectedPlan === "yearly" && (
                  <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                )}
              </div>
              <div>
                <p className="font-bold">Premium Yearly</p>
                <p className="text-sm text-gray-600">₹1,899 / year</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const FeatureList = () => (
    <div className="px-4 mt-6">
      <h2 className="font-semibold text-center text-gray-700 mb-4">
        WHAT'S INCLUDED
      </h2>
      <div className="space-y-3">
        {premiumFeatures.map((feature, index) => (
          <div key={index} className="flex items-start">
            <CheckIcon />
            <p className="ml-2 text-sm text-gray-800">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const CallToAction = () => (
    <div className="px-4 mt-6 pb-6">
      <button className="w-full bg-black text-white font-bold py-4 rounded-xl shadow-lg hover:bg-gray-800 transition-all duration-300 animate-pulse">
        Unlock Now
      </button>
      <p className="text-xs text-gray-400 text-center mt-3">
        Payments will be charged to your account. You can manage your
        subscription in your account settings.
      </p>
    </div>
  );

  // --- The Main App Screen ---
  const AppScreen = () => (
    <div className="w-full h-full bg-white rounded-[40px] overflow-y-auto pb-20">
      <Header />
      <PlanSelector />
      <FeatureList />
      <CallToAction />
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

export default IphoneSubscriptionScreen;
