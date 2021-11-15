export default function Aside() {
  return (
    <aside className="aside-filter">
      <span className="total-count">Товаров 143</span>
      <h1 className="title-filter">Камеры</h1>
      <p className="price">Цена, ₽</p>
      <div>
        <input className="min-price" type="number" placeholder="0" />
        <input className="max-price" type="number" placeholder="499 000" />
      </div>
      <p className="brend">Бренд</p>
      <ul className="ul-filter">
        <li className="li-filter">
          <input id="canon-filter" type="checkbox" value="test" />
          <label className="label-filter" htmlFor="canon-filter">
            Canon
          </label>
        </li>
        <li className="li-filter">
          <input id="nikon-filter" type="checkbox" value="test" />
          <label className="label-filter" htmlFor="nikon-filter">
            Nikon
          </label>
        </li>
      </ul>
    </aside>
  );
}
