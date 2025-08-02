let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 70,
});
 
typewriter
  //.pauseFor(2000)
  .typeString('Hago diseños de publicidad.')
  .pauseFor(200)
  .deleteChars(40)
  .typeString('Perito en Administracion de empresas.')
  .pauseFor(150)
  .deleteChars(84)
  .start();
