import type { DaySolution } from "@/types";
import { readInput, readProblemText } from "./fileUtils.js";
import {
  displayHeader,
  displayPartHeader,
  displayResult,
  displayError,
  displayProblemText,
} from "./displayUtils.js";
import chalk from "chalk";

export async function runDay(
  day: number,
  solution: DaySolution,
  options: {
    useExample?: boolean;
    showProblem?: boolean;
    runPart1?: boolean;
    runPart2?: boolean;
  } = {}
) {
  const {
    useExample = false,
    showProblem = false,
    runPart1 = true,
    runPart2 = true,
  } = options;

  displayHeader(day, useExample);

  if (showProblem) {
    try {
      const problemText = await readProblemText(day);
      displayProblemText(problemText);
    } catch (error) {
      console.log(chalk.yellow("⚠️  Problem text not available"));
    }
  }

  const input = await readInput(day, useExample);

  if (runPart1) {
    displayPartHeader(1);
    try {
      const result = solution.part1(input.trim());
      displayResult(result, useExample);
    } catch (error) {
      displayError(error as Error, 1);
    }
  }

  if (runPart2) {
    displayPartHeader(2);
    try {
      const result = solution.part2(input.trim());
      displayResult(result, useExample);
    } catch (error) {
      displayError(error as Error, 2);
    }
  }
}
