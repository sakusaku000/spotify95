<template>
    <div class="fixed top-12 bottom-20 left-[330px] right-1 bg-white win-border-var2 p-3 overflow-y-auto">
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
    </div>
</template>

<script>
import SectionHeader from '../Common/SectionHeader.vue';
import SongList from './SongList/SongList.vue';
import SongEntry from './SongList/SongEntry.vue';

export default {
    name:"library",
    components:{
        SectionHeader,
        SongList,
        SongEntry
    }
}
</script>