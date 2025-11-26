# Advent of Code

A modern Advent of Code setup using Bun with TypeScript.

## Setup

1. Install dependencies:
   ```bash
   bun install
   ```

2. Initialize a new day:
   ```bash
   bun run src/day.ts init 1
   ```

## Usage

### Running Solutions

#### Method 1: Using the main runner
```bash
bun run src/index.ts <day> [options]
```

Examples:
```bash
bun run src/index.ts 1              # Run day 1 with real input
bun run src/index.ts 1 --example    # Run day 1 with example input
bun run src/index.ts 1 --problem    # Show problem and run day 1
bun run src/index.ts 1 --part1      # Run only part 1
```

#### Method 2: Using the day helper (recommended)
```bash
bun run src/day.ts <command> [day] [options]
```

Commands:
```bash
bun run src/day.ts init 1           # Create files for day 1
bun run src/day.ts run 1            # Run day 1 with real input
bun run src/day.ts run 1 --example  # Run day 1 with example input
bun run src/day.ts problem 1        # Show problem text for day 1
```

### File Structure

```
aoc/
├── src/
│   ├── days/           # Daily solution files
│   │   └── day01.ts    # Solution for day 1
│   ├── utils/          # Shared utilities
│   │   ├── dayRunner.ts   # Day execution logic
│   │   ├── fileUtils.ts   # File reading utilities
│   │   └── displayUtils.ts # Display/formatting utilities
│   ├── types/          # TypeScript types
│   └── index.ts        # Main runner script
├── data/
│   └── day01/          # Data files for day 1
│       ├── input.txt      # Your puzzle input
│       ├── example.txt    # Example input from AoC
│       └── problem.txt    # Problem description (optional)
├── package.json
├── tsconfig.json
└── README.md
```

### Creating a New Day

1. Initialize day files:
   ```bash
   bun run src/day.ts init 5
   ```

2. Add your puzzle input to `data/day05/input.txt`

3. Add example input to `data/day05/example.txt`

4. Copy problem description to `data/day05/problem.txt` (optional)

5. Implement your solution in `src/days/day05.ts`

6. Run with:
   ```bash
   bun run src/day.ts run 5
   ```

### Solution Template

Each day solution follows this structure:

```typescript
import type { DaySolution } from '@/types';

const solution: DaySolution = {
  part1(input: string): number | string {
    // Your solution for part 1 here
    return result;
  },

  part2(input: string): number | string {
    // Your solution for part 2 here
    return result;
  }
};

export default solution;
```

## Features

- ✅ Easy day setup with template generation
- ✅ Separate files for input, example, and problem text
- ✅ Beautiful colored output with chalk
- ✅ Run example or real input with simple flags
- ✅ TypeScript with proper type definitions
- ✅ Fast execution with Bun
- ✅ Individual part execution for debugging
- ✅ Shared utilities for common operations