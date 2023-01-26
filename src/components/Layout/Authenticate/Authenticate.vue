<template>
    <div class="flex flex-col justify-center items-center h-screen select-none bg-windows-green">
        <div class="win-border-var1 py-3 px-4 flex flex-col gap-10 items-center bg-windows-gray-main">
            <Welcome v-if="!$store.state.error.show"/>
            <Error v-else/>
        </div>
    </div>

    <Copyright v-if="!$store.state.error.show"/>
</template>

<script>
import Copyright from './Copyright.vue';
import Welcome from './Welcome.vue';
import Error from './Error.vue';

export default {
    name:"Authenticate",
    components:{
        Copyright,
        Error,
        Welcome
    }
}
</script>