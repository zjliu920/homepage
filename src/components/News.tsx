import { newsItems } from '../data/news';

export default function News() {
  return (
    <section className="section compact-section" id="news" aria-labelledby="news-title">
      <div className="section-heading">
        <h2 id="news-title">News</h2>
      </div>

      <ol className="news-list">
        {newsItems.map((item) => (
          <li className="news-item" key={`${item.date}-${item.event}`}>
            <span className="timeline-dot" aria-hidden="true" />
            <time>{item.date}</time>
            <span>{item.event}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
