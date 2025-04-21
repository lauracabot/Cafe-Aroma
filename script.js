document.getElementById("formularioContacto").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
  
    if (nombre === "" || email === "" || mensaje === "") {
      alert("Por favor completá todos los campos.");
    } else {
      alert("¡Gracias por contactarnos, " + nombre + "!");
      this.reset();
    }
  });
  
  