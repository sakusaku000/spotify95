<template>
    <router-link :to="route" class="block select-none hover:underline cursor-pointer" active-class='underline font-bold'>
        <span><slot/></span>
    </router-link>
</template>

<script>
export default {
    name:"MenuOption",
    props:{
        route:String
    }
}
</script>