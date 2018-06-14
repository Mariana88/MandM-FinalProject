let express         = require('express');
let cors            = require('cors');
let postRepository  = require('./post_repository');
const POST_TYPE     = require('./PostType');
let app = express();

const PORT = 4005;

app.use(cors());

app.get('/api/posts', (req, res) => {
    let posts = postRepository.findAll();
    res.send(posts);
});

app.get('/api/posts/id/:id', (req, res) => {
    let post = postRepository.findById(req.params.id);
    res.send(post);
});

app.get('/api/posts/type/:postType', (req, res) =>{
    let typePosts = null;
    if (req.params.postType == POST_TYPE.NEED) {
        typePosts = postRepository.findByType(POST_TYPE.NEED);
    } else if (req.params.postType == POST_TYPE.OFFERT) {
        typePosts = postRepository.findByType(POST_TYPE.OFFERT);
    }
    res.send(typePosts);
});

app.listen(PORT, () => console.log(`Application is listening on port: ${PORT}`));