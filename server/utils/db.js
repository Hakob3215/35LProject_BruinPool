const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://bruinpool:mdjf8ElwBpfnEcYJ@bruinpoolcluster.em9znww.mongodb.net/userData?retryWrites=true&w=majority')
.then(() => console.log('Database Connected'))
.catch(err => console.log(err));


const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,

    startTime: Number,
    endTime: Number,
    location: String,
    date: Date
});

const user = mongoose.model('user', userSchema);


const travelBlogSchema = new Schema({
    title: String,
    content: String,
    date: Date
});

const travelBlog = mongoose.model('travelBlog', travelBlogSchema);