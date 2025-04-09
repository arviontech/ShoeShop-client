import { useState } from 'react'; 

interface LoginProps {
  onLogin?: (email: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      setLoading(false);
      
      // Call the onLogin prop if provided
      if (onLogin) {
        onLogin(email, password);
      }
      
      // Clear form fields
      setEmail('');
      setPassword('');
    }, 1000);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex h-screen bg-gradient-to-r from-gray-50 to-teal-50">
      {/* Left Panel - Company Showcase */}
      <div className="hidden md:flex md:w-2/5 bg-gray-100 items-center justify-center p-8">
        <div className="text-center max-w-xs">
          {/* Animated Logo */}
          <div className="relative mx-auto h-40 w-40 mb-6">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-4 border-gray-300 opacity-30 animate-ping"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-4 border-gray-400 opacity-40 animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-gray-500 to-teal-400 shadow-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          
          <h1 className="text-2xl font-serif font-bold text-gray-800 mb-2">InfinityHub</h1>
          <p className="text-gray-700 mb-6 text-sm">Step into Comfort, Stride with Style</p>
          
          {/* Product Features */}
          <div className="text-left text-gray-700 text-sm space-y-3 mb-6">
            <div className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Handcrafted premium leather shoes</span>
            </div>
            <div className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Orthopedic support technology</span>
            </div>
            <div className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Custom fitting options available</span>
            </div>
            <div className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Free returns within 30 days</span>
            </div>
          </div>
          
          {/* Testimonial */}
          <div className="mt-6 p-4 bg-white bg-opacity-50 rounded-lg border border-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <p className="text-gray-800 italic text-sm">"After years of foot pain, InfinityHub's orthopedic line changed my life. I can walk pain-free all day!"</p>
            <p className="text-gray-600 text-xs mt-2 font-medium">— Michael T., Verified Customer</p>
          </div>
        </div>
      </div>
      
      {/* Right Panel - Login Form */}
      <div className="w-full md:w-3/5 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="md:hidden flex justify-center mb-6">
            <div className="relative h-20 w-20">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-gray-300 opacity-30 animate-ping"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-gray-400 opacity-40 animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-gray-500 to-teal-400 shadow-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Login Form */}
          <form 
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
          >
            <div className="text-center mb-5">
              <h2 className="text-2xl font-serif font-bold text-gray-800">Welcome to InfinityHub</h2>
              <p className="text-gray-600 text-sm">Sign in to access your account</p>
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium text-sm mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
                placeholder="your@email.com"
                required
              />
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <label htmlFor="password" className="block text-gray-700 font-medium text-sm">
                  Password
                </label>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-800">
                  Forgot Password?
                </a>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
                  placeholder="••••••••"
                  required
                />
                <button 
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            
            <div className="mb-4 mt-6">
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-2 px-4 bg-gradient-to-r from-gray-600 to-gray-800 text-white font-medium rounded-md shadow
                     hover:bg-slate-900  focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all  ${
                  loading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </span>
                ) : 'Sign In'}
              </button>
            </div>
            
            <div className="text-center mb-4">
              <p className="text-xs text-gray-700">
                Don't have an account?{' '}
                <a href="/signup" className="text-gray-600 font-medium hover:text-gray-800">
                  Sign Up
                </a>
              </p>
            </div>
            
        
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;