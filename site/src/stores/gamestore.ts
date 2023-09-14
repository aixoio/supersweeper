import type { Difficulty } from "@/assets/ts/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useGameStore = defineStore("game-store", () => {

    const difficulty = ref("medium" as Difficulty);

    return {
        difficulty,
    }

})
