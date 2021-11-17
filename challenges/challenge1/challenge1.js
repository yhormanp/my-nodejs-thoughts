// try to get information from a file, read it and group that information 
// according to the currency

// using promises

// read the file

const { group } = require('console');
const fs = require('fs');

const getData = async() => {
    const url_data = __dirname + '/data.json';
    //or const url_data = path.resolve(__dirname, 'data.json')
    const data = await fs.promises.readFile(url_data, 'utf8');
    return data;
}

const groupTransactions = (transactionsArray) => {
    const groupedTransactions = JSON.parse(transactionsArray).reduce((total, currentValue)=> {
        const existentValue = total[currentValue[0]];
        if(currentValue[1] === 'buy'){
            total[currentValue[0]] =existentValue ? [existentValue[0] + currentValue[2] , existentValue[1]] : [currentValue[2], 0];
        } else if (currentValue[1] === 'sell'){
            total[currentValue[0]] = existentValue ? [ existentValue[0], existentValue[1] + currentValue[2]] : [0, currentValue[2] ];
        }
    
        return total;
    
    },{})

    return groupedTransactions;
}



async function main (){
    const transactions = await getData();
    const groupedInfo = groupTransactions(transactions)

    console.log(groupedInfo);
}


main()



