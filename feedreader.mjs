import { getLinks, saveLinks } from './feed-manager.mjs'
import { close, question } from './rl.mjs'

const feeds = await getLinks()

let input =  await question('Írj be egy parancsot (list, add, del, read, save/quit(s/q)): ')

while (input != 's/q'){
    let cmdParts = input.trim().split(' ')
    let cmd = cmdParts[0]
    if (cmd == 'list'){
        feeds.forEach((url, index) => console.log(`${index}\t${url}`))
    }
    if(cmd == 'add'){
        if(cmdParts.length < 2 || cmdParts == ".help"){
            console.log('Kérlek add meg az "url"-t az "add" parancs segítségével és a "https://" nélkül')
        }else{
            feeds.push("https://" + cmdParts[1])
        }
    }


    
    input = await question('Írj be egy parancsot (list, add, del, read, save/quit(s/q)): ')
}

await saveLinks(feeds)
close()