const productos = [
    {
      nombre: "Aretes Corazón Dorado",
      precio: 25000,
      imagen: "img/aretes-corazon.jpg"
    },
    {
      nombre: "Collar Perlas Finas",
      precio: 35000,
      imagen: "img/collar-perlas.jpg"
    },
    {
      nombre: "Anillo de Plata",
      precio: 30000,
      imagen: "img/anillo-plata.jpg"
    }
  ];
  
  const contenedor = document.getElementById('productos');
  
  productos.forEach(producto => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p>$${producto.precio.toLocaleString('es-CO')}</p>
    `;
    contenedor.appendChild(card);
  });
  