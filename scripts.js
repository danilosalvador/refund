const form = document.querySelector("form")
const expense = document.getElementById("expense")
const category = document.getElementById("category")
const amount = document.getElementById("amount")

amount.oninput = () => {
    const numberRegex = /\D/g
    let value = amount.value.replace(numberRegex, "")

    value = value / 100

    amount.value = formatCurrencyBRL(value)
}

function formatCurrencyBRL(value) {
    const valueFormatted = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })

    return valueFormatted;
}

form.onsubmit = (event) => {
    event.preventDefault()
}