let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2000)
  .typeString('Estudio Ingeniería de Software.')
  .pauseFor(200)
  .deleteChars(31)
  .typeString('Soy una líder en busca de nuevos retos y generar impacto en la sociedad tecnológica.')
  .pauseFor(150)
  .deleteChars(84)
  .start();
