#!/usr/bin/env bun

import { runDay } from '@/utils/dayRunner.js';
import { readProblemText } from '@/utils/fileUtils.js';
import { displayProblemText } from '@/utils/displayUtils.js';

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log('Usage: bun run src/day.ts <command> [day] [options]');
    console.log('');
    console.log('Commands:');
    console.log('  init <day>     Create files for a new day');
    console.log('  run <day>      Run a specific day');
    console.log('  problem <day>  Show problem text for a day');
    console.log('');
    console.log('Options for "run":');
    console.log('  --example     Use example input instead of real input');
    console.log('  --part1       Only run part 1');
    console.log('  --part2       Only run part 2');
    return;
  }

  const command = args[0];

  if (command === 'init') {
    if (args.length < 2) {
      console.error('Please provide a day number: bun run src/day.ts init <day>');
      process.exit(1);
    }

    const day = parseInt(args[1]);
    if (isNaN(day) || day < 1 || day > 25) {
      console.error('Please provide a valid day number (1-25)');
      process.exit(1);
    }

    await initDay(day);
  } else if (command === 'run') {
    if (args.length < 2) {
      console.error('Please provide a day number: bun run src/day.ts run <day>');
      process.exit(1);
    }

    const day = parseInt(args[1]);
    if (isNaN(day) || day < 1 || day > 25) {
      console.error('Please provide a valid day number (1-25)');
      process.exit(1);
    }

    const useExample = args.includes('--example');
    const runPart1 = !args.includes('--part2');
    const runPart2 = !args.includes('--part1');

    // Dynamic import of the day solution
    const solutionPath = `./days/day${day.toString().padStart(2, '0')}.js`;
    try {
      const solution = await import(solutionPath);
      await runDay(day, solution.default, {
        useExample,
        runPart1,
        runPart2
      });
    } catch (error) {
      console.error(`Could not load solution for day ${day}:`, error);
      console.log(`Make sure ${solutionPath} exists`);
      process.exit(1);
    }
  } else if (command === 'problem') {
    if (args.length < 2) {
      console.error('Please provide a day number: bun run src/day.ts problem <day>');
      process.exit(1);
    }

    const day = parseInt(args[1]);
    if (isNaN(day) || day < 1 || day > 25) {
      console.error('Please provide a valid day number (1-25)');
      process.exit(1);
    }

    try {
      const problemText = await readProblemText(day);
      displayProblemText(problemText);
    } catch (error) {
      console.error(`Could not read problem text for day ${day}:`, error);
    }
  } else {
    console.error(`Unknown command: ${command}`);
    console.log('Available commands: init, run, problem');
    process.exit(1);
  }
}

async function initDay(day: number) {
  const fs = await import('fs/promises');
  const path = await import('path');

  const dayDir = path.join(process.cwd(), 'data', `day${day.toString().padStart(2, '0')}`);
  const dayFile = path.join(process.cwd(), 'src', 'days', `day${day.toString().padStart(2, '0')}.ts`);

  // Create data directory
  await fs.mkdir(dayDir, { recursive: true });

  // Create empty input files
  await fs.writeFile(path.join(dayDir, 'input.txt'), '');
  await fs.writeFile(path.join(dayDir, 'example.txt'), '');
  await fs.writeFile(path.join(dayDir, 'problem.txt'), '');

  // Create solution template
  const template = `// Advent of Code - Day ${day}
import type { DaySolution } from '@/types';

const solution: DaySolution = {
  part1(input: string): number | string {
    // Your solution for part 1 here
    return input;
  },

  part2(input: string): number | string {
    // Your solution for part 2 here
    return input;
  }
};

export default solution;
`;

  await fs.writeFile(dayFile, template);

  console.log(`✅ Created files for Day ${day}:`);
  console.log(`   - ${dayFile}`);
  console.log(`   - ${path.join(dayDir, 'input.txt')}`);
  console.log(`   - ${path.join(dayDir, 'example.txt')}`);
  console.log(`   - ${path.join(dayDir, 'problem.txt')}`);
  console.log('');
  console.log(`Next steps:`);
  console.log(`1. Add your puzzle input to ${path.join(dayDir, 'input.txt')}`);
  console.log(`2. Add example input to ${path.join(dayDir, 'example.txt')}`);
  console.log(`3. Copy problem description to ${path.join(dayDir, 'problem.txt')}`);
  console.log(`4. Implement your solution in ${dayFile}`);
  console.log(`5. Run with: bun run src/day.ts run ${day}`);
}

main().catch(console.error);