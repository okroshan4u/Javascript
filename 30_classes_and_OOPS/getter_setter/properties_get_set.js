function User(email, password){
    this._email = email;
    this._password = password;


    Object.defineProperty(this,'email',{
        get:function(){
            return this._email.toUpperCase()
        },
        set:function(value){
            this.email = value
        }
    })
    Object.defineProperty(this,'password',{
        get:function(){
            return this._password.toUpperCase()
        },
        set:function(value){
            this.password = value
        }
    })
}

const roshan =new User("okroshan4u@gmail.com","ABC") // alsways remember to use new keyword
console.log(roshan.password) // so in above code we are doing the same thing but when did no have getter and setter method 