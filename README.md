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

<div class="container">
   <h2>Criação de cartas</h2>
   * Você pode criar os seguintes tipos de cartas:

   <div class="container-icons">
      <div class="content-icon">
         <img src="public/image/types/aqua.png">
         <span>aqua</span>
      </div>
      <div class="content-icon">
         <img src="public/image/types/beast-warrior.png"> 
         <span>beast-warrior</span>
      </div>
      <div class="content-icon">
         <img src="public/image/types/beast.png">
         <span>beast</span>
      </div>
   </div>
   <div class="container-icons">
      <div class="content-icon">
         <img src="public/image/types/dinosaur.png">
         <span>dinosaur</span>
      </div>
      <div class="content-icon">
         <img src="public/image/types/divine.png"> 
         <span>divine</span>
      </div>
      <div class="content-icon">
         <img src="public/image/types/dragon.png">
         <span>dragon</span>
      </div>
   </div>
   <div class="container-icons">
      <div class="content-icon">
         <img src="public/image/types/fairy.png">
         <span>fairy</span>
      </div>
      <div class="content-icon">
         <img src="public/image/types/fiend.png">
         <span>fiend</span>
      </div>
      <div class="content-icon">
         <img src="public/image/types/fish.png">
         <span>fish</span>
      </div>
   </div>
   <div class="container-icons">
      <div class="content-icon">
        <img src="public/image/types/insect.png">
         <span>insect</span>
      </div>
      <div class="content-icon">
         <img src="public/image/types/machine.png">
         <span>machine</span>
      </div>
      <div class="content-icon">
         <img src="public/image/types/plant.png">
         <span>plant</span>
      </div>
   </div>
   <div class="container-icons">
      <div class="content-icon">
         <img src="public/image/types/pyro.png">
         <span>pyro</span>
      </div>
      <div class="content-icon">
        <img src="public/image/types/reptile.png">
         <span>reptile</span>
      </div>
      <div class="content-icon">
         <img src="public/image/types/rock.png">
         <span>rock</span>
      </div>
   </div>
   <div class="container-icons">
      <div class="content-icon">
         <img src="public/image/types/sea-serpent.png">
         <span>sea-serpent</span>
      </div>
      <div class="content-icon">
         <img src="public/image/types/spellcaster.png">
         <span>spellcaster</span>
      </div>
      <div class="content-icon">
         <img src="public/image/types/thunder.png">
         <span>thunder</span>
      </div>
   </div>
   <div class="container-icons">
      <div class="content-icon">
         <img src="public/image/types/warrior.png">
         <span>warrior</span>
      </div>
      <div class="content-icon">
         <img src="public/image/types/winged-beast.png">
         <span>winged-beast</span>
      </div>
      <div class="content-icon">
         <img src="public/image/types/zombie.png">
         <span>zombie</span>
      </div>
   </div>

   <br/>

   * Quando uma carta é criada com o tipo <b>Divine</b> a cor dela será azul, os demais tipos a cor será amarela.

   <img class="cardColor" src="public/image/cards.png">

   * O ataque e defesa não ultrapassam de <b>9999</b>. 
   * Só é possível inserir imagens dos tipos: <b>PNG, JPEG, JPG</b> ou <b>JFIF</b>.
   * <span style="color: #f54b42;">Todos os campos devem ser preenchidos!</span>

   <br/>

   * Projeto 100% responsivo.
   * <a href="https://yugioh-create-card.herokuapp.com/">Visualizar Projeto</a>

</div>


<style type='text/css'>
   .container{
      margin: 20px 0;
   }
   .container-icons {
      display: flex;
      align-content: center;
      margin-left: 40px;
   }
   .content-icon {
      width: 150px; 
      display: flex;
      align-items: center;
      margin: 15px 0;
   }
   .content-icon:last-child{
      border: none;
   }
   .content-icon img{
      width: 25px;
   }
   .content-icon span{
      margin-left: 5px;
      text-transform: capitalize;
   }
   .cardColor{
      margin: 5px 0 15px 40px;
   }
</style>
