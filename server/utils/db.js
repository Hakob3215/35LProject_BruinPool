const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const Schema = mongoose.Schema;

mongoose.connect('mongodb+srv://bruinpool:mdjf8ElwBpfnEcYJ@bruinpoolcluster.em9znww.mongodb.net/userData?retryWrites=true&w=majority')
.then(() => console.log('Database Connected'))
.catch(err => console.log(err));

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    fullname: {type: String, required: true},
    password: {type: String, required: true},

    startTime: {type: Number, default: null},
    endTime: {type: Number, default: null},
    location: {type: String, default: null},
    date: {type: Date, default: null}
});

userSchema.pre('save', function(next) {
    if(this.password && this.isNew){
        bcrypt.hash(this.password, saltRounds, (err, hash) => {
            if(err){
                return next(err);
            }
            this.password = hash;
            next();
        })
    }
});

const travelBlogSchema = new Schema({
    title: String,
    content: String,
    date: {type: Date, default: Date.now},
});

const chatLogSchema = new Schema({
    users: [{ type: String }],
    messages: [{
        sender: { type: Schema.Types.ObjectId, ref: 'user' },
        content: {type: String},
        timestamp: { type: Date, default: Date.now }
    }],
    lastMessage: { type: Date, default: Date.now }
});

const user = mongoose.model('user', userSchema);

const travelBlog = mongoose.model('travelBlog', travelBlogSchema);

const chatLogs = mongoose.model("chatLog", chatLogSchema);

module.exports = {user, travelBlog, chatLogs};
