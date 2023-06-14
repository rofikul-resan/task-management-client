import { NavLink, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="md:hidden">
            <nav>
              <h1>Task Management</h1>
              <div>
                <NavLink to={"/"}>All task</NavLink>
                <NavLink to={"/add-task"}>Add task</NavLink>
              </div>
            </nav>
          </div>

          <div>
            <Outlet />
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full side-bar-bg text-white">
            <div>
              <img src="/ts-logo.png" alt="" className="w-2/3 mx-auto" />
              <h1 className="text-white my-3 text-3xl font-bold ">
                Task Management
              </h1>
            </div>
            {/* Sidebar content here */}
            <li>
              <NavLink to={"/"}>All task</NavLink>
            </li>
            <li>
              <NavLink to={"/add-task"}>Add task</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
