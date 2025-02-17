export class ShoppingCartController {
  static $inject = ['$scope', '$location'];
  
  message: string;
  cart: Array<any>;

  constructor(private $scope: IDataScope, private $location: angular.ILocationService) {
    this.message = 'Welcome to your Shopping Cart!';
    this.cart = this.loadCart();  // Load cart from sessionStorage
    $scope['data'] = this;
  }

  // Function to remove a product from the cart
  public removeFromCart(index: number): void {
    this.cart.splice(index, 1);  // Remove item at specified index
    this.saveCart();  // Save updated cart to sessionStorage
  }

  // Function to increase quantity of a product
  public increaseQuantity(index: number): void {
    this.cart[index].quantity += 1;  // Increase quantity of the item
    this.saveCart();  // Save updated cart to sessionStorage
  }

  // Function to decrease quantity of a product
  public decreaseQuantity(index: number): void {
    if (this.cart[index].quantity > 1) {  // Prevent going below quantity 1
      this.cart[index].quantity -= 1;  // Decrease quantity of the item
      this.saveCart();  // Save updated cart to sessionStorage
    }
  }

  // Function to get the total price of a cart item
  public getItemTotalPrice(item: any): number {
    return item.price * item.quantity;  // Multiply price by quantity
  }

  // Function to get total price of the cart
  public getTotalPrice(): number {
    let total = 0;
    this.cart.forEach(item => {
      total += this.getItemTotalPrice(item);  // Use getItemTotalPrice method
    });
    return total;
  }

  // Function to redirect user to the checkout page
  public checkout(): void {
    if (this.cart.length === 0) {
      alert('Your cart is empty!');
    } else {
      this.$location.path('/checkout');  // Redirect to checkout
    }
  }

  // Function to save the current cart to sessionStorage
  private saveCart(): void {
    sessionStorage.setItem('cart', JSON.stringify(this.cart));
  }

  // Function to load the cart from sessionStorage
  private loadCart(): any[] {
    const storedCart = sessionStorage.getItem('cart');
    if (storedCart) {
      return JSON.parse(storedCart);  // Return parsed cart if it exists
    }
    return [];  // Return empty array if no cart is stored
  }
}
