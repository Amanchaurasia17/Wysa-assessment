export default function Navbar({ token, setToken }) {
  const handleLogout = () => {
    setToken('');
    localStorage.removeItem('token');
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-bold text-gray-800">
              Wysa Sleep Assessment App
            </h1>
          </div>
          {token && (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium flex items-center space-x-2"
            >
             
              <span>Logout</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
