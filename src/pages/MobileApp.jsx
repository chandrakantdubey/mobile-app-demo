import IphoneDashboardScreen from "../components/IphoneDashboardScreen";
import IphoneMyOrdersScreen from "../components/IphoneMyOrdersScreen";
import IphoneCommunityScreen from "../components/IphoneCommunityScreen";
import IphoneProfileScreen from "../components/IphoneProfileScreen";
import IphoneSubscriptionScreen from "../components/IphoneSubscriptionScreen";

export default function MobileApp() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <IphoneDashboardScreen />
      <IphoneMyOrdersScreen />
      <IphoneCommunityScreen />
      <IphoneProfileScreen />
      <IphoneSubscriptionScreen />
    </div>
  );
}
