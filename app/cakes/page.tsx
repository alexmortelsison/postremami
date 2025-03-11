import Navbar from "../components/Navbar";

export default function CakePage() {
  return (
    <div className="min-h-screen bg-[#de3c4a]/20">
      <div className="flex justify-center">
        <Navbar />
        <div>
          <p className="mt-60 text-white font-railey text-2xl px-8 md:text-4xl text-center">
            Choose from Our Most Loved Cupcakes - Handpicked Favorites Just for
            You!
          </p>
        </div>
      </div>
      <div></div>;
    </div>
  );
}
