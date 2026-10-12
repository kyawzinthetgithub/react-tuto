import { Outlet } from "react-router";
import Headers from "../components/Header";

function MainLayout() {
  return (
    <div>
        <Headers />
      <Outlet />
    </div>
  )
}

export default MainLayout
