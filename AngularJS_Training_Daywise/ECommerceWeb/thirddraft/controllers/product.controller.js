

catalogModule.controller("ProductController", function($scope) {
    $scope.products = [
        {
            prodname: "Flowery Rose",
            price: "₹500",
            description: "A bouquet of long-stemmed red roses is a classic symbol of romance, love, beauty, and happiness.",
            image: "https://theflowercatalogue.com/cdn/shop/products/WhatsAppImage2023-03-05at08.27.26_5d281027-c275-4102-a1db-339d70490fc6.jpg?v=1687794046&width=823"
        },
        {
            prodname: "The Rose Garden",
            price: "₹550",
            description: "The blooms for the Flowery Rose bouquet are from South America or Holland.",
            image: "https://theflowercatalogue.com/cdn/shop/files/WhatsAppImage2023-04-30at19.03.58.jpg?v=1683029925&width=823"
        },
        {
            prodname: "A Summer Solstice’s Dream in Pink",
            price: "₹600",
            description: "It is an ancient Scandinavian tradition for single people to put 7 different flowers.",
            image: "https://theflowercatalogue.com/cdn/shop/files/WhatsAppImage2023-05-25at17.54.00.jpg?v=1685375309&width=823"
        }
    ];
});