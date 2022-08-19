import * as fs from 'fs';

const fsPromises = fs.promises;

export class FileWriter {
    static async writeResults(results: any[], file: string){
        console.log("Saving:", file, "results:", results.length);
        const fileHandler = await fsPromises.open(`out/${file}`, 'w');
        if (results && results.length > 0){
            await fileHandler.write('[')
            for (let index = 0; index < results.length; index++) {
                const result = results[index];
                await fileHandler.writeFile(JSON.stringify(result));

                if (index < results.length - 1){
                    await fileHandler.write(',');
                }
            }
            await fileHandler.write(']');
        }

        await fileHandler.close();
    }
}