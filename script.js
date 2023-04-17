//FORMATO DO OBJETO
let mensagens = [];

axios.defaults.headers.common['Authorization'] = 'McQWjmMeuJz0NGuhi6A9PLjq';

const promise = axios.get('https://mock-api.driven.com.br/api/vm/uol/messages');
promise.then(mensagensRecebidas);

function mensagensRecebidas(res){
    console.log(res.data);
    mensagens = res.data;
    renderizarMensagem();
}

const usuario = prompt('Digite seu nome: ');

//USUARIO
function adicionarParticipante(){

    const novoParticipante = {
        
        name : usuario
        
    };

    const participante = axios.post('https://mock-api.driven.com.br/api/vm/uol/participants',novoParticipante);
    participante.then(receberUsuario);
    participante.catch(deuErro);
    console.log(novoParticipante);
}
adicionarParticipante()

function receberUsuario(){
    console.log(`recebeu`)
}

function deuErro(erro){
    console.log(`deu erro`);
    console.log(erro);
}



// MOSTRAR MENSAGENS
function renderizarMensagem(){

    const ulMensagens = document.querySelector('.mensagensUol');
    ulMensagens.innerHTML = '';

    for( let i = 0; i < mensagens.length; i++){

        let mensagem = mensagens[i];

        ulMensagens.innerHTML += `

            <li>
                <span>${mensagens[i].time}</span> <strong>${mensagens[i].from}</strong>  para <strong>${mensagens[i].to}</strong>  ${mensagens[i].text}  ${mensagens[i].type}  
            </li>

        `;       
    
    }
    const ultimaMensagem = document.querySelector('li:last-child');
    ultimaMensagem.scrollIntoView()
    console.log(ultimaMensagem);
}


//COLOCAR MENSAGEM DIGITADA NO CAMPO
function adicionarMensagem(){

    const mensagemDigitada = document.querySelector('input');

    const novaMensagem = {
        from: usuario,
        to:"Todos",
        text: mensagemDigitada.value,
        type:"message",
    };
    
    console.log(novaMensagem);

    const resposta = axios.post('https://mock-api.driven.com.br/api/vm/uol/messages',novaMensagem);
    resposta.then(recebeuMensagem);
    resposta.catch(naoRecebeu);
    console.log(resposta);
    
}

function recebeuMensagem(retorno){
    console.log(retorno);
}

function naoRecebeu(eRRo){
    console.log(eRRo);
}

