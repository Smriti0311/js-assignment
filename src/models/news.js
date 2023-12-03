const mysql = require('../lib/mysql');

const getAllNews = async () => {
    const statement = 'select * from news;';
    const parameters = [];
    return await mysql.query(statement, parameters);
}

module.exports = {
    getAllNews: getAllNews
}