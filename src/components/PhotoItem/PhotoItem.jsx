import "./PhotoItem.scss";

export default function PhotoItem({ draw, image }) {
  return (
    <div className="photo">
      <img className="photo__img" src={image} alt={`${{ image }} artwork`} />
      <p className="photo__tittle">{draw.tittle}</p>
      <small className="photo__tittle--description">{draw.technique}</small>
    </div>
  );
}
