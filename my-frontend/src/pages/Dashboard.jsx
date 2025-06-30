import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import API from '../utils/axios';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
    const [players, setPlayers]=useState([]);
    const[user, setUser] =useState(null);
    const [message, setMessage] =useState('')
    const navigate =useNavigate();

    useEffect(() => {
     const fetchData=async ()=>{
      try {
        const userRes=await API.get('/me');
        const playerRes=await API.get('/players');
        setUser(userRes.data);
        setPlayers(playerRes.data);
      } catch (error) {
        console.log(error)
        navigate('/login')
      }
     };

    fetchData();
    }, [navigate]);

    if (!user) return <div className="text-white p-6">Loading user data...</div>;

    const handleBuyClick = (playerId) => {
      navigate(`/buy/${playerId}`);
    };

    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-7">
        <motion.div className='text-green-400'
        initial={{opacity :0,x:200}}
        animate={{opacity:1 ,x:500}}
        ><h1> B {user.balence} </h1>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-10"
        >
          Hey Welcome {user.username}
        </motion.h1>


        /* All Players */
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4">All players</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {players.map(player => (
              <div key={player._id} className="bg-gray-800 rounded-xl p-4 shadow-md">
                <h3 className="text-xl font-bold">{player.name}</h3>
                <p className="text-sm">Team: {player.team}</p>
                <p className="text-sm mb-2">Price: ₹{player.price}</p>
                <button
                  onClick={() => handleBuyClick(player._id)}
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white font-semibold"
                >
                  Buy
                </button>
              </div>
            ))}
          </div>
        </motion.div>


        /* My Players */
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-semibold mb-4">Your Owned Players</h2>

          {user.players && user.players.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {user.players.map(player => (
                <motion.div 
                  key={player._id}
                  whileHover={{ scale: 1.05 }} 
                  className="bg-gray-700 p-4 rounded-xl shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-yellow-400">{player.name}</h3>
                  <p className="text-gray-300">Price: ₹{player.price}</p>
                  <button 
                    className="mt-3 bg-red-500 px-4 py-2 rounded hover:bg-red-400 transition"
                  >Sell</button>
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400">You haven't bought any players yet.</p>
          )}
        </motion.div>
      </div>
    );
};

export default UserDashboard;