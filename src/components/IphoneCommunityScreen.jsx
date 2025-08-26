import React, { useState } from "react";

// Main component to simulate the iPhone with the "Community" screen
const IphoneCommunityScreen = () => {
  // --- Reusable Icon Components ---
  const TrophyIcon = ({ className = "h-5 w-5" }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
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

  const UserGroupIcon = () => (
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
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.282-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.282.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  );

  const GiftIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 mr-2"
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
    </svg>
  );

  // --- Mock Data ---
  const friendsLeaderboard = [
    {
      rank: 1,
      name: "Priya S.",
      avatarColor: "bg-indigo-500",
      savings: "₹2,150",
      score: 9.8,
    },
    {
      rank: 2,
      name: "Rohan M.",
      avatarColor: "bg-teal-500",
      savings: "₹1,980",
      score: 9.5,
    },
    {
      rank: 3,
      name: "Anjali K.",
      avatarColor: "bg-pink-500",
      savings: "₹1,950",
      score: 9.4,
    },
    {
      rank: 4,
      name: "You",
      avatarColor: "bg-black",
      savings: "₹1,830",
      score: 9.2,
      isCurrentUser: true,
    },
    {
      rank: 5,
      name: "Vikram B.",
      avatarColor: "bg-orange-500",
      savings: "₹1,620",
      score: 8.8,
    },
  ];

  const localityLeaderboard = [
    {
      rank: 24,
      name: "UserA",
      avatarColor: "bg-gray-400",
      savings: "₹3,100",
      score: 9.9,
    },
    {
      rank: 25,
      name: "UserB",
      avatarColor: "bg-gray-400",
      savings: "₹3,050",
      score: 9.8,
    },
    {
      rank: 26,
      name: "You",
      avatarColor: "bg-black",
      savings: "₹1,830",
      score: 9.2,
      isCurrentUser: true,
    },
    {
      rank: 27,
      name: "UserC",
      avatarColor: "bg-gray-400",
      savings: "₹1,825",
      score: 9.1,
    },
  ];

  const achievements = [
    {
      id: 1,
      user: "Arjun",
      badge: "Budget Master",
      detail: "Saved ₹500",
      avatarColor: "bg-blue-500",
    },
    {
      id: 2,
      user: "Sneha",
      badge: "Streak Starter",
      detail: "3-Day Streak",
      avatarColor: "bg-purple-500",
    },
    {
      id: 3,
      user: "Karan",
      badge: "First Thousand",
      detail: "Spent ₹1,000",
      avatarColor: "bg-red-500",
    },
  ];

  // --- UI Section Components ---

  const Header = () => (
    <div className="p-4 border-b border-gray-200">
      <h1 className="text-2xl font-bold text-center text-black">Community</h1>
    </div>
  );

  const LeaderboardItem = ({
    rank,
    name,
    avatarColor,
    savings,
    score,
    isCurrentUser,
  }) => (
    <div
      className={`flex items-center p-3 rounded-lg ${isCurrentUser ? "bg-gray-100 border border-black" : ""}`}
    >
      <div className="w-8 text-center font-bold text-lg">{rank}</div>
      <div className={`w-10 h-10 ${avatarColor} rounded-full ml-2 mr-4`}></div>
      <div className="flex-grow">
        <p className="font-bold">{name}</p>
        <p className="text-xs text-gray-500">Smart Score: {score}/10</p>
      </div>
      <div className="text-right">
        <p className="font-bold text-green-600">{savings}</p>
        <p className="text-xs text-gray-500">Saved</p>
      </div>
    </div>
  );

  const Leaderboards = () => {
    const [activeTab, setActiveTab] = useState("Friends");

    return (
      <div className="mx-4 my-4">
        <div className="flex bg-gray-100 rounded-lg p-1 mb-3">
          <button
            onClick={() => setActiveTab("Friends")}
            className={`flex-1 py-2 text-sm font-semibold rounded-md ${activeTab === "Friends" ? "bg-black text-white" : "text-gray-600"}`}
          >
            Friends
          </button>
          <button
            onClick={() => setActiveTab("Locality")}
            className={`flex-1 py-2 text-sm font-semibold rounded-md ${activeTab === "Locality" ? "bg-black text-white" : "text-gray-600"}`}
          >
            Locality
          </button>
        </div>
        <div className="space-y-2">
          {activeTab === "Friends" &&
            friendsLeaderboard.map((user) => (
              <LeaderboardItem key={user.rank} {...user} />
            ))}
          {activeTab === "Locality" &&
            localityLeaderboard.map((user) => (
              <LeaderboardItem key={user.rank} {...user} />
            ))}
        </div>
      </div>
    );
  };

  const ReferralStats = () => (
    <div className="mx-4 my-4">
      <h2 className="font-bold text-lg px-2 mb-2">Referral Stats</h2>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gray-100 p-4 rounded-xl text-center">
          <p className="text-2xl font-bold">15</p>
          <p className="text-sm text-gray-600">Invites Sent</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-xl text-center">
          <p className="text-2xl font-bold">4</p>
          <p className="text-sm text-gray-600">Active Referrals</p>
        </div>
        <div className="bg-green-100 border border-green-200 p-4 rounded-xl text-center col-span-2">
          <p className="text-2xl font-bold text-green-800">2 Months</p>
          <p className="text-sm text-green-700">Free Subscription Earned</p>
        </div>
      </div>
      <button className="w-full mt-3 bg-black text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center">
        <GiftIcon /> Invite More Friends
      </button>
    </div>
  );

  const PublicAchievements = () => (
    <div className="mx-4 my-4">
      <h2 className="font-bold text-lg px-2 mb-2">Community Achievements</h2>
      <div className="space-y-3">
        {achievements.map((ach) => (
          <div
            key={ach.id}
            className="flex items-center p-3 bg-gray-50 rounded-lg"
          >
            <div
              className={`w-10 h-10 ${ach.avatarColor} rounded-full mr-3 flex-shrink-0`}
            ></div>
            <div>
              <p className="text-sm">
                <span className="font-bold">{ach.user}</span> unlocked{" "}
                <span className="font-bold text-yellow-600">{ach.badge}</span>
              </p>
              <p className="text-xs text-gray-500">{ach.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // --- The Main App Screen ---
  const AppScreen = () => (
    <div className="w-full h-full bg-white rounded-[40px] overflow-y-auto pb-20">
      <Header />
      <Leaderboards />
      <ReferralStats />
      <PublicAchievements />
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

export default IphoneCommunityScreen;
