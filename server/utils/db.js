const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb+srv://bruinpool:mdjf8ElwBpfnEcYJ@bruinpoolcluster.em9znww.mongodb.net/userData?retryWrites=true&w=majority')
.then(() => console.log('Database Connected'))
.catch(err => console.log(err));

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},

    startTime: {type: Number, default: null},
    endTime: {type: Number, default: null},
    location: {type: String, default: null},
    date: {type: Date, default: null}
});

const travelBlogSchema = new Schema({
    title: String,
    content: String,
    date: Date
});

const chatLogSchema = new Schema({
    //TBA
});

const user = mongoose.model('user', userSchema);

const travelBlog = mongoose.model('travelBlog', travelBlogSchema);

module.exports = {user, travelBlog};

let newUser = new user({
    username: 'test',
    email: 'test@email.com',
    password: 'test'
});