function createNode(element){
    return document.createElement(element);

}

function append(parent, el){
    return parent.appendChild(el);
}

const need = document.getElementById('needs');
const offert = document.getElementById('offerts');
const url = 'http://localhost:4005/api/posts/:id'; //Kociu, jezeli po stronie Node.js ustawimy parametr :id to znaczy
//ze kiedy wywolujemy ten url, pod to miejsce powinnismy podac faktyczna wartosc, czyli zamiast id, powinnismy dac np. 5

fetch(url)
.then((resp) => resp.json())
.then(function(data){
let posts = data.results;
return posts.map(function(post){
    let li = createNode('li'),
        img = createNode ('photo'),
        span = createNode('span');
    img.src = post.photo.medium;
    span.innerHTML = '{post.title}';
    append(li, img);
    append (li, span);
    append (need. li);
    append (offert, li);
    })
})

.catch(function(error){
    console.log(error);
}); //ten kod jest dobry, aczkolwiek jego cialo tak jak pisalem powinien dodawac tylko elementy do tablicy needs/offerts

//Fajnie to wyglada, dobrze napisalas fetcha, co mnie cieszy. Nie martw sie tym, ze masz to w roznych miejscach.
//Pamietaj aby testowac na docelowej solucji. Strony w folderze Views zostaly tylko po to, aby miec stary kod. Caly 'nowy' kod
//piszesz w komponentach

/*kod dobry, ale przedobrzyłaś :D

Nie powinnas tego tworzyc w RequestPost.js
Kod fetch jak ustalilismy mialas stworzyc w funkcji/metodzie, ktora by byla w elemencie methods w Vue.
Po co wydzielac kod i tworzyc dynamicznie elementy, skoro Vue.js bedzie je za nas tworzyl.
Jedyne czego potrzebuje Vue.js to danych o postach, wiec

*/