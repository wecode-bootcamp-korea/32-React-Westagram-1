import "../Main/Main.scss";
import Nav from "../../../components/Nav/Nav";
import MainFeed from "./mainFeed/MainFeed";
import RightFeed from "./rightFeed/RightFeed";

function Main() {
  return (
    <div className="Main">
      <Nav />
      <main className="main">
        <MainFeed />
        <RightFeed />
      </main>
    </div>
  );
}

export default Main;
