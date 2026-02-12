export default function OfflinePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 font-body antialiased bg-background text-foreground">
      <div className="text-center space-y-6 max-w-md">
        <div className="text-6xl">📡</div>
        <h1 className="text-2xl font-bold">Sin conexión</h1>
        <p className="text-muted-foreground">
          No hay conexión a internet. Revisa tu red y vuelve a intentar.
        </p>
        <a
          href="/"
          className="inline-block rounded-lg bg-primary px-4 py-2 text-primary-foreground font-medium hover:opacity-90"
        >
          Reintentar
        </a>
      </div>
    </main>
  );
}
