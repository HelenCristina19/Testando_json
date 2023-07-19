import { buscaProdutos } from "./read-com-get.js"
buscaProdutos

//Desafio 1
document.querySelector('#listaProdutos').addEventListener('click', event => {
    //console.Log(event.target);
    if (event.target.closest('ul').classList.contains('produto')) {
        // console.Log (event.target);
        const elementoBase = event.target.closest('ul');

        document.querySelector('input#id').value = elementoBase.querySelector('[data-produto="id"]').innerHTML;

        document.querySelector('input#descricao').value = elementoBase.querySelector('[data-produto="descricao"]').innerHTML;

        document.querySelector('input#preco').value = elementoBase.querySelector('[data-produto="preco"]').innerHTML;

    }
});

 //desafio 2
function verificaSeInputsEstaoPreenchidos() {
    const idPreenchido = document.querySelector('input#id').value !== "";
    const descricaoPreenchido = document.querySelector('input#descricao').value !== "";
    const precoPreenchido = document.querySelector('input#preco').value !== "";

    if (idPreenchido || descricaoPreenchido || precoPreenchido) {
        document.querySelector('button#btCancelar').removeAttribute('disabled');

    } else {
        document.querySelector('button#btCancelar').setAttribute('disabled', '');
    }

    if (idPreenchido) {
        document.querySelector('button#btAtualizar').removeAttribute('disabled');

    } else {
        document.querySelector('button#btAtualizar').setAttribute('disabled', '');
    }

    //desafio 2 : desabilitando o botão o reset do formulário
    document.querySelector('form').addEventListener('reset', () => {
        document.querySelector('button#btCancelar').setAttribute('disabled', '');
        document.querySelector('button#btAtualizar').setAttribute('disabled', '');
    });

    //verifica os campos do formulario na digitação normal
}
document.querySelector('form').addEventListener('input', verificaSeInputsEstaoPreenchidos);

document.querySelector('#btAtualizar').addEventListener('click', () => {
    const dados = {
        'id': null,
        'descricao': document.querySelector('#descricao').value,
        'preco': document.querySelector('#preco').value
    }

    const id = document.querySelector('#id').value;


    fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(resposta => {
            if (resposta.ok) {
                alert('Produto Atualizado');
                location.reload();
            }
        });
});
fetch('http://localhost:3000/produtos', {
    method: 'GET',
    headers: {
        'Content-type': 'application/json'
    }
})
    .then(resposta => resposta.json())
    .then(resposta => {

        for (let i = 0; i < resposta.length; i++) {

            const ul = document.createElement('ul');
            ul.id = resposta[i].id;
            ul.classList.add('produto');

            const liId = document.createElement('li');
            liId.setAttribute('data-produto', 'id');
            liId.innerHTML = resposta[i].id;
            liId.classList.add('produto-id');

            const liDescricao = document.createElement('li');
            liDescricao.setAttribute('data-produto', 'descricao')
            liDescricao.innerHTML = resposta[i].descricao;

            const liPreco = document.createElement('li');
            liPreco.setAttribute('data-produto', 'preco')
            liPreco.innerHTML = resposta[i].preco;

            ul.append(liId, liDescricao, liPreco);
            document.querySelector('#listaProdutos').append(ul);

        };
    })

