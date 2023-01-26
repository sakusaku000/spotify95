<template>
    <div class="fixed top-12 bottom-20 left-[330px] right-1 bg-white win-border-var2 p-3 overflow-y-scroll">
        <SectionHeader :icon="true">Songs</SectionHeader>
        <SongList>
            <SongEntry title="Panorama" artist="IZ*ONE" album="One Reeler / Act IV" length="3:43"/>
            <SongEntry title="Panorama" artist="IZ*ONE" album="One Reeler / Act IV" length="3:43"/>
            <SongEntry title="Panorama" artist="IZ*ONE" album="One Reeler / Act IV" length="3:43"/>
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