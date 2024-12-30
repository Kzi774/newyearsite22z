import "./App.css";
import backstage from "./assets/backstage-sap.com_.png";
import tkaisei from "./assets/tkaisei-hokkaido.com_.png";
import {Omikuji} from "./components/omikuji";
import VanillaTilt from 'vanilla-tilt';
import {useEffect, useRef} from 'react';

function App() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.5
      });
    }
  }, []);

  return (
    <>
      <div className="topGradient">
        <div className="card" ref={cardRef} data-tilt>
          <div className="content">
            <h2 className="pulse-gradient">あけましておめでとうございます。</h2>
            <p>🌄🐍🎍</p>
            <h2 className="pulse-gradient">心豊かな一年になりますように。</h2>
          </div>
        </div>

        <div className="scrollArea">
          <ul className="scroll-list">
            <li>🎍🌟🎍🌟🎍🌟🎍🌟🎍🌟🎍</li>
            <li>🌟🎍🌟🎍🌟🎍🌟🎍🌟🎍🌟</li>
            <li>🎍🌟🎍🌟🎍🌟🎍🌟🎍🌟🎍</li>
            <li>🌟🎍🌟🎍🌟🎍🌟🎍🌟🎍🌟</li>
          </ul>
          <ul className="scroll-list">
            <li>HAPPY NEW YEAR!! </li>
            <li>HAPPY NEW YEAR!! </li>
            <li>HAPPY NEW YEAR!! </li>
            <li>HAPPY NEW YEAR!! </li>
          </ul>
          <ul className="scroll-list">
            <li>🎍🌟🎍🌟🎍🌟🎍🌟🎍🌟🎍</li>
            <li>🌟🎍🌟🎍🌟🎍🌟🎍🌟🎍🌟</li>
            <li>🎍🌟🎍🌟🎍🌟🎍🌟🎍🌟🎍</li>
            <li>🌟🎍🌟🎍🌟🎍🌟🎍🌟🎍🌟</li>
          </ul>
        </div>

        <div className="goaisatsu">
          <p className="fadeInUp">
            昨年からwebクリエイターをスタートし、多くの皆さまに支えられ、成長を実感できる一年となりました。
          </p>
          <p className="fadeInUp">
            本年はこれまでの成果を土台に、新たな挑戦に取り組む年にしたいと考えております。
            皆さまにさらに喜んでいただけるサービス・価値をお届けするべく努力を続けてまいります。
          </p>
          <p className="fadeInUp">
            2025年も変わらぬご支援を賜りますよう、どうぞよろしくお願い申し上げます。
          </p>
          <p className="sign">つつじデザイン🌱</p>
        </div>
      </div>

      <div className="carusel">
        <div className="css-carousel-slider2">
          <div className="slide-wrap-main">
            <div className="slide">
              <a href=""><img src={backstage} alt="" /></a>
            </div>
          </div>
          <div className="slide-wrap">
            <div className="slide">
              <img src={backstage} alt="" />
            </div>
            <div className="slide">
              <img src={tkaisei} alt="" />
            </div>
          </div>
        </div>

        <p>2025年は沢山制作し発信していく年にします👾</p>
      </div>

      <div className="undameshiWrapper">
        <Omikuji />

        <p className="undameshiText">
          ご一緒にお仕事をさせていただいた方々、支えてくれる家族友人、そしてこのサイトを見てくださった皆様に心よりの感謝と幸せをお祈りしております。
        </p>
      </div>

      <div className="footer">
        <a href="https://github.com/Kzi774">
          <button className="btn">
            <svg
              width="30"
              height="30"
              fill="#303030"
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              id="github"
            >
              <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
            </svg>
          </button>
        </a>
        <a href="https://x.com/tsu2ji_design">
          <button className="btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              fill="#303030"
              viewBox="0 0 30 30"
            >
              <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
            </svg>
          </button>
        </a>
        <p>©tsu2ji design</p>
      </div>
    </>
  );
}

export default App;
