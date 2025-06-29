// const obj = {
//     name: "Chaim",
//     sayName: function(){
//         console.log("name is", this.name)
//     }
// }

// obj.sayName()

// const obj2 = {
//     name: "zeev",
// }

// obj2.fn = obj.sayName;
// obj2.fn()

const q = {
    description: "3+5",
    ask: function(){
        console.log(this.description)       
    }
}

function decorator(fn){
    const start = Date.now();
    fn()
    const end = Date.now();
    return end-start;
}
decorator(q.ask.bind())