let nacionalidade = prompt('Escreva aqui sua nacionalidade').toLowerCase()
//tolowercase todas as letras imprimida no pronpt independente de como o usuaria vai escrever
//maiscula com minuscula ela vai aparecer minuscula e com toUppercase aparece maiscula

const nacionalidadeRegistrada=['brasileira','argentina','uruguaia','chilena','colombiana'];

if(nacionalidadeRegistrada.includes(nacionalidade))
    {
        console.log('Sua nacionalidade é :',nacionalidade)
}
else{
        console.log('Nacionalidade não encontrada')
    }