import { useMemo, useState } from 'react';
import { publications, type Publication } from '../data/publications';

const authorName = 'Zhenjie Liu';
type PublicationView = 'selected' | 'all';

const emphasizeAuthor = (authors: string) =>
  authors.split(authorName).map((part, index, parts) => (
    <span key={`${part}-${index}`}>
      {part}
      {index < parts.length - 1 && <strong>{authorName}</strong>}
    </span>
  ));

function PublicationCard({ publication }: { publication: Publication }) {
  return (
    <article className="publication">
      <h3>{publication.title}</h3>
      <div className="publication-detail-line">
        <p className="publication-authors">{emphasizeAuthor(publication.authors)}</p>
        <p className="publication-venue">
          {publication.venue} / {publication.year}
        </p>
      </div>
      <div className="publication-meta-row">
        <div className="publication-tags" aria-label={`Topics for ${publication.title}`}>
          {publication.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="publication-links" aria-label={`Links for ${publication.title}`}>
          {publication.links.map((link) => (
            <a href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Publications() {
  const [view, setView] = useState<PublicationView>('selected');
  const selectedPublications = publications.filter((publication) => publication.selected);

  const publicationsByYear = useMemo(
    () =>
      publications.reduce<Record<number, typeof publications>>((groups, publication) => {
        groups[publication.year] = [...(groups[publication.year] ?? []), publication];
        return groups;
      }, {}),
    [],
  );

  const years = Object.keys(publicationsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <section className="section" id="publications" aria-labelledby="publications-title">
      <div className="section-heading publication-heading">
        <h2 id="publications-title">Publications</h2>
        <div className="publication-switch" role="group" aria-label="Publication view">
          <button
            className={view === 'selected' ? 'active' : ''}
            type="button"
            onClick={() => setView('selected')}
            aria-pressed={view === 'selected'}
          >
            Selected
          </button>
          <button
            className={view === 'all' ? 'active' : ''}
            type="button"
            onClick={() => setView('all')}
            aria-pressed={view === 'all'}
          >
            All
          </button>
        </div>
      </div>

      {view === 'selected' ? (
        <div className="publication-list">
          {selectedPublications.map((publication) => (
            <PublicationCard publication={publication} key={publication.title} />
          ))}
        </div>
      ) : (
        <div className="publication-years">
          {years.map((year) => (
            <div className="publication-year" key={year}>
              <h3>{year}</h3>
              <div className="publication-list">
                {publicationsByYear[year].map((publication) => (
                  <PublicationCard publication={publication} key={publication.title} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
