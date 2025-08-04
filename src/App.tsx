import "./App.css";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import NotificationPane, {
  useNotifications,
} from "./Components/NotificationPane";

function App() {
  const { notifications, addNotification, removeNotification } =
    useNotifications();

  return (
    <div className="App">
      {/* Navigation */}
      <Navbar />

      {/* Notification System */}
      <NotificationPane
        notifications={notifications}
        onRemove={removeNotification}
      />

      {/* Main content */}
      <section id="home">
        <Hero />
      </section>

      {/* About section */}
      <About />

      {/* Skills section */}
      <Skills />

      {/* Experience section */}
      <Experience />

      {/* Projects section */}
      <Projects />

      {/* Contact section */}
      <Contact onNotification={addNotification} />
    </div>
  );
}

export default App;
