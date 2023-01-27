<template>
    <table class="w-full text-left select-none table-fixed">
        <tr>
            <th class="font-normal underline">Title</th>
            <th class="font-normal underline" v-if="!hideAlbum">Artist</th>
            <th class="font-normal underline" v-if="!hideAlbum">Album</th>
            <th class="font-normal underline">Length</th>
        </tr>
        <slot/>
    </table>
</template>

<script>
export default {
    name:"SongList",
    props:{
        hideAlbum:Boolean
    }
}
</script>