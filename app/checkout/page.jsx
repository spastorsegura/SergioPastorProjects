"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
  const { cart } = useCart();
  const [preferenceId, setPreferenceId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (cart.length === 0) {
      router.push("/servicios");
      return;
    }

    initMercadoPago(process.env.NEXT_PUBLIC_MP_PUBLIC_KEY, {
      locale: "es-PE",
    });

    const createPreference = async () => {
      try {
        toast.loading("Preparando pago...");

        const res = await fetch("/api/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ items: cart }),
        });

        const data = await res.json();
        setPreferenceId(data.id);
        toast.dismiss();
      } catch (error) {
        toast.error("Error al iniciar el pago");
      }
    };

    createPreference();
  }, [cart, router]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-screen flex items-center justify-center"
    >
      <div className="w-full max-w-md">
        <h2 className="h2 text-center mb-6">Pago seguro</h2>

        {!preferenceId && (
          <p className="text-center text-secondary">
            Conectando con Mercado Pago…
          </p>
        )}

        {preferenceId && <Wallet initialization={{ preferenceId }} />}
      </div>
    </motion.section>
  );
};

export default CheckoutPage;
