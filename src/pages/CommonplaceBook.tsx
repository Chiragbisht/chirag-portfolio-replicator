
import NavBar from "@/components/NavBar";

const CommonplaceBook = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-10">
      <NavBar />

      <main className="flex-1 w-full max-w-5xl animate-fade-in">
        <h1 className="text-3xl font-bold mb-6">Commonplace Book</h1>
        <p className="text-lg">A collection of ideas, quotes, and thoughts that I've found interesting.</p>
        <p className="mt-4">This page is currently under construction.</p>
      </main>
    </div>
  );
};

export default CommonplaceBook;
