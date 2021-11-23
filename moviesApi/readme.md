el comando npm init -y para crear el respectivo package.json

se crearon los siguientes scripts en ese package.json
 "dev": "DEBUG=app:* nodemon index",
 "start": "NODE_ENV=production node index"

se instaló los paquetes express y dotenv como dependencias de producción
npm i express dotent

se crearon los archivos de configuración para eslint con el nombre .eslintrc.json:
{
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "extends": ["eslint:recommended", "prettier"],
    "env": {
        "es6": true,
        "node": true, 
        "mocha": true
    },
    "rules": {
        "no-console": "warn"
    }

}

se creó el archivo de configuración para prettier con el nombre .prettierrc.json ( formatea el código bajo las siguientes condiciones)

{
    "tabWidth": 2,
    "semi": true, // uso de punto y coma
    "singleQuote": true
}

se instaló los paquetes, nodemon, eslint, eslint-config-prettier, eslint-plugin-prettier, prettier como dependencias de desarrrollo

npm i -D eslint eslint-config-prettier eslint-plugin-prettier prettier


vamos a crear un hook, para que haga el formateo automatico cada vez que se hace commit y se sube al repositorio
npx mrm lint-staged

instalamos el paquete mongo db

instalamos dependencias para las pruebas 
Mocha: correr los test
supertest: utilidad que nos ayuda a levantar un servidor temporal
sinon: nos ayuda  a hacer mocks para test
proxyquire: nos ayuda a implementar los mocks cuando se requiran
npm i -D mocha supertest sinon proxyquire 
