// const myName = "Roshan"
// console.log(myName.__proto__)

// console.log(myName.length)

const myheros = ["Hull", "Thor", "IronMan"]


const heroPower = {
    hulk:"Strength",
    Thor:"Hammer",
    IronMan:"Brain",
    gethulkpower : function(){
        console.log(`Hulk power is ${this.hulk}`)
    }
}
Object.prototype.roshan = function(){
    console.log(`Roshan is present in all objects `)
}

Array.prototype.greetRoshan =function(){
    console.log("Good Morning Roshan ")
}

// heroPower.roshan()

// myheros.roshan()

// myheros.greetRoshan()
// heroPower.greetRoshan()  // we have assigned the properties to the array so it will only accesible to the array not all




const userName = {
    name:"Roshan"
}

const Teacher = {
    makeVideos:true
}

const TeachingSupport = {
    isAvailable : true
}

const TASupport = {
    makeAssignment : "JS Assignment",
    fullTime: true,
    __proto__:TeachingSupport // now with this line of code we care saying that now you(TASupport) have  properties of TeahingSupport
}

// Teacher.__proto__ = userName // now Teacher has the properties of userName

// console.log(TeachingSupport.isAvailable)
// console.log(Teacher.name) // 

// ************* all the above method of assigning the prototype is old method ***************


// $$$$$$$$$$$$$ Modern Method $$$$$$$$$$$$$$$$

// Object.setPrototypeOf(TeachingSupport, Teacher) 

// console.log(TeachingSupport.makeVideos)

let anotherUserName = "Roshan   "

String.prototype.trueLengrth = function(){
    console.log(`True length of the string is ${this.trim().length}`)
}

anotherUserName.trueLengrth()