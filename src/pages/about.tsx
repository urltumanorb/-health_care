import Footer from "@/app/components/footer";
import Header from "../app/components/header";
import "./about.css";

export default function About() {
    return (
        <div className="about-page">
            <Header />
            <div className="about-container">
                <div className="about-content">
                    <h2 className="about-title">ABOUT CORONA VIRUS</h2>
                    <div className="about-underline"></div>
                    <p className="about-text">
                    Coronavirus (COVID-19) is a respiratory illness caused by the SARS-CoV-2 virus. It was first identified in Wuhan, Hubei Province, China, in late 2019 and quickly spread worldwide, becoming a global pandemic.

COVID-19 spreads through respiratory droplets when an infected person coughs, sneezes, or talks. It can also spread by touching surfaces contaminated with the virus and then touching the face. Symptoms of COVID-19 can vary widely and may include fever, cough, shortness of breath, fatigue, muscle or joint pain, sore throat, loss of taste or smell, headache, chills, nasal congestion, nausea or vomiting, and diarrhea.
                    </p>
                </div>
                <div className="about-image">
                    <img src="./images/virus.png" alt="Virus" />
                </div>
                </div>
            <Footer />
        </div>
)}