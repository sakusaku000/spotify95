<template>
    <tr :class="`${(activeSong) ? 'bg-windows-blue text-white font-bold' : ''} cursor-pointer hover:bg-windows-gray-light`">
        <td>{{title}}</td>
        <td>{{artist}}</td>
        <td>{{album}}</td>
        <td>{{length}}</td>
    </tr>
</template>

<script>
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
        length:String,
        id:String
    }
}
</script>