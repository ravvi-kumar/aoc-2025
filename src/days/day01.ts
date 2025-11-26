// Advent of Code - Day 1
import type { DaySolution } from '@/types';

const solution: DaySolution = {
  part1(input: string): number | string {
    const lines = input.trim().split('\n');
    console.log("lines",lines)
    let sum = 0;

    for (const line of lines) {
      const digits = line.match(/\d/g);
      if (digits && digits.length > 0) {
        const first = digits[0];
        const last = digits[digits.length - 1];
        const number = parseInt(first + last);
        sum += number;
      }
    }

    return sum;
  },

  part2(input: string): number | string {
    // For now, return same as part 1 - can be extended later
    return this.part1(input);
  }
};

export default solution;