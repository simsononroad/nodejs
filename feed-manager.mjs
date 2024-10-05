import { dirname, join } from 'path';
import { fileURLToPath } from 'url'
import { access, constants, readFile, writeFile } from 'fs/promises'


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const jsonfile = join(__dirname, 'feeds.json')

export async function getLinks() {
    try{
        await access(jsonfile, constants.F_OK)
    }catch (error){
        await writeFile(jsonfile, JSON.stringify([]))
    }

    const content = await readFile(jsonfile, { encoding: 'utf8'})
    return JSON.parse(content)
    
}

export async function saveLinks(links) {
    await writeFile(jsonfile, JSON.stringify(links))
}

console.log(jsonfile)