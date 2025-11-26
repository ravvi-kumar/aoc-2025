#!/usr/bin/env bun

import { runDay } from '@/utils/dayRunner.js';
import { displayHeader, displayPartHeader, displayResult, displayError, displayProblemText } from '@/utils/displayUtils.js';

// Import all day solutions
import day1Solution from '@/days/day01.js';

const solutions = {
  1: day1Solution,
  // Add more days as you create them
  // 2: await import('@/days/day02.js'),
  // 3: await import('@/days/day03.js'),
};

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log('Usage: bun run src/index.ts <day> [options]');
    console.log('');
    console.log('Options:');
    console.log('  --example     Use example input instead of real input');
    console.log('  --problem     Show problem description');
    console.log('  --part1       Only run part 1');
    console.log('  --part2       Only run part 2');
    console.log('');
    console.log('Examples:');
    console.log('  bun run src/index.ts 1              # Run day 1 with real input');
    console.log('  bun run src/index.ts 1 --example    # Run day 1 with example input');
    console.log('  bun run src/index.ts 1 --problem    # Show problem and run day 1');
    return;
  }

  const day = parseInt(args[0]);
  if (isNaN(day) || day < 1 || day > 25) {
    console.error('Please provide a valid day number (1-25)');
    process.exit(1);
  }

  const useExample = args.includes('--example');
  const showProblem = args.includes('--problem');
  const runPart1 = !args.includes('--part2');
  const runPart2 = !args.includes('--part1');

  const solution = solutions[day as keyof typeof solutions];
  if (!solution) {
    console.error(`Day ${day} solution not found`);
    console.log('Available days:', Object.keys(solutions).join(', '));
    process.exit(1);
  }

  await runDay(day, solution, {
    useExample,
    showProblem,
    runPart1,
    runPart2
  });
}

main().catch(console.error);