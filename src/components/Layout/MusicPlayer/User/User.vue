<template>
    <div class="fixed bottom-1 right-1 flex items-center gap-3 select-none">
        <p>Signed in as: {{$store.state.user.user.display_name}}</p>
        <button class="win-button !py-0" @click="signOut">Sign Out</button>
    </div>
</template>

<script>
export default {
    name:"User",
    methods:{
        signOut() {
            localStorage.clear();
            sessionStorage.clear();
            window.location.reload();
        }
    }
}
</script>