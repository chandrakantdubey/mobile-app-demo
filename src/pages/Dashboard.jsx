import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
} from "recharts";
import {
  Home,
  FileText,
  Package,
  Users,
  BarChart2,
  Settings,
  Bell,
  User,
  Calendar,
  Search,
  ChevronDown,
  DollarSign,
  Briefcase,
  ShoppingCart,
} from "lucide-react";

// --- MOCK DATA ---
const salesByValueData = [
  { name: "9:00", value: 50000 },
  { name: "10:00", value: 150000 },
  { name: "11:00", value: 116755 },
  { name: "12:00", value: 250000 },
  { name: "13:00", value: 200000 },
  { name: "14:00", value: 300000 },
  { name: "15:00", value: 350000 },
];

const salesByQuantityData = [
  { name: "SUN", quantity: 23000 },
  { name: "MON", quantity: 30000 },
  { name: "TUE", quantity: 37900 },
  { name: "WED", quantity: 45000 },
  { name: "THU", quantity: 60000 },
  { name: "FRI", quantity: 55000 },
  { name: "SAT", quantity: 70000 },
];

const cashCreditData = [
  { name: "Cash", value: 26.3 },
  { name: "Credit", value: 26.5 },
  { name: "Credit card", value: 31.9 },
  { name: "Credit notes", value: 24.4 },
];
const CASH_CREDIT_COLORS = ["#22c55e", "#f97316", "#3b82f6", "#ef4444"];

const discountSalesData = [
  { name: "SUN", Mobiles: 100, Tablet: 90, Others: 40 },
  { name: "MON", Mobiles: 120, Tablet: 110, Others: 50 },
  { name: "TUE", Mobiles: 115, Tablet: 105, Others: 45 },
  { name: "WED", Mobiles: 130, Tablet: 125, Others: 55 },
  { name: "THU", Mobiles: 150, Tablet: 140, Others: 60 },
  { name: "FRI", Mobiles: 140, Tablet: 130, Others: 65 },
  { name: "SAT", Mobiles: 160, Tablet: 150, Others: 70 },
];

const customerCountData = [
  { name: "2014", Direct: 5000, Social: 3000 },
  { name: "2015", Direct: 6000, Social: 4500 },
  { name: "2016", Direct: 7500, Social: 5000 },
  { name: "2017", Direct: 8000, Social: 6500 },
];

const salesByOutletData = [
  { name: "Pub-lore", value: 180000 },
  { name: "CIVX", value: 150000 },
  { name: "ID&M", value: 120000 },
  { name: "G.B. Intl", value: 223495 },
  { name: "Coral", value: 90000 },
];
const OUTLET_COLORS = ["#60a5fa", "#a78bfa", "#f87171", "#fbbf24", "#4ade80"];

const topProducts = [
  { name: "Samsung S8 64 GB Black", price: 2299, qty: 804, total: 1850000 },
  { name: "iPhone 6s 64 GB Silver", price: 2499, qty: 690, total: 1724310 },
  { name: "Samsung S8 64 GB Black", price: 2299, qty: 804, total: 1850000 },
];

// --- COMPONENTS ---

const Sidebar = () => (
  <div className="bg-gray-800 text-white w-20 flex flex-col items-center py-4 space-y-6">
    <div className="text-white p-3 bg-blue-500 rounded-full text-xl font-bold flex items-center justify-center w-12 h-12">
      b
    </div>
    <nav className="flex flex-col items-center space-y-4">
      <a
        href="#"
        className="p-3 bg-gray-700 rounded-lg text-white transition-colors"
      >
        <Home size={24} />
      </a>
      <a
        href="#"
        className="p-3 rounded-lg text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
      >
        <BarChart2 size={24} />
      </a>
      <a
        href="#"
        className="p-3 rounded-lg text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
      >
        <Package size={24} />
      </a>
      <a
        href="#"
        className="p-3 rounded-lg text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
      >
        <Users size={24} />
      </a>
      <a
        href="#"
        className="p-3 rounded-lg text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
      >
        <ShoppingCart size={24} />
      </a>
      <a
        href="#"
        className="p-3 rounded-lg text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
      >
        <FileText size={24} />
      </a>
      <a
        href="#"
        className="p-3 rounded-lg text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
      >
        <DollarSign size={24} />
      </a>
      <a
        href="#"
        className="p-3 rounded-lg text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
      >
        <Settings size={24} />
      </a>
    </nav>
  </div>
);

const Header = () => (
  <header className="bg-white shadow-sm flex items-center justify-between p-4">
    <div>
      <h1 className="text-lg font-semibold text-gray-500">/ Dashboard</h1>
    </div>
    <div className="flex items-center space-x-6">
      <button className="text-sm font-semibold text-gray-600 border px-3 py-1 rounded-md hover:bg-gray-100">
        EN
      </button>
      <Bell size={24} className="text-gray-600" />
      <div className="flex items-center space-x-2 text-gray-600">
        <Calendar size={20} />
        <div>
          <p className="text-sm font-medium">05 October 2017</p>
          <p className="text-xs text-gray-500">10:30 AM (GMT)</p>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
          <img
            src="https://placehold.co/40x40/E2E8F0/4A5568?text=MA"
            alt="User Avatar"
          />
        </div>
        <div>
          <p className="font-semibold text-sm">Mohammed Amar</p>
          <p className="text-xs text-gray-500">Welcome</p>
        </div>
        <ChevronDown size={20} className="text-gray-500" />
      </div>
    </div>
  </header>
);

const StatCard = ({ title, subtitle, value, icon, gradient }) => (
  <div
    className={`p-5 rounded-lg text-white ${gradient} flex items-center justify-between`}
  >
    <div className="flex items-center space-x-4">
      {icon}
      <div>
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-sm opacity-80">{subtitle}</p>
      </div>
    </div>
    <p className="text-5xl font-bold">{value}</p>
  </div>
);

const ChartCard = ({
  title,
  children,
  filterOptions,
  filterColors,
  defaultFilter,
}) => (
  <div className="bg-white p-6 rounded-lg shadow-sm h-full">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      {filterOptions && (
        <div className="flex items-center space-x-1 border border-gray-200 rounded-lg p-1 text-sm">
          {filterOptions.map((option) => (
            <button
              key={option}
              className={`px-3 py-1 rounded-md transition-colors ${defaultFilter === option ? `${filterColors} text-white` : "text-gray-500 hover:bg-gray-100"}`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
    <div style={{ height: "250px" }}>{children}</div>
  </div>
);

const SalesValueChart = () => (
  <ChartCard
    title="Sales by value (AED)"
    filterOptions={["Today", "Week", "Month"]}
    defaultFilter="Today"
    filterColors="bg-blue-500"
  >
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={salesByValueData}
        margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <YAxis
          axisLine={false}
          tickLine={false}
          tickFormatter={(value) =>
            new Intl.NumberFormat("en-US", {
              notation: "compact",
              compactDisplay: "short",
            }).format(value)
          }
        />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#3b82f6"
          strokeWidth={3}
          dot={{ r: 5 }}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  </ChartCard>
);

const SalesQuantityChart = () => (
  <ChartCard
    title="Sales by quantity"
    filterOptions={["Week", "Month", "Year"]}
    defaultFilter="Week"
    filterColors="bg-green-500"
  >
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={salesByQuantityData}
        margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <YAxis
          axisLine={false}
          tickLine={false}
          tickFormatter={(value) =>
            new Intl.NumberFormat("en-US", {
              notation: "compact",
              compactDisplay: "short",
            }).format(value)
          }
        />
        <Tooltip
          cursor={{ fill: "rgba(239, 246, 255, 0.5)" }}
          content={({ active, payload, label }) => {
            if (active && payload && payload.length) {
              return (
                <div className="bg-gray-800 text-white p-3 rounded-lg shadow-lg">
                  <p className="text-sm">{`Tue 4 October`}</p>
                  <p className="font-bold text-lg">
                    {new Intl.NumberFormat().format(payload[0].value)}
                  </p>
                </div>
              );
            }
            return null;
          }}
        />
        <Bar dataKey="quantity" fill="#a7f3d0" radius={[4, 4, 0, 0]}>
          {salesByQuantityData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.name === "TUE" ? "#22c55e" : "#a7f3d0"}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </ChartCard>
);

const CashCreditChart = () => (
  <ChartCard
    title="Cash / Credit / Credit card sales"
    filterOptions={["Month", "Year"]}
    defaultFilter="Month"
    filterColors="bg-blue-500"
  >
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={cashCreditData}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={90}
          fill="#8884d8"
          paddingAngle={2}
          dataKey="value"
          labelLine={false}
          label={({ name, percent }) => `${(percent * 100).toFixed(1)}%`}
        >
          {cashCreditData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={CASH_CREDIT_COLORS[index % CASH_CREDIT_COLORS.length]}
            />
          ))}
        </Pie>
        <Tooltip />
        <Legend iconType="circle" />
      </PieChart>
    </ResponsiveContainer>
  </ChartCard>
);

const DiscountSalesChart = () => (
  <ChartCard
    title="Discount sales"
    filterOptions={["Week", "Month"]}
    defaultFilter="Week"
    filterColors="bg-blue-500"
  >
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={discountSalesData}
        margin={{ top: 5, right: 20, left: -20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Mobiles"
          stroke="#8884d8"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="Tablet"
          stroke="#82ca9d"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="Others"
          stroke="#ffc658"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  </ChartCard>
);

const CustomerCountChart = () => (
  <ChartCard
    title="Customer count"
    filterOptions={["Year", "Month"]}
    defaultFilter="Year"
    filterColors="bg-red-500"
  >
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={customerCountData}
        margin={{ top: 5, right: 20, left: -20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <YAxis
          axisLine={false}
          tickLine={false}
          tickFormatter={(value) =>
            new Intl.NumberFormat("en-US", { notation: "compact" }).format(
              value,
            )
          }
        />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Direct"
          stroke="#3b82f6"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="Social"
          stroke="#ef4444"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  </ChartCard>
);

const SalesByOutletChart = () => (
  <ChartCard
    title="Sales by outlet (AED)"
    filterOptions={["Week", "Month"]}
    defaultFilter="Week"
    filterColors="bg-blue-500"
  >
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={salesByOutletData}
        margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <YAxis hide />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" radius={[4, 4, 0, 0]}>
          {salesByOutletData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={OUTLET_COLORS[index % OUTLET_COLORS.length]}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </ChartCard>
);

const SalesBySalesman = () => (
  <div className="bg-white p-6 rounded-lg shadow-sm h-full">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-semibold text-gray-800">
        Sales by salesman (AED)
      </h3>
      <div className="flex items-center space-x-1 border border-gray-200 rounded-lg p-1 text-sm">
        <button className="px-3 py-1 rounded-md bg-blue-500 text-white transition-colors">
          Week
        </button>
        <button className="px-3 py-1 rounded-md text-gray-500 hover:bg-gray-100">
          Month
        </button>
      </div>
    </div>
    <div className="flex items-center justify-around">
      <div className="relative w-40 h-40">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={[{ value: 60 }, { value: 40 }]}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={70}
              startAngle={90}
              endAngle={450}
            >
              <Cell fill="#f87171" />
              <Cell fill="#60a5fa" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <img
            src="https://placehold.co/40x40/f87171/ffffff?text=J"
            className="w-10 h-10 rounded-full border-2 border-white absolute"
            style={{ transform: "translate(40px, -40px)" }}
          />
          <img
            src="https://placehold.co/40x40/60a5fa/ffffff?text=D"
            className="w-10 h-10 rounded-full border-2 border-white absolute"
            style={{ transform: "translate(-40px, 40px)" }}
          />
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-red-400 mr-2"></span>
          <div>
            <p className="font-bold text-lg text-gray-800">1,20,000</p>
            <p className="font-medium text-gray-700">John</p>
          </div>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-blue-400 mr-2"></span>
          <div>
            <p className="font-bold text-lg text-gray-800">91,900</p>
            <p className="font-medium text-gray-700">David</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TableCard = ({
  title,
  children,
  filterOptions,
  defaultFilter,
  filterColors,
}) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      {filterOptions && (
        <div className="flex items-center space-x-1 border border-gray-200 rounded-lg p-1 text-sm">
          {filterOptions.map((option) => (
            <button
              key={option}
              className={`px-3 py-1 rounded-md transition-colors ${defaultFilter === option ? `${filterColors} text-white` : "text-gray-500 hover:bg-gray-100"}`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
    {children}
  </div>
);

const TopProductTable = () => (
  <TableCard
    title="Top sales product"
    filterOptions={["Month", "Year"]}
    defaultFilter="Month"
    filterColors="bg-green-500"
  >
    <div className="flex justify-between items-start mb-4">
      <div>
        <p className="text-xl font-bold text-gray-800">Samsung S8 64GB</p>
        <p className="text-gray-500">Mobiles</p>
      </div>
      <div>
        <p className="text-xl font-bold text-right text-blue-600">
          AED 18,50,000
        </p>
        <p className="text-gray-500 text-right">Total Sale</p>
      </div>
      <div>
        <p className="text-xl font-bold text-right text-green-600">804</p>
        <p className="text-gray-500 text-right">QTY</p>
      </div>
    </div>
    <table className="w-full text-left text-sm">
      <thead className="text-gray-500 font-medium">
        <tr>
          <th className="py-2 font-semibold">PRODUCT DETAILS</th>
          <th className="py-2 text-right font-semibold">PRICE</th>
          <th className="py-2 text-right font-semibold">QTY</th>
          <th className="py-2 text-right font-semibold">TOTAL VALUE</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {topProducts.map((product, index) => (
          <tr key={index} className="font-medium text-gray-700">
            <td className="py-3">{product.name}</td>
            <td className="py-3 text-right">
              {new Intl.NumberFormat().format(product.price)}
            </td>
            <td className="py-3 text-right">{product.qty}</td>
            <td className="py-3 text-right">
              {new Intl.NumberFormat().format(product.total)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </TableCard>
);

const TopCategoryTable = () => (
  <TableCard
    title="Top selling category / brand"
    filterOptions={["Month", "Year"]}
    defaultFilter="Month"
    filterColors="bg-blue-500"
  >
    <div className="grid grid-cols-3 gap-4 mb-4 text-center">
      <div>
        <p className="text-xl font-bold text-gray-800">
          1,50,90,000{" "}
          <span className="text-green-500 text-sm font-medium">+48%</span>
        </p>
        <p className="text-gray-500">Mobiles</p>
      </div>
      <div>
        <p className="text-xl font-bold text-gray-800">
          1,15,45,000{" "}
          <span className="text-red-500 text-sm font-medium">-38%</span>
        </p>
        <p className="text-gray-500">Tablets</p>
      </div>
      <div>
        <p className="text-xl font-bold text-gray-800">
          80,90,000{" "}
          <span className="text-green-500 text-sm font-medium">+24%</span>
        </p>
        <p className="text-gray-500">Others</p>
      </div>
    </div>
    <table className="w-full text-left text-sm">
      <thead className="text-gray-500 font-medium">
        <tr>
          <th className="py-2 font-semibold">PRODUCT DETAILS</th>
          <th className="py-2 text-right font-semibold">PRICE</th>
          <th className="py-2 text-right font-semibold">QTY</th>
          <th className="py-2 text-right font-semibold">TOTAL VALUE</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {topProducts.map((product, index) => (
          <tr key={index} className="font-medium text-gray-700">
            <td className="py-3">{product.name}</td>
            <td className="py-3 text-right">
              {new Intl.NumberFormat().format(product.price)}
            </td>
            <td className="py-3 text-right">{product.qty}</td>
            <td className="py-3 text-right">
              {new Intl.NumberFormat().format(product.total)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </TableCard>
);

// --- MAIN APP ---
export default function DashboardApp() {
  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 overflow-y-auto">
          {/* Top Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatCard
              title="NEW CUSTOMERS"
              subtitle="Last 7 days"
              value="486"
              icon={<Users size={28} />}
              gradient="bg-gradient-to-br from-blue-400 to-blue-600"
            />
            <StatCard
              title="NEW QUOTES"
              subtitle="Last month"
              value="908"
              icon={<FileText size={28} />}
              gradient="bg-gradient-to-br from-green-400 to-green-600"
            />
            <StatCard
              title="NEW ORDERS"
              subtitle="Last 30 days"
              value="86"
              icon={<Package size={28} />}
              gradient="bg-gradient-to-br from-pink-400 to-pink-600"
            />
            <StatCard
              title="NEW INVOICES"
              subtitle="Today"
              value="524"
              icon={<Briefcase size={28} />}
              gradient="bg-gradient-to-br from-purple-400 to-purple-600"
            />
          </div>

          {/* Main Chart Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-1">
              <SalesValueChart />
            </div>
            <div className="lg:col-span-1">
              <SalesQuantityChart />
            </div>
            <div className="lg:col-span-1">
              <CashCreditChart />
            </div>
          </div>

          {/* Secondary Chart Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
            <DiscountSalesChart />
            <CustomerCountChart />
            <SalesByOutletChart />
            <SalesBySalesman />
          </div>

          {/* Bottom Tables Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TopProductTable />
            <TopCategoryTable />
          </div>
        </main>
      </div>
    </div>
  );
}
