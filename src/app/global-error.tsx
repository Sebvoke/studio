"use client";

import { useEffect } from "react";

export default function GlobalError({
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
    <html lang="es">
      <body className="font-body antialiased min-h-screen flex flex-col items-center justify-center p-4 bg-background text-foreground">
        <div className="text-center space-y-6 max-w-md">
          <h1 className="text-2xl font-bold">Error del servidor</h1>
          <p className="text-muted-foreground">
            Ha ocurrido un error. Por favor, intenta recargar la página.
          </p>
          <button
            onClick={() => reset()}
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90"
          >
            Reintentar
          </button>
        </div>
      </body>
    </html>
  );
}
