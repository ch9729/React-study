import { NavLink } from "react-router-dom";
import "./LinkWithIcon.css";

const LinkWithIcon = ({ title, link, emoji, sidebar }) => {
  return (
    // 네브링크는 자동으로  active 클래스 추가됨(네브바에서 사용), href를 to로 바꾼다.
    <NavLink
      to={link}
      className={sidebar ? `align_center category_name` : `align_center`}
    >
      {title} <img src={emoji} alt="" className="link_emoji" />
    </NavLink>
  );
};

export default LinkWithIcon;
