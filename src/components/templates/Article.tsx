import React from 'react';
import Header from '../organisms/Header';
import CatchPhrase from '../molecules/CatchPhrase';
import TwitterIcon from '../atoms/twitter.png';
import PinterestIcon from '../atoms/pin.png';
import FacebookIcon from '../atoms/fb.png';
import LineIcon from '../atoms/line.png';
import HatenaIcon from '../atoms/hatena.png';
import './Article.sass';
import './Article.media.sass';

const Article: React.FC = () => (
  <div className="Article">
    <Header />
    <div className="Article__catchPhrase">
      <CatchPhrase />
    </div>
    <div className="Article__breadcrumb">
      ぬくもり トップ > 工作 > トイレットペーパー芯を切って貼るだけ！シックなモチーフの作り方
    </div>
    <div className="Article__main">
      <div className="Article__content">
        <div className="Article__subInformation">
          <div className="Article__date">2018年06月09月更新</div>
          <div className="Article__tag">
            リサイクル(38) トイレットペーパー(6)
          </div>
        </div>
        <div className="Article__information">
          <img
            className="Article__informationThumbnail"
            src="https://nukumore.jp/uploads/article/image/1235/thumb_lg_lbs4493_p46_main_1.jpg"
          />
          <img
            className="Article__informationThumbnail"
            src="https://nukumore.jp/uploads/article/image/1235/thumb_bg_lbs4493_p46_main_1.jpg"
          />{/* mobile */}
          <div className="Article__informationInline">
            <div className="Article__title">
              トイレットペーパー芯を切って貼るだけ！シックなモチーフの作り方
            </div>
            <div className="Article__description">
            <i className="material-icons">thumb_up_alt</i>
            アンティークのアクセサリーの模様にありそうな、 複雑なパターンもペーパー芯で簡単に作れます。 シックな色で重厚感を出すのもポイント。 切って貼るだけで簡単に作れるので、図工工作にもおすすめ！
            </div>
          </div>
        </div> {/* information */}
        <div className="Article__btnSpace">
          <div className="Article__share">
            <img src={FacebookIcon} />
            <img src={LineIcon} />
            <img src={HatenaIcon} />
            <img src={PinterestIcon} />
            <img src={TwitterIcon} />
          </div>
          <div className="Article__favorite">
            <i className="material-icons">favorite_border</i>
            お気に入りに登録
          </div>
        </div>
      </div> {/* content*/ }
      <div className="Article__banners" />
    </div> {/* main */}
  </div>
);

export default Article;
