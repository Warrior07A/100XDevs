interface User{
    firstname:string,
    lastname?:string,
    address?:string,
    runtime:number
};

function agecheck(user:User){
    if (user.runtime>18){
        console.log("he is above legal age");
    }
}

function namecheck(user:User){
    if (user.firstname=="akshat"){
        console.log("user is Danny and dont disturb him ");
    }
}
namecheck({
    firstname:"akshat",
    runtime:19
})
    
agecheck({
    firstname:"akshat",
    runtime:19
})