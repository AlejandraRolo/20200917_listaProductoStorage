// validación inicial de lista de productos en el localStorage
let lstProductoStorage = localStorage.getItem('lstProductos')===null ? [] : JSON.parse(localStorage.getItem('lstProductos'));

// obtener controles
const frmProducto = document.getElementById("frmProducto")
const txtProducto = document.getElementById("txtProducto")
const txtDescripcion = document.getElementById("txtDescripcion")
const txtCantidad = document.getElementById("txtCantidad")
const txtValor = document.getElementById("txtValor")
const tablaProducto = document.getElementById("tablaProducto")
const actualizarLista = document.getElementById("actualizarLista")


frmProducto.addEventListener("submit", (e)=> {
    e.preventDefault()

    if(txtProducto.value== "" || txtDescripcion.value== "" || txtCantidad.value== "" || txtValor.value== "") { swal("Alerta!", "Se deben completar todos los campos de producto!!", "warning"); }
    else{
        const producto = {
            nombre: txtProducto.value,
            descripcion: txtDescripcion.value,
            cantidad: txtCantidad.value,
            valor: txtValor.value
        }
        agregarProducto(producto)
        swal("OK!", "El producto se creo correctamente. Actualice lista de productos para visualizar su inventario!!", "success");
    }
})

const renderizarProductos = ()=> {
    tablaProducto.innerHTML = ''
    if(lstProductoStorage.length> 0){
        for(let i= 0; i< lstProductoStorage.length; i++){ 
            tablaProducto.innerHTML += `
                <tr>
                    <th>${i+1}</th>
                    <td>${lstProductoStorage[i].nombre}</td>
                    <td>${lstProductoStorage[i].descripcion}</td>
                    <td>${lstProductoStorage[i].cantidad}</td>
                    <td>${lstProductoStorage[i].valor}</td>
                <tr>
                `
        }
    }
}
renderizarProductos()

const agregarProducto = (valor)=> {
    lstProductoStorage.push(valor);
    localStorage.setItem('lstProductos', JSON.stringify(lstProductoStorage));
    txtProducto.value = ''
    txtDescripcion.value = ''
    txtCantidad.value = ''
    txtValor.value = ''
}

actualizarLista.addEventListener("click", ()=>{
    renderizarProductos()
})