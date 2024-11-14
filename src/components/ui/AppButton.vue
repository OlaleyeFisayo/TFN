<template>
    <button class="app-button" :style="styleSheet.primary">
        <div class="app-button-label">{{ label }}</div>
    </button>
</template>

<script setup lang="ts">
defineProps({
    label: String,
    style: String
})

const styleSheet = {
    primary: {
        background: 'var(--wine)',
        color: 'var(--white)',
        border: '1px solid var(--wine)'
    }
}
</script>

<style scoped lang="scss">
.app-button {
    width: 100%;

    .app-button-label {
        padding: 0.75rem;
        width: 100%;
        font-size: 0.9rem;
        outline: none;
        cursor: pointer;
    }
}
</style>
