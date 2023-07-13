import { Outlet } from 'react-router-dom';

const Layout = () => (
  <div className="wrapper">
    <div>
      <Outlet />
    </div>
  </div>
);

export default Layout;
