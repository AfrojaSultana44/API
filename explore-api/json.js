const user = {id: 1, name: "Rahim", job: "Developer"}
// console.log(user)
const stringified = JSON.stringify(user)
// console.log(stringified)

const shop = {
    owner: "'Rahim",
    address: {
        street: "Gulshan 56/3",
        city: "Dhaka",
        country: "Bangladesh"
    },
    products:["laptop","mic","keyboard","monitor"],
    isOpen: true,
    isNew: false
}

console.log(shop)

const shopJson = JSON.stringify(shop)
console.log(shopJson)

const shopObj = JSON.parse(shopJson)
console.log(shopObj)




const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
console.log(stuInfo.name); 