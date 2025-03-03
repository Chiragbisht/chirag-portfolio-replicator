
import NavBar from "@/components/NavBar";

const Posts = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-10">
      <NavBar />

      <main className="flex-1 w-full max-w-5xl animate-fade-in">
        <h1 className="text-3xl font-bold mb-6">Posts</h1>
        <p className="text-lg">Thoughts, ideas, and reflections.</p>
        <p className="mt-4">No posts available yet.</p>
      </main>
    </div>
  );
};

export default Posts;
