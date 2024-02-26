import { css } from "../../../styled-system/css";

export default function Game({ params }) {
  let { game_id } = params;

  return (
    <main>
      <h1 className={css({ fontSize: "2xl", fontWeight: "bold" })}>
        Stylus Chess
      </h1>
      <h2
        className={css({ fontSize: "lg", fontWeight: "bold" })}
      >{`Game Number: ${game_id}`}</h2>
    </main>
  );
}
