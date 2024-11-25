const expressPost = require('express'); 
const corsPost = require('cors'); 

const routerPost = expressPost.Router();
const bodyParser = require('body-parser');

// Parametros para cargar fotos grandes y evitar el CROSS
routerPost.use(bodyParser.json({ limit: '50mb' }));
routerPost.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
routerPost.use(corsPost());
routerPost.use(expressPost.json());

// // Utils para cargar fotos
const loadAllPost = require('../../utils/Post/LoadAllPost');
const loadOnePost = require('../../utils/Post/LoadOnePost');


routerPost.get('/loadAllPost', (req,res) => loadAllPost(req, res));
routerPost.get('/loadOneBy/:id', (req,res) => loadOnePost(req, res))

module.exports = routerPost;