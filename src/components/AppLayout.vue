<script setup lang="ts">
import TheNavbar from "./TheNavbar.vue";
</script>

<template>
    <div class="bg-gradient-to-r from-[#8ae08a] via-[#76eccf] to-[#75cbeb] bg-[length:400%_400%] animate-gradient h-full w-full">
        <TheNavbar />
        <main class="pt-20">
            <router-view />
        </main>
    </div>
</template>