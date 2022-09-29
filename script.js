window.userWalletAddress = null
const loginButton = document.getElementById('loginButton')
const userWallet = document.getElementById('userWallet')
const NetworkId = document.getElementById('chainId')
const balanceWLT = document.getElementById('balanceWLT')
const tokenBalance = document.getElementById('tokenBalance')
const sendTOKEN = document.getElementById('sendTOKEN')
const sendSFL = document.getElementById('sendSFL')
const TOKENamount = document.getElementById('TOKENamount')
const TOKENamountSFL = document.getElementById('TOKENamountSFL')
const transactionWLT = document.getElementById('sendTransaction')
const NFTScollection = document.getElementById('NFTScollections')
const contractABIBCOIN = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]
const contractABISFL = [{"inputs":[],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[{"internalType":"address","name":"_game","type":"address"}],"name":"addGameRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"gameApprove","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"gameBurn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"gameMint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"gameTransfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_team","type":"address"}],"name":"passTeamRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_game","type":"address"}],"name":"removeGameRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const web3 = new Web3(Web3.givenProvider);
let accounts;
let chainId;

/* Ativando Botão */
function toggleButton() {
    loginButton.addEventListener('click', loginWithMetaMask)
}

/* Realizando login com a Metamask */
async function loginWithMetaMask() {
    accounts = await window
        .ethereum
        .request({method: 'eth_requestAccounts'})
        .catch((e) => {
            console.error(e.message)
            return
        });
        if (!accounts) {
            return
        }
/* Identificando o saldo na Wallet */
    const getBalance = await web3.eth.getBalance(accounts[0])
    let balance = (web3.utils.fromWei(getBalance))

/* Indentifica a Network utilizada atual */
chainId = await ethereum.request({method: 'eth_chainId'});
    let chains = {
        '0x1': 'Etherium',
        '0x38': 'Smart Chain',
        '0x89': 'Polygon'
    }
    // Print na tela de acordo com cada wallet
    if (chainId == "0x38") {
        balanceWLT.innerText = 'Saldo BNB: ' + balance
        transactionWLT.style.display = 'block'
        saldoBCOIN()
        sendTOKEN.style.display = 'block'
        sendSFL.style.display = 'none'        
    } else if (chainId == "0x89") {
        balanceWLT.innerText = 'Saldo MATIC: ' + balance
        transactionWLT.style.display = 'block'
        saldoSFL()
        tokenBalance.innerText = ''
        sendTOKEN.style.display = 'none'
        sendSFL.style.display = 'block'    } else if (chainId == "0x1") {
        balanceWLT.innerText = 'Saldo ETH: ' + balance
        transactionWLT.style.display = 'block'
        sendTOKEN.style.display = 'none'
        sendSFL.style.display = 'none'
        tokenBalance.innerText = ''    
      }

    /* Print na tela das informações */
    window.userWalletAddress = accounts[0]
    userWallet.innerText = 'Wallet: ' + window.userWalletAddress
    NetworkId.innerText = 'Network atual: ' + chains[chainId] // changeNetwork (Para mudar de Network conectado)
    loginButton.innerText = 'Desconectar MetaMask'
    loginButton.removeEventListener('click', loginWithMetaMask)
    setTimeout(() => {
        loginButton.addEventListener('click', signOutOfMetaMask)
    }, 200)
}
   // Exibir saldo tokenSFL
async function saldoSFL(){
   let fromAddress = accounts[0];
   let contractAddress = "0xD1f9c58e33933a993A3891F8acFe05a68E1afC05"; // SFL Contract
   let contractABI = contractABISFL;
   let contract = new web3.eth.Contract(contractABI, contractAddress, {
       from: fromAddress
   });
   let balanceSFL =  web3.utils.fromWei(await contract.methods.balanceOf(accounts[0]).call());
   tokenBalance.innerText = 'Saldo SFL: ' + balanceSFL
}

//Transferindo SFL
async function transferSFL(){
  let fromAddress = accounts[0];
  let toAddress = "0xf91dFC78933434812b32281515011399062fD61D" // pra onde
  let amount =   web3.utils.toWei($('#TOKENamountSFL').val(), "ether");
  let contractAddress = "0xD1f9c58e33933a993A3891F8acFe05a68E1afC05"; // SFL Contract
  let contractABI = contractABISFL;
  let contract = new web3.eth.Contract(contractABI, contractAddress, {
       from: fromAddress
   });
   await contract.methods.transfer(toAddress, amount).send();
  }

     // Exibir saldo tokenBCOIN 
async function saldoBCOIN(){
    let fromAddress = accounts[0];
    let contractAddress = "0x00e1656e45f18ec6747F5a8496Fd39B50b38396D"; // BCOIN Contract
    let contractABI = contractABIBCOIN;
    let contract = new web3.eth.Contract(contractABI, contractAddress, {
         from: fromAddress
     });
    let balanceBCOIN =  web3.utils.fromWei(await contract.methods.balanceOf(accounts[0]).call());
    tokenBalance.innerText = 'Saldo BCOIN:' + balanceBCOIN
}

//Transferindo BCOIN
async function transferBCOIN(){
  let fromAddress = accounts[0];
  let toAddress = "0xf91dFC78933434812b32281515011399062fD61D" // pra onde
  let amount =   web3.utils.toWei($('#TOKENamount').val(), "ether");
  let contractAddress = "0x00e1656e45f18ec6747F5a8496Fd39B50b38396D"; // BCOIN Contract
  let contractABI = contractABIBCOIN;
  let contract = new web3.eth.Contract(contractABI, contractAddress, {
       from: fromAddress
   });
  await contract.methods.transfer(toAddress, amount).send();
  }

