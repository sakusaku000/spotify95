<template>
    <div></div>
</template>

<script>
export default {
    name:"IndexView",
    mounted() {
        if (this.$router.currentRoute.value.path === "/") {
            this.$router.replace("/songs");
        }
    }
}
</script>