let valorDolar = 0

async function buscarCEP(){

    const cep = document.getElementById('cep').value

    if(cep.length < 8){
        alert('Digite um CEP válido')
        return
    }

    try{

        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)

        const dados = await response.json()

        document.getElementById('rua').value = dados.logradouro
        document.getElementById('estado').value = dados.uf
        document.getElementById('cidade').value = dados.localidade

    }catch(error){

        alert('Erro ao buscar CEP')

    }
}

async function cotacaoDolar(){

    try{

        const response = await fetch(
            'https://economia.awesomeapi.com.br/json/last/USD-BRL'
        )

        const dados = await response.json()

        valorDolar = Number(dados.USDBRL.bid)

        document.getElementById('cotacao').innerHTML =
            `1 Dólar = R$ ${valorDolar.toFixed(2)}`

    }catch(error){

        alert('Erro ao buscar cotação')

    }
}

function converterParaDolar(){

    const real = Number(document.getElementById('real').value)

    if(valorDolar === 0){
        alert('Busque a cotação primeiro')
        return
    }

    const resultado = real / valorDolar

    document.getElementById('resultadoDolar').innerHTML =
        `US$ ${resultado.toFixed(2)}`
}

function converterParaReal(){

    const dolar = Number(document.getElementById('dolar').value)

    if(valorDolar === 0){
        alert('Busque a cotação primeiro')
        return
    }

    const resultado = dolar * valorDolar

    document.getElementById('resultadoReal').innerHTML =
        `R$ ${resultado.toFixed(2)}`
}

async function buscarPais(){

    const pais = document.getElementById('pais').value

    try{

        const response = await fetch(
            `https://restcountries.com/v3.1/name/${pais}`
        )

        const dados = await response.json()

        document.getElementById('bandeira').src =
            dados[0].flags.png

        document.getElementById('capital').innerHTML =
            `Capital: ${dados[0].capital[0]}`

        document.getElementById('populacao').innerHTML =
            `População: ${dados[0].population}`

    }catch(error){

        alert('País não encontrado')

    }
}

async function buscarDog(){

    try{

        const response = await fetch(
            'https://dog.ceo/api/breeds/image/random'
        )

        const dados = await response.json()

        document.getElementById('dogImg').src =
            dados.message

    }catch(error){

        alert('Erro ao buscar cachorro')

    }
}



































