import { useState } from "react";
import Cards from "./Cards";
import BgBtn from "./BgBtn";

function App() {
  const [color, setColor] = useState(""); //Background Color Changer

  const [counter, setCounter] = useState(6); //Counter Updater
  const addCounter = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    }
  };

  const subCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="duration-150" style={{ backgroundColor: color }}>
      <div className=" py-10 pt-24 ">
        <h1 className="text-3xl font-bold text-center  drop-shadow-sm">
          Hello Guys!
        </h1>
      </div>

      <div className="flex flex-col  items-center gap-5">
        <h1 className="text-xl">Rate Me : {counter}</h1>

        <div className="flex gap-3">
          <button
            onClick={addCounter}
            className="bg-slate-500 w-9 h-9 rounded-full relative text-sm font-bold  hover:bg-slate-400"
          >
            ▲
          </button>

          <button
            onClick={subCounter}
            className="bg-slate-500 w-9 h-9 rounded-full relative text-sm font-bold hover:bg-slate-400"
          >
            ▼
          </button>
        </div>
      </div>

      <h2 className="pl-28 text-2xl font-bold pb-5 pt-14">Dynamic Cards</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-14 gap-x-10 pb-10">
        <Cards
          title="Symptom"
          img="./public/Images/1.jpg"
          para="Tropical Birds"
        />
        <Cards title="Peace" img="./public/Images/2.jpg" para="Swimming Pool" />
        <Cards title="Heaven" img="./public/Images/3.jpg" para="Mizo Hills" />
        <Cards title="Pearl" img="./public/Images/4.jpg" para="Elements" />
        <Cards title="Shallow" img="./public/Images/5.jpg" para="Balloons" />
        <Cards title="Amuse" img="./public/Images/6.jpg" para="Ride" />
      </div>

      <div className="fixed flex flex-wrap justify-around items-center top-8 inset-x-0 px-2 rounded ">
        <div className="max-w-fit flex-wrap bg-slate-800 flex justify-around items-center p-2 rounded-3xl gap-6 drop-shadow-lg">
          <BgBtn colorName="SlateBlue" set={setColor} />
          <BgBtn colorName="SeaGreen" set={setColor} />
          <BgBtn colorName="RebeccaPurple" set={setColor} />
          <BgBtn colorName="DarkSlateGray" set={setColor} />
          <BgBtn colorName="MidnightBlue" set={setColor} />
        </div>
      </div>
    </div>
  );
}

export default App;
