class Product {
  constructor(name, price, year) {
    this.name = name;
    this.price = price;
    this.year = year;
  }
}

class UI {
  addProduct(product) {
    const productList = document.getElementById('product-list')
    const element = document.createElement('div')
    element.innerHTML = `
    <div class="card text-center mb-4">
        <div class="card-body">
        <strong>Producto</strong> ${product.name}
        <strong>Precio del producto</strong> ${product.price}
        <strong>Año de fabricacion</strong> ${product.year}
        <a href"#" class="btn btn-danger btn-sm ms-1" name="delete">X</a>
        </div> 
    </div>
    `
    productList.appendChild(element) //appenChild nos permite asignarle un elemento creado anteriormente 
   
  }
  resetForm(){
    document.getElementById('product-form').reset()//nos sirve para setear a estado inicial algo
  }
  deleteProduct(element) {
    if (element.name === 'delete'){
       element.parentElement.parentElement.parentElement.remove() //parentElemente nos sirve para ver que elemento paadre tiene algun otor elemento, se coloca todas las veces necesarias para subir mas el padre
       this.showMessage('Producto Eliminado','primary')
    }//remove remueve segun la capa en la que estamos

    
  }
  showMessage(messaje, cssClass) {
    const div = document.createElement('div')
    div.className = `alert alert-${cssClass}`//nombre.className me ayuda a agregarle clases
    div.appendChild(document.createTextNode(messaje))//createtextnode me sirve para crear un texto
    //Mostrar en DOM
    const container = document.querySelector('.container') //sirve para seleccionar algo del html .nombre para clases #nombre para id
    const app = document.querySelector('#App')
    container.insertBefore(div, app) // sirve para insertar un elemento antes de otro nombre.insertBefore(lo que se va insertar, antes de que)
    setTimeout(function(){//sirve para que despues de cierto tiempo se ejecute una funcion setTimeout(function(){funcion a ejecutar},tiempo en milisegundos para ejecutar funcion)
        document.querySelector('.alert').remove()
    },3000)

  }
}

//Eventos de Dom
document.getElementById("product-form").addEventListener("submit", function(e) {
   const name = document.getElementById("name").value
   const price = document.getElementById("price").value
   const year = document.getElementById("year").value
  
   const product = new Product(name, price, year)
   const ui = new UI()

   if( name === '' || price === '' || year === ''){
     return alert("Inserte valores")
   }

   ui.addProduct(product)
   ui.resetForm()//aplicamos el reset luego de agregar el elemento
   ui.showMessage('Producto Agregado!',"success")
   e.preventDefault()//previene el comportamiento por default sirve para poder ver los objetos en la consolo y que no se recargue la pagina automaticamente


});


document.getElementById('product-list').addEventListener('click',function(e){//esta funcion nos permite capturar donde el usuario esta haciendo click
   const ui = new UI()
   ui.deleteProduct(e.target)
})
    
