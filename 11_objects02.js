// const tempuser = new Object(); 

const tempuser = {} 

tempuser.name = "Roshan"
tempuser.age = 24
tempuser.last_name = "Ram"
tempuser.email = "okroshan4u@gmail.com"

// console.log(tempuser);

const regularUser = {
    email:"okroshan4u@gmail.com",
    fullname:{
        userfullname:{
            firstName:"Roshan",
            lastname:"Ram"
        }
    }
}

// console.log(regularUser.fullname.userfullname);
// ++++++++++++merging of objects +++++++++++++++

// const obj1 = {name:"Roshan",id:"123abc"} // both the obj have the same keys 
// const obj2 = {name:"Rahul",id:"245def"}
const obj1 = {name1:"Roshan",id1:"123abc"} // both the obj have the same keys 
const obj2 = {name2:"Rahul",id2:"245def"}
const obj4 = {name3:"Rahul",id3:"245def"}

// const merged_obj = {obj1 , obj2};
const merged_obj = {...obj1, ...obj2}; // it will merge both arrays+
// console.log(merged_obj);  // one of the first obj that is obje1 will be overwritten by obj2 cause both the objs have the same key that is way it can not happend
// in the above case the original obj will not change

// const obj5 = Object.assign(obj1, obj2); here in this merge case the original object will be changed 
// const obj5 = Object.assign({},obj1, obj2); // now the obj1 will not changed since we have provided the target for this merged obj
const obj5 = Object.assign({},obj1, obj2,obj4); // now the obj1 will not changed since we have provided the target for this merged obj

// console.log(obj5)
// console.log(obj1)


// If we are retriving the data from the database then we will be getting this type of data

users = [
    {
        name:"Roshan",
        id:"12ab"
    },
    {
        name:"Roshan",
        id:"12ab"
    },
    {
        name:"Roshan",
        id:"12ab"
    },
    {
        name:"Roshan",
        id:"12ab"
    }
]

// since we will get interms of array 

// console.log(users[1].id);

// now we can separate the keys and values of the object this will be usefull when we will be dealing with the databases

// console.log(tempuser);
// console.log(Object.keys(tempuser)); // we will get the keys in a array which we can loop through and can be use on different places later
// console.log(Object.values(tempuser));
// console.log(Object.entries(tempuser));

// console.log(tempuser.hasOwnProperty("id"));
// console.log(tempuser.hasOwnProperty("name"));

