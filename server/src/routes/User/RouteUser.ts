const expressUser = require('express'); 
const corsUser = require('cors'); 

const routerUser = expressUser.Router();
const bodyParserUser = require('body-parser');

// Parametros para cargar fotos grandes y evitar el CROSS
routerUser.use(bodyParserUser.json({ limit: '50mb' }));
routerUser.use(bodyParserUser.urlencoded({ limit: '50mb', extended: true }));
routerUser.use(corsUser());
routerUser.use(expressUser.json());


const registerUser = require('../../utils/User/RegisterUser');
const logginUser = require('../../utils/User/LogginUser');

routerUser.post('/loggin', (req,res) => logginUser(req, res));

module.exports = routerUser;