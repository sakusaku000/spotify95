<template>
    <div class="fixed top-1 left-1 right-1 py-1 px-3 bg-windows-blue text-white flex items-center gap-2 select-none">
        <img src="/assets/image/cd-sm.png" alt="Spotify-95 Icon" draggable="false">
        <h1>Spotify-95</h1>

        <CloseButton/>
    </div>
</template>

<script>
import CloseButton from './CloseButton.vue';

export default {
    name:"TitleBar",
    components:{
        CloseButton
    }
}
</script>