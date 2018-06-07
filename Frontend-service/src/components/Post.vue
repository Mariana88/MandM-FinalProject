<template>
<div class="col-md-4" @click="fetchPost">
    <div class="character-card">
            <div class="card-block">
                <h4 class="card-title">{{post.title}}</h4>
                <p class="card-text">{{post.text}}</p>
            </div>
        </div>
</div>
</template>

<script>
export default {
  name: "post",
  props: ["id"],
  data() {
    return {
      postID: undefined,
      posts:[],
      post: {}
    };
  },
  created: function() {
    this.fetchPost(this.id);
  },
  methods: {
    fetchPost() {
      fetch("htttp://localhost:3000", {
        method: "GET"
      })
        .then(response => response.json())
        .then(json => (this.character = json));
    },
    getPostById (postID){
      axios.get('http://localhost:3000/onePost')
      .then(function(response){
        if(postID !=undefined){
          vue.onePost.push(postID)
          console.log(post);
        }
      })
      .catch(function(error){
        console.log(error);
      })
    }
  }
};
</script>


