let name  = {
    firstName: "Danny",
    lastName: "Woodford"
}

let printName = function(hometown, state, country) {
    console.log(this.firstName + " " + this.lastName + " , " + hometown + "," + state + "," + country)
}

let printMyName = printName.bind(name, "Colts Neck", "NJ")
printMyName("US")

Function.prototype.myBind = function(...args){
    let obj = this
    let params = args.slice(1)
    return function(...args2) {
        obj.apply(args[0], [...params, ...args2])
    }
}

let printMyName2 = printName.myBind(name, "Colts Neck", "NJ")
printMyName2( "US")