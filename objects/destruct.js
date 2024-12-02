const user = {
    name:"Joe",
    address:{city:"London",state:"UK"},
    isLoggedIn:false
}

console.log(user.name);

const { isLoggedIn:stat } = user;
console.log(stat);

const person = {
    name:"Joe",
    address:{city:"London",state:"UK"},
    profile:{id:34, company:{companyName:"Any",category:{field:"tech",address:{city:"any",state:"any"}}}},
    isLoggedIn:false
}

console.log(person.profile.company.category.address.state);
const {profile} = person;
const {company} = profile;
const {category} = company;
const {address} = category;
console.log(address.state);

//json structure
//{"name":"some name","email":"some email"}
