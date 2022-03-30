import "./card.styles.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${props.monster.id}/?set=set2&size=140x140`}
      />
      <h3>{props.monster.name}</h3>
    </div>
  );
};
