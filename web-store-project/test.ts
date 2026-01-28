import * as fs from 'fs';
import { Motherboard } from "./src/components/web-store/parts/mobo/MotherboardSelector"

const filePath = "./src/components/web-store/parts/json/mobo.json";

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    try {

        const jsonObject: Motherboard[] = JSON.parse(data);

        jsonObject.forEach(c => {
            if (c.price == null) {
                c.price = randomPrice(1, 250);
            };
            c.stock = Math.floor(Math.random() * 100) + 1;
        })



        const updatedJsonString = JSON.stringify(jsonObject, null, 2);

        fs.writeFile(filePath, updatedJsonString, (writeErr) => {
            if (writeErr) {
                console.error("Error writing file:", writeErr);
                return;
            }
            console.log('JSON file successfully updated!');
        });

    } catch (parseError) {
        console.error("Error parsing JSON:", parseError);
    }
});

function randomPrice(minDollars: number, maxDollars: number): number {
  const dollars = Math.floor(Math.random() * (maxDollars - minDollars + 1)) + minDollars;
  const cents = Math.floor(Math.random() * 100);
  return Number((dollars + cents / 100).toFixed(2));
}