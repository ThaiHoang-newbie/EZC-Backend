const express = require('express');
const musicController = require('../controllers/musicController');
const router = express.Router();

router
  .route('/')
  .get(musicController.getAllMusic)
  .post(musicController.createNewMusic);

router
  .route('/:id')
  .get(musicController.getMusicByID)
  .put(musicController.updateMusicByID)
  .delete(musicController.deleteMusicByID);

module.exports = router;
