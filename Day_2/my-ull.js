const user ={
    name: 'salam',
    mobile: '01751073017'
}

let name = user?.name ?? "Guest";

console.log(name, user.mobile)