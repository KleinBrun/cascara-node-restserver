const { response, request } = require("express");

const userGet = (req = request, res = response) => {
    const { q, name, apikey = 'No ApiKey',page=1 } = req.query;
    res.json({
        msg: 'get API - Controlador',
        q,
        name,
        apikey,
        page
    });
}

const userPost = (req, res = response) => {
    const { nombre, edad } = req.body;
    res.status(201).json({
        msg: 'post API - Controlador',
        nombre,
        edad
    });
}

const userPut = (req, res = response) => {
    const { id } = req.params;
    res.json({
        msg: 'put API - Controlador',
        id
    });
}

const userPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - Controlador'
    });
}

const userDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - Controlador'
    });
}



module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete,
    userPatch
}