<template>
    <div class="show">
        <h1>Showing event #{{ id }}</h1>
    </div>
</template>

<script>
export default {
    props: {
        "id": Number // comes for external source, in this case a dynamic prop from router
    },
}
</script>

<style>

</style>