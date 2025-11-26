export interface DayResult {
  part1: number | string;
  part2: number | string;
}

export interface DayInput {
  input: string;
  example: string;
  problem: string;
}

export interface DaySolution {
  part1(input: string): number | string;
  part2(input: string): number | string;
}

export type DayRunner = (input: string) => number | string;