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