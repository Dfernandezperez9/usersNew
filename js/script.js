



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
            imagen.classList.add("imagen")
            imagen.src = `./assets/img/${copiaDeData[i].id}.jpeg`
            contenedorSecundario.innerHTML = template
            contenedorTerciario.innerHTML = template2
            
            

            UELE.appendChild(newElemento)
            newElemento.appendChild(contenedorPrincipal);
            contenedorPrincipal.appendChild(contenedorSecundario);
            contenedorPrincipal.appendChild(contenedorImagen)
            contenedorImagen.appendChild(imagen)
            contenedorPrincipal.appendChild(contenedorTerciario)
            
           
           
         }
         
        })
        .catch((error) => {
          console.log(`Error en el envio.`);
        });
        
    }
    
   
    fetchData(URL)
   
