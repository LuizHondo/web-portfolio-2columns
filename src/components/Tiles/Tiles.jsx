function Tiles() {
  return (
    <section id="projects" className="app__section grid">
      <div className="grid__item info-tile">
        <p className="info-tile__eyebrow">Section</p>
        <h3 className="info-tile__title">Tile heading</h3>
        <p className="info-tile__copy">Short body copy placeholder.</p>
      </div>
      <div className="grid__item info-tile info-tile--primary">
        <p className="info-tile__eyebrow">Checklist</p>
        <h3 className="info-tile__title">Todo items</h3>
        <ul className="info-tile__list">
          <li className="info-tile__list-item">Wireframe item</li>
          <li className="info-tile__list-item">Wireframe item</li>
          <li className="info-tile__list-item">Wireframe item</li>
        </ul>
      </div>
    </section>
  );
}

export default Tiles;
