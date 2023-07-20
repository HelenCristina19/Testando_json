function buscaProdutos(){
    fetch('http://localhost:3002/produtos',{
            method:'GET',
            headers:{
                'Content-type': 'application/json'
            }
        })
            .then(resposta => resposta.json())
            .then(resposta =>{

                document.querySelector('#listaProdutos').innerHTML = '';
                const tituloProdutos = document.createElement('h2');
                tituloProdutos.classList.add('titulo-lista');
                tituloProdutos.innerHTML = 'Lista de Produtos';
                document.querySelector('#listaProdutos').appendChild(tituloProdutos)


                for(let i = 0;i < resposta.length; i++){

                    const ul = document.createElement('ul');
                    ul.classList.add('produto');

                     const liId = document.createElement('li');
                     liId.setAttribute('data-produto','id');
                     liId.innerHTML = resposta[i].id;

                     const liDescricao = document.createElement('li');
                     liDescricao.setAttribute('data-produto','descricao');
                     liDescricao.innerHTML = resposta[i].descricao;

                     const liPreco = document.createElement('li');
                     liPreco.setAttribute('data-produto','preco');
                     liPreco.innerHTML = resposta[i].preco;

                     ul.append(liId, liDescricao, liPreco);

                     const liDelete = document.createElement('li');
                     const btDelete = document.createElement('button');
                     btDelete.innerHTML = 'X';
                     btDelete.value = resposta[i].id;
                     // btDelete.style.color = 'red';
                     btDelete.classList.add('delete-button');
 
                     ul.appendChild(liDelete).appendChild(btDelete);

                    document.querySelector('#listaProdutos').appendChild
                    (ul);
                }
               
          
});
}
export {buscaProdutos}