<template>
    <SectionHeader :icon="true" :total="$store.state.library.albums.list.length">Albums</SectionHeader>
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
    <LoadMore v-if="$store.state.library.albums.list.length > 50" type="albums"/>
</template>

<script>
import SectionHeader from '../components/MusicPlayer/Common/SectionHeader.vue';
import AlbumList from '../components/MusicPlayer/Library/AlbumList/AlbumList.vue';
import AlbumEntry from '../components/MusicPlayer/Library/AlbumList/AlbumEntry.vue';
import LoadMore from '../components/MusicPlayer/Library/LoadMore.vue';

export default {
    name:"AlbumsView",
    components:{
        SectionHeader,
        AlbumList,
        AlbumEntry,
        LoadMore
    }
}
</script>