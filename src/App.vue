<template>
    <BackgroundIcon v-if="!$store.state.authenticationNeeded && !$store.state.error.show && !$store.state.ready"/>

    <Authenticate v-if="$store.state.authenticationNeeded || $store.state.error.show"/>

    <MusicPlayer v-if="$store.state.ready"/>
</template>

<script>
import MusicPlayer from './components/Layout/MusicPlayer/MusicPlayer.vue';
import Authenticate from './components/Layout/Authenticate/Authenticate.vue';
import BackgroundIcon from './components/Layout/BackgroundIcon.vue';

export default {
    name:"App",
    components:{
        MusicPlayer,
        Authenticate,
        BackgroundIcon
    },
    async mounted() {
        const params = new URLSearchParams(window.location.search);

        try {
            if (params.get("code")) {
                await this.$store.dispatch("authentication/authenticate", params.get("code"));
                this.fetchData();
            } 
            else if (params.get("error")) {
                return this.$store.commit("showError", `Spotify API Error: ${params.get("error")}`);
            } 
            else {
                if (sessionStorage.getItem("access")) {
                    await this.$store.commit("setAccessToken", sessionStorage.getItem("access"));
                    this.fetchData();
                } 
                else if (localStorage.getItem("refresh")) {
                    await this.$store.dispatch("authentication/refresh");
                    this.fetchData();
                } 
                else {
                    this.$store.commit("showSplash");
                }
            }
        } catch (err) {
            console.error(err);
            this.$store.commit("setReady", false);
            this.$store.commit("showError", err);
        };
    },
    methods:{
        async fetchData() {
            await this.$store.dispatch("user/fetch");
            await this.$store.dispatch("library/fetch");
            this.$store.commit("setReady", true);
        }
    }
}
</script>