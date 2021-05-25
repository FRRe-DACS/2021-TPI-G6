//const axios = require('axios')

const { dataSet } = require('../utils')

const getById = (cuit) => {
    console.log("estoy en getById")
    const data = [];
    for (i in dataSet){

        if (dataSet[i]["infoEmpresa"]["cuit"] === parseInt(cuit)){ 
            data.push(dataSet[i]);
        } 
    }

    console.log(data);

    return {data};
}

const getAll = () => {
    const data = dataSet;
    return {data};

}

module.exports = {
    getById,
    getAll,
}


