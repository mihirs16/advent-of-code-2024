import { readFileSync } from 'fs';
import { join } from 'path';

function bruteForce () {
    const filePath = join(__dirname, './input.txt');
    const rawInput = readFileSync(filePath).toString();
    
    const arrs: [number[], number[]] = [[], []];
    for (const line of rawInput.split('\n')) {
        const nums = line.split('   ').map(s => parseInt(s)) as [number, number];
        arrs[0].push(nums[0]);
        arrs[1].push(nums[1]);
    }

    const countsFromRightList = new Map<number, number>();
    arrs[1].forEach(i => {
        const count = countsFromRightList.get(i) ?? 0;
        countsFromRightList.set(i, count + 1)
    });

    let totalSimilarity = 0;
    arrs[0].forEach(i => {
        const count = countsFromRightList.get(i) ?? 0;
        totalSimilarity += count * i;
    });

    return totalSimilarity;
}


function main () {
    console.log('brute force -> ', bruteForce());
}

main();