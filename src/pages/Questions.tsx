
import NavBar from "@/components/NavBar";

const Questions = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-10">
      <NavBar />

      <main className="flex-1 w-full max-w-5xl animate-fade-in">
        <h1 className="text-3xl font-bold mb-6">Questions</h1>
        <p className="text-lg">Questions I'm curious about and exploring.</p>
        <p className="mt-4">This page is currently under construction.</p>
      </main>
    </div>
  );
};

export default Questions;
