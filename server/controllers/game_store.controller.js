const {Game} = require('../models/game_store.model');

module.exports.createGame = (request, response) => {
    const {  title, genre, price, description, image_url, image_url2 } = request.body;
    Game.create({
        title,
        genre,
        price,
        description,
        image_url,
        image_url2
    })
        .then(game => response.json(game))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllGames = (_request, response) => {
    Game.find({})
        .then(games => response.json(games))
        .catch(err => response.json(err))
}

module.exports.getGame = (request, response) => {
    Game.findById(request.params.id)
        .then(game => response.json(game))
        .catch(err => response.json(err))
}

module.exports.updateGame = (request, response) => {
    const { title, genre, price, description, image_url, image_url2 } = request.body;
    Game.findByIdAndUpdate(request.params.id, { title, genre, price, description, image_url, image_url2}, {new: true, runValidators: true})
        .then(updatedGame => response.json(updatedGame))
        .catch(err => response.status(400).json(err));
}

module.exports.deleteGame = (request, response) => {
    Game.findByIdAndDelete(request.params.id)
    .then(() => response.json({status: 'success'}))
    .catch(err => response.json(err))
}