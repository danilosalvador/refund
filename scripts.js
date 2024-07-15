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

    const newExpense = {
        id: new Date().getTime(),
        expense: expense.value,
        category_id: category.value,
        category_name: category.options[category.selectedIndex].text,
        amount: amount.value,
        create_at: new Date,
    }

    expenseAdd(newExpense)
}

function expenseAdd(newExpense) {
    try {

    } catch (error) {
        alert("Não foi possível atualizar a lista de despesas")
        console.log(error)
    }
}