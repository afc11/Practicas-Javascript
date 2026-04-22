/* ╔════════════════════════════════════════════════════════════════════════╗ */
/* ║                                NO TOCAR                                ║ */
/* ╚════════════════════════════════════════════════════════════════════════╝ */

document.addEventListener("DOMContentLoaded", function () {
  /* Ejercicio 1 */
  verificarEjercicio(0, () => saludar("Ana"));

  /* Ejercicio 2 */
  verificarEjercicio(1, () => calculadora(2, 2, "+"));
  verificarEjercicio(2, () => calculadora(10, 5, "-"));
  verificarEjercicio(3, () => calculadora(50, 2, "/"));
  verificarEjercicio(4, () => calculadora(10, 5, "*"));

  /* Ejercicio 3 */
  verificarEjercicio(5, () => areaRectangulo(4, 5));

  /* Ejercicio 4 */
  verificarEjercicio(6, () => esPar(4));
  verificarEjercicio(7, () => esPar(5));

  /* Ejercicio 5 */
  verificarEjercicio(8, () => celsiusAFahrenheit(0));

  /* Ejercicio 6 */
  verificarEjercicio(9, () => calificarNota(85));

  /* Ejercicio 7 */
  verificarEjercicio(10, () => sumarArray([1, 2, 3, 4]));

  /* Ejercicio 8 */
  verificarEjercicio(11, () => encontrarMaximoPar([3, 9, 2, 5]));

  /* Ejercicio 9 */
  verificarEjercicio(12, () =>
    contarVocales(
      Array.from(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut lacus id orci pharetra euismod.",
      ),
    ),
  );

  /* Ejercicio 10 */
  verificarEjercicio(13, () => dobleNumeros([1, 2, 3, 4]));
});

function verificarEjercicio(indice, funcion) {
  try {
    const valoresEsperados = document.querySelectorAll(".ejercicio .esperado");
    const valorEsperado = valoresEsperados[indice].textContent;
    const resultado = funcion();

    const resultadoStr = JSON.stringify(resultado);
    const esperadoStr = JSON.stringify(eval(valorEsperado));
    const esValido = resultadoStr === esperadoStr;

    const fila = document.querySelectorAll(".ejercicio")[indice];
    esValido ? fila.classList.add("resuelto") : null;
    fila.querySelector(".resultado").textContent = resultadoStr;
    fila.querySelector(".estado").textContent = esValido ? "✅" : "❌";

    return esValido;
  } catch (error) {
    console.error(`Error en ejercicio ${indice + 1}:`, error);
    return false;
  }
}
