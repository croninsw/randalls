const outputEl = document.querySelector("#cars")

allCars.forEach(car => {
    for (const value of Object.values(car)) {
      outputEl.innerHTML += `<div>${value}</div>`
    }
})

const dateVisited = "visitDate"
const owed = "amountBilled"
const patient = "patientName"

const bill = {
    officeName: "General Bill's",
    streetAdress: "123 MadeUp Name Way",
    doctorName: "Susan Strong",
    patientName: "Sam Cronin",
    visitDate: "January 23, 2030",
    amountBilled: 2000.00,
    dueDate: 03/05/2100
}

console.log(bill[dateVisited])
console.log(bill[owed])
console.log(bill[patient])

console.log(bill)

for (key of Object.keys(bill)) {
    console.log(key)
}

const doctorOutputEl = document.querySelector("#doctor")
for (key of Object.keys(bill)) {
    doctorOutputEl.innerHTML += `<div> <span>${key}</span> </div>`
}

const meatloaf = {
    name: "Mama's Meatloaf",
    ingredient1: "meat",
    ingredient2: "vegetables",
    type: "dinner",
    temp: "hot",
    vegetarian: false
}
const meatloafOutpulEl = document.querySelector("#meatloaf")
// Lightning Exercise 2: Output all of the key/value pairs into the DOM inside an <article> element with a class of food.
    meatloafOutpulEl.innerHTML = "<h1>Basic MakeUp of Mama's Meatloaf</h1>"
for (entry of Object.entries(meatloaf)) {
    console.log(entry)

    meatloafOutpulEl.innerHTML += `<div> <span>${entry[0]}: ${entry[1]}</span> </div>`
}