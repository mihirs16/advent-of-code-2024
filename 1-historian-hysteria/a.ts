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

    arrs[0] = arrs[0].sort();
    arrs[1] = arrs[1].sort();

    let totalDistance = 0;
    for (let i = 0; i < arrs[0].length; i++) {
        totalDistance += Math.abs(arrs[0][i] - arrs[1][i]);
    }
    
    return totalDistance;
}

function main () {
    console.log('brute force -> ', bruteForce());
}

main();