
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: "🎯",
      title: "Prompt-Based Speech Practice",
      description: "Get random impromptu prompts and record your 1-2 minute responses. Set custom time limits and practice on-the-spot thinking.",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: "🤖",
      title: "AI Feedback Engine",
      description: "Advanced AI evaluates clarity, filler words, pace, tone, emotion, structure and persuasiveness with detailed scorecards.",
      gradient: "from-pink-500 to-pink-600"
    },
    {
      icon: "📱",
      title: "Community Feed",
      description: "Swipe through other users' videos TikTok-style. Like, comment, save, and respond to trending prompts with your own content.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: "📚",
      title: "Prompt Library",
      description: "Explore categories like Improv, Debate, Fun, Thoughtful, TED-style, and more. Filter by difficulty, mood, and topic.",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: "💼",
      title: "Interview Mode",
      description: "Practice with career-specific questions for investment banking, product management, medical school MMI prep, and more.",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: "⚙️",
      title: "Customization",
      description: "Choose text-only, audio-only, or video practice. Practice privately or publish to the community feed - your choice.",
      gradient: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to become a confident, compelling speaker
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
