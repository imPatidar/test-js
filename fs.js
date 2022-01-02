console.log("Hello Buddies !")
const arr = [
    {
        name: "Shyam",
        age: 21,
        place: "Noida",
        color: "black"
    },
    {
        name: "Ram",
        age: 24,
        place: "Ujjain",
        color: "black"
    }, {
        name: "Rajesh",
        age: 18,
        place: "Ankleshwar",
        color: "white"
    }]


// Filter in JS
console.log(arr.filter((data) => data.name.length === 5))


// Map in JS
console.log(arr.map((data) => "Name of person is " + data.name.split(" ")[0] + " and Age is " + data.age))


//Sort in JS
console.log(arr.sort((a, b) => b.age - a.age).filter((data) => data.name === "Ram"))

//Reduce in JS
const totalAge = arr.reduce((acc, cur) => acc + cur.age, 0)

console.log(totalAge)


//Reduce in JS
const totalColorCount = arr.reduce((acc, cur) => {
    const color = cur.color
    if (acc[color]) {
        acc[color]++
    } else {
        acc[color] = 1
    }
    return acc
}, {})

console.log(totalColorCount)