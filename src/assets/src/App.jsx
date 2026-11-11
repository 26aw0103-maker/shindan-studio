import { diagnoses } from "./data/diagnoses.js";
import Header from "./components/Header.jsx";
import DiagnosisCard from "./components/DiagnosisCard.jsx";
import "./App.css";

export default function App() {
  return (
    <main>
      <Header />
      {diagnoses.map((diagnosis) => (
        <DiagnosisCard
          key={diagnosis.id}
          title={diagnosis.title}
          category={diagnosis.category}
          description={diagnosis.description}
          estimatedMinutes={diagnosis.estimatedMinutes}
        />
      ))}
    </main>
  );
}
