var happyBirthdayText = `
<p id="start">Parabéns, Tigrelo! 🎉🎉🎉🎉🎉🎉

    <img src="files/star-wars-storm-trooper.gif" id="gif-intro">
</p>

<h1>Isaac Tigrelo
    <sub>30 anos</sub>

    <img src="files/isaac.jpg" height="380px" id="imagem-tigrelo">

</h1>



<div id="titles">
    <div id="titlecontent">

        <!-- <p class="center">


        </p> -->

        <p>Feliz aniversário, Tigrelo!
            Nos alegramos demais nesse dia e celebramos as coisas que Deus faz na tua vida e que ele vai fazer
            também! Larga esse Java e vem pro lado C# da força. Tamo junto, seja nos shows de metal, nos rolê no
            pastel do rei ou passando raiva com código.
        </p>

        <b>- Setúbal</b>

        <hr class="row-entre-msgs">

        <p>Fala mano Isaac, meu parabéns que Deus possa abençoar grandemente você guerreiro, desconheço cara tão
            batalhador e sonhador, creio que Jesus pode realizar todos os seus sonhos basta vc crer e temer!! Que
            esse dia possa ser especial para você e que curta bastante, tamo junto demais 💪🏻
        </p>

        <b>- JP</b>

        <hr class="row-entre-msgs">

        <p>Tigrelo, que Deus te abençoe! Que vc continue sendo esse cara humilde,
        tranquilo, que independente do caos continua sempre sereno.
        De coração mesmo, agraço muito por você ceder seu lar para a célula, e que
        Deus fortaleça a amizade de cada um de nós, durante muitos anos e anos! 
        Que vc tenha muito sucesso como dev também! Nunca desista de seguir o caminho que vc escolheu,
        pode sempre contar com todos nós! 

        <br>
        <br>

        Um grande abraço e meus parabéns!!
        </p>

        <b>- Vinícius</b>

        <hr class="row-entre-msgs">

        <p>"poiss é véii", 30 anos de vida, 50 de CLT 😆🤣
        <br>
        <br>
        Que você tenha muuuuita felicidade e realização nessa nova fase da sua vida,
        com a certeza de que Deus e todos nós, seus amigos, estaremos com vc aqui,
        sempre, para tuudo que precisar!! Sou muito grato por sua vida e por quem vc é meu bomm!

        A veiera agora bateu, como vc sempre diz kkkkkk
        <br>
        <br>
        Parabénss manooo!!! 🎉🎉🎉
        </p>

        <b>- Pedro</b>

        <hr class="row-entre-msgs">

        <p>Isaac Ferreira Risola Rodrigues o famoso Tigrelo. Receba esta honra varão de Deus, da mais profunda galaxia. Kkkkk parabéns manow, vc é um cara que me inspira demais,
        guerreiro, batalhador e vitorioso na vida. Jesus te ama muito, tmj.
        </p>

        <b>- Leozin</b>

        <hr class="row-entre-msgs">

        <p class="center">Que Deus seja com você, Isaac!</p>
    </div>
</div>
<iframe style="visibility:hidden" width="560" height="315" src="https://www.youtube.com/embed/1KAOq7XX2OY"
    frameborder="0" allowfullscreen></iframe>
`;

function playAudio() {
  var x = document.getElementById("myAudio");
  x.play();
}

function boraBill() {
  document.getElementById("bodyTag").innerHTML += happyBirthdayText;

  var x = document.getElementById("myAudio");
  x.play();

  document.getElementById("button-bora-bill").remove();
}
