class ProductManager {
  constructor() {
    this.products = [];
  }

  static id = 0;

  addProduct(title, description, price, img, code, stock) {
    ProductManager.id++;
    this.products.push({
      title,
      description,
      price,
      img,
      code,
      stock,
      id: ProductManager.id,
    });
  }

  getProduct() {
    return this.products;
  }

  getProductById(id) {
    if (this.products.find((producto) => producto.id === id)) {
      console.log("Si existe");
    } else {
      console.log("Error 404");
    }
  }
}

const productos = new ProductManager();

productos.addProduct("titulo1", "descripcion1", 500, "imagen1", "1234", 5);
productos.addProduct("titulo2", "descripcion2", 800, "imagen2", "8907", 9);

console.log(productos.getProduct());

productos.getProductById(2);
