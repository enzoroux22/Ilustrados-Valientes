export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center bg-neutral-100">
      <h1 className="text-4xl font-bold mb-4">Calculadora de Sueldos Uruguay</h1>
      <p className="text-lg mb-6 max-w-xl text-neutral-700">
        Herramienta en Excel para liquidar sueldos en Uruguay, creada por <strong>Ilustrados & Valientes</strong>.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 mb-8">
        <a
          href="https://link.mercadopago.com.uy/calculadordesueldouy"
          target="_blank"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-2xl shadow-md transition"
        >
          Comprar con MercadoPago
        </a>
        <a
          href="https://www.paypal.me/enzoroux22"
          target="_blank"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-2xl shadow-md transition"
        >
          Comprar con PayPal
        </a>
      </div>

      <footer className="text-sm text-neutral-500 mt-8">
        Contacto: <a href="mailto:ilustradosvalientes@gmail.com" className="underline">ilustradosvalientes@gmail.com</a>
      </footer>
    </main>
  );
}
