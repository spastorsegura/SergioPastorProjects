"use client";

import { useEffect } from "react";
import { toast } from "sonner";

export default function PendingPage() {
  useEffect(() => {
    toast.warning("Pago pendiente ⏳", {
      description: "Estamos esperando la confirmación del pago",
    });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Pago pendiente</h1>
      <p>Te avisaremos cuando el pago sea confirmado.</p>
    </div>
  );
}
