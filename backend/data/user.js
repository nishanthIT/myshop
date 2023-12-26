import bcrypt from "bcrypt"
const user =[
    {
        name:"Admin User",
        email:"admin@email.com",
        password:bcrypt.hashSync("12345",10),
        isAdmin:true 
    },
    {
        name:"Nishath",
        email:"Nishath@email.com",
        password:bcrypt.hashSync("12345",10),
        isAdmin:false
    },
    {
        name:"Neasha",
        email:"Neasha@email.com",
        password:bcrypt.hashSync("12345",10),
        isAdmin:false
    }
]

export default user