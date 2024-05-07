import { useCartStore } from "@/stores/cart-store";
import { useCheckoutStore } from "@/stores/checkout-store"

export const generateMessage = () => {
    const { name, address } = useCheckoutStore(state => state);
    const { cart } = useCartStore(state => state);

    let subTotal = 0;
    let orderProducts = [];
    let delivery = 5;
    let total = 0;
    let sub = 0;
    for(let item of cart) {
       sub = (subTotal += item.quantity * item.product.price);
        console.log(subTotal)
        orderProducts.push(`${item.quantity}x ${item.product.name}`);

    }
    total = ( subTotal += delivery);
    return `**Dados do cliente**
    Nome: ${name}
    Endereço: ${address.street}, ${address.number}, (${address.complement})
    ${address.district}, ${address.city}/${address.state}
    =======
    **Pedido**
    ${orderProducts.join("\n")}
    =======
    **Final**
    Subtotal: R$ ${sub.toFixed(2)}
    Frete: R$ ${delivery.toFixed(2)}
    Total: R$ ${total.toFixed(2)}`
    
}