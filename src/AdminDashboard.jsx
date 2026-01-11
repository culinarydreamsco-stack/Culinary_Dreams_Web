
import { 
  LayoutGrid, 
  Users, 
  DollarSign, 
  Settings, 
  LogOut, 
  CheckCircle, 
  AlertTriangle, 
  XCircle,
  Search
} from 'lucide-react';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Tooltip as RechartsTooltip,
  Legend
} from 'recharts';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { useRemind } from './RemindContext';
// mock data
const clientDatabase = [
  { id: 1, name: "Mama's Pickles", unit: "Unit A-1", fee: 15000, status: "Paid", type: "Packaged" },
  { id: 2, name: "Healthy Tiffins", unit: "Unit B-4", fee: 22000, status: "Paid", type: "Tiffin" },
  { id: 3, name: "Cookie Co.", unit: "Unit A-2", fee: 15000, status: "Overdue", type: "Bakery" },
  { id: 4, name: "Spice Route", unit: "Unit C-1", fee: 45000, status: "Pending", type: "Cloud Kitchen" },
  { id: 5, name: "Vegan Bites", unit: "Unit A-3", fee: 15000, status: "Paid", type: "Packaged" },
  { id: 6, name: "Daily Dabba", unit: "Unit B-5", fee: 22000, status: "Overdue", type: "Tiffin" },
];


const totalClients = clientDatabase.length;
const totalRevenue = clientDatabase.reduce((acc, curr) => acc + curr.fee, 0);
const collectedRevenue = clientDatabase
  .filter(c => c.status === "Paid")
  .reduce((acc, curr) => acc + curr.fee, 0);
const pendingRevenue = totalRevenue - collectedRevenue;


const occupancyData = [
  { name: 'Occupied', value: 15 }, 
  { name: 'Vacant', value: 5 },
];
const COLORS = ['#0F1F36', '#E5E7EB']; 

const AdminDashboard = () => {
  const navigate = useNavigate();
  const {remind, setRemind}=useRemind();


  
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Paid': return 'bg-green-100 text-green-700 border-green-200';
      case 'Pending': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Overdue': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-900">
      
      
      <div className="w-64 bg-cdBlue text-white flex flex-col hidden md:flex shadow-2xl">
        <div className="h-20 flex items-center px-8 border-b border-gray-700">
          <span className="text-xl font-bold tracking-wider">
            CD <span className="text-cdGold">ADMIN</span>
          </span>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          <div className="px-4 py-2 text-xs uppercase text-gray-500 font-bold tracking-wider">Management</div>
          <a href="#" className="flex items-center px-4 py-3 bg-cdGold text-white rounded-lg font-medium shadow-md">
            <LayoutGrid className="w-5 h-5 mr-3" />
            Overview
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-colors">
            <Users className="w-5 h-5 mr-3" />
            Tenants
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-colors">
            <DollarSign className="w-5 h-5 mr-3" />
            Finances
          </a>
          
          <div className="px-4 py-2 mt-6 text-xs uppercase text-gray-500 font-bold tracking-wider">Facility</div>
          <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-colors">
            <Settings className="w-5 h-5 mr-3" />
            Maintenance
          </a>
        </nav>

        <div className="p-4 border-t border-gray-700">
          <button onClick={() => navigate('/')} className="flex items-center w-full px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </button>
        </div>
      </div>

      
      <div className="flex-1 overflow-y-auto">
        <header className="bg-white shadow-sm h-20 flex items-center justify-between px-8 sticky top-0 z-10">
          <h1 className="text-2xl font-bold text-cdBlue">Facility Overview</h1>
          <div className="flex items-center gap-4">
             <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input type="text" placeholder="Search units..." className="pl-10 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cdGold" />
             </div>
             <div className="h-10 w-10 rounded-full bg-gray-200 border-2 border-cdBlue flex items-center justify-center font-bold text-cdBlue">
              AD
            </div>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto">

          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-cdBlue flex flex-col justify-between">
              <div>
                <p className="text-sm text-gray-500 font-medium">Occupancy Rate</p>
                <h3 className="text-3xl font-bold text-cdBlue mt-2">75%</h3>
              </div>
              <div className="mt-4 text-xs text-gray-500">15 / 20 Units Active</div>
            </div>

            
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
               <p className="text-sm text-gray-500 font-medium">Collected Revenue</p>
               <h3 className="text-3xl font-bold text-gray-900 mt-2">₹{(collectedRevenue/1000).toFixed(1)}k</h3>
               <p className="text-xs text-green-600 mt-4 flex items-center"><CheckCircle size={12} className="mr-1"/> from {clientDatabase.filter(c => c.status === 'Paid').length} clients</p>
            </div>

            
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
               <p className="text-sm text-gray-500 font-medium">Pending Dues</p>
               <h3 className="text-3xl font-bold text-red-600 mt-2">₹{(pendingRevenue/1000).toFixed(1)}k</h3>
               <p className="text-xs text-red-500 mt-4 flex items-center"><AlertTriangle size={12} className="mr-1"/> Action required</p>
            </div>

             
             <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-cdGold">
               <p className="text-sm text-gray-500 font-medium">Active Tenants</p>
               <h3 className="text-3xl font-bold text-gray-900 mt-2">{totalClients}</h3>
               <p className="text-xs text-cdGoldHover mt-4 font-bold">+2 New this month</p>
            </div>
          </div>

          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center">
                <h3 className="font-bold text-cdBlue text-lg">Tenant Rent Status</h3>
                <button className="text-sm text-cdGold font-bold hover:underline">View All</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                    <tr>
                      <th className="px-6 py-4">Client Name</th>
                      <th className="px-6 py-4">Unit</th>
                      <th className="px-6 py-4">Monthly Fee</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm">
                    {clientDatabase.map((client) => (
                      <tr key={client.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-medium text-cdBlue">{client.name}</td>
                        <td className="px-6 py-4 text-gray-500">{client.unit}</td>
                        <td className="px-6 py-4 font-mono">₹{client.fee.toLocaleString()}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusStyle(client.status)}`}>
                            {client.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                           {client.status !== 'Paid' && (
                             <button onClick={()=> setRemind(1)} className="text-xs bg-cdBlue text-white px-2 py-1 rounded hover:bg-gray-800">
                               Remind
                             </button>
                           )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-cdBlue text-lg mb-2">Facility Utilization</h3>
              <p className="text-sm text-gray-500 mb-6">Real-time unit allocation</p>
              
              <div className="h-64 relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={occupancyData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {occupancyData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <RechartsTooltip />
                    <Legend verticalAlign="bottom" height={36}/>
                  </PieChart>
                </ResponsiveContainer>
                {/* Center Text Overlay */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center -mt-4">
                  <span className="text-3xl font-bold text-cdBlue">75%</span>
                </div>
              </div>

              <div className="mt-4 p-4 bg-gray-50 rounded-lg text-sm">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-500">Operational Units</span>
                  <span className="font-bold text-cdBlue">15</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Available for Rent</span>
                  <span className="font-bold text-green-600">5</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
