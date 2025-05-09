import "./Photo.scss";

export default function Photo({draw , image}) {
  return (
    <div className="photo">
      <img src={image} alt={`${{image}} preview`} />
      This the Photo
    </div>
  );
}
