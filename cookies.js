if (
  document.cookie.includes("idioma") ||
  document.cookie.includes("tema") ||
  document.cookie.includes("usuario") ||
  document.cookie.includes("preferencia") ||
  document.cookie.includes("ultimaVisita")
) {
  document.cookie = `idioma=;max-age=0`;
  document.cookie = `tema=;max-age=0`;
  document.cookie = `usuario=;max-age=0`;
  document.cookie = `preferencia=;max-age=0`;
  document.cookie = `ultimaVisita=;max-age=0`;
} else {
  let idioma = prompt("Indique el idioma");
  let tema = prompt("Indique el tema");
  let usuario = prompt("Indique el usuario");
  let preferencia = prompt("Indique la preferencia");
  let ultimaVisita = prompt("Indique la última visita");
  document.cookie = `idioma=${idioma};max-age=10`;
  document.cookie = `tema=${tema};max-age=15`;
  document.cookie = `usuario=${usuario};max-age=20`;
  document.cookie = `preferencia=${preferencia}`;
  document.cookie = `ultimaVisita=${ultimaVisita}`;
}
console.log(`Cookies: ${document.cookie}`)