import "./Main.scss";
import Nav from "../../../components/Nav/Nav";
import Aside from "./Aside/Aside";
import Feed from "./Feed/Feed";
const Main = () => {
  return (
    <>
      <Nav />
      <main className="mainPage">
        <div className="feeds">
          <Feed />
        </div>
        <Aside />
      </main>
    </>
  );
};

export default Main;
