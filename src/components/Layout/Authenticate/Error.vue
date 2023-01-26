<template>
    <div class="flex items-center gap-3">
        <img src="/assets/image/warning.png" alt="Error Icon" draggable="false">
        <h1 class="text-[16px]">An error has occurred</h1>
    </div>

    <p class="select-text">{{$store.state.error.message}}</p>

    <button class="win-button" @click="reload">Restart Program</button>
</template>

<script>
export default {
    name:"AuthenticateError",
    methods:{
        reload() {
            window.location.reload();
        }
    }
}
</script>