<template>
    <NowPlaying/>
    <Controls/>
</template>

<script>
import NowPlaying from './NowPlaying.vue';
import Controls from './Controls.vue';

export default {
    name:"Playback",
    components:{
        NowPlaying,
        Controls
    }
}
</script>