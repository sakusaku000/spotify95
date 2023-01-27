<template>
    <tr :class="`cursor-pointer hover:bg-windows-gray-light`" @click="toggleTracks">
        <td class="truncate text-ellipsis flex items-center">
            <img class="mr-2" src="/assets/image/folder-sm.png" alt="Album Folder Icon" draggable="false">
            <span>{{title || ""}}</span>
        </td>
        <td class="truncate text-ellipsis">{{artist || ""}}</td>
    </tr>

    <SongList v-if="tracks && showTracks" class="ml-10" :hideAlbum="true">
        <SongEntry 
        v-for="song in tracks" 
        :key="song.id" 
        :id="song.id"
        :title="song.name" 
        :length="song.duration_ms"/>
    </SongList>
</template>

<script>
import SongList from '../SongList/SongList.vue';
import SongEntry from '../SongList/SongEntry.vue';

export default {
    name:"AlbumEntry",
    components:{
        SongList,
        SongEntry
    },
    props:{
        title:String,
        artist:String,
        tracks:Array,
        id:String
    },
    data() {
        return {
            showTracks:false
        }
    },
    methods:{
        toggleTracks() {
            this.showTracks = !this.showTracks
        }
    },
    mounted() {
        console.log(this.tracks)
    }
}
</script>