<template>
    <div class="fixed left-1 top-12 bottom-20 w-[325px] bg-white win-border-var2 p-3 overflow-y-auto">
        <SectionHeader>Library</SectionHeader>
        <MenuOption>Albums</MenuOption>
        <MenuOption>Artists</MenuOption>
        <MenuOption>Songs</MenuOption>
        <hr class="my-5 border-t-windows-gray-main">
    </div>
</template>

<script>
import SectionHeader from '../Common/SectionHeader.vue';
import MenuOption from '../Common/MenuOption.vue';

export default {
    name:"Sidebar",
    components:{
        SectionHeader,
        MenuOption
    }
}
</script>