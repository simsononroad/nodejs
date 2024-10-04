const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function question(){
    rl.question('Adj meg egy sima egyenletet: ', (input) =>{
        if(input == 'q'){
            rl.close();
        }else{
            try{
                const value = eval(input)
                console.log(`${value}`)
                if (value == "Infinity"){
                    console.log("0-val nem osztunk")
                }
            } catch {
                console.log('Nem tudom hogyan csináljam meg')
            }
            question()
        }
    })
}

question();
