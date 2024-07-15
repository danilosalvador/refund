const form = document.querySelector("form")
const expense = document.getElementById("expense")
const category = document.getElementById("category")
const amount = document.getElementById("amount")
const expenseList = document.querySelector("ul")
const expenseQuantity = document.querySelector("aside header p span")

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
        const expenseItem = document.createElement("li")
        expenseItem.classList.add("expense")

        const expenseIcon = document.createElement("img")
        expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`)
        expenseIcon.setAttribute("alt", newExpense.category_name)

        const expenseInfo = document.createElement("div")
        expenseInfo.classList.add("expense-info")

        const expenseName = document.createElement("strong")
        expenseName.textContent = newExpense.expense

        const expenseCategory = document.createElement("span")
        expenseCategory.textContent = newExpense.category_name

        const expenseAmount = document.createElement("span")
        expenseAmount.classList.add("expense-amount")
        expenseAmount.innerHTML = `<small>R$</small>${newExpense.amount.toUpperCase().replace("R$", "")}`

        const removeIcon = document.createElement("img")
        removeIcon.classList.add("remove-icon")
        removeIcon.setAttribute("src", "img/remove.svg")
        removeIcon.setAttribute("alt", "Remover")

        expenseInfo.append(expenseName, expenseCategory)
        expenseItem.append(expenseIcon, expenseInfo, expenseAmount, removeIcon)
        expenseList.append(expenseItem)

        updateTotals()
    } catch (error) {
        alert("Não foi possível atualizar a lista de despesas")
        console.log(error)
    }
}

function updateTotals() {
    try {
        const items = expenseList.children

        expenseQuantity.textContent = `${items.length} ${(items.length > 1 ? "despesas" : "despesa")}`

        let totals = 0

        for (let item of items) {
            const itemAmount = item.getElementsByClassName("expense-amount")
        }
    } catch (error) {
        alert("Não foi possível atualizar os totais")
        console.log(error)
    }
}