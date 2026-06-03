import { researchInterests } from '../data/research';

export default function Research() {
  return (
    <section className="section compact-section" id="research" aria-labelledby="research-title">
      <div className="section-heading">
        <h2 id="research-title">Research Interests</h2>
      </div>

      <div className="research-grid">
        {researchInterests.map((interest) => (
          <article className="research-card" key={interest.title}>
            <h3>{interest.title}</h3>
            <p>{interest.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
