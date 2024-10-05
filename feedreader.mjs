import { getLinks, saveLinks } from './feed-manager.mjs'
import { close, question } from './rl.mjs'

const feeds = await getLinks()

let input =  await question('Írj be egy parancsot (list, add, del, read, save/quit): ')

while (input != 'save/quit'){
    let cmdParts = input.trim().split(' ')
    let cmd = cmdParts[0]
    if (cmd == 'list'){
        feeds.forEach((url, index) => console.log(`${index}\t${url}`))
    }
    if(cmd == 'add'){
        if(cmdParts.length < 2){
            console.log('Kérlek add meg az "url"-t az "add" parancs segítségével')
        }else{
            feeds.push(cmdParts[1])
        }
    }


    
    input = await question('Írj be egy parancsot (list, add, del, read, save/quit): ')
}

await saveLinks(feeds)
close()