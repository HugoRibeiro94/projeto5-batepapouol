//FORMATO DO OBJETO
let mensagens = [];

axios.defaults.headers.common['Authorization'] = 'MRSv4l3Ta2JsNIwPXJwffeL3';

function carregarMensagens(){
    const promise = axios.get('https://mock-api.driven.com.br/api/vm/uol/messages');
    promise.then(mensagensRecebidas);
}
carregarMensagens()

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
    window.location.reload();
    console.log(`deu erro`);
    console.log(erro);
}

//status do usuario
function statusUsuario(){

    const participante = {
        
        name : usuario
        
    };

    const status = axios.post('https://mock-api.driven.com.br/api/vm/uol/status',participante);
    status.catch(deuErro);
    console.log(participante);
}

setInterval(statusUsuario,5000)

// MOSTRAR MENSAGENS
function renderizarMensagem(){

    const ulMensagens = document.querySelector('.mensagensUol');
    ulMensagens.innerHTML = '';

    for( let i = 0; i < mensagens.length; i++){

        let mensagem = mensagens[i];

        ulMensagens.innerHTML += `

            <li data-test="message" >
                <span>(${mensagens[i].time})</span> <strong>${mensagens[i].from}</strong>  para <strong>${mensagens[i].to}</strong>  ${mensagens[i].text} 
            </li>

        `;       
    
    }
    const ultimaMensagem = document.querySelector('li:last-child');
    ultimaMensagem.scrollIntoView();
    //console.log(ultimaMensagem);
}

setInterval(carregarMensagens,3000)

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

    carregarMensagens()
}

function recebeuMensagem(retorno){
    console.log(retorno);
    
}

function naoRecebeu(eRRo){
    console.log(eRRo);
}

