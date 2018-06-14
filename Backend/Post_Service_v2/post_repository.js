let fileStorage = require('./file_storage');

let postRepository = {

    findById(id) {
        if (id == undefined || id == "") {
            console.log(`Id (${id}) has incorrect format!`);
            return null;
        }

        let result = fileStorage.read().posts.find((el) => {
            return el.id == id;
        });
        return result == undefined ? null : result;
    },

    findByType(postType) {
        if (postType == undefined || postType == "") {
            console.log(`PostType (${postType}) is invalid!`);
            return null;
        }

        let result = fileStorage.read().posts.filter((el) => {
            return el.postType == postType;
        });
        return result;
    },

    findAll() {
        return fileStorage.read();
    }
}

module.exports = postRepository;