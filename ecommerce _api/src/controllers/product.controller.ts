import * as angular from 'angular';

// Define the Product type
interface Product {
  quantity: number;
  id: number;
  productName: string;
  description: string;
  price: number;
  imagePath: string;
}

export class ProductController {
  static $inject = ['$scope', '$location', '$routeParams', '$http'];
  message: string;
  catalogs: Product[];  // Declare the type of catalogs
  selectedProduct: Product | null;

  constructor(
    private $scope: IDataScope,
    private $location: angular.ILocationService,
    //private $routeParams: angular.route.IRouteParamsService,
    private $routeParams: any, // Change the type to any
    private $http: angular.IHttpService // Injecting the $http service
  ) {
    this.message = 'Welcome to TypeScript!';
    this.catalogs = [];
    this.selectedProduct = null;

    // Fetch the product catalog data from the API
    this.loadProductCatalog();

    const productId = $routeParams['productId'];
    if (productId) {
      this.selectedProduct = this.getProductById(Number(productId));
    }

    $scope['data'] = this;
  }

  // Function to fetch the product catalog from the backend API
  private loadProductCatalog(): void {
    this.$http.get<Product[]>('http://localhost:3000/api/products') // Specify the type of response here
      .then((response) => {
        // On success, set the catalogs array with the fetched data
        this.catalogs = response.data;  // Here, response.data will be correctly typed as an array of Product
      })
      .catch((error) => {
        console.error('Error fetching product catalog:', error);
      });
  }

  public addToCart(product: Product): void {
    console.log('Product added to cart:', product);
  
    let temp = JSON.parse(sessionStorage.getItem('cart') || '[]');
  
    // Check if the product already exists in the cart
    const existingProduct = temp.find((item: any) => item.id === product.id);
    
    if (existingProduct) {
      existingProduct.quantity += 1;  // If product exists, increase its quantity
    } else {
      product.quantity = 1;  // Set quantity to 1 if it's a new product
      temp.push(product);  // Add the product to the cart
    }
  
    sessionStorage.setItem('cart', JSON.stringify(temp));
    this.$location.path('/cart'); // Redirect to cart page
  }
  
  // public addToCart(product: Product): void {
  //   console.log('Product added to cart:', product);
  //   let temp = JSON.parse(sessionStorage.getItem('cart') || '[]');
    
  //   if (temp != null) {
  //     temp.push(product);
  //   } else {
  //     temp = [];
  //     temp.push(product);
  //   }

  //   sessionStorage.setItem('cart', JSON.stringify(temp));
  //   this.$location.path('/cart'); // Redirect to cart page
  // }

  // Function to navigate to the details page for a product
  public viewProductDetails(productId: number): void {
    this.$location.path(`/product/${productId}`);
  }

  // Function to get a product by ID
  private getProductById(productId: number): Product | null {
    for (let i = 0; i < this.catalogs.length; i++) {
      if (this.catalogs[i].id === productId) {
        return this.catalogs[i]; // Return the product if ID matches
      }
    }
    console.error("Product not found");
    return null; // Return null if product is not found
  }
}
