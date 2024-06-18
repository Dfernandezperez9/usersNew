



const UELE = document.getElementById("listaUsuarios");
const URL = "https://jsonplaceholder.typicode.com/users"







function fetchData (URL) {
    
    
    fetch (URL)
    
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error en la solicitud.`);
          }
          return response.json();
        })
        .then((data) => {
         console.log(data)
         let copiaDeData = data
         console.log(copiaDeData)
         for(let i = 0; i < copiaDeData.length; i++) {
            console.log(copiaDeData[i])
            const newElemento = document.createElement("li")
            newElemento.classList.add("newElement")
            const contenedorPrincipal = document.createElement("div")
            contenedorPrincipal.classList.add("contenedor1")
            const contenedorSecundario = document.createElement("div")
            contenedorSecundario.classList.add("contenedor2")
            const contenedorTerciario = document.createElement("div")
            contenedorTerciario.classList.add("contenedorImagen")
            const contenedorImagen = document.createElement("div")
            contenedorImagen.classList.add("contenedor3")
            let edad = Math.floor(Math.random()*100)
            const template = `<p><span class='plantilla'>Nombre: </span>${copiaDeData[i].name}.</p><p><span class='plantilla'>Edad: </span>${edad}.</p><p><span class='plantilla'>Username: </span>${copiaDeData[i].username}.</p><p><span class='plantilla'>telefono: </span>${copiaDeData[i].phone}.</p><p><span class='plantilla'>Email: </span>${copiaDeData[i].email}.</p>`
            const template2 = `<p><span class='plantilla'>Compania: </span>${copiaDeData[i].company.name}.</p><p><span class='plantilla'>Direccion: </span>${copiaDeData[i].address.street}, ${copiaDeData[i].address.suite}, ${copiaDeData[i].address.city}.</p>`
            const imagen = document.createElement("img")
            imagen.src = "assets\img\1.jpeg"
            contenedorSecundario.innerHTML = template
            contenedorTerciario.innerHTML = template2
            contenedorImagen.innerHTML = imagen
            

            UELE.appendChild(newElemento)
            newElemento.appendChild(contenedorPrincipal);
            contenedorPrincipal.appendChild(contenedorSecundario);
            contenedorPrincipal.appendChild(contenedorImagen)
            contenedorPrincipal.appendChild(contenedorTerciario)
            
           
           
         }
         
        })
        .catch((error) => {
          console.log(`Error en el envio.`);
        });
        
    }
    
   
    fetchData(URL)
   







    /*if (asset.id === 1) {
        imagen.src = "assets\img\x01.jpeg"
    }
    else if (asset.id ===2) {
        imagen.src = "assets\img\x02.jpeg"
    }
    else if (asset.id === 3) {
        imagen.src = "assets\img\x03.jpeg"
    }
    else if (asset.id === 4) {
        imagen.src = "assets\img\x04.jpeg"
    }
    else if (asset.id === 5) {
        imagen.src = "assets\img\x05.jpeg"
    }
    else if (asset.id === 6) {
        imagen.src = "assets\img\x06.jpeg"
    }
    else if (asset.id === 7) {
        imagen.src = "assets\img\x07.jpeg"
    }
    else if (asset.id === 8) {
        imagen.src = "assets\img\x08.jpeg"
    }
    else if (asset.id === 9) {
        imagen.src = "assets\img\x09.jpeg"
    }
    else {
        imagen.src = "assets\img\x10.jpeg"
        }*/





        /*for (let i = 0; i < assets.length; i++) {
            let contenedor = document.createElement("div");
            contenedor.classList.add("contenedor");
            let newElemento = document.createElement("li");
            let imagen = document.createElement("img");
            imagen.src = assets[i].image;
            imagen.alt = `${assets[i].name}`
            let huecoNombre = document.createElement("p");
            let nombre = `<span class='titulos'>Nombre: </span>${assets[i].name}.`
            huecoNombre.innerHTML = nombre;

            let huecoEspecie = document.createElement("p");
            let especie = `<span class='titulos'>Especie: </span>${assets[i].species}.`
            huecoEspecie.innerHTML = especie;

            newElemento.appendChild(contenedor);
            contenedor.appendChild(imagen);
            contenedor.appendChild(huecoNombre);
            contenedor.appendChild(huecoEspecie);


            uele.appendChild(newElemento)
            
            
        }*/




            // const template = `<p><span class='plantilla'>Nombre: </span>${copiaDeData[i].name}.</p><p><span class='plantilla'>Edad: </span>${edad}.</p><p><span class='plantilla'>Username: </span>${copiaDeData[i].username}.</p><p><span class='plantilla'>telefono: </span>${copiaDeData[i].phone}.</p><p><span class='plantilla'>Email: </span>${copiaDeData[i].email}.</p>`











            /*const UELE = document.getElementById("listaUsuarios");
            const URL = "https://jsonplaceholder.typicode.com/users"

            let edad = Math.floor(Math.random()*100)





function fetchData (URL) {
    
    
    fetch (URL)
    
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error en la solicitud.`);
          }
          return response.json();
        })
        .then((data) => {
         console.log(data)
         let copiaDeData = data
         console.log(copiaDeData)
         for(let i = 0; i < copiaDeData.length; i++) {
            console.log(copiaDeData[i])
            const newElemento = document.createElement("li")
            newElemento.classList.add("newElement")
            const contenedorPrincipal = document.createElement("div")
            contenedorPrincipal.classList.add("contenedor1")
            const contenedorSecundario = document.createElement("div")
            contenedorSecundario.classList.add("contenedor2")
            const parrafo = document.createElement("p")
            parrafo.innerText = copiaDeData[i].name
            
            UELE.appendChild(newElemento)
            newElemento.appendChild(contenedorPrincipal);
            contenedorPrincipal.appendChild(contenedorSecundario);
            contenedorSecundario.appendChild(parrafo)
           
           
         }
         
        })
        .catch((error) => {
          console.log(`Error en el envio.`);
        });
        
    }
    
   
    fetchData(URL)*/