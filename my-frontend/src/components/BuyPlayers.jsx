
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../utils/axios';

const BuyPlayer = () => {
  const {playerId}=useParams();
  const navigate=useNavigate();
  const [player,setPlayer]=useState(null);
  const [quantity,setQuantity]=useState(1);
  const [total,setTotal] =useState(0);
  const [message ,setMessage]=useState('')

  useEffect(() => {
   const fetchPlayer=async ()=>{
try{
    const res = await API.get(`/players/${playerId}`);


    setPlayer(res.data);

    setTotal(res.data.price);
} catch(error){setMessage('failed to load player')}
   };
  
   fetchPlayer();
    
  }, [playerId]);
  



   useEffect(() => {
    if (player) {
      setTotal(quantity * player.price);
    }
  }, [quantity, player]);

  const handleBuy = async () => {
    try {
      for (let i = 0; i < quantity; i++) {
        await API.post(`/players/trade/${playerId}`);
      }
      setMessage('Player(s) bought successfully');
      setTimeout(() => navigate('/'), 1500);
    } catch (err) {
      setMessage(err.response?.data?.error || 'Purchase failed');
    }
  };

  if (!player) return <div className="text-white p-6">Loading player...</div>;
  return (
 <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Buy {player.name}</h1>

      <p className="mb-2">Team: {player.team}</p>
      <p className="mb-2">Price per player: ₹{player.price}</p>

      <label className="block mb-2">Quantity:</label>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={e => setQuantity(Number(e.target.value))}
        className="text-black p-2 rounded mb-4"
      />

      <p className="mb-4">Total: ₹{total}</p>

      <button
        onClick={handleBuy}
        className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md font-semibold"
      >
        Confirm Purchase
      </button>

      {message && <p className="mt-4 text-yellow-400">{message}</p>}
    </div>
  )
}

export default BuyPlayer