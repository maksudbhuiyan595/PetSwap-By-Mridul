import React from "react";
import { useGlobalContext } from "../../utils/contextApi/GlobalContext";
import Screen1 from "./components/Screen1";
import Screen2 from "./components/Screen2";
function ManageUsers() {
  const { activeScreen, setActiveScreen } = useGlobalContext();
  console.log("Active Screen: ", activeScreen);
  return <div>{activeScreen === 0 ? <Screen1 /> : <Screen2 />}</div>;
}

export default ManageUsers;
