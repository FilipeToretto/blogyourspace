const firebase = require ('../firebase');
const create = ({name}) => { 
    const leads = firebase.database().ref('leads');
    leads.push()
};

module.exports = {
    create,
};
