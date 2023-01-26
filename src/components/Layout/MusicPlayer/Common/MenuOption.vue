<template>
    <div class="select-none hover:underline cursor-pointer" :class="`${(active) ? 'underline font-bold' : ''}`">
        <span><slot/></span>
    </div>
</template>

<script>
export default {
    name:"MenuOption",
    props:{
        active:Boolean
    }
}
</script>