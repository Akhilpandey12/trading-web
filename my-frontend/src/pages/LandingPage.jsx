import { motion } from 'framer-motion';

// Home.jsx
const LandingPage = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black text-white">
      
      
      /* Hero Section */
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center h-screen px-6 text-center"
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-wide mb-6">
          Welcome to <span className="text-green-400">CRICK T</span>
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl text-gray-300">
          Your one-stop fantasy trading platform where cricket meets the stock market! Buy, sell, and trade cricket players based on performance, demand, and market trends. Experience the thrill of strategy, prediction, and competition.
        </p>
      </motion.div>



      /* Features Section */
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="px-6 py-20 bg-gradient-to-b from-gray-900 to-black text-center"
      >
        <h2 className="text-4xl font-bold mb-10">Why CRICK T?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-3 text-green-400">Real-Time Player Market</h3>
            <p>Track live performance and popularity of players to buy or sell at the right time. Dynamic pricing keeps the market competitive.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-3 text-green-400">Strategic Trading</h3>
            <p>Just like stocks, you need timing, analysis, and smart moves. Build your dream squad and maximize your portfolio value.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-3 text-green-400">Compete with Others</h3>
            <p>Join tournaments, compete on leaderboards, and show off your cricket IQ. Be the best manager in the fantasy trading world.</p>
          </motion.div>
        </div>
      </motion.div>


      /* CTA Section */
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="px-6 py-16 text-center bg-gradient-to-b from-black to-gray-900"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Play the Cricket Stock Market?</h2>
        <p className="text-lg max-w-xl mx-auto text-gray-300 mb-6">
          Sign up now to start building your fantasy team, trading your favorite players, and rising to the top of the leaderboard.
        </p>
        <div className="flex justify-center gap-4">
          <a href="/register">
            <button className="bg-green-500 px-6 py-3 text-lg rounded-xl font-semibold hover:bg-green-400 transition">Get Started</button>
          </a>
          <a href="/market">
            <button className="border border-green-500 px-6 py-3 text-lg rounded-xl font-semibold hover:bg-green-500 hover:text-black transition">Explore Marketplace</button>
          </a>
        </div>
      </motion.div>
    </div>
  );
};
export default LandingPage;