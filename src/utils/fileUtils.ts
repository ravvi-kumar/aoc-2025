export async function readInput(
  day: number,
  useExample = false
): Promise<string> {
  const filename = useExample ? "example.txt" : "input.txt";
  const filePath = `${Bun.env.PWD}/data/day${day
    .toString()
    .padStart(2, "0")}/${filename}`;

  try {
    return await Bun.file(filePath).text();
  } catch (error) {
    console.error(`Could not read ${filename} for day ${day}:`, error);
    throw error;
  }
}

export async function readProblemText(day: number): Promise<string> {
  const filePath = `${Bun.env.PWD}/data/day${day
    .toString()
    .padStart(2, "0")}/problem.txt`;

  try {
    return await Bun.file(filePath).text();
  } catch (error) {
    console.error(`Could not read problem.txt for day ${day}:`, error);
    throw error;
  }
}
