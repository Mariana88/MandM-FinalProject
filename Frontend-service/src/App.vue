<template>
<div id="app">
    <h3>{{title}}</h3>
    <div class="col-md-12">
        <Post 
        v-for="(id, index) in initial_posts"
        v-bind:id="id"
        :key="index"
        />
    </div>
</div>
</template>

<script>
import Post from './components/Post.vue'
export default{
    name:"app",
    data(){
        return{
            title:"Generate Your Post",
            initial_posts:[]
        }
    },
    components:{
        Post
    }
}
</script>