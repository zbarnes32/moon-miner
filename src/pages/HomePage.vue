<script setup>
import { computed, ref } from 'vue';
import { AppState } from '../AppState.js';
import { collectOreService } from '../services/CollectOreService.js';


const upgrades = computed(() => AppState.upgrades)

const counter = ref(0)

function increaseCounter(){
    counter.value++
}

const collectedOre = computed(() => {
    let total = 0
    upgrades.value.forEach(upgrade => {
        total += upgrade.quantity * upgrade.multiplier
    })
    return total
})

function mining() {
    // collectOreService.mining()
}
</script>

<template>
    <section class="container-fluid">
        <div class="row">
            <div class="col-12 d-flex justify-content-between">
                <div class="stats text-light">
                    <h1 class="text-center">Stats</h1>
                    <h3>Total Collected Ore: {{ counter }}</h3>
                    <h5>Ore/Click: 0</h5>
                    <h5>Ore/Second: 0</h5>
                </div>
                <div class="text-light text-center">
                    <h1 class="upgrades">Upgrades</h1>
                    <div v-for="upgrade in upgrades" :key="upgrade.name" class="d-flex justify-content-between">
                        <p class="fs-5">
                            <button class="btn btn-success px-2 m-1">Buy <span>{{'$' + upgrade.price }}</span></button>
                            <span class="mx-1">{{ upgrade.name }}</span> 
                            <span class="mx-1">{{ upgrade.picture }}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="container-fluid">
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                <div class="align-items-center">
                    <button @click="increaseCounter()" class="btn btn-light">Mine</button>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">

</style>