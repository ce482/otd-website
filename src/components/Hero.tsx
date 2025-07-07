
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-purple-800 text-sm font-medium mb-4">
            🎯 AI-Powered Public Speaking Coach
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent leading-tight">
          Off the Dome
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
          Build confidence, get AI feedback, and engage with a community.
          <br />
          <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Think TikTok meets Toastmasters — with AI as your coach.
          </span>
        </p>
        
        <div className="flex justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg"
            onClick={() => window.open('https://apps.apple.com/us/app/off-the-dome/id6747694779', '_blank')}
          >
            Download App
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4">
            <div className="text-3xl font-bold text-purple-600 mb-2">🎤</div>
            <div className="text-sm text-gray-600">Practice with AI prompts</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-pink-600 mb-2">📊</div>
            <div className="text-sm text-gray-600">Get instant feedback</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-blue-600 mb-2">👥</div>
            <div className="text-sm text-gray-600">Join the community</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
