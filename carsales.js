// DISPLAY AGENTS NAME ON DOM WITH CAR ETC.
// const weeklySales = salesByWeek.forEach(sale => {
  //     outputElement.innerHTML += `<div><h3>${sale.sales_agent.first_name} ${sale.sales_agent.last_name}</h3></div>`
  
  //     for (entry of Object.entries(sale.vehicle)) {
    //         outputElement.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
    //     }
    
    //     outputElement.innerHTML += `<div><h3>Profit: $${sale.gross_profit}</h3></div>`
    //     outputElement.innerHTML += "<hr />"
    // })
    
const outputElement = document.querySelector("#weeklySales")
const searchInput = document.querySelector("#searchInput")

searchInput.addEventListener("keypress", (event) => {
  if (event.charCode === 13) {
    const searchTerm = event.target.value

    salesByWeek.forEach(sale => {
      for (const value of Object.values(sale.sales_agent)) {
        if (value.includes(searchTerm)) {
          outputElement.innerHTML += `
              <div>${sale.sales_agent.first_name} ${sale.sales_agent.last_name}</div>
              <div>Agent Email: ${sale.sales_agent.email}<div>
              <div>Total Sales: $${sale.gross_profit}</div>
          `
          outputElement.innerHTML += "<hr>"
        }
      }
    })
  }
})
