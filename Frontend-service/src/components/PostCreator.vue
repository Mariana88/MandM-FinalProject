<template>
    <div class="container-fluid">
        <br/>
        <div class="row">
            <div class="form-inline col-md-12">
                <input class="form-control mr-sm-2" v-model="post.title" id="title" placeholder="Enter your title of post" aria-label="postTitle">
                <div class="form-check form-check-inline radio-green">
                    <input class="form-check-input" name="group101" type="radio" id="radio103">
                    <label class="form-check-label" for="radio103">Need </label>
                </div>
                <div class="form-check form-check-inline radio-green">
                    <input class="form-check-input" name="group101" type="radio" id="radio104" checked>
                    <label class="form-check-label" for="radio104">Offert </label>
                </div>
                <div class="form-inline">
                    <input class="form-control mr-sm-2" type="postLocation" placeholder="Enter your location" aria-label="postTitle">
                </div>
                <div class="form-inline">
                    <label for="date">Choose date</label>
                    <input name="date" type="date" min="2018-01-01" max="2018-12-31" />
                </div>
            </div>
        </div>
        <br/>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="description">Describe briefly your post here: </label>
                    <textarea name="description" class="form-control" id="post"></textarea>
                </div>
            </div>
            <div class="col-md-6 offset-7">
                <div id="dropBox" class="drop_box">
                    <p>Drop your picture here...</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <div class="dropdown show">
                        <label for="quantity">Choose here the quantity of items if applicable </label>
                        <a name="quantity" class="btn btn-secondary dropdown-toggle" href="#" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Quantity
                        </a>
                        <input class="dropdown-menu" aria-labelledby="dropdownMenuLink" />
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 offset-7">
                <div class="form-group">
                    <input type="button" v-on:click="printPost()" value="CREATE YOUR POST">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Post from "../js/Post.js";
export default {
  name: "postCreator",
  data: function() {
    return {
      post: new Post()
    };
  },
  methods: {
    printPost: function() {
      console.log(this.post);
    }
  }
};
</script>

<style>
.drop_box {
  border: 3px dotted yellow;
  background-color: oldlace;
  height: 200px;
  width: 200px;
  border-radius: 50%;
}
.radio-green [type="radio"]:checked + label:after {
  border-color: #00c851;
  background-color: #00c851;
}
/*Gap*/

.radio-green-gap [type="radio"].with-gap:checked + label:before {
  border-color: #00c851;
}

.radio-green-gap [type="radio"]:checked + label:after {
  border-color: #00c851;
  background-color: #00c851;
}
</style>