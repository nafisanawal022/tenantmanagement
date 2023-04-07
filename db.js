const mongoose = require('mongoose')

const url = `mongodb+srv://Rahman_Residence:123455555@cluster0.sswgfkk.mongodb.net/rResidence?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true ,
};
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })