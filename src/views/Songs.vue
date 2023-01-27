<template>
    <SectionHeader :icon="true">Songs</SectionHeader>
    <SongList>
        <SongEntry 
        v-for="song in $store.state.library.songs" 
        :key="song.track.id" 
        :title="song.track.name" 
        :artist="song.track.artists[0].name" 
        :album="song.track.album.name" 
        :length="song.track.duration_ms"/>
    </SongList>
</template>

<script>
import SectionHeader from '../components/MusicPlayer/Common/SectionHeader.vue';
import SongList from '../components/MusicPlayer/Library/SongList/SongList.vue';
import SongEntry from '../components/MusicPlayer/Library/SongList/SongEntry.vue';

export default {
    name:"SongsView",
    components:{
        SectionHeader,
        SongList,
        SongEntry
    }
}
</script>