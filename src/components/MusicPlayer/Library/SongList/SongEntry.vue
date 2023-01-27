<template>
    <tr :class="`${(activeSong) ? 'bg-windows-blue text-white font-bold' : ''} cursor-pointer hover:bg-windows-gray-light`">
        <td class="truncate text-ellipsis">{{title || ""}}</td>
        <td class="truncate text-ellipsis" v-if="artist">{{artist || ""}}</td>
        <td class="truncate text-ellipsis" v-if="album">{{album || ""}}</td>
        <td class="truncate text-ellipsis">{{formatTime(length) || ""}}</td>
    </tr>
</template>

<script>
import formatDuration from 'format-duration';

export default {
    name:"SongEntry",
    data() {
        return {
            activeSong:false
        }
    },
    props:{
        title:String,
        artist:String,
        album:String,
        length:Number,
        id:String
    },
    methods:{
        formatTime(ms) {
            if (ms) {
                return formatDuration(ms);
            } else {
                return 0;
            }
        }
    }
}
</script>