<template>
    <SectionHeader :icon="true" :total="$store.state.library.songs.list.length">Songs</SectionHeader>
    <SongList>
        <SongEntry 
        v-for="song in $store.state.library.songs.list" 
        :key="song.track.id" 
        :id="song.track.id"
        :title="song.track.name" 
        :artist="song.track.artists[0].name" 
        :album="song.track.album.name" 
        :length="song.track.duration_ms"/>
    </SongList>
    <LoadMore v-if="$store.state.library.songs.list.length > 50" type="songs"/>
</template>

<script>
import SectionHeader from '../components/MusicPlayer/Common/SectionHeader.vue';
import SongList from '../components/MusicPlayer/Library/SongList/SongList.vue';
import SongEntry from '../components/MusicPlayer/Library/SongList/SongEntry.vue';
import LoadMore from '../components/MusicPlayer/Library/LoadMore.vue';

export default {
    name:"SongsView",
    components:{
        SectionHeader,
        SongList,
        SongEntry,
        LoadMore
    }
}
</script>