import "./PhotoItem.scss";

export default function PhotoItem({draw , image}) {
  return (
    <div className="photo">
      <img src={image} alt={`${{image}} preview`} />
      <div>{draw.tittle}</div>
    </div>
  );
}
