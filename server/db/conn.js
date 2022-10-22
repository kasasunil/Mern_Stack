const mongoose=require('mongoose');
const DB=process.env.DATABASE;
mongoose.connect(DB,{
    useNewUrlParser:true,
   // useCreateIndex:true,
    UseUnifiedTopology:true
    //useFindAndModify:false
}).then(()=>{
    console.log("Connected");
}).catch((err)=>console.log("Not connected",err));
