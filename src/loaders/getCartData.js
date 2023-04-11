import { getStoredCart } from "../components/utilities/fakebd";


export const cartData = async () => {
    const productData = await fetch('/features.json');
    const products = await productData.json();
    let cart = [];
    const savedCart = getStoredCart();
   
    for (const id in savedCart) {
        
        const foundProduct = products.find(job => job.id === id)
        if (foundProduct) {
            cart.push(foundProduct);
        }
        
    }
    return {cart, products}
    
}

