<template>
    <div class="select-none mb-3">
        <div class="flex items-center gap-4 mb-3" :class="`${(!icon) ? 'my-0' : ''}`">
            <img class="w-[48px] h-[48px]" src="/assets/image/cd.png" alt="CD Section Header Icon" draggable="false" v-if="icon"> 
            <h2 class="text-[16px] mt-1" :class="`${(!icon) ? 'mb-2' : ''}`"><slot/></h2>
        </div>
        <hr class="border-t-windows-gray-main">
    </div>
</template>

<script>
export default {
    name:"SectionHeader",
    props:{
        icon:Boolean
    }
}
</script>