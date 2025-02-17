var ShoppingCartController = /** @class */ (function () {
    function ShoppingCartController($scope, $location) {
        this.$scope = $scope;
        this.$location = $location;
        this.message = 'Welcome to your Shopping Cart!';
        this.cart = this.loadCart(); // Load cart from sessionStorage
        $scope['data'] = this;
    }
    // Function to remove a product from the cart
    ShoppingCartController.prototype.removeFromCart = function (index) {
        this.cart.splice(index, 1); // Remove item at specified index
        this.saveCart(); // Save updated cart to sessionStorage
    };
    // Function to increase quantity of a product
    ShoppingCartController.prototype.increaseQuantity = function (index) {
        this.cart[index].quantity += 1; // Increase quantity of the item
        this.saveCart(); // Save updated cart to sessionStorage
    };
    // Function to decrease quantity of a product
    ShoppingCartController.prototype.decreaseQuantity = function (index) {
        if (this.cart[index].quantity > 1) { // Prevent going below quantity 1
            this.cart[index].quantity -= 1; // Decrease quantity of the item
            this.saveCart(); // Save updated cart to sessionStorage
        }
    };
    // Function to get the total price of a cart item
    ShoppingCartController.prototype.getItemTotalPrice = function (item) {
        return item.price * item.quantity; // Multiply price by quantity
    };
    // Function to get total price of the cart
    ShoppingCartController.prototype.getTotalPrice = function () {
        var _this = this;
        var total = 0;
        this.cart.forEach(function (item) {
            total += _this.getItemTotalPrice(item); // Use getItemTotalPrice method
        });
        return total;
    };
    // Function to redirect user to the checkout page
    ShoppingCartController.prototype.checkout = function () {
        if (this.cart.length === 0) {
            alert('Your cart is empty!');
        }
        else {
            this.$location.path('/checkout'); // Redirect to checkout
        }
    };
    // Function to save the current cart to sessionStorage
    ShoppingCartController.prototype.saveCart = function () {
        sessionStorage.setItem('cart', JSON.stringify(this.cart));
    };
    // Function to load the cart from sessionStorage
    ShoppingCartController.prototype.loadCart = function () {
        var storedCart = sessionStorage.getItem('cart');
        if (storedCart) {
            return JSON.parse(storedCart); // Return parsed cart if it exists
        }
        return []; // Return empty array if no cart is stored
    };
    ShoppingCartController.$inject = ['$scope', '$location'];
    return ShoppingCartController;
}());
