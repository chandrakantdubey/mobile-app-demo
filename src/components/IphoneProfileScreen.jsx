import React from "react";

// Main component to simulate the iPhone with the "Profile" screen
const IphoneProfileScreen = () => {
  // --- Reusable Icon Components ---
  const CheckCircleIcon = ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
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

  const LockClosedIcon = ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
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

  const TrophyIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9 9 0 100-18 9 9 0 000 18z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18a6 6 0 100-12 6 6 0 000 12z"
      />
    </svg>
  );

  // --- Mock Data ---
  const achievements = [
    { id: 1, name: "First Order", unlocked: true },
    { id: 2, name: "₹1k Spent", unlocked: true },
    { id: 3, name: "First Referral", unlocked: true },
    { id: 4, name: "5 Orders", unlocked: true },
    { id: 5, name: "10 Orders", unlocked: true },
    { id: 6, name: "₹5k Spent", unlocked: true },
    { id: 7, name: "3-Day Streak", unlocked: true },
    { id: 8, name: "₹1k Food Order", unlocked: false },
    { id: 9, name: "3 Restaurants", unlocked: true },
    { id: 10, name: "Saved ₹500", unlocked: false },
    { id: 11, name: "₹10k Spent", unlocked: true },
    { id: 12, name: "7-Day Streak", unlocked: false },
  ];

  // --- UI Section Components ---

  const ProfileCard = () => (
    <div className="p-4">
      <div className="flex items-center">
        <div className="w-20 h-20 bg-gray-300 rounded-full flex-shrink-0"></div>
        <div className="ml-4">
          <h1 className="text-2xl font-bold">Alex Johnson</h1>
          <p className="text-sm text-gray-500">alex.j@email.com</p>
          <p className="text-sm text-gray-500">alexj@upi</p>
        </div>
      </div>
      <div className="mt-4 bg-gray-100 rounded-lg p-3 flex justify-between items-center">
        <div>
          <p className="text-xs text-gray-500">Referral Code</p>
          <p className="font-mono font-semibold tracking-wider">
            AX7G-K8B2-FFG9
          </p>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-md text-sm font-semibold">
          Copy
        </button>
      </div>
      <div className="grid grid-cols-2 gap-3 mt-3 text-center">
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-xs text-gray-500">Lifetime Spent</p>
          <p className="font-bold text-lg">₹84,320</p>
        </div>
        <div className="bg-green-50 p-3 rounded-lg">
          <p className="text-xs text-green-700">Lifetime Saved</p>
          <p className="font-bold text-lg text-green-800">₹9,150</p>
        </div>
      </div>
    </div>
  );

  const ThemeTiers = () => (
    <div className="px-4 mt-2">
      <h2 className="font-bold text-lg px-2 mb-2">App Themes</h2>
      <div className="space-y-3">
        {/* Base Tier */}
        <div className="flex items-center p-3 border-2 border-black rounded-xl bg-white shadow-md">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
            <CheckCircleIcon className="w-8 h-8 text-black" />
          </div>
          <div>
            <p className="font-bold">Base Theme</p>
            <p className="text-xs text-gray-500">Unlocked at ₹0 spent</p>
          </div>
        </div>
        {/* Platinum Tier */}
        <div className="flex items-center p-3 border-2 border-gray-300 rounded-xl bg-gradient-to-br from-gray-200 to-gray-400">
          <div className="w-12 h-12 bg-white/30 rounded-lg flex items-center justify-center mr-4">
            <CheckCircleIcon className="w-8 h-8 text-white" />
          </div>
          <div>
            <p className="font-bold text-white">Platinum Theme</p>
            <p className="text-xs text-gray-100">Unlocked at ₹20,000 spent</p>
          </div>
        </div>
        {/* Carbon Tier */}
        <div className="relative flex items-center p-3 border-2 border-gray-600 rounded-xl bg-gray-800 overflow-hidden">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
          <div className="w-12 h-12 bg-black/30 rounded-lg flex items-center justify-center mr-4">
            <LockClosedIcon className="w-7 h-7 text-gray-400" />
          </div>
          <div>
            <p className="font-bold text-white">Carbon Theme</p>
            <p className="text-xs text-gray-400">Unlock at ₹50,000 spent</p>
          </div>
        </div>
      </div>
    </div>
  );

  const AchievementGallery = () => (
    <div className="px-4 mt-6">
      <h2 className="font-bold text-lg px-2 mb-2">Achievements</h2>
      <div className="grid grid-cols-4 gap-3">
        {achievements.map((ach) => (
          <div
            key={ach.id}
            className={`aspect-square rounded-lg flex flex-col items-center justify-center text-center p-1 ${ach.unlocked ? "bg-yellow-100 border border-yellow-300" : "bg-gray-100"}`}
          >
            <div
              className={`${ach.unlocked ? "text-yellow-600" : "text-gray-400 filter grayscale"}`}
            >
              <TrophyIcon />
            </div>
            <p
              className={`text-xs mt-1 font-semibold ${ach.unlocked ? "text-yellow-800" : "text-gray-500"}`}
            >
              {ach.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  // --- The Main App Screen ---
  const AppScreen = () => (
    <div className="w-full h-full bg-white rounded-[40px] overflow-y-auto pb-20">
      <ProfileCard />
      <ThemeTiers />
      <AchievementGallery />
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

export default IphoneProfileScreen;
