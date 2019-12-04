document.addEventListener('DOMContentLoaded',function(){
    // Añadir Botones
    anadirElemento(query('body')[0],crarInput('button','crear','Añadir personaje'));
    anadirElemento(query('body')[0],crarInput('button','borrar','Borrar ultimo'));
    anadirElemento(query('body')[0],crarInput('button','mostrar1','Numero de Sanji'));
    anadirElemento(query('body')[0],crarInput('button','mostrar2','Numero de Zoro'));
    anadirElemento(query('body')[0],crarInput('button','mostrar3','Numero de Nami'));
    anadirElemento(query('body')[0],crarInput('button','mostrar4','Numero de Luffy'));
    anadirElemento(query('body')[0],crearElemento('div'));
    // Añadir Listener
    anadirListeners(new Array(new Array(query('#crear')[0],anadirPersonaje,"click"),new Array(query('#borrar')[0],borrarPersonaje,"click"),new Array(query('#mostrar1')[0],mostarCantidad('sanji'),"click"),new Array(query('#mostrar2')[0],mostarCantidad('zoro'),"click"),new Array(query('#mostrar3')[0],mostarCantidad('nami'),"click"),new Array(query('#mostrar4')[0],mostarCantidad('luffy'),"click")));

},false);
function anadirPersonaje(){
    var src = "";
    var sdfs = "";
    switch (prompt('Intoduce personaje\n1 sanji \n2 Zoro \n3 Nami\n4 Luffy ')){
        case "1":
            src = "img_onepiece/sanji.jpg"; 
            sdfs = "sanji";
        break;
        case "2":
            src = "img_onepiece/zoro.jpg";
            sdfs = "zoro";
        break;
        case "3":
            src = "img_onepiece/nami.jpg";
            sdfs = "nami";
        break;
        case "4":
            src = "img_onepiece/luffy.jpg";
            sdfs = "luffy";
        break;
    }
    anadirElemento(query('div')[0],crearImg(src,sdfs)); 
}
function borrarPersonaje(){
    query('img:last-of-type')[0]!=null?query('img:last-of-type')[0].remove():1+1;
}
function mostarCantidad(tio){
    return function(e){
        if(query('p')[0]!=null){
            query('p')[0].remove();
        }
        var e = crearElemento('p');
        e.textContent = query('#'+tio).length;
        anadirElemento(query('body')[0],e);
    }
}
function anadirListeners(arrFlores){
    for(let i = 0;i<arrFlores.length;i++){
        arrFlores[i][0].addEventListener(arrFlores[i][2],arrFlores[i][1]);
    }
}
function crearElemento(tipo) {
    return document.createElement(tipo);
}
function crearImg(src,id){
    var elemento = crearElemento('img');
    elemento.id= id;
    elemento.src= src;
    return elemento;
}
function crarInput(tipo,id,value){
    var elemento = crearElemento('input');
    elemento.type = tipo;
    elemento.id= id;
    elemento.value = value;
    return elemento;
}
function anadirElemento(elmento,anadir){
    elmento.appendChild(anadir);
}
function query(css){
    return document.querySelectorAll(css);
}