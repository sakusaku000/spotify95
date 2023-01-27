<template>
    <tr :class="`${(activeSong) ? 'bg-windows-blue text-white font-bold' : ''} cursor-pointer hover:bg-windows-gray-light`">
        <td>{{title}}</td>
        <td>{{artist}}</td>
        <td>{{album}}</td>
        <td>{{formatTime(length)}}</td>
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
            return formatDuration(ms);
        }
    }
}
</script>