import fs from 'fs'
import path from 'path'

const menusDirectory = path.join(process.cwd(), 'food_menus');

export function getFoodMenuData() {
    //Get file names under /food_menus
    const fileNames = fs.readdirSync(menusDirectory);
    const allFoodMenuData = fileNames.map((fileName) => {
        // Remove ".json" from file name to get id
        const id = fileName.replace(/\.json$/, '');

        // Read json file
        const fullPath = path.join(menusDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath)

        const jsonData = JSON.parse(fileContents)

        return {
            id,
            ...jsonData
        };
    });

    return allFoodMenuData.sort((a,b)=>a.items[0].nr - b.items[0].nr)
}