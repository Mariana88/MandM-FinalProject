let jsonfile = require('jsonfile');
let path = require('path');

const FILE_PATH = path.join(__dirname, 'data.json');
// const Post = './Post';

let fileStorage = {

    read() {
        return jsonfile.readFileSync(FILE_PATH);
    },

    write(post) {
        let _data = this.read().posts;
        _data.posts.push(post);
        jsonfile.writeFileSync(FILE_PATH, _data);
    }
}

module.exports = fileStorage; 