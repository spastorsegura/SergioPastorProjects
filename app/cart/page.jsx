"use client";

import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { BiLeftArrowCircle } from "react-icons/bi";
import { MdClose } from "react-icons/md";

const page = () => {
  const { cart, removeFromCart } = useCart();
  const router = useRouter();

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex flex-col container mx-auto py-20"
    >
      {/* back */}
      <button
        onClick={() => router.back()}
        className="mb-6 text-secondary hover:text-accent transition flex items-center gap-2 cursor-pointer"
      >
        <BiLeftArrowCircle /> Volver
      </button>

      <h2 className="h2 mb-8">Carrito</h2>

      {cart.length === 0 && (
        <p className="text-secondary">Tu carrito está vacío</p>
      )}

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b border-secondary/20 py-4"
        >
          <div>
            <p className="font-medium">{item.title}</p>
            <p className="text-secondary text-sm">Servicio</p>
          </div>

          <div className="flex items-center gap-6">
            <span className="font-semibold text-accent">S/ {item.price}</span>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-secondary hover:text-accent transition"
            >
              <MdClose />
            </button>
          </div>
        </div>
      ))}

      {cart.length > 0 && (
        <div className="mt-10 ml-auto w-full max-w-sm bg-bck border border-primary rounded-xl p-6">
          <div className="flex justify-between mb-4">
            <span className="text-secondary">Total</span>
            <span className="text-xl font-bold text-accent">S/ {total}</span>
          </div>

          <button
            onClick={async () => {
              try {
                const response = await fetch("/api/checkout", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    items: cart.map((item) => ({
                      title: item.title,
                      quantity: 1, // puedes cambiar si permites más de 1
                      price: item.price,
                      productId: item.id,
                    })),
                  }),
                });

                const data = await response.json();

                if (data.id) {
                  // Redirige al checkout de Mercado Pago
                  window.location.href = `https://www.mercadopago.com.pe/checkout/v1/redirect?pref_id=${data.id}`;
                } else {
                  alert("Error al crear la preferencia");
                }
              } catch (error) {
                console.error(error);
                alert("Error en el checkout");
              }
            }}
            className="btn btn-accent w-full text-white"
          >
            Ir a pagar
          </button>
        </div>
      )}
    </motion.section>
  );
};

export default page;
