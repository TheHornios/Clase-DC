document.addEventListener('DOMContentLoaded',function(){
    // Añadir Botones
    anadirElemento(query('body')[0],crarInput('button','crear','Crear Una Nueva Planta'));
    anadirElemento(query('body')[0],crarInput('button','borrar','Borrar ultima planta'));
    anadirElemento(query('body')[0],crarInput('button','mostrar','Numero de plantas'));
    // Crear Tabla
    anadirElemento(query('body')[0],crearElemento('table'));
    crerFilaTabla(query('table')[0],'th',new Array('Nombre','Ubicacion','Ejemplares','Flor'));
    // Añadir Listener
    anadirListeners(new Array(new Array(query('#crear')[0],crearNuevaFrol,"click"),new Array(query('#borrar')[0],borrarUltimaFlor,"click"),new Array(query('#mostrar')[0],obtenerNumeroDeFlores,"click")));

},false);
function crearNuevaFrol(){
    var e1 = prompt('Nombre De La Planta');
    var e2 = prompt('Ubicacion De La Planta');
    var e3 = prompt('Ejemplares De La Planta');
    var e4 = prompt('Flor De La Planta');
    crerFilaTabla(query('table')[0],'td',new Array(e1,e2,e3,e4));
}
function borrarUltimaFlor(){
    var cant = query('tr').length-1;
    if(isNaN(cant)){
        cant = 0;
    }
    if(cant != 0){
        query("table")[0].removeChild(query('tr:last-of-type')[0]);
    }
}
function obtenerNumeroDeFlores(){
    if(query('p')[0]!=null){
        query('p')[0].remove();
    }
    
    var p = crearElemento('p');
    var cant = query('tr').length-1;
    if(isNaN(cant)){
        cant = 0;
    }
    p.textContent = "Hay "+(cant)+" plantas";
    anadirElemento(query('body')[0],p);
}
function anadirListeners(arrFlores){
    for(let i = 0;i<arrFlores.length;i++){
        arrFlores[i][0].addEventListener(arrFlores[i][2],arrFlores[i][1]);
    }
}
function crerFilaTabla(elemtoTabla,tipoDeTd,arrayValores){
    anadirElemento(elemtoTabla,crearElemento('tr'));
    for(let i = 0;i<arrayValores.length;i++){
        var consulta = query('tr');
        var tdOth = crearElemento(tipoDeTd);
        tdOth.textContent = arrayValores[i];
        anadirElemento(consulta[consulta.length-1],tdOth);
    }
}
function crearElemento(tipo) {
    return document.createElement(tipo);
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