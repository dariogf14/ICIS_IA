import Header from "./components/Header";
import CardsSection from "./components/CardsSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <>
      <Header />
      <CardsSection />
      <ContactForm />
      <Footer />
    </>
  );
}