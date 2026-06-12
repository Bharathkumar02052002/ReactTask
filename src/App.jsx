import StudentProfile from "./components/StudentProfile";
import EmployeeCard from "./components/EmployeeCard";
import ProductCard from "./components/ProductCard";
import MovieDetails from "./components/MovieDetails";
import CompanyInfo from "./components/CompanyInfo";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

function App() {
    return (
        <>
            <section>
                <StudentProfile />
            </section>

            <section>
                <EmployeeCard />
            </section>

            <section>
                <ProductCard />
            </section>

            <section>
                <MovieDetails />
            </section>

            <section>
                <CompanyInfo />
            </section>

            <section>
                <Header />
            </section>

            <section>
                <Header />
                <MainContent />
                <Footer />
            </section>

            <section>
                <Navbar />
                <HeroSection />
                <Footer />
            </section>
        </>
    );
}

export default App;
