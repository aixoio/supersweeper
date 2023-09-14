
export type Difficulty = "easy" | "medium" | "hard";
export interface CellState {
    isMine: boolean;
    isRevealed: boolean;
    isFlagged: boolean;
    adjacentMines: number;
    id: number;
};
export type Board = CellState[][];
