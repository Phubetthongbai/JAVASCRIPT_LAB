function yayOrNay(){
    return new Promise((reslove,reject)=>{
        const val = Math.round(Math.random()*1);

        val ? reslove("Lucky!!") : reject("Nope T-T");
    })
}

async function msg(){
    try{
        const msg = await yayOrNay();
        console.log(msg);
    }
    catch(err){
        console.log(err);
    }
}

msg();
msg();
msg();
msg();
msg();
msg();
msg();
msg();
msg();
msg();