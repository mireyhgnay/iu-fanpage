import React from 'react'
import { observer, inject } from 'mobx-react'
import "../styles/Header.css"
import "../styles/Main.css"
import "../styles/Footer.css"

@inject('userStore')
@observer

class Main extends React.Component{
  render(){
    const { userStore } = this.props
    const { usermail } = userStore

    return (<div>
    {/* ////////// HEADER ////////// */}
    <header>
      <h1>IU</h1>
      <div className="bottom">
        <h3>{usermail}</h3>
        <p> 
          내가 좋아하는 아이유의 영상들을 모아두고 싶었다. <br/>
          아이유의 수 많은 영상들 중에서도 내가 덕질할 때 특히 많이 보는 영상들을 
          따로 저장해서 편하게 덕질할 수 있도록 영상들을 수집한 페이지이다.<br/>
          내 취향을 있는 그대로 노출한다는 게 약간 마음에 걸리긴 하지만,<br/>
          사실 이 페이지에는 나 외에 다른 사람이 들어 올 일이 거의 없다.
        </p>
        <nav>
          <ul>
            <li><a href="https://www.youtube.com/channel/UC3SyT4_WLHzN7JmHQwKQZww" target="_blank">Youtube</a></li>
            <li><a href="https://instagram.com/dlwlrma?igshid=5u7xp8o4nvzd" target="_blank">Instagram</a></li>
            <li><a href="https://cafe.daum.net/IU/_rec" target="_blank">FanCafe</a></li>
          </ul>
        </nav>
      </div>
    </header>
    {/* ////////// HEADER ////////// */}

    
    {/* ////////// CONTENT ////////// */}
    <main>
      <section className="movie">
        <div className="wrapper">
          <div className="movie__header">
            <h4>01. [Full Album] 아이유(IU) - LILAC(5th Album) | PLAYLIST</h4>
            <h5>찐막 JJINMAK</h5>
          </div>
          <div className="movie__video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/W_z6esc8KQk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </section>

      <section className="movie">
        <div className="wrapper">
          <div className="movie__header">
            <h4>02. [IU] 'eight' Acoustic Ver. Live Clip</h4>
            <h5>딩고 뮤직 / dingo music</h5>
          </div>
          <div className="movie__video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/tJM0yIbg8iQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </section>
      
      <section className="movie">
        <div className="wrapper">
          <div className="movie__header">
            <h4>03. '내 손을 잡아(Hold My Hand)'Live Clip</h4>
            <h5>이지금 [IU Official]</h5>
          </div>
          <div className="movie__video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/3iM_06QeZi8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </section>

      <section className="movie">
        <div className="wrapper">
          <div className="movie__header">
            <h4>04. 💜아이유(IU)가 유퀴즈 100회에 등판했다💜 30분 풀버전</h4>
            <h5>디글 :Diggle</h5>
          </div>
          <div className="movie__video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/xs6hl6WR1tY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </section>

      <section className="movie">
        <div className="wrapper">
          <div className="movie__header">
            <h4>05. [골라봐야지] 효리네 민박★아이유(IU) 매력 모아보기♥</h4>
            <h5>아이유니버스_IUniverse</h5>
          </div>
          <div className="movie__video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/WBsIM2VJ7p8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </section>

      <section className="movie">
        <div className="wrapper">
          <div className="movie__header">
            <h4>06. 친남매가 부르는 '아이유 - 어푸'🌊</h4>
            <h5>해리안 Harryan</h5>
          </div>
          <div className="movie__video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/WYSoRURZIb0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </section>

      <section className="movie">
        <div className="wrapper">
          <div className="movie__header">
            <h4>07. 1시간 동안 듣는 '호텔 델루나' 1화~16화 요약본!</h4>
            <h5>tvN D ENT</h5>
          </div>
          <div className="movie__video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/YcJ7JRN1XV8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </section>

      <section className="movie">
        <div className="wrapper">
          <div className="movie__header">
            <h4>08. 어두웠던 일상이 밝아지기까지 서로를 위로했던 이지은 X 이선균의 대화 모음</h4>
            <h5>tvN D ENT</h5>
          </div>
          <div className="movie__video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/FVbAk9q8KFM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </section>

      <section className="movie">
        <div className="wrapper">
          <div className="movie__header">
            <h4>09. [MV] IU(아이유)_Coin</h4>
            <h5>1theK (원더케이)</h5>
          </div>
          <div className="movie__video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/86BST8NIpNM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </section>

      <section className="movie">
        <div className="wrapper">
          <div className="movie__header">
            <h4>10. 박재범 (Jay Park) - ‘GANADARA (Feat. 아이유 IU)’ Official Music Video</h4>
            <h5>Revive</h5>
          </div>
          <div className="movie__video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/gFb1TftvdoM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </section>

      <section className="movie">
        <div className="wrapper">
          <div className="movie__header">
            <h4>11. [아이유의 팔레트] 세븐틴이에유는 일촌이에유 (With 세븐틴)</h4>
            <h5>이지금 [IU Official]</h5>
          </div>
          <div className="movie__video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/kUOIJ2OFxsY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </section>

      <section className="movie">
        <div className="wrapper">
          <div className="movie__header">
            <h4>12. [대화의 희열] IU - 잠 못 드는 밤, 사랑하는 모든 이들을 위하여</h4>
            <h5>KBS StarTV</h5>
          </div>
          <div className="movie__video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/F8twHxaA8ck" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </section>
      {/* ////////// CONTENT ////////// */}

      
      {/* ////////// FOOTER ////////// */}
      <footer>
        <p>나만의 덕질 저장소 <br /> <strong>GEEK OUT PORTFOLIO</strong></p> 
      </footer>
      {/* ////////// FOOTER ////////// */}
    </main>

    </div>)
  }
}
 
export default Main;