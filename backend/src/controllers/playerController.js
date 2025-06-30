const service = require('../services/playerServices')


// add new players
const addPlayers = async (req, res) => {
    try {
        const player = await service.addPlayer(req.body);
        res.status(200).json(player);
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// get all players
const getAllPlayer = async (req, res) => {
    const players = await service.getAllPlayers();
    res.json(players)
}

// buy players
const buyPlayers = async (req, res) => {
    try {
        // console.log("req-user",req.user)
        // console.log("params",req.params)
        const player = await service.buyPlayer(req.user.userId, req.params.id);

        res.json({ message: 'Bought player', player });
    }
    catch (error) { res.status(400).json({ error: error.message }) }
}


// sell players
const sellPlayers = async (req, res) => {
    try {
        const player = await service.sellPlayer(req.user.userId, req.params.id);
        res.json({ message: 'selled palyer' }, player)
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//get my players
const getMyPlayers = async (req, res) => {

    const players = await service.getUserPlayers(req.user.userId);

    res.json(players)
}

module.exports = { addPlayers, getAllPlayer, buyPlayers, sellPlayers, getMyPlayers }