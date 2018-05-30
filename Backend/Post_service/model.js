let jsonfile = require('jsonfile');
let path = require('path');

const model = {
    reinitialize: function(model) {
        db[model] = {};
        db[model].nextId = 0;
        db[model].data = {};
        db[model].type = model;
        jsonfile.writeFileSync(path.join(__dirname, '../db.json'), db);
    },
    post: function (userId, organizationId, status, postType, category, location, startDate, startTime, endDate, endTime) {
            this.type = 'post';
            this.userId = userId;
            this.organizationId = organizationId;
            this.status = status;
            this.postType = postType;
            this.category = category;
            this.location = location;
            this.startDate = startDate;
            this.startTime = startTime;
            this.endDate = endDate;
            this.endTime = endTime;
            this.items = [];
    },
    item: function (postId, status, title, description, quantityNeeded, quantityReceived) {
        this.type = item;
        this.postId = postId;
        this.status = status;
        this.title = title;
        this.description = description;
        this.quantityNeeded = quantityNeeded;
        this.quantityReceived = quantityReceived;
        this.pictures = [];
    },
    picture: function (itemId, path) {
        this.type = picture;
        this.itemId = itemId;
        this.path = path;
    },
    add: function (newThing) {
        let db = require('../db.json');
        console.log(db);
        let givenModel = db[newThing.type];
        console.log(givenModel);
        givenModel.data[givenModel.nextId] = newThing;
        givenModel.data[givenModel.nextId].id = givenModel.nextId;
        givenModel.nextId++;
        db[newThing.type] = givenModel;
        jsonfile.writeFileSync(path.join(__dirname, '../db.json'), db);
    },
    update: function (input){
        let db = require('../db.json');
        let thing = db[input.type].data[input.id];
        let i;
        for (i in thing){
            thing[i] = input[i];
        }
        db[input.type].data[input.id] = thing
        jsonfile.writeFileSync(path.join(__dirname, '../db.json'), db);
    },
    delete: function (input){
        let db = require('../db.json');
        delete db[input.type].data[input.id];
        jsonfile.writeFileSync(path.join(__dirname, '../db.json'), db);
    },
    getOne: function (input){
        let db = require('../db.json');
        let thing = db[input.type].data[input.id];
        return thing;
    },
    getAll: function (input){
        let db = require('../db.json');
        let things = db[input].data;
        return things;
    },
 }

 module.exports = model;