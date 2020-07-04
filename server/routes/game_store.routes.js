const GameStoreController = require('../controllers/game_store.controller');

module.exports = function(app){
    app.post('/api/game', GameStoreController.createGame);
    app.get('/api/games', GameStoreController.getAllGames);
    app.get('/api/game/:id', GameStoreController.getGame);
    app.put('/api/game/:id/', GameStoreController.updateGame);
    app.delete('/api/game/:id', GameStoreController.deleteGame);
}