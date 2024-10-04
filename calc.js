process.stdin.on('data', (chunk) =>{
    const input = chunk.toString().trim()

    if(input == 'q'){
        process.exit(0);
    }

    try{
        const value = eval(input)
        console.log(`${value}`)
        if (value == "Infinity"){
            console.log("0-val nem osztunk")
        }
    } catch {
        console.log('Nem tudom hogyan csináljam meg')
    }
    process.stdout.write('Írj be egy egyszerű műveletet: ');
})

process.stdout.write('Írj be egy egyszerű műveletet: ');