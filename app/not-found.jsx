// app/not-found.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <div className="text-center space-y-5">
        <h1 className="text-9xl font-extrabold text-primary">¡Ups!</h1>
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
          Página no encontrada
        </h2>
        <p className="text-base text-muted-foreground max-w-[500px]">
          Lo sentimos, no pudimos encontrar la página que buscas.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/">
            <Button size="lg" className="bg-accent cursor-pointer text-white">Volver al inicio</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
