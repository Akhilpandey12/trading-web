const service = require('../services/playerServices')

const addPlayers = async (req, res) => {
    try {
        const player = await service.addPlayer(req.body);
        res.status(200).json(player);
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getAllPlayer = async (req, res) => {
    const players = await service.getAllPlayers();
    res.json(players)
}

const buyPlayers = async (req, res) => {
    try {
        const player = await service.buyPlayer(req.user.id, req.params.id);
        res.json({ message: 'bought player' }, player)
    }
    catch (error) { res.status(400).json({ error: error.message }) }
}

const sellPlayers = async (req, res) => {
    try {
        const player = await service.sellPlayer(req.user.id, req.params.id);
        res.json({ message: 'selled palyer' }, player)
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }


}
const getMyPlayers = async (req, res) => {
    const players = await service.getUserPlayers(req.user.id);
    res.json(players)
}

module.exports = { addPlayers, getAllPlayer, buyPlayers, sellPlayers, getMyPlayers }