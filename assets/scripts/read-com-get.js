function buscaProdutos() {
 
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
    
            }
    });
}

     export { buscaProdutos }


