<template>
    <div>
        <div class="flex items-center flex-col gap-5">
            <h1>Supersweeper</h1>
            <h3 class="text-gray-300">A clone of the game minesweeper with a few extra features</h3>
            <div>
                <div class="grid grid-cols-8" v-for="row in board" :key="row.length">
                    <div v-for="tile in row" :key="tile.id">
                        <h2 class="bg-white text-black p-8 hover:bg-gray-400 border border-gray-700 hover:text-gray-50" :class="{red: tile.isMine}">
                            {{ tile.adjacentMines }}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { generateBoard } from "@/assets/ts/board";

const board = generateBoard("easy");

console.log(board);


</script>

<style lang="scss" scoped>

.red {
    background: red;
}


</style>
