"use client";

import { useEffect } from "react";
import { toast } from "sonner";

export default function FailurePage() {
  useEffect(() => {
    toast.error("El pago no se pudo completar ❌", {
      description: "Intenta nuevamente o usa otro medio de pago",
    });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Pago rechazado</h1>
      <p>Hubo un problema con tu pago.</p>
    </div>
  );
}
