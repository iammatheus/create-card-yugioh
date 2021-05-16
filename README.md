# Criação de Cartas Yu-Gi-Oh!

## Sobre o projeto
* Projeto criado com o intuito de aprimorar os meus conhecimentos na área, inspirado no site <a href="https://www.cardmaker.net/yugioh/">Yugioh Card Maker</a>, o projeto tem as seguintes funções: 
   <ol>
      <li>Criar</li>
      <li>Deletar</li>
      <li>Listar</li>
   </ol>  

* Ferramentas utilizadas na criação do projeto:
   <ol>
      <li><b>HTML, CSS, JS</b>: Desenvolvimento front-end.</li>
      <li><b>NodeJS</b>: Desenvolvimento backend.</li>
      <li><b>Banco de dados</b>: MongoDB.</li>
      <li><b>Handlebars</b>: Template que permite utilizar códigos JS dentro do HTML.</li>
      <li><b>Api Imgur</b>: Armazenamento e retorno da imagem que foi inserida.</li>
      <li><b>Editor</b>: Visual Studio Code</li>
   </ol> 

<div>
   <h2>Criação de cartas</h2>
   * Você pode criar os seguintes tipos de cartas:

   <div style="display: flex; align-content: center; margin-left: 40px;">
      <div style="width: 150px; display: flex; align-items: center; margin: 15px 0;">
         <img src="public/image/types/aqua.png" style="width: 25px;">
         <span style="margin-left: 5px; text-transform: capitalize;">aqua</span>
      </div>
      <div style="width: 150px; display: flex; align-items: center; margin: 15px 0;">
         <img src="public/image/types/beast-warrior.png" style="width: 25px;"> 
         <span style="margin-left: 5px; text-transform: capitalize;">beast-warrior</span>
      </div>
      <div style="width: 150px; display: flex; align-items: center; margin: 15px 0;">
         <img src="public/image/types/beast.png" style="width: 25px;">
         <span style="margin-left: 5px; text-transform: capitalize;">beast</span>
      </div>
   </div>
   <div style="display: flex; align-content: center; margin-left: 40px;">
      <div style="width: 150px; display: flex; align-items: center; margin: 15px 0;">
         <img src="public/image/types/dinosaur.png" style="width: 25px;">
         <span style="margin-left: 5px; text-transform: capitalize;">dinosaur</span>
      </div>
      <div style="width: 150px; display: flex; align-items: center; margin: 15px 0;">
         <img src="public/image/types/divine.png" style="width: 25px;"> 
         <span style="margin-left: 5px; text-transform: capitalize;">divine</span>
      </div>
      <div style="width: 150px; display: flex; align-items: center; margin: 15px 0;">
         <img src="public/image/types/dragon.png" style="width: 25px;">
         <span style="margin-left: 5px; text-transform: capitalize;">dragon</span>
      </div>
   </div>
   <div style="display: flex; align-content: center; margin-left: 40px;">
      <div style="width: 150px; display: flex; align-items: center; margin: 15px 0;">
         <img src="public/image/types/fairy.png" style="width: 25px;">
         <span style="margin-left: 5px; text-transform: capitalize;">fairy</span>
      </div>
      <div style="width: 150px; display: flex; align-items: center; margin: 15px 0;">
         <img src="public/image/types/fiend.png" style="width: 25px;">
         <span style="margin-left: 5px; text-transform: capitalize;">fiend</span>
      </div>
      <div style="width: 150px; display: flex; align-items: center; margin: 15px 0;">
         <img src="public/image/types/fish.png" style="width: 25px;">
         <span style="margin-left: 5px; text-transform: capitalize;">fish</span>
      </div>
   </div>
   <div style="display: flex; align-content: center; margin-left: 40px;">
      <div style="width: 150px; display: flex; align-items: center; margin: 15px 0;">
        <img src="public/image/types/insect.png" style="width: 25px;">
         <span style="margin-left: 5px; text-transform: capitalize;">insect</span>
      </div>
      <div style="width: 150px; display: flex; align-items: center; margin: 15px 0;">
         <img src="public/image/types/machine.png" style="width: 25px;">
         <span style="margin-left: 5px; text-transform: capitalize;">machine</span>
      </div>
      <div style="width: 150px; display: flex; align-items: center; margin: 15px 0;">
         <img src="public/image/types/plant.png" style="width: 25px;">
         <span style="margin-left: 5px; text-transform: capitalize;">plant</span>
      </div>
   </div>
   <div style="display: flex; align-content: center; margin-left: 40px;">
      <div style="width: 150px; display: flex; align-items: center; margin: 15px 0;">
         <img src="public/image/types/pyro.png" style="width: 25px;">
         <span style="margin-left: 5px; text-transform: capitalize;">pyro</span>
      </div>
      <div style="width: 150px; display: flex; align-items: center; margin: 15px 0;">
        <img src="public/image/types/reptile.png" style="width: 25px;">
         <span style="margin-left: 5px; text-transform: capitalize;">reptile</span>
      </div>
      <div style="width: 150px; display: flex; align-items: center; margin: 15px 0;">
         <img src="public/image/types/rock.png" style="width: 25px;">
         <span style="margin-left: 5px; text-transform: capitalize;">rock</span>
      </div>
   </div>
   <div style="display: flex; align-content: center; margin-left: 40px;">
      <div style="width: 150px; display: flex; align-items: center; margin: 15px 0;">
         <img src="public/image/types/sea-serpent.png" style="width: 25px;">
         <span style="margin-left: 5px; text-transform: capitalize;">sea-serpent</span>
      </div>
      <div style="width: 150px; display: flex; align-items: center; margin: 15px 0;">
         <img src="public/image/types/spellcaster.png" style="width: 25px;">
         <span style="margin-left: 5px; text-transform: capitalize;">spellcaster</span>
      </div>
      <div style="width:150px; isplay:flex; align-items:center; margin:15px 0;">
         <img src="public/image/types/thunder.png" style="width: 25px;">
         <span style="margin-left: 5px; text-transform: capitalize;">thunder</span>
      </div>
   </div>
   <div style="display: flex; align-content: center; margin-left: 40px;">
      <div style="width: 150px; display: flex; align-items: center; margin: 15px 0;">
         <img src="public/image/types/warrior.png" style="width: 25px;">
         <span style="margin-left: 5px; text-transform: capitalize;">warrior</span>
      </div>
      <div style="width: 150px; display: flex; align-items: center; margin: 15px 0;">
         <img src="public/image/types/winged-beast.png" style="width: 25px;">
         <span style="margin-left: 5px; text-transform: capitalize;">winged-beast</span>
      </div>
      <div style="width: 150px; display: flex; align-items: center; margin: 15px 0;">
         <img src="public/image/types/zombie.png" style="width: 25px;">
         <span style="margin-left: 5px; text-transform: capitalize;">zombie</span>
      </div>
   </div>

   <br/>

   * Quando uma carta é criada com o tipo <b>Divine</b> a cor dela será azul, os demais tipos a cor será amarela.

   <img style="margin: 5px 0 15px 40px;" src="public/image/cards.png">

   * O ataque e defesa não ultrapassam de <b>9999</b>. 
   * Só é possível inserir imagens dos tipos: <b>PNG, JPEG, JPG</b> ou <b>JFIF</b>.
   * <span style="color: #f54b42;">Todos os campos devem ser preenchidos!</span>

   <br/>

   * Projeto 100% responsivo.
   * <a href="https://yugioh-create-card.herokuapp.com/">Visualizar Projeto</a>

</div>
