const user={
    id: 8,
    name:"Mansura",
    dept:"CSE"
}

const userJSON = JSON.stringify(user)
const userFromJSON=JSON.parse(userJSON)

console.log(userFromJSON)
console.log(userJSON)