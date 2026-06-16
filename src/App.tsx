import Navbar from "./Components/layout/Navbar";
import Homepage from "./pages/Homepage";

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--ivory)] text-[var(--navy)]">
      {/* Navbar */}
      <Navbar />

      {/* Pages */}
      <Homepage />
    </div>
  );
}
