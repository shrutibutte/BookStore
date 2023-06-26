const mongoose =  require('mongoose')
mongoose.connect(
    "mongodb+srv://shrutibutte:shrutibutte@cluster0.2q58b1w.mongodb.net/curdApp?retryWrites=true&w=majority"
).then(() => {  
    console.log("connection successful");
}
).catch((err) => {
    console.log(err);
})


