const express=require('express')
const router=express.Router();

const  {addPlayers ,getAllPlayer,getMyPlayers , buyPlayers,sellPlayers, }=require('../controllers/playerController');
const  {aunthenticates} =require('../middleware/routeProtecter');

router.post('/add', addPlayers)
router.get('/',getAllPlayer );
router.post('/trade/:id',aunthenticates,buyPlayers);
router.post('/trade/:id',aunthenticates,sellPlayers);
router.get('/myteam',aunthenticates,getMyPlayers);

module.exports=router