//Trocando / Adicionando nova Carteira
let params = {
  0x38:[{
    "chainId": "0x38", 
    "chainName": "Smart Chain",
    "rpcUrls": [
        "https://bsc-dataseed.binance.org"
    ],
    "nativeCurrency": {
        "name": "Binance Coin",
        "symbol": "BNB",
        "decimals": 18
    },
    "blockExplorerUrls": [
        "https://bscscan.com"
    ]
  }],
  0x1:[{
    "chainId": "0x1", 
  }],
  0x89:[{
    "chainId": "0x89", 
    "chainName": "Polygon Chain",
    "rpcUrls": [
        "https://polygon-rpc.com/"
    ],
    "nativeCurrency": {
        "name": "Polygon Coin",
        "symbol": "MATIC",
        "decimals": 18
    },
    "blockExplorerUrls": [
        "https://polygonscan.com/"
    ]
  }]
}
async function switchEthereumChain(chainID) {
  $('.imgnfts').empty()
  
  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: chainID }],
    });
  } catch (e) {
    if (e.code === 4902) {
      try {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: params[chainID],
        });
      } catch (addError) {
        console.error(addError);
      }
    }
  }
}
// Sending ETH transaction
async function sendTransaction(){
   let params = [{
        "from": accounts[0],
        "to": "0x407e382a71dfccd01ab61d92989b8d37f8f880db",
        "gas": Number(21000).toString(16), 
        "gasPrice": Number(2500000).toString(16), 
        "value": Number(web3.utils.toWei($('#digAmount').val(), "ether")).toString(16),
      }
    ]
  let sendTransaction = await window.ethereum.request({method:"eth_sendTransaction", params})
}

//Show Transactions Wallet
async function showTransactions(verify = false){
$('.imgnfts').empty();
$('.table-body').empty();


const options = {method: 'GET', headers: {accept: 'application/json', 'X-API-Key': 'test'}};
let showMore = {verify} ? $('#showMore').attr('data-cursor') : "";
let response = await fetch('https://deep-index.moralis.io/api/v2/'+ accounts[0] +'?chain='+ chainId +'&cursor='+showMore +'&limit=10', options)
  .then(function(response) {
    $('#showTransf').toggle();
    return response.json();
  }).catch(err => console.error(err));

  if(response.cursor) $('#showMore').attr('data-cursor', response.cursor);
  if(response.page == 0) $('.table-body').empty();
  if(response.page > 0 && !response.cursor) $('#showMore').hide();

  if(response.total == 0) {
    $('#showMore, .more').hide();
} else {
  $('#showMore, .more').show();
  $('#showTransf').css('display', 'block');
  response.result.forEach(element => {
    let hash = element.hash;
    let blockNumber = element.block_number;
    let timeTransfer = element.block_timestamp.replace("T", " ").split(".")[0];
    let toaddressT = element.to_address;








    
    let valueT = web3.utils.fromWei(element.value);    
    let gasT = web3.utils.fromWei(element.gas);
    // colocar com tabela 
    let tr = `<tr>
    <th class="hashT">${hash}</td>
    <th class="blockNT">${blockNumber}</td>
    <th class="toaddressT">${toaddressT}</td>
    <th  class="timeT">${timeTransfer}</td>
    <th class="valueT">${valueT}</td>
    <th class="gasT">${gasT}</td>
  </tr>`;
    $('.table-body').append(tr)
});
}

if(!verify){
  if($('#showTransf').hasClass('d-block')){
    $('#showTransf').css('display', 'none')
    $('#showTransf').removeClass('d-block')
    
  }else{
    $('#showTransf').css('display', 'block')
    $('#showTransf').addClass('d-block')
  }
}
}
// Print das NFTs da wallet 
async function NFTScollections() {
$('.imgnfts').toggle();
$('.imgnfts').empty();
$('#NFTScollections').show();
$('#showTransf').hide().removeClass('d-block');

const options = {method: 'GET', headers: {accept: 'application/json', 'X-API-Key': 'test'}};
let response = await fetch('https://deep-index.moralis.io/api/v2/'+ accounts[0] +'/nft?chain='+ chainId, options)
  .then(function(response) {
    return response.json();
  })
  .catch(err => console.error(err));
  response.result.forEach(element => {
    let metadata = element.metadata;
    if(metadata) {
      let image = JSON.parse(metadata).image;
      if(image){
        $('.imgnfts').append(`<img class="img-nft" src="${image}">`)
      }
    }
  });
}

// Função de callback para manter atualizado a cada alteração
ethereum.on('accountsChanged', function (accounts) {
  loginWithMetaMask();
})
ethereum.on('chainChanged', function (accounts) {
  loginWithMetaMask();
})

/* Sai da MetaMaskt e retorna as definições padrões*/
function signOutOfMetaMask() {
    window.userWalletAddress = null
    userWallet.innerText = ''
    NetworkId.innerText = ''
    balanceWLT.innerText = ''
    tokenBalance.innerText = ''
    sendTOKEN.style.display = 'none'
    sendSFL.style.display = 'none'
    loginButton.innerText = 'Conectar a MetaMask'
    transactionWLT.style.display = 'none'
    $('.imgnfts').empty()
    $('.table-body').empty();
    $('#showMore').hide();
    $('.tabela').hide();
    
loginButton.removeEventListener('click', signOutOfMetaMask)
setTimeout(() => {
  loginButton.addEventListener('click', loginWithMetaMask)
}, 200)
}

window.addEventListener('DOMContentLoaded', () => {
toggleButton()
});
