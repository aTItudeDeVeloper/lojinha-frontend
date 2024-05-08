import { useCheckoutStore } from "@/stores/checkout-store";
import { Button } from "@/components/ui/button";
import { generateMessage } from "@/lib/generate-message";

export const StepFinish = () => {
    const { name } = useCheckoutStore(state => state);

    const message = generateMessage();
    const link = `https://wa.me//${5585987047677}?text=${encodeURI(message)}`;

    return (
        <div className="text-center flex flex-col gap-5">
            <p>Perfeito <strong>{name}</strong>!</p>
            <p>Agora envie seu pedido ao nosso WhatsApp para concluir. Nosso Atendente irá te guiar sobre o andamento do pedido.</p>
            <Button>
               <a href={link} target="_blank">Enviar para o WhatsApp</a>
            </Button>
        </div>
    );
}