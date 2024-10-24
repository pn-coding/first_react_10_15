import { Link } from "react-router-dom";

const Header = () => {
  return (
    <ul>
      <li>
        <Link to="/">메인 페이지</Link>
      </li>
      <li>
        <Link to="/sub01">1번 서브페이지</Link>
      </li>
      <li>
        <Link to="/sub01">2번 서브페이지</Link>
      </li>
    </ul>
  );
};

export default Header;
