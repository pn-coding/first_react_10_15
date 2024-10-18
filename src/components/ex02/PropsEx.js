import Contents from "./components/Contents";
import Ex from "./components/Ex";
import "./style.css";

const menus = [
  {
    id: 0,
    title: "아침",
    mainMenu: "시리얼",
    subMenu: "커피",
  },
  {
    id: 1,
    title: "점심",
    mainMenu: "돈까스",
    subMenu: "요거트",
  },
  {
    id: 2,
    title: "저녁",
    mainMenu: "마라탕",
    subMenu: "두바이 초콜릿",
  },
];

const PropsEx = () => {
  return (
    <>
      {/* <Contents text="컨텐츠 1" bgColor="salmon" />
      <Contents text="컨텐츠 2" bgColor="lightblue" /> */}

      <Ex foodMenus={menus} />
    </>
  );
};

export default PropsEx;

// 메뉴

// 아침메뉴
// 메인: 시리얼
// 서브 메뉴: 커피

// 점심메뉴
// 메인: 샌드위치
// 서브 메뉴: 마카롱

// 저녁메뉴
// 메인: 샌드위치
// 서브 메뉴: 마카롱
