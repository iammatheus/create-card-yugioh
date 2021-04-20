let cardImage = document.getElementById('cardImage')
let cardAttack = document.getElementById('cardAttack')
let cardDefense = document.getElementById('cardDefense')
let cardName = document.getElementById('cardName')
let submit = document.getElementById('submit')

submit.addEventListener("click", (event) => {
   if(cardImage.value == '' 
      && cardAttack.value == '' 
      && cardDefense.value == '' 
      && cardName.value == ''){
      alert('Preencha todos os campos!')
      event.preventDefault()
   }else if(cardImage.value == ''){
      alert('Insira uma imagem!')
      event.preventDefault()
   }else if(cardAttack.value == '' || cardDefense.value == ''){
      alert('Preencha os campos de Ataque e Defesa!')
      event.preventDefault()
   }else if(cardName.value == ''){
      alert('Insira um nome para a carta!')
      event.preventDefault()
   }else{
      alert('Carta criada com sucesso!')
   }
})

function validateImg(){
   let archiveInput = document.getElementById('cardImage')
   let archiveRoute = archiveInput.value;
   const formatePermited = /(.jpg|.PNG|.jfif|.jpeg)$/i;
   let archiveFiles = archiveInput.files[0]

   if(!formatePermited.exec(archiveRoute)){
      alert('Verifique se o arquivo selecionado é: JPEG, JPG, PNG ou JFIF')
      return false
   }else if(archiveInput.files && archiveFiles){
      let viewImg = new FileReader()
      viewImg.onload = (e) => {
         let targetResult = e.target.result
         document.getElementById('viewCardImage').innerHTML = `<img class="imgCard" src="${targetResult}">`
      }
      viewImg.readAsDataURL(archiveFiles)
   }
}
