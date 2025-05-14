import "./PhotoItem.scss";

export default function PhotoItem({draw , image}) {
  return (
    <div className="photo">
      <img className="photo__img" src={image} alt={`${{image}} preview`} />
      <h4 className="photo__tittle">{draw.tittle}</h4>
    </div>
  );
}
