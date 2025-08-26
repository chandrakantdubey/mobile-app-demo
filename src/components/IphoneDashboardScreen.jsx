import React from "react";

// Main component to simulate the iPhone with the app screen
const IphoneDashboardScreen = () => {
  // --- Reusable Icon Components ---
  const GiftIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.311a15.045 15.045 0 01-4.5 0M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.563A.562.562 0 019 14.437V9.564z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.375v.008" />
    </svg>
  );

  const CopyIcon = () => (
    <svg
      xmlns="http://www.w.w3.org/2000/svg"
      className="h-5 w-5 mr-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
      />
    </svg>
  );

  const ShareIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 mr-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.684 13.342C8.886 12.938 9 12.482 9 12s-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.368a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
      />
    </svg>
  );

  const TrackIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 mr-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    </svg>
  );

  const TrophyIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-yellow-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
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

  // --- UI Section Components ---

  const Header = () => (
    <div className="flex justify-between items-center p-4 mt-4">
      <div>
        <p className="text-sm text-gray-500">Welcome Back,</p>
        <h1 className="text-2xl font-bold text-black">Alex</h1>
      </div>
      <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
    </div>
  );

  const Meter = ({ title, value, subtitle, color, percentage }) => (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-24">
        <svg className="w-full h-full" viewBox="0 0 36 36">
          <path
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            className="text-gray-200"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          />
          <path
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            className={color}
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray={`${percentage}, 100`}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl font-bold">{value}</span>
        </div>
      </div>
      <p className="mt-2 font-semibold text-sm">{title}</p>
      <p className="text-xs text-gray-500 text-center">{subtitle}</p>
    </div>
  );

  const DashboardMeters = () => (
    <div className="flex justify-around p-4 mt-">
      <Meter
        title="Spent"
        value="₹12,450"
        subtitle="Top 18% in City"
        color="text-black"
        percentage={75}
      />
      <Meter
        title="Saved"
        value="₹1,830"
        subtitle="14% of spend"
        color="text-green-500"
        percentage={60}
      />
      <Meter
        title="Streak"
        value="12"
        subtitle="Days in budget"
        color="text-blue-500"
        percentage={40}
      />
    </div>
  );

  const LeaderboardPreview = () => (
    <div className="px-4 py-2 mx-4 bg-gray-100 rounded-lg">
      <div className="flex justify-between items-center text-sm">
        <p className="text-gray-600">
          <span className="font-bold">Friends:</span> #4 of 12
        </p>
        <p className="text-gray-600">
          <span className="font-bold">Locality:</span> Top 22%
        </p>
        <a href="#" className="font-bold text-black">
          View Full
        </a>
      </div>
    </div>
  );

  const ReferralBlock = () => (
    <div className="mx-4 my-4 p-4 bg-black text-white rounded-xl shadow-lg">
      <div className="flex items-center mb-3">
        <div className="bg-white bg-opacity-20 p-2 rounded-full mr-4">
          <GiftIcon />
        </div>
        <div>
          <h2 className="font-bold text-lg">Invite a friend</h2>
          <p className="text-sm text-gray-300">
            Get 1 month subscription free.
          </p>
        </div>
      </div>
      <div className="bg-gray-800 rounded-lg p-3 flex justify-between items-center mb-3">
        <span className="text-lg font-mono tracking-wider">AX7G-K8B2-FFG9</span>
        <button className="bg-gray-700 text-white px-3 py-1 rounded-md text-sm font-semibold">
          Copy
        </button>
      </div>
      <div className="flex justify-between space-x-2 text-sm">
        <button className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center">
          <CopyIcon /> Copy
        </button>
        <button className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center">
          <ShareIcon /> Share
        </button>
        <button className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center">
          <TrackIcon /> Track
        </button>
      </div>
    </div>
  );

  const QuickGoals = () => (
    <div className="mx-4 my-4 p-4 border border-gray-200 rounded-xl">
      <div className="flex justify-between items-center mb-1">
        <h3 className="font-bold">Weekly Goal: Save ₹500</h3>
        <p className="text-sm font-semibold">
          ₹320 <span className="text-gray-500">(64%)</span>
        </p>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
        <div
          className="bg-black h-2 rounded-full"
          style={{ width: "64%" }}
        ></div>
      </div>
      <p className="text-xs text-gray-500 text-center">
        ₹3,200 away from{" "}
        <span className="font-semibold text-gray-700">Platinum</span> tier
      </p>
    </div>
  );

  const MiniTransactionFeed = () => (
    <div className="mx-4 my-4">
      <div className="flex justify-between items-baseline mb-2">
        <h3 className="font-bold">Recent Food Orders</h3>
        <a href="#" className="text-sm font-semibold text-black">
          View All
        </a>
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-red-500 rounded-md mr-3"></div>
            <div>
              <p className="font-semibold">Zomato</p>
              <p className="text-xs text-gray-500">Yesterday</p>
            </div>
          </div>
          <p className="font-bold">₹480</p>
        </div>
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-orange-500 rounded-md mr-3"></div>
            <div>
              <p className="font-semibold">Swiggy</p>
              <p className="text-xs text-gray-500">Aug 24</p>
            </div>
          </div>
          <p className="font-bold">₹720</p>
        </div>
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-green-500 rounded-md mr-3"></div>
            <div>
              <p className="font-semibold">Instamart</p>
              <p className="text-xs text-gray-500">Aug 23</p>
            </div>
          </div>
          <p className="font-bold">₹1,150</p>
        </div>
      </div>
    </div>
  );

  const AchievementShowcase = () => (
    <div className="mx-4 my-4 p-4 bg-yellow-100 border border-yellow-300 rounded-xl flex items-center">
      <TrophyIcon />
      <div className="ml-3">
        <h3 className="font-bold text-yellow-800">New: Smart Saver</h3>
        <p className="text-sm text-yellow-700">
          Save ₹250 more to unlock Budget Master!
        </p>
      </div>
    </div>
  );

  // --- The Main App Screen ---
  const AppScreen = () => (
    <div className="w-full h-full bg-white rounded-[40px] overflow-y-auto pb-20">
      <Header />
      <DashboardMeters />
      <LeaderboardPreview />
      <ReferralBlock />
      <QuickGoals />
      <MiniTransactionFeed />
      <AchievementShowcase />
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

export default IphoneDashboardScreen;
