//FORMATO DO OBJETO
const mensagens = [
    {
    from:'hugo',
    to:'todos',
    text:'entra na sala',
    type:'status',
    time:'08:10:10'
},
{
    from:'hugo2',
    to:'todos',
    text:'boa tarde',
    type:'mensage',
    time:'08:10:10'
},
{
    from:'hugo3',
    to:'todos',
    text:'oi',
    type:'mensage',
    time:'08:10:10'
}
]
/*
console.log(mensagens[1].from);
console.log(mensagens[1].to);
console.log(mensagens[1].text);
console.log(mensagens[1].type);
console.log(mensagens[1].time);
*/

axios.defaults.headers.common['Authorization'] = 'McQWjmMeuJz0NGuhi6A9PLjq';

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
/*function renderizarMensagem(){

    const ulMensagens = document.querySelector('.mensagensUol');
    ulMensagens.innerHTML = '';

    for( let i = 0; i < mensagens.length; i++){

        ulMensagens.innerHTML += `

            <li>
                ${mensagens[i].from}  ${mensagens[i].to}  ${mensagens[i].text}  ${mensagens[i].type}  ${mensagens[i].time}
            </li>

        `;       
    }
}
renderizarMensagem()
*/
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

