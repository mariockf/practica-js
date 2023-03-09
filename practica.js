

let nombreUsuario = ('mario')
let solicitarUsuario = prompt(' por favor ingrese el usuario :') 
console.log(solicitarUsuario) 
let intentoUsuario =3

if ( solicitarUsuario === nombreUsuario) {

    console.log(' bienvenido ' + solicitarUsuario) 

   
}else{
    while (solicitarUsuario !== nombreUsuario && intentoUsuario > 0) { 

        console.log(' error ' + solicitarUsuario + ' no es su usuario ') 
        solicitarUsuario = prompt(' introdusca su usuario pro favor : ') 

        intentoUsuario-- 

        if (solicitarUsuario === nombreUsuario) {
            console.log('bienvenido ' + solicitarUsuario)
        }
        
    }

} 
let numeroId = parseInt(19168384) 
let solicitarId = parseInt(prompt(' por favor introduzca su id : ')) 
let intentosId = 3  

if (solicitarId === numeroId) { 

    console.log(' el ID : ' + solicitarId + ' es valido ') 


}else{

    while ( solicitarId !== numeroId && intentosId > 0 ) {

            console.log(solicitarId +' no es su ID') 

            solicitarId=parseInt(prompt(' por favor introduzca su ID :')) 

            intentosId--

            if (solicitarId === numeroId) 
            console.log('el ID ' + solicitarId + ' es valido ')

    }
} 

if ( solicitarUsuario === nombreUsuario && solicitarId === numeroId) {

    console.log(' iniciando sistema ' + solicitarUsuario) 
    
    let opcionUsuario = prompt(`

    elija una opcion : 
    1: libros 
    2: peliculas 
    3: juegos 
    
    `) 

    console.log(opcionUsuario)
  

    switch (opcionUsuario) {
        
        case '1':
            console.log(' elprincipito')
        break; 
        case '2': 
            console.log(' harry potter') 
        break; 
        case '3': 
            console.log('warframe') 
        break
        default: 
            console.log(' la opcion no es valida')
        break;
    }



}