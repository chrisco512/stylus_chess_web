import { css } from "../../styled-system/css";

export default function Home() {
  const CHESS_CONTRACT = process.env.CHESS_CONTRACT;

  return (
    <main>
      <h1 className={css({ fontSize: "2xl", fontWeight: "bold" })}>
        Stylus Chess
      </h1>
      <h2
        className={css({ fontSize: "lg", fontWeight: "bold" })}
      >{`Total Games: XX`}</h2>
      <div>Contract address: {CHESS_CONTRACT}</div>
    </main>
  );
}
