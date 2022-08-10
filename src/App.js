import ContactUs from './components/ContactUs';
import Extensions from './components/Extensions';
import FAQ from './components/FAQ';
import Features from './components/Features';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Bookmark from './components/Bookmark';

function App() {
  return (
    <main className="App">
      <Navbar />
      <Header />
      <Features />
      <Extensions />
      <FAQ />
      <ContactUs />
      <Bookmark />
    </main>
  );
}

export default App;
