<template>
    <div class="carousel-item row no-gutters active">
        <div class="col-3 float-left" v-for="post in posts" :key="post.id">
            <div>{{post.title}}</div>
            <!-- <img class="img-fluid" v-bind:src="post"/> -->
        </div>
    </div>
</template>
<script>
export default {
    name: "carousel",
    props: ["posts"]
}
</script>
