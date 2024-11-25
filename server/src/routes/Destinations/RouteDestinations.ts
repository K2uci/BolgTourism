const expressDestination = require('express'); 
const corsDestination = require('cors'); 

const routerDestination = expressDestination.Router();
const bodyParserDestination = require('body-parser');

// Parametros para cargar fotos grandes y evitar el CROSS
routerDestination.use(bodyParserDestination.json({ limit: '50mb' }));
routerDestination.use(bodyParserDestination.urlencoded({ limit: '50mb', extended: true }));
routerDestination.use(corsDestination());
routerDestination.use(expressDestination.json());

// // Utils para cargar fotos
const loadAllDestination = require('../../utils/Desinations/LoadAllDestinations');

routerDestination.get('/loadAllDestinations/', (req,res) => loadAllDestination(req, res));


module.exports = routerDestination;