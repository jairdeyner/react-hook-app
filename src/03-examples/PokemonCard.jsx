export const PokemonCard = ({ id, name, sprites = [] }) => {
  return (
    <section>
      <h2 className="text-capitalize">
        #{id} - {name}
      </h2>

      <div>
        {sprites.map((s) => (
          <img key={s} src={s} alt="name" />
        ))}
      </div>
    </section>
  );
};
