
import NavBar from "@/components/NavBar";

const CommonplaceBook = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-10">
      <NavBar />

      <main className="flex-1 w-full max-w-5xl animate-fade-in">
        
        <p className="text-lg">Watching UFC</p>
        <p className="text-lg">Professional Gamer</p>
        <p className="text-lg">Long dist runner</p>
        <p className="text-lg">Trekking/Hiking</p>
      </main>
    </div>
  );
};

export default CommonplaceBook;
