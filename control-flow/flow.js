//if/if-else/if-elseif 

const isLoggedIn = true;
const hasToken = true;
const isSignedIn = true;

if (isLoggedIn) {
    console.log("logged in");
}else if (isSignedIn){
    console.log("signed in");
}else {
    console.log("neither logged in nor signed in");
}

//switch
switch(isLoggedIn) {
    case true:
        console.log("logged in");
        break;
    case false:
        console.log("logged in");
        break;    
    default:
        console.log("neither logged in nor signed in");
}

//OR AND
if ( isLoggedIn || isLoggedIn) {
    console.log("use has dashboard access");
}

if ( isLoggedIn && hasToken) {
    console.log("user will get privacy access");
}


//falsy values : false,0,-0,null,undefined,NaN
//truthy values : "0","false"

//Nullish cohescing operator
const data = "some data" ?? "data from DB";
const response = null ?? "data from DB";

console.log(data);
console.log(response);