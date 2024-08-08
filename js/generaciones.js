class Persona {
    constructor(nombre, edad, DNI, sexo, peso, altura, anioNacimiento) {
      this.nombre = nombre;
      this.edad = edad;
      this.DNI = DNI;
      this.sexo = sexo;
      this.peso = peso;
      this.altura = altura;
      this.anioNacimiento = anioNacimiento;
    }
  
    mostrarDatos() {
          alert(`Informacion de la persona
              Nombre: ${this.nombre}
              Edad: ${this.edad} años
              DNI: ${this.DNI}
              Sexo: ${this.sexo}
              Peso: ${this.peso} Kg
              Altura: ${this.altura}
              Año de Nacimiento: ${this.anioNacimiento}
              `);
    }
  
    mayorDeEdad() {
      if (this.edad >= 18) {
        alert(`la persona ${this.nombre} es mayor de edad`);
      } else {
        alert(`la persona ${this.nombre} no es mayor de edad`);
      }
    }
  
    generacion() {
      const generacionZ = "Generacion Z";
      const generacionY = "Generacion Y millennials";
      const generacionX = "Generacion X";
      const generacionB = "Baby boom";
      const silentGeneration = "Los niños de la posguerra";
  
      if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
        alert(`<h2>¿A que generacion perteneces?</h2>
                  <p> ${this.nombre} pertenece a ${generacionZ}. La circunstancia historica fue
                  <b>La expansión masiva de internet</b> Rasgo caracteristico:<b>Irreverencia 😋</b> </p>`);
      }
      if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
        alert(`<h2>¿A que generacion perteneces?</h2>
                  <p> ${this.nombre} pertenece a ${generacionY}. La circunstancia historica fue
                  <b>Inicio de la digilitación</b> Rasgo caracteristico:<b>Frustración 🥶</b> </p>`);
      }
      if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
        alert(`<h2>¿A que generacion perteneces?</h2>
                  <p> ${this.nombre} pertenece a ${generacionX}. La circunstancia historica fue
                  <b>crisis del 73 y transicion española</b> Rasgo caracteristico:<b>Obseción por el exito 😎</b> </p>`);
      }
      if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
        alert(`<h2>¿A que generacion perteneces?</h2>
                  <p> ${this.nombre} pertenece a ${generacionB}. La circunstancia historica fue
                  <b>paz y explosión demográfica</b> Rasgo caracteristico:<b>Ambición 🤑</b> </p>`);
      }
      if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
        alert(`<h2>¿A que generacion perteneces?</h2>
                  <p> ${this.nombre} pertenece a ${silentGeneration}. La circunstancia historica fue
                  <b>conflictos belicos</b> Rasgo caracteristico:<b>Austeridad 😐</b> </p>`);
      }
    }
  }
  
  let formulario = document.getElementById("formulario");
  let generacion = document.getElementById("generacion");
  let mayorEdad = document.getElementById("mayorEdad");
  
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let input = document.querySelectorAll("input");
    let nombre = input[0].value;
    let edad = input[1].value;
    let DNI = input[2].value;
    let sexo = input[3].value;
    let peso = input[4].value;
    let altura = input[5].value;
    let anioNacimiento = input[6].value;
  
    let persona = new Persona(
      nombre,
      edad,
      edad,
      DNI,
      sexo,
      peso,
      altura,
      anioNacimiento
    );
  
  
    generacion.addEventListener("click", () => alert(persona.generacion()));
  
    mayorEdad.addEventListener("click", () => alert(persona.mayorDeEdad()));
  });