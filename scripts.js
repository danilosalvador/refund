const amount = document.getElementById("amount")

amount.oninput = () => {
    const numberRegex = /\D/g
    let value = amount.value.replace(numberRegex, "")

    amount.value = value
}