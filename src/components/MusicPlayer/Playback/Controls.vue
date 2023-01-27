<template>
    <div class="fixed bottom-1 left-1 flex items-center">
        <ControlButton image="play" text_label="Play"/>
        <ControlButton image="pause" text_label="Pause" class="mr-2"/>
        <ControlButton image="previous" text_label="Previous Song"/>
        <ControlButton image="next" text_label="Next Song"/>
    </div>
</template>

<script>
import ControlButton from './ControlButton.vue';

export default {
    name:"Controls",
    components:{
        ControlButton
    }
}
</script>