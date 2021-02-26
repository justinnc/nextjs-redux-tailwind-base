import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementCount,
  decrementCount,
  resetCount,
} from "../redux/actions/counterActions";
export default function Home() {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>{counter}</h1>

      <button onClick={() => dispatch(incrementCount())}>+</button>
      <button onClick={() => dispatch(decrementCount())}>-</button>
      <button onClick={() => dispatch(resetCount())}>RESET</button>
    </div>
  );
}
