import type { Difficulty } from "./types";

export function getBoardSize(difficulty: Difficulty): [number, number] {
    switch (difficulty) {
        case "easy":
            return [8, 8];
        case "medium":
            return [16, 16]
        case "hard":
            return [99, 99]
    }
}

export function getMinesCount(difficulty: Difficulty): number {
    switch (difficulty) {
        case "easy":
            return 10;
        case "medium":
            return 40;
        case "hard":
            return 99;
    }
}
