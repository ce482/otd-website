
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Support = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Get Support
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about Off the Dome? We're here to help you become a better speaker.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Direct Contact Information */}
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800">Direct Contact</CardTitle>
                <CardDescription>
                  Prefer to reach out directly? Use the contact information below.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-lg">📧</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Email Support</p>
                    <a 
                      href="mailto:offthedome.help@gmail.com" 
                      className="text-purple-600 hover:text-purple-700 transition-colors"
                    >
                      offthedome.help@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-lg">⏰</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Response Time</p>
                    <p className="text-gray-600">Within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">How does the AI feedback work?</h3>
                  <p className="text-gray-600 text-sm">Our AI analyzes your speech for clarity, pace, filler words, and structure, providing detailed feedback to help you improve.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Is my practice data private?</h3>
                  <p className="text-gray-600 text-sm">Yes! You can choose to practice privately or share with the community. Your private sessions remain completely confidential.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Can I use this for interview prep?</h3>
                  <p className="text-gray-600 text-sm">Absolutely! Our Interview Mode includes career-specific questions for various industries and roles.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Social Media Section */}
          <div className="mt-12">
            <Card className="shadow-xl border-0">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-800">Follow Us</CardTitle>
                <CardDescription>
                  Stay connected with us on social media for tips, updates, and community highlights.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center space-x-8">
                  <a 
                    href="https://instagram.com/offthedome.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="text-xl">📷</span>
                    <span className="font-semibold">@offthedome.app</span>
                  </a>
                  
                  <a 
                    href="https://tiktok.com/@offthedome.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-3 rounded-lg hover:from-gray-900 hover:to-black transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="text-xl">🎵</span>
                    <span className="font-semibold">@offthedome.app</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Support;
