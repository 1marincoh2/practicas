window.onload=compra
const arrayCompras = [
    {"id": 1, "name": "carnes", title: "cerdo y res", activo: true},
    {"id": 2, "name": "jabones", title: "de tocador", activo: true},
    {"id": 3, "name": "verduras y frutas", title: "cebolla y platano", activo: false},
    {"id": 4, "name": "jugos", title: "naranja", activo: true},
    {"id": 5, "name": "refrescos", title: "coca cola y pepsi", activo: false},
    {"id": 6, "name": "enlatados", title: "chile jalapeño", activo: true}  ];


    function eliminar(comprId){
        const index = Arrayabc.findIndex((tipo) => {
            return tipo.id === comprId
        });
        if (index > -1){
            console.log(index)
            arrayCompras.splice(index, 1) 
            compra()
     
        } else {
            console.log('No se encuentra en el array')
           
        }
    }
        
    function compra() {
        let caja = '';
        let index = 0;
        for (const tipo of arrayCompras) {
            caja += `<div class="compr">
                        <div class="container">
                            posicion ${ index }
                            </br>
                            ObjectId ${ tipo.id  }
                            <h4><b> ${ tipo.name } </b></h4>
                            <p> ${ tipo.title } </p>
                            <button onclick="eliminar(${ tipo.id })">Eliminar</button>
                        </div>
                      </div>`
    
            index++;
        }
        document.getElementById("contenedor").innerHTML = caja;
    
    }
    

function compra() {


    console.log('For 3 tamaño del array=' + arrayCompras.length)
	for (let i = 0; i < arrayCompras.length; +i++) {
		console.log('indice:' + i + 'valor:' + arrayCompras[i].name)
	}


	console.log('for 4 tamaño del array=' + arrayCompras.length)
	for (const id of arrayCompras) {
		console.log(id.name)

    }
    
    console.log('For 1 tamaño del array=' + arrayCompras.length)
	for (let i = 0; i < arrayCompras.length; +i++) {
		console.log('indice:' + i + ' valor:' + arrayCompras[i].title)
    }
}        