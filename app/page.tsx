
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

async function getHelloMessage() {
  const res = await fetch(`${baseUrl}/api/listings`);
  const data = await res.json();
  return data.message; // Extract the "Hello World!" string
}

export default async function Home() {
  const message = await getHelloMessage();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Connection Test</h1>
      <div className="p-4 bg-gray-100 rounded-lg">
        <p>Backend says:</p>
        <p className="text-blue-600 font-mono">{message}</p>
      </div>
      {message === "Hello World!" ? (
        <p className="mt-4 text-green-600">✓ Successfully connected to backend!</p>
      ) : (
        <p className="mt-4 text-red-600">✗ Connection failed</p>
      )}
    </div>
  );
}