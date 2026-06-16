import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Student from "./DAY3/Student";
import Day3EmployeeCard from "./DAY3/EmployeeCard";
import Product from "./DAY3/Product";
import Skills from "./DAY3/Skills";
import UserCard from "./DAY3/UserCard";
import Company from "./DAY3/Company";
import Parent from "./DAY3/PropsDrilling";
import CourseCard from "./DAY3/CourseCard";

function App() {
    const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

    const user = {
        name: "Bharath",
        email: "bharath@example.com",
        phone: "9876543210",
        city: "Salem",
    };

    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                    path="/day3"
                    element={
                        <main className="day3-page">
                            <h1>DAY3 - Props Tasks</h1>

                            <Student
                                name="Bharath"
                                age={22}
                                course="React JS"
                                city="Salem"
                            />

                            <Day3EmployeeCard
                                employeeName="Bharath"
                                employeeId="EMP101"
                                department="IT"
                                salary="Rs. 50000"
                                experience="2 Years"
                            />

                            <Product
                                productName="Laptop"
                                productPrice="Rs. 65000"
                                productCategory="Electronics"
                                productBrand="Dell"
                            />

                            <Skills skills={skills} />

                            <UserCard user={user} />

                            <Company
                                companyName="OpenAI"
                                employeeName="Sudhan"
                                employeeRole="MERN Developer"
                                employeeSalary="Rs. 75000"
                            />

                            <Parent name="Sudhan" course="MERN" />

                            <div className="course-grid">
                                <CourseCard
                                    courseName="MERN Stack"
                                    duration="6 Months"
                                    fees="Rs. 35000"
                                />
                                <CourseCard
                                    courseName="Python Full Stack"
                                    duration="5 Months"
                                    fees="Rs. 30000"
                                />
                                <CourseCard
                                    courseName="Java Full Stack"
                                    duration="6 Months"
                                    fees="Rs. 40000"
                                />
                            </div>
                        </main>
                    }
                />
            </Routes>
        </>
    );
}

export default App;
