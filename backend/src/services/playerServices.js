
const Player = require('../models/players')
const User = require('../models/user')


// add new players
const addPlayer = async ({ name, team, price }) => {
    if (!name || !team || !price) throw new Error('missing field');

    const player = new Player({ name, team, price })
    return await player.save();
};


// get all players
const getAllPlayers = async () => {
    return await Player.find();

}

// buy players
const buyPlayer = async (userId, playerId) => {
    const user = await User.findById(userId).populate('players');
    if (!user) throw new Error('user not found')

    const player = await Player.findById(playerId);
    if (!player) throw new Error('player not found')

    if (!player) throw new Error('Player not found');
    //   if (user.players.some(p => p.id === player.id)) throw new Error('Already owned');
    if (user.balance < player.price) throw new Error('Not enough balance');

    user.players.push(player._id);

 
    user.balence = user.balence - player.price
   

     await user.save();
     return player;




 };



// sell players
const sellPlayer = async (userId, playerId) => {
    const user = await User.findById(userId).populate('players')
    const player = await Player.findById(playerId)

    if (!player) throw new Error('player not found')

    const isOwned = user.players.some(p => p.id === player.id);
    if (!isOwned) throw new Error('player not found')

    user.players = user.players.filter(p => p.id === player.id)
    user.balence += player.price

    await user.save();
    return player;


}

// get my players
const getUserPlayers = async (userId) => {

    const user = await User.findById(userId).populate('players')
    if (!user) throw new Error('User not found');
    return user.players
}

module.exports = { getAllPlayers, buyPlayer, sellPlayer, getUserPlayers, addPlayer }