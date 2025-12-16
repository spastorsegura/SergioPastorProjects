"use client";

import { useEffect } from "react";
import { toast } from "sonner";

export default function SuccessPage() {
  useEffect(() => {
    toast.success("¡Pago realizado con éxito! 🎉", {
      description: "Gracias por tu compra",
    });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Pago exitoso</h1>
      <p>Tu pago fue aprobado correctamente.</p>
    </div>
  );
}
