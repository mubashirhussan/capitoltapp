/* eslint-disable @typescript-eslint/no-explicit-any */
import StoryHome from "@/components/storyBlock/page";
import Trades from "./(public)/trades/page";

// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="p-[24px]">
      <StoryHome />
      <Trades />
      <div className="grid grid-cols-6 gap-4 bg-white text-black">
        <div className="col-start-2 bg-red-600 col-span-4 ">04</div>
        <div className="col-start-1 bg-red-600 col-end-3 ...">02</div>
        <div className="col-end-7  col-span-2 bg-red-600 ...">03</div>
        <div className="col-start-1 col-end-7 bg-red-600 ...">04</div>
      </div>
    </div>
  );
}
