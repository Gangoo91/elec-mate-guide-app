
import Logo from "@/components/Logo";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center animate-fade-in">
        <Logo size={128} />
        <h1 className="text-4xl font-bold mb-2 mt-6 text-primary">Welcome to Elec-Mate!</h1>
        <p className="text-lg text-gray-600 mb-2">
          Your friendly guide for everything electrical. Get started by logging in and exploring!
        </p>
      </div>
    </div>
  );
};

export default Index;
