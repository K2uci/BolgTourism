const expressComment = require('express'); 
const corsComment = require('cors'); 

const routerComment = expressComment.Router();
const bodyParserComment = require('body-parser');

// Parametros para cargar fotos grandes y evitar el CROSS
routerComment.use(bodyParserComment.json({ limit: '50mb' }));
routerComment.use(bodyParserComment.urlencoded({ limit: '50mb', extended: true }));
routerComment.use(corsComment());
routerComment.use(expressComment.json());

// // Utils para cargar fotos
const loadAllComment = require('../../utils/Comment/LoadAllComment');
const createComment = require('../../utils/Comment/CreateComment')

routerComment.get('/loadAllCommentById/:id', (req,res) => loadAllComment(req, res));
routerComment.post('/createCommet/:id', (req,res) => createComment(req, res));


module.exports = routerComment;