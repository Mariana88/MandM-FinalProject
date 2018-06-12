class Post {
    constructor(){
        this.title;
        this.postType;
        this.location;
        this.postDate;
        this.description;
        this.photo;
        this.quantity;
    }
    isValid(){
        return (this.title != undefined && this.title != "") &&
        (this.postType != undefined && this.postType != "");
    }
};

export default Post;