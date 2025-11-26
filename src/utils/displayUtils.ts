import chalk from 'chalk';

export function displayHeader(day: number, useExample: boolean) {
  console.log(chalk.bold.blue(`\n🎄 Advent of Code - Day ${day} ${useExample ? '(Example)' : ''} 🎄`));
  console.log(chalk.gray('─'.repeat(50)));
}

export function displayPartHeader(part: 1 | 2) {
  console.log(chalk.bold.yellow(`\nPart ${part}:`));
}

export function displayResult(result: number | string, useExample: boolean) {
  const prefix = useExample ? 'Example result' : 'Result';
  console.log(chalk.green(`✅ ${prefix}: ${result}`));
}

export function displayError(error: Error, part: 1 | 2) {
  console.log(chalk.red(`❌ Error in Part ${part}: ${error.message}`));
}

export function displayProblemText(text: string) {
  console.log(chalk.cyan('\n📖 Problem Description:'));
  console.log(chalk.gray(text));
}