const express=require('express')
const router=express.Router();

const  {addPlayers ,getAllPlayer,getMyPlayers , buyPlayers,sellPlayers, }=require('../controllers/playerController');
const  {aunthenticates} =require('../middleware/routeProtecter');


// routes 
router.post('/add',aunthenticates, addPlayers)
router.get('/',getAllPlayer );
router.post('/buy/:id',aunthenticates,buyPlayers);
router.post('/sell/:id',aunthenticates,sellPlayers);
router.get('/myteam',aunthenticates,getMyPlayers);

module.exports=router
