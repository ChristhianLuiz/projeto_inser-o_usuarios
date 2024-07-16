const form = document.getElementById('form-table')
const nomes = [];
const telefones = [];

let linha = ' ';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarLinhas();
    atualizaTabela();
})

function adicionarLinhas(){
    const nm = document.getElementById('name');
    const tel = document.getElementById('telefone');

    if(telefones.includes(tel.value)){
        alert('Esse número já foi inserido');
    }
    else{
        nomes.push(nm.value);
        telefones.push(tel.value);

    let linhas = '<tr>';
    linhas += `<td> ${nm.value} </td>`;
    linhas += `<td> ${tel.value} </td>`;
    linhas += `</tr>`;
    
    linha += linhas;
    }

    nm.value = '';
    tel.value = '';

}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linha;
}