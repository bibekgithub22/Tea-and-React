import { useState } from "react";
import Cards from "./Cards";
import BgBtn from "./BgBtn";

function App() {
  const [color, setColor] = useState("");
  //
  const [counter, setCounter] = useState(6);
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
        <button
          onClick={addCounter}
          className="bg-slate-500 w-20 rounded-md p-1 px-3 hover:bg-slate-400"
        >
          Add+
        </button>

        <button
          onClick={subCounter}
          className="bg-slate-500 w-20 rounded-md p-1 px-3 hover:bg-slate-400"
        >
          Sub-
        </button>
      </div>

      <h2 className="pl-28 text-2xl font-bold pb-5 pt-14">Dynamic Cards</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-14 gap-x-10 pb-10">
        <Cards title="Symptom" img="./public/Images/1.jpg" />
        <Cards title="Peace " img="./public/Images/2.jpg" />
        <Cards title="Heaven" img="./public/Images/3.jpg" />
        <Cards title="Pearl" color="red" para="" img="./public/Images/4.jpg" />
        <Cards
          title="Shallow"
          para="Float like Balloons"
          img="./public/Images/5.jpg"
        />
        <Cards title="Amuse" para="" img="./public/Images/6.jpg" />
      </div>

      <div className="fixed flex flex-wrap justify-around items-center top-8 inset-x-0 px-2 rounded ">
        <div className="max-w-fit flex-wrap bg-slate-800 flex justify-around items-center p-2 rounded-3xl gap-6 drop-shadow-lg">
          <BgBtn colorName="CadetBlue" setColor={setColor} />
          <BgBtn colorName="SeaGreen" setColor={setColor} />
          <BgBtn colorName="Navy" setColor={setColor} />
          <BgBtn colorName="PaleVioletRed" setColor={setColor} />
        </div>
      </div>
    </div>
  );
}

export default App;
