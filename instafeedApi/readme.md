el comando npm init -y para crear el respectivo package.json

se crearon los siguientes scripts en ese package.json
 "dev": "DEBUG=app:* nodemon index",
 "start": "NODE_ENV=production node index"

se instaló los paquetes express y dotenv como dependencias de producción
npm i express dotenv nodemon

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

npm i -D eslint eslint-config-prettier eslint-plugin-prettier prettier nodemon

se genera un nuevo .gitinore a partir de la pagina gitignore.io, donde se le pasan los valores node, linux, mac, windows

se generan las rutas de articles, con una funcion que recibe el app y lo asocia con el router generado

se genera informaición de ejemplo de la pagina mockaroos

se empiezan a crear los schemas , con mongoose
se instala la dependencia de prod de mongoose  npm i mongoose