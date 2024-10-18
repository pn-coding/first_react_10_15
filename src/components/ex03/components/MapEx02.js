const menus = [
  {
    id: 0,
    week: "월요일",
    break: "시리얼",
    lunch: "삼각김밥",
    dinner: "닭갈비",
  },
  {
    id: 1,
    week: "화요일",
    break: "유부초밥",
    lunch: "샤브샤브",
    dinner: "규카츠",
  },
  {
    id: 2,
    week: "수요일",
    break: "김치찌개",
    lunch: "제육볶음",
    dinner: "돈까스",
  },
];

export const MapEx02 = () => {
  return (
    <div>
      {menus.map((menu) => (
        <div key={menu.id}>
          <h2>{menu.week}</h2>
          <ul>
            <li>아침메뉴: {menu.break}</li>
            <li>점심메뉴: {menu.lunch}</li>
            <li>저녁메뉴: {menu.dinner}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};
