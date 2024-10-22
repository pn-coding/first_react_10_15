import {
  faBackward,
  faEllipsis,
  faForward,
  faPause,
  faVolumeHigh,
  faVolumeOff,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import TitleWrap from "./components/TitleWrap";
import PlayWrap from "./components/PlayWrap";

const Wrap = styled.div`
  max-width: 450px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 20px;
`;

const CoverImg = styled.div`
  height: 450px;
  background: #dbdbdb url() no-repeat center / cover;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const PlayBtn = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 30px 0 30px 0;
  font-size: 50px;

  .icons:nth-child(1),
  .icons:nth-child(3) {
    font-size: 40px;
  }
`;

const Volume = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: lightgray;
  .progress {
    width: 80%;
    height: 7px;
    background-color: #f1f1f1;
    border-radius: 10px;
    overflow: hidden;
    .bar {
      width: 50%;
      height: 100%;
      background-color: lightgray;
    }
  }
`;

export const MusicApp = () => {
  return (
    <Wrap>
      <CoverImg></CoverImg>

      <TitleWrap />

      <PlayWrap />

      <PlayBtn>
        <div className="icons">
          <FontAwesomeIcon icon={faBackward} />
        </div>
        <div className="icons">
          <FontAwesomeIcon icon={faPause} />
        </div>
        <div className="icons">
          <FontAwesomeIcon icon={faForward} />
        </div>
      </PlayBtn>

      <Volume>
        <FontAwesomeIcon icon={faVolumeOff} />
        <div className="progress">
          <div className="bar"></div>
        </div>
        <FontAwesomeIcon icon={faVolumeHigh} />
      </Volume>
    </Wrap>
  );
};
