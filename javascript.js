const arrayProduct = [];
document.getElementById('mainTable').style.display = 'none'
const form = document.querySelector('.form');
form.addEventListener('submit', inputProduct)


function inputProduct(prevenirEvento){
    document.getElementById('').style.display = ''
    prevenirEvento.preventDefault();
    let nameProduct = document.getElementById('nameProduct').value;
    let priceProduct = document.getElementById('priceProduct').value;
    let quantityProduct = document.getElementById('quantityProduct').value;
    let categoryProduct = document.getElementById('categoryProduct').value;

    product = {
        nameProduct,
        priceProduct,
        quantityProduct,
        categoryProduct
    }
    arrayProduct.push(product);
    form.reset();

    console.log(arrayProduct);

    let addProduct = document.getElementById('mainTable').insertRow(1);
    let newNameProduct = addProduct.insertCell(0);
    newNameProduct.textContent = nameProduct;

    let newPriceProduct = addProduct.insertCell(1);
    newPriceProduct.textContent = priceProduct;

    let newQuantityProduct = addProduct.insertCell(2);
    newQuantityProduct.textContent = quantityProduct;

    let newCategoryProduct = addProduct.insertCell(3);
    newCategoryProduct.textContent = categoryProduct;

    let editar = addProduct.insertCell(4);
    let botonEditar = document.createElement('button');
    botonEditar.textContent = 'Editar';
    editar.appendChild(botonEditar);
    botonEditar.addEventListener('click', () => editProduct(addProduct));
    
    let botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    editar.appendChild(botonEliminar);
    botonEliminar.addEventListener('click', () => eliminateProduct(addProduct));

};

function eliminateProduct(fila) {
    let index = fila.rowIndex - 1;
    arrayProduct.splice(index, 1);
    document.getElementById('mainTable').deleteRow(fila.rowIndex);
}

function editProduct(fila) {
    let index = fila.rowIndex - 1;
    let product = arrayProduct[index];
    document.getElementById('nameProduct').value = product.nameProduct;
    document.getElementById('priceProduct').value = product.priceProduct;
    document.getElementById('quantityProduct').value = product.quantityProduct;
    document.getElementById('categoryProduct').value = product.CategoryProduct;

    // Eliminamos la fila anterior y el objeto correspondiente del array
    arrayProduct.splice(index, 1);
    document.getElementById('mainTable').deleteRow(fila.rowIndex);
}