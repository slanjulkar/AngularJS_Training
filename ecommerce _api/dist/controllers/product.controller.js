var ProductController = /** @class */ (function () {
    function ProductController($scope, $location, 
    //private $routeParams: angular.route.IRouteParamsService,
    $routeParams, // Change the type to any
    $http // Injecting the $http service
    ) {
        this.$scope = $scope;
        this.$location = $location;
        this.$routeParams = $routeParams;
        this.$http = $http;
        this.message = 'Welcome to TypeScript!';
        this.catalogs = [];
        this.selectedProduct = null;
        // Fetch the product catalog data from the API
        this.loadProductCatalog();
        var productId = $routeParams['productId'];
        if (productId) {
            this.selectedProduct = this.getProductById(Number(productId));
        }
        $scope['data'] = this;
    }
    // Function to fetch the product catalog from the backend API
    ProductController.prototype.loadProductCatalog = function () {
        var _this = this;
        this.$http.get('http://localhost:3000/api/products') // Specify the type of response here
            .then(function (response) {
            // On success, set the catalogs array with the fetched data
            _this.catalogs = response.data; // Here, response.data will be correctly typed as an array of Product
        })
            .catch(function (error) {
            console.error('Error fetching product catalog:', error);
        });
    };
    ProductController.prototype.addToCart = function (product) {
        console.log('Product added to cart:', product);
        var temp = JSON.parse(sessionStorage.getItem('cart') || '[]');
        // Check if the product already exists in the cart
        var existingProduct = temp.find(function (item) { return item.id === product.id; });
        if (existingProduct) {
            existingProduct.quantity += 1; // If product exists, increase its quantity
        }
        else {
            product.quantity = 1; // Set quantity to 1 if it's a new product
            temp.push(product); // Add the product to the cart
        }
        sessionStorage.setItem('cart', JSON.stringify(temp));
        this.$location.path('/cart'); // Redirect to cart page
    };
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
    ProductController.prototype.viewProductDetails = function (productId) {
        this.$location.path("/product/".concat(productId));
    };
    // Function to get a product by ID
    ProductController.prototype.getProductById = function (productId) {
        for (var i = 0; i < this.catalogs.length; i++) {
            if (this.catalogs[i].id === productId) {
                return this.catalogs[i]; // Return the product if ID matches
            }
        }
        console.error("Product not found");
        return null; // Return null if product is not found
    };
    ProductController.$inject = ['$scope', '$location', '$routeParams', '$http'];
    return ProductController;
}());
