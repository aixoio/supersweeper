<template>
    <div>
        <div class="flex items-center flex-col gap-5">
            <h1>Supersweeper</h1>
            <h3 class="text-gray-300">A clone of the game minesweeper with a few extra features</h3>
            <div>
                <div class="grid grid-cols-8" v-for="row in board" :key="row[0].id">
                    <div v-for="tile in row" :key="tile.id">
                        <h2 class="bg-white text-black p-8 hover:bg-gray-400 border border-gray-700 hover:text-gray-50"
                            :class="{ red: tile.isMine }" @click="handleClickElem(tile)" @click.right.prevent="handleClickRightElem(tile)">
                            <span v-if="tile.isRevealed">
                                {{ tile.adjacentMines }}
                            </span>
                            <span v-else-if="tile.isFlagged && !tile.isRevealed">
                                🚩
                            </span>
                            <span v-else>
                                ?
                            </span>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { generateBoard, handleClick, hasWon } from "../assets/ts/board";
import type { CellState } from "../assets/ts/types";
import { ref } from "vue";

const board = ref(generateBoard("easy"));

const handleClickElem = (tile: CellState) => {
    if (tile.isFlagged) return;
    tile.isRevealed = true;
    handleClick(tile, board.value, "easy");
    if (tile.isMine) alert("Dead");
    if (hasWon(board.value)) {
        alert("Yay");
    }
}

const handleClickRightElem = (tile: CellState) => {
    tile.isFlagged = !tile.isFlagged;
}


</script>

<style lang="scss" scoped>
.red {
    background: red;
}
</style>
