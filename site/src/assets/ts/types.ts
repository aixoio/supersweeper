
export type Difficulty = "easy" | "medium" | "hard";
export interface CellState {
    isMine: boolean;
    isRevealed: boolean;
    isFlagged: boolean;
    adjacentMines: number;
    id: number;
    x: number;
    y: number;
};
export type Board = CellState[][];
