<template>
    <!-- <MusicPlayer/> -->
    <Authenticate/>
</template>

<script>
import MusicPlayer from './components/Layout/MusicPlayer/MusicPlayer.vue';
import Authenticate from './components/Layout/Authenticate/Authenticate.vue';

export default {
    name:"App",
    components:{
        MusicPlayer,
        Authenticate
    }
}
</script>