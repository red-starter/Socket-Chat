var db = require('../db')
var Message = db.model('Message',{
	username: { type: String, required: true },
    text:     { type: String, required: true },
    date:     { type: Date,   required: true, default: Date.now }
})


module.exports = Message