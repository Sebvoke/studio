export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 font-body antialiased">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <p className="text-xl text-muted-foreground">Página no encontrada</p>
        <a href="/" className="inline-flex rounded-lg bg-primary px-4 py-2 text-primary-foreground font-medium hover:opacity-90">
          Volver al inicio
        </a>
      </div>
    </main>
  );
}
