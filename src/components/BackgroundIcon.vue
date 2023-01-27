<template>
    <div class="flex flex-col gap-10 items-center justify-center h-screen pointer-events-none select-none bg-windows-green">
        <img src="/assets/image/cd.png" alt="Splash Icon" draggable="false">
        <div class="w-96 h-14 bg-windows-gray-main win-border-var1 relative" v-if="$store.state.loading.show">
            <div class="absolute top-1 bottom-1 left-1 right-1 bg-windows-blue" :style="`width:${$store.state.loading.progress}%`"></div>
        </div>
    </div>
</template>