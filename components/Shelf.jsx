export default function Shelf({ items }) {
  return (
    <div className="shelf">
      {items.map((p) => (
        <div key={p.t} className={`pcard ${p.locked ? 'locked' : ''}`} tabIndex={0}
          aria-label={`${p.t}, ${p.s}${p.locked ? ', coming soon' : ''}`}>
          <div className="cbg" style={{ background: p.bg }} />
          <div className="cshade" />
          <span className="csub">{p.s}</span>
          <span className="cep">{p.ep}</span>
          <span className="ct">{p.t}</span>
        </div>
      ))}
    </div>
  );
}
