import { Header } from "./components/Header";
import { MenuItem } from "./components/Header";
import { PageTitle } from "./components/PageTitle";

const menuItems: MenuItem[] = [
  {
    name: "Home",
  },
  {
    name: "About",
  },
  {
    name: "Dev Log",
  },
];

function App() {
  return (
    <>
      <Header menuItems={menuItems} />
      <PageTitle title="What Do You Know About Indie GameDev?" />
    </>
  );
}

export default App;
