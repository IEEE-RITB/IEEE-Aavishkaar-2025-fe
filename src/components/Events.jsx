import { div } from "motion/react-client";

export const Events = () => {
  return (
    <div className="my-4 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-extrabold">WHAT'S HAPPENING</h1>
      <h2 className="my-4">Various events divided across three universes</h2>
      <div className="">
        <button className="w-full bg-blue-700 py-1 px-6 mt-4 rounded-2xl">
          All
        </button>
        <div className="flex gap-2 my-4">
          <button className="bg-blue-700 py-1 px-6 rounded-2xl">ALIEN</button>
          <button className="bg-blue-700 py-1 px-6 rounded-2xl">ROBOT</button>
          <button className="bg-blue-700 py-1 px-6 rounded-2xl">MATRIX</button>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
};

const EventCard = () => {
  return (
    <div className="bg-white text-black p-4 rounded-2xl m-4 flex flex-col items-center">
      <img
        src="https://plus.unsplash.com/premium_photo-1688821130384-efd7592cf620?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="h-1/2 mb-4"
      />
      <h1 className="text-2xl font-bold">Datathon</h1>
      <p className="text-red-500">FOR ML ENTHUSIAST</p>
      <button className="bg-blue-200 px-2 rounded-2xl mt-2">Matrix</button>
    </div>
  );
};
