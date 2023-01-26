<template>
    <TitleBar/>
    <Sidebar/>
    <Library/>
    <Playback/>
</template>

<script>
import TitleBar from './TitleBar/TitleBar.vue';
import Sidebar from './Sidebar/Sidebar.vue';
import Library from './Library/Library.vue';
import Playback from './Playback/Playback.vue';

export default {
    name:"MusicPlayer",
    components:{
        TitleBar,
        Sidebar,
        Library,
        Playback
    }
}
</script>