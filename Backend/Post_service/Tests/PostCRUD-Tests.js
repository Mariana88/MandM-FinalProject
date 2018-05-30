let model = require ('../model.js');
const assert = require ('assert');
let db = require ('../../db.json');

// Testing reinitialize (look also at db file to see if it's clean)
let cleanDb = model.reinitialize('post');

assert.deepEqual (db.post.data == {}, 'data not cleaned');
assert (db.post.nextId == 0, 'nextId not reset');

// Testing create new post

let newPost = new model.post (1, 2, "active", "needed", "donation", "Gent", "02June2018", "10am", "03June2018", "6pm")
console.log(newPost);

assert.deepEqual (newPost, {
    type: 'post',
    userId: 1,
    organizationId: 2,
    status: 'active',
    postType: 'needed',
    category: 'donation',
    location: 'Gent',
    startDate: '02June2018',
    startTime: '10am',
    endDate: '03June2018',
    endTime: '6pm',
    items: []
}, 'CreatePost Failed');

// Testing add and getOne methods
//let db = require ('../../db.json'); (comment this out if testing this function separately)

model.add (newPost);
assert (db.post.data['0'] == model.getOne ({type:'post', id:'0'}), 'thing not added correctly');
assert (db.post.nextId === 1, 'nextId not set correctly');

// Testing update method
// let db = require ('../../db.json'); (comment this out if testing this function separately)

model.update ({type: 'post', id:0, category:'volunteer'});
assert (db.post.data['0'].category == 'volunteer', 'incorrect update 1');

model.update ({type: 'post', id:0, endTime:'8pm'});
assert (db.post.data['0'].endTime == '8pm', 'incorrect update 2');
