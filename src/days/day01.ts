// Advent of Code - Day 1
import type { DaySolution } from '@/types';

const solution: DaySolution = {
  part1(input: string): number | string {
    const lines = input.trim().split('\n');
    let count = 0;

    let pointer = 50

    for (const line of lines) {
      const [command, ...distanceArr] = line.split('');
      let distance = Number(distanceArr.join(""))

      distance = distance % 100

      if (command === "L") {
        pointer = pointer - distance
      } else {
        pointer = pointer + distance
      }

      if (pointer < 0) {
        pointer = 100 + pointer
      } else if (pointer > 99) {
        pointer = pointer - 100
      }

      if (pointer === 0) {
        count++
      }
    }


    return count;
  },

  // 6305
  part2(input: string): number | string {
    const lines = input.trim().split('\n');
    let pointer = 50;
    let prevPointer = pointer
    let count = 0; 

    for (const line of lines) {
      const [command, ...distanceArr] = line.split('');
      let distance = Number(distanceArr.join(""));

      // let pointer = 0
      if (command === "L") {
        pointer = pointer - distance
      } else {
        pointer = pointer + distance
      }

      // How many times we rotated around the circle
      const fullRotations = Math.floor(pointer / 100);
      // Count how many full circles we made
      count += Math.abs(fullRotations);

      // Final position (0-99)
      pointer = pointer % 100;
      if (pointer < 0) {
        pointer += 100;
      }

      // Special case: moving left from position 0
      if (fullRotations < 0 && prevPointer === 0) {
        count -= 1;
      }

      // Special case: rotating forward and landing on 0
      if (fullRotations > 0 && pointer === 0) {
        count -= 1;
      }

      // Did we land on 0?
      if (pointer === 0) {
        count += 1;
      }

      prevPointer = pointer
    }

    return count;
  }
};

export default solution;