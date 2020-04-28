/* Dans cette partie on permet à la variable mongoURI d'etre globale dbpassword definit l'acces notre BD mongoDB en ligne c'est le lien SRV
*/


dbPassword = 'mongodb+srv://acces:'+ encodeURIComponent('acces2019') + '@dbdame-tlsv3.mongodb.net/test?retryWrites=true&w=majority';

module.exports = {
    mongoURI: dbPassword
};
