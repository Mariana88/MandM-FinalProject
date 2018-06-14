<template>
<div id="app">

<!-- <post-creator></post-creator> -->
<!-- <login></login> -->
<home></home>
   <!-- <post id="1"></post> -->
    <!-- <h3>{{title}}</h3>
    <div class="col-md-12">
        <Post 
        v-for="(id, index) in initial_posts"
        v-bind:id="id"
        :key="index"
        />
    </div> -->
</div>
</template>

<script>
import Home from "./components/HomePage.vue";
// import Post from "./components/Post.vue";
import Login from "./components/Login.vue";
import PostCreator from "./components/PostCreator.vue";
export default {
  name: "app",
  data() {
    return {
      title: "Generate Your Post",
      initial_posts: []
    };
  },
  components: {
    Home,
    // Post,
    Login,
    PostCreator
  }
};
</script>