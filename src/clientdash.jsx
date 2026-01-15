import React from 'react';
import { 
  LayoutDashboard, 
  Package, 
  TrendingUp, 
  Truck, 
  AlertCircle, 
  ChefHat, 
  LogOut 
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';
import { useNavigate } from 'react-router-dom';
import { useRemind } from './RemindContext';



const salesData = [
  { name: 'Mon', sales: 4000 },
  { name: 'Tue', sales: 3000 },
  { name: 'Wed', sales: 5000 },
  { name: 'Thu', sales: 2780 },
  { name: 'Fri', sales: 1890 },
  { name: 'Sat', sales: 6390 },
  { name: 'Sun', sales: 8490 },
];

const inventoryData = [
  { name: 'Flour (kg)', amount: 80},
  { name: 'Sugar (kg)', amount: 10},
  { name: 'Pkg Boxes', amount: 20 }, 
  { name: 'Oil (L)', amount: 15 },
];

const Checkinventory=(inventory) =>{
  lowstocknumber=0;
  for(i=0;i<inventory.length;i++){
    if(inventory[i].amount<25){
      inventory[i].lowstock=true;
      lowstocknumber++;
    }
  }
  return(
    <div>
      <h3 className="text-2xl font-bold text-gray-900">1 Low Stock</h3>
      {inventory.map((goods)=>(
        goods.lowstock && (

          <p className="text-xs text-red-500 mt-2">{goods.name} &lt; {goods.amount}%</p>
        )
      ))}
    </div>
  )


}

const Clientdash = () => {
  const {remind, setRemind}=useRemind();
  const navigate = useNavigate();
  const lowStockItems = inventoryData.filter(item => item.amount < 25);
  const lowStockCount = lowStockItems.length;

  const handleBarClick = (data)=>{
    const rawMaterialName = data.name;

    navigate(`/order/${rawMaterialName}`,{
      state:{
        fullLabel: data.name,
        currentQuantity: data.amount
      }
    })

    

  }

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      
      
      <div className="w-64 bg-cdBlue text-white flex flex-col hidden md:flex">
        <div className="h-20 flex items-center px-8 border-b border-gray-700">
          <span className="text-xl font-bold tracking-wider">
            Culinary<span className="text-cdGold">Dreams</span>
          </span>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          
          <a href="#" className="flex items-center px-4 py-3 bg-cdGold text-white rounded-lg font-medium shadow-md">
            <LayoutDashboard className="w-5 h-5 mr-3" />
            Overview
          </a>
          
          <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-colors">
            <ChefHat className="w-5 h-5 mr-3" />
            Production
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-colors">
            <Package className="w-5 h-5 mr-3" />
            Inventory
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-colors">
            <Truck className="w-5 h-5 mr-3" />
            Shipments
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-colors">
            <TrendingUp className="w-5 h-5 mr-3" />
            Financials
          </a>
        </nav>

        <div className="p-4 border-t border-gray-700">
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center w-full px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </button>
        </div>
      </div>

     
      <div className="flex-1 overflow-y-auto">
        
        
        <header className="bg-white shadow-sm h-20 flex items-center justify-between px-8">
          <h1 className="text-2xl font-bold text-cdBlue">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">Welcome back,</span>
            <div className="h-10 w-10 rounded-full bg-cdGold flex items-center justify-center font-bold text-white">
              JD
            </div>
          </div>
        </header>

        
        <div className="p-8">
          
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-cdGold">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">Total Revenue</p>
                  <h3 className="text-2xl font-bold text-gray-900">₹4.2L</h3>
                </div>
                <TrendingUp className="text-cdGold opacity-50" />
              </div>
              <p className="text-xs text-green-600 mt-2">+12% from last month</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-cdBlue">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">Active Shipments</p>
                  <h3 className="text-2xl font-bold text-gray-900">24</h3>
                </div>
                <Truck className="text-cdBlue opacity-50" />
              </div>
              <p className="text-xs text-gray-500 mt-2">6 arriving today</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">Production Status</p>
                  <h3 className="text-2xl font-bold text-gray-900">Running</h3>
                </div>
                <ChefHat className="text-green-500 opacity-50" />
              </div>
              <p className="text-xs text-gray-500 mt-2">Station B1 & B2 active</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500 flex flex-col h-full">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">Alerts</p>
                  <h3 className="text-2xl font-bold text-gray-900">{lowStockCount} Low Stock</h3>
                </div>
                <AlertCircle className="text-red-500 opacity-50" />
              </div>
              {remind==1 &&(
                <p className="text-xs text-red-500 mt-2">Reminder to Pay Dues!</p>
              )}
              {lowStockItems.map((item)=>(
                <p className="text-xs text-red-500 mt-2">{item.name} &lt; {item.amount}%</p>))
              }

              {remind==1 && (
                <div className="mt-auto pt-4 flex justify-end">
                <button onClick={()=>{alert(`Paid Succesfully!`);setRemind(0);}}className="bg-cdGold text-white px-4 py-2 rounded shadow-lg">
                  Pay Dues
                </button>
                </div>
              )}
              
            </div>
          </div>

          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            
            <div className="bg-white p-6 rounded-xl shadow-sm lg:col-span-2">
              <h3 className="text-lg font-bold text-cdBlue mb-4">Weekly Revenue</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} prefix="₹" />
                    <Tooltip />
                    <Line type="monotone" dataKey="sales" stroke="#0F1F36" strokeWidth={3} dot={{fill: '#C49A01', r: 4}} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-cdBlue mb-4">Inventory Levels</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={inventoryData} layout="vertical" style={{cursor:'pointer'}}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" width={80} tick={{fontSize: 12}} />
                    <Tooltip />
                    <Bar dataKey="amount" fill="#C49A01" radius={[0, 4, 4, 0]} barSize={20} onClick={handleBarClick}/>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100">
              <h3 className="text-lg font-bold text-cdBlue">Recent Shipments</h3>
            </div>
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50 text-gray-500 text-sm">
                  <th className="px-6 py-3">Order ID</th>
                  <th className="px-6 py-3">Destination</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-6 py-4 font-medium text-cdBlue">#ORD-001</td>
                  <td className="px-6 py-4">Baner, Pune</td>
                  <td className="px-6 py-4"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">In Transit</span></td>
                  <td className="px-6 py-4">₹12,400</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-cdBlue">#ORD-002</td>
                  <td className="px-6 py-4">Kothrud, Pune</td>
                  <td className="px-6 py-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Delivered</span></td>
                  <td className="px-6 py-4">₹8,500</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-cdBlue">#ORD-003</td>
                  <td className="px-6 py-4">Viman Nagar</td>
                  <td className="px-6 py-4"><span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">Processing</span></td>
                  <td className="px-6 py-4">₹4,200</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Clientdash;