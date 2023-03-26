const button = document.getElementById("convert-button") //buscar pelo id
const select = document.getElementById("currency-select")
const dolar = 5.2
const euro = 5.9
const bitcoin = 0.0000068


const convertValues = () => {
    const inputReais = document.getElementById("input-real").value //pegar so o valor
    const realValueText = document.getElementById("real-value-text")
    const currancyValueText = document.getElementById("currancy-value-text")

    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", //moeda
        currency: "BRL",
    }).format(inputReais)
    //realValueText.innerHTML = inputReais  /*A propriedade innerHTML retorna: O conteúdo de texto do elemento, incluindo todo o espaçamento e tags HTML internas.*/
    // currancyValueText.innerHTML = inputReais/dolar

    if (select.value === "US$ Dolar Americano") {
        currancyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", //moeda
            currency: "USD",
        }).format(inputReais / dolar)
    }

    if (select.value === "€ Euro") {
        currancyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", //moeda
            currency: "EUR",
        }).format(inputReais / euro)
    }

    if (select.value === "Bitcoin") {
        currancyValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency", //moeda
            currency: "BTC",
        }).format(inputReais / bitcoin)
    }
}


changeCurrency = () => {
    const currencyName = document.getElementById("currancy-name")
    const currancyImg = document.getElementById("currency-img")

    if (select.value === 'US$ Dolar Americano') {
        currencyName.innerHTML = "Dólar Americano"
        currancyImg.src = "./assets/estados-unidos.png"
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currancyImg.src = "./assets/Euro.png"
    }

    if (select.value === 'Bitcoin') {
        currencyName.innerHTML = "Bitcoin"
        currancyImg.src = "./assets/bitcoin.png"
    }


    convertValues() //sempre que trocar moeda troca o valor
}

button.addEventListener("click", convertValues) // ouvidor de eventos no button
select.addEventListener("change", changeCurrency)