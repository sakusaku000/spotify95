<template>
    <div class="bg-windows-gray-main active:bg-windows-gray-dark win-border-var1 w-10 h-10 flex items-center justify-center select-none cursor-pointer" :title="text_label">
        <img :src="`/assets/image/controls/${image}.svg`" :alt="text_label">
    </div>
</template>

<script>
export default {
    name:"ControlButton",
    props:{
        image:String,
        text_label:String
    }
}
</script>