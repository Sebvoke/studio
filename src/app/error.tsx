"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 font-body antialiased">
      <div className="text-center space-y-6">
        <AlertCircle className="h-16 w-16 mx-auto text-destructive" />
        <h1 className="text-2xl font-bold">Algo salió mal</h1>
        <p className="text-muted-foreground max-w-md">
          Ha ocurrido un error inesperado. Puedes intentar de nuevo.
        </p>
        <Button onClick={() => reset()}>Reintentar</Button>
      </div>
    </main>
  );
}
