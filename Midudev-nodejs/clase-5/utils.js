// como leer un json en ESModules, recomendado
// import { createRequire } from 'node:module';
// const require =  createRequire(import.meta.url);
// const movies = require('./movies.json')
//--****


import { createRequire } from 'node:module';
const require =  createRequire(import.meta.url);

export const readJSON = (path) => require(path)