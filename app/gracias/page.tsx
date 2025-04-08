const frases = [
  "La educación es el arma más poderosa para cambiar el mundo. – Nelson Mandela",
  "No hay viento favorable para quien no sabe a dónde va. – Séneca",
  "Ilustrarse es el primer acto de valentía. – Artigas (adaptado)",
  "No se equivoca el hombre que ensaya distintos caminos para alcanzar sus fines. – Edison",
  "Un pueblo culto es un pueblo libre. – José Pedro Varela"
];

export default function GraciasPage() {
  const frase = frases[Math.floor(Math.random() * frases.length)];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-center p-10">
      <h1 className="text-3xl font-bold mb-4">¡Gracias por tu compra!</h1>
      <p className="text-lg text-neutral-700 mb-4">{frase}</p>
      <a href="/" className="text-blue-500 underline">Volver al inicio</a>
    </main>
  );
}
