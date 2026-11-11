import CategoryBadge from "./CategoryBadge.jsx";

export default function DiagnosisCard({ title, category, description, estimatedMinutes }) {
  return (
    <article>
      <h2>{title}</h2>
      <CategoryBadge category={category} />
      <p>{description}</p>
      <p className="minutes">目安 {estimatedMinutes}分</p>
    </article>
  );
}
