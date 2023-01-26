<template>
    <BackgroundIcon v-if="!$store.state.authenticationNeeded && !$store.state.error.show && !$store.state.ready"/>

    <Authenticate v-if="$store.state.authenticationNeeded || $store.state.error.show"/>

    <MusicPlayer v-if="$store.state.ready"/>
</template>

<script>
import MusicPlayer from './components/Layout/MusicPlayer/MusicPlayer.vue';
import Authenticate from './components/Layout/Authenticate/Authenticate.vue';
import BackgroundIcon from './components/Layout/BackgroundIcon.vue';

export default {
    name:"App",
    components:{
        MusicPlayer,
        Authenticate,
        BackgroundIcon
    }
}
</script>