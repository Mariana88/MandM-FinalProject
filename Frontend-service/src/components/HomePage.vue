<template>
    <div>
        <div class="container text-center my-3">
            <h1>Needs</h1>
            <div id="needs" type="needs" v-bind:posts="needs" class="carousel slide w-100" data-ride="carousel">
                <div class="carousel-inner w-100" role="listbox">
                    <carousel v-bind:posts="needs"></carousel>
                </div>
                <a class="carousel-control-prev" href="#recipeCarousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#recipeCarousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

            <div>
                <h1>Offerts</h1>
            </div>
            <div id="offerts" type="offerts" v-bind:posts="offerts" class="carousel slide w-100" data-ride="carousel">
                <div class="carousel-inner w-100" role="listbox">
                    <carousel v-bind:posts="offerts"></carousel>
                </div>
                <a class="carousel-control-prev" href="#recipeCarousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#recipeCarousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

            <h4>Advances all 4 slides each time</h4>
        </div>

    </div>
</template>

<script>
import Carousel from "./Carousel.vue";

export default {
  name: "home",
  data: function() {
    return {
      needs: [
        "http://placehold.it/350x280/222/fff?text=1",
        "http://placehold.it/350x280/444?text=2",
        "http://placehold.it/350x280/888?text=3",
        "http://placehold.it/350x280/111/fff?text=4"
        /*
            To powinno sie stac tablicą obiektów typu (Post.js), które przekazujemy do karuzeli.
            W Carousel.vue powinnas sprecyzować jak będzie wyglądać każdy element karuzeli (czy będzie to zdjęcie
            czy jakis opis)
        */
      ],
      offerts: [
        "http://placehold.it/350x280?text=5",
        "http://placehold.it/350x280/555?text=6",
        "http://placehold.it/350x280/333/fff?text=7",
        "http://placehold.it/350x280/bbb?text=8"
      ]
    };
  },
  created: function() {
    this.getOfferts();
    this.getNeeds();
  },
  methods: {
    getNeeds: function() {
      fetch("http://localhost:4005/api/posts/type/NEED", { mode: "cors" })
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(error => console.log(error));
    },
    getOfferts: function() {
      fetch("http://localhost:4005/api/posts/type/OFFERT", { mode: "cors" })
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(error => console.log(error));
    }
  },
  components: {
    Carousel
  }
};
</script>
