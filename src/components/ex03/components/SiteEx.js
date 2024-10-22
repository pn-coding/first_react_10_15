const sites = [
  {
    id: 0,
    title: "네이버",
    url: "https://naver.com",
    imgUrl: "",
    desc: "네이버 바로가기",
  },
  {
    id: 1,
    title: "유튜브",
    url: "https://youtube.com",
    imgUrl: "",
    desc: "네이버 바로가기",
  },
  {
    id: 2,
    title: "카카오",
    url: "https://kakaocorp.com",
    imgUrl: "",
    desc: "네이버 바로가기",
  },
];

const SiteEx = () => {
  return (
    <div>
      {/* *문제 
    각 사이트 로고 클릭하면 페이지 이동되게 만들기
    단, 배열과 객체 구성후 map함수 사용하여 표현 */}

      {sites.map((site) => (
        <div key={site.id}>
          <a href={site.url}>
            <img src={site.imgUrl} alt={site.title} />
            <p>{site.desc}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default SiteEx;
