import type { Board, CellState, Difficulty } from "./types";
import random from "lodash/random";

export function getBoardSize(difficulty: Difficulty): [number, number] {
    switch (difficulty) {
        case "easy":
            return [8, 8];
        case "medium":
            return [16, 16];
        case "hard":
            return [99, 99];
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

export function getTileNeighbors(board: Board, x: number, y: number, difficulty: Difficulty): CellState[] {

    const [width, height] = getBoardSize(difficulty);

    const neighborCoords = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1], /* Current cell */ [0, 1],
        [1, -1], [1, 0], [1, 1],
    ];

    const neighbors: CellState[] = [];

    for (let i = 0; i < neighborCoords.length; i++) {
        const cords = neighborCoords[i];

        const [dx, dy] = cords;

        const nx = x + dx;
        const ny = y + dy;

        if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
            neighbors.push(board[ny][nx]);
        }
    }

    return neighbors;

}

export function generateBoard(difficulty: Difficulty): Board {

    const [width, height] = getBoardSize(difficulty);
    const mineCount = getMinesCount(difficulty);

    let board: Board = [];

    // Generate board

    for (let i = 0; i < height; i++) {
        board.push([]);
        for (let j = 0; j < width; j++) {
            board[i].push({
                adjacentMines: -1,
                isFlagged: false,
                isMine: false,
                isRevealed: false,
                id: i * width + j, // Assign a unique ID based on row and column
            });
        }
    }

    // Place mines

    for (let i = 0; i < mineCount; i++) {

        let mineCoords: {
            x: number,
            y: number,
        };

        // Find mine location

        do {

            mineCoords = {
                x: random(0, width - 1, false),
                y: random(0, height - 1, false),
            }

        } while (board[mineCoords.y][mineCoords.x].isMine);

        // Place mine

        board[mineCoords.y][mineCoords.x].isMine = true;

    }

    // Update board

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            let tile = board[i][j];

            // Find neighbors

            const neighbors = getTileNeighbors(board, j, i, difficulty);

            let mineNeighbors = 0;

            for (let k = 0; k < neighbors.length; k++) {

                let ntile = neighbors[k];

                if (ntile.isMine) mineNeighbors++;

            }

            tile.adjacentMines = mineNeighbors;

        }
    }

    return board;

}
