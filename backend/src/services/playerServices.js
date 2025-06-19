
const Player = require('../models/players')
const User = require('../models/user')



const addPlayer = async ({ name, team, price }) => {
    if (!name || !team || !price) throw new Error('missing field');

    const player = new player({ name, team, price })
    return await player.save();
};



const getAllPlayers = async () => {
    return await Player.find();

}

const buyPlayer = async () => {
    const user = await User.findById(userId).populate('players');
    const player = await Player.findById(playerId);

    if (!player) throw new error("player not found");

    if (user.playerId.some(p => p.id === player.id)) throw new error("already owned")

    if (user.balence < player.balence) throw new error("not enough balance")

    user.players.push(player._id);
    user.balence -= player.price

    await user.save();
    return player;
}

const sellPlayer = async (userId, playerId) => {
    const user = await User.findById(userId).populate('player')
    const player = await Player.findById(playerId)

    if (!player) throw new Error('player not found')

    const isOwned = user.players.some(p => p.id === player.id);
    if (!isOwned) throw new Error('player not found')

    user.players = user.players.filter(p => p.id === player.id)
    user.balence += player.price

    await user.save();
    return player;


}

const getUserPlayers = async () => {
    const user = await User.findById(userId).populate('players')
    return user.players
}

module.exports = { getAllPlayers, buyPlayer, sellPlayer, getUserPlayers, addPlayer }