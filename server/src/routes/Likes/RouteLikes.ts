const expressLike = require('express'); 
const corsLike = require('cors'); 

const routerLike = expressLike.Router();
const bodyParserLike = require('body-parser');

// Parametros para cargar fotos grandes y evitar el CROSS
routerLike.use(bodyParserLike.json({ limit: '50mb' }));
routerLike.use(bodyParserLike.urlencoded({ limit: '50mb', extended: true }));
routerLike.use(corsLike());
routerLike.use(expressLike.json());


const readLike = require('../../utils/Likes/ReadLikeById');
const createLike = require('../../utils/Likes/CreateLike');
const deleteLike = require('../../utils/Likes/DeleteLike');


routerLike.get('/likeFor/:id', (req,res) => readLike(req, res));
routerLike.get('/createLike/:pid/:uid', (req,res) => createLike(req, res));
routerLike.get('/deleteLike/:pid/:uid', (req,res) => deleteLike(req, res));

module.exports = routerLike;