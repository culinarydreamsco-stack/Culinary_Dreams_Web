import React, { useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Package, ShoppingCart, AlertCircle } from 'lucide-react';
import { useInventory } from './InventoryContext';

const OrderPage = () => {
  const navigate = useNavigate();
  const { itemName } = useParams();
  const location = useLocation();
  const { updateStock }=useInventory();
  
  
  const { fullLabel, currentQuantity } = location.state || {};
  
  
  const [orderAmount, setOrderAmount] = useState('');

  const handleOrder = () => {
    updateStock(itemName,orderAmount);

    alert(`Order placed for ${orderAmount} units of ${itemName}!`);
    
    navigate(-1); 
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      
      
      <header className="bg-white shadow-sm h-20 flex items-center px-8 border-b border-gray-200">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-gray-500 hover:text-cdBlue transition-colors mr-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>
        <h1 className="text-xl font-bold text-cdBlue">
          Restock Inventory
        </h1>
      </header>

      
      <div className="flex-1 p-8 max-w-3xl mx-auto w-full">
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          
          
          <div className="bg-cdBlue p-6 flex justify-between items-center">
            <div>
              <p className="text-cdGold text-sm font-bold uppercase tracking-wider mb-1">Ordering Material</p>
              <h2 className="text-3xl font-bold text-white">{fullLabel || itemName}</h2>
            </div>
            <div className="bg-white/10 p-3 rounded-full">
              <Package className="text-white w-8 h-8" />
            </div>
          </div>

          
          <div className="p-8">
            
            
            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8">
              <div className={`p-3 rounded-full mr-4 ${currentQuantity < 25 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                <AlertCircle size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Current Stock Level</p>
                <p className={`text-xl font-bold ${currentQuantity < 25 ? 'text-red-600' : 'text-gray-900'}`}>
                  {currentQuantity !== undefined ? `${currentQuantity} Units` : 'Unknown'}
                </p>
              </div>
            </div>

            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity Required
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={orderAmount}
                    onChange={(e) => setOrderAmount(e.target.value)}
                    placeholder="Enter amount (e.g. 50)"
                    className="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cdGold focus:border-transparent outline-none transition-all text-lg"
                  />
                  <span className="absolute right-10 top-3.5 text-gray-400 text-sm font-medium">
                    Units
                  </span>
                </div>
              </div>

              
              <div className="flex items-center gap-4 pt-4">
                <button
                  onClick={() => navigate(-1)}
                  className="flex-1 py-3 border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleOrder}
                  disabled={!orderAmount}
                  className={`flex-1 py-3 flex justify-center items-center text-white font-bold rounded-lg shadow-md transition-all
                    ${orderAmount ? 'bg-cdGold hover:bg-yellow-600 hover:shadow-lg' : 'bg-gray-300 cursor-not-allowed'}
                  `}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Place Order
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OrderPage;