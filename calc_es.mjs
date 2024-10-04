import * as readline from 'readline'
import { stdin as input, stdout as output } from 'process'

const rl = readline.createInterface({ input, output }); 


function question(query) {
    return new Promise(resolve => {
        rl.question(query, resolve)
    })
}


let answer = await question('Adj meg egy sima műveletet: ')

while (answer != 'q'){
    try{
        const value = eval(input)
        console.log(`${value}`)
        if (value == "Infinity"){
            console.log("0-val nem osztunk")
        }
    } catch(exception) {
        console.log('Nem tudom hogyan csináljam meg')
    }

    answer = await question('Adj meg egy sima műveletet: ')
}
rl.close()