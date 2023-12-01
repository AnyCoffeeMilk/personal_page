import Welcome from "./components/Welcome";
import LuxunForum from "./components/LuxunForum";
import MacauBlock from "./components/MacauBlock";
import Nothing from "./components/Nothing";
import DogeWiki from "./components/DogeWiki";

function App() {
  return (
    <div className="bg-black select-none text-white relative">
      <Welcome />
      <div className="absolute z-10 w-full bg-black">
        <div className="font-['chFont'] animate-bounce text-2xl font-bold h-[20vh] flex items-center justify-center">
          Scroll Down ↓↓↓
        </div>

        <div className="bg-black mt-[20vh]">
          <DogeWiki />
          <LuxunForum />
          <MacauBlock />
          <Nothing />
        </div>
      </div>
    </div>
  );
}

export default App;
