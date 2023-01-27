<template>
    <SectionHeader :icon="true">Albums</SectionHeader>
    <AlbumList>
        <AlbumEntry
            v-for="album in $store.state.library.albums.list" 
            :key="album.album.id" 
            :id="album.album.id"
            :title="album.album.name" 
            :artist="album.album.artists[0].name"
            :tracks="album.album.tracks.items"
        />
    </AlbumList>
</template>

<script>
import SectionHeader from '../components/MusicPlayer/Common/SectionHeader.vue';
import AlbumList from '../components/MusicPlayer/Library/AlbumList/AlbumList.vue';
import AlbumEntry from '../components/MusicPlayer/Library/AlbumList/AlbumEntry.vue';

export default {
    name:"AlbumsView",
    components:{
        SectionHeader,
        AlbumList,
        AlbumEntry
    }
}
</script>