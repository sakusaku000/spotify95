<template>
    <div class="flex flex-col justify-center items-center h-screen select-none bg-windows-green">
        <div class="win-border-var1 py-3 px-4 flex flex-col gap-10 items-center bg-windows-gray-main">
            <div class="flex items-center gap-3">
                <img src="/assets/image/cd.png" alt="CD Welcome Icon" draggable="false">
                <h1 class="text-[16px] mt-2">Welcome to Spotify-95</h1>
            </div>

            <p>You need to sign in with your Spotify Account to use this program.</p>

            <button class="win-button">Sign In</button>
        </div>
    </div>

    <Copyright/>
</template>

<script>
import Copyright from './Copyright.vue';

export default {
    name:"Authenticate",
    components:{
        Copyright
    }
}
</script>