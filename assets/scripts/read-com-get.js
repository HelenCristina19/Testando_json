function buscaProdutos(mostrabtDelete = false) {

    fetch('http://localhost:3002/produtos', {
    })

       
        .then(resposta => resposta.json())
        .then(resposta => {

            document.querySelector('#listaProdutos').innerHTML = '';
            const tituloProdutos = document.createElement('h2');
            tituloProdutos.classList.add('titulo-lista');
            tituloProdutos.innerHTML = 'Lista de Produtos';
            document.querySelector('#listaProdutos').appendChild(tituloProdutos)


            for (let i = 0; i < resposta.length; i++) {

                const ul = document.createElement('ul');
                ul.classList.add('produto');

                const liId = document.createElement('li');
                liId.setAttribute('data-produto', 'id');
                liId.innerHTML = resposta[i].id;

                const liDescricao = document.createElement('li');
                liDescricao.setAttribute('data-produto', 'descricao');
                liDescricao.innerHTML = resposta[i].descricao;

                const liPreco = document.createElement('li');
                liPreco.setAttribute('data-produto', 'preco');
                liPreco.innerHTML = resposta[i].preco;

                ul.append(liId, liDescricao, liPreco);


                document.querySelector('#listaProdutos').appendChild
                    (ul);
            }


        });
}
export { buscaProdutos }