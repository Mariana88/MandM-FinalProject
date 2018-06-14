class Post {
    constructor(title, postType, location, postDate, description, photo, quantity){
        this.title = title;
        this.postType = postType;
        this.location = location;
        this.postDate = postDate;
        this.description = description;
        this.photo = photo;
        this.quantity = quantity;
    }
    isValid(){
        return (this.title != undefined && this.title != "") &&
        (this.postType != undefined && this.postType != "");
    }
};

module.exports= Post;