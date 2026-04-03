// App.tsx
import Navbar from "./components/layout/Navbar";
import { NavProvider } from "./context/NavContext";
import About from "./sections/About";
import Frontend from "./sections/Frontend";
import Hero from "./sections/Hero";
import FullstackSynergy from "./sections/FullstackSynergy";
import Backend from "./sections/Backend";
import { ProjectsSection } from "./sections/FeaturedProjects";
import { CoursesSection } from "./sections/CoursesSection";
import { ContactSection } from "./sections/ContactSection";
import { Footer } from "./sections/Footer";

export default function App() {
  return (
    <NavProvider>
      <Navbar />
      <main>
        {/* الـ id هنا هو السر، لازم يطابق navItems */}
        <section id="home" className="min-h-screen"><Hero /></section>
        <section id="about" className="min-h-screen"><About /></section>
        <section id="backend" className="min-h-screen"><Backend /></section>
        <section id="frontend" className="min-h-screen"><Frontend /></section>
        <section id="fullstackSynergy" className="min-h-screen"><FullstackSynergy /></section>
        <section id="projects" className="min-h-screen"><ProjectsSection /></section> 
        <section id="courses" className="min-h-screen"><CoursesSection /></section> 
        <section id="contactUs" className="min-h-screen"><ContactSection /></section> 
        {/* <section id="experience" className="min-h-screen"><Experience /></section>
        <section id="education" className="min-h-screen"><Education /></section>
        <section id="contact" className="min-h-screen"><Contact /></section> */}
      </main>
      <Footer/>
    </NavProvider>
  );
}