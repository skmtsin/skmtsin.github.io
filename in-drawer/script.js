/* ---------------------------
  hamburger_menu
--------------------------- */

// 必要な要素の変数を用意する
let hmb_menu = document.getElementById('hamburger_menu');
let gnav = document.getElementById('gnav');
let gnavLinks = document.querySelectorAll('#gnav li');
let htmlScroll = document.querySelector('html');

// hmb_menuがクリックされたら
hmb_menu.addEventListener('click', () => {
  // hamburger_menuのクラスリストに.activeをトグル(付けたり外したり)する
  hmb_menu.classList.toggle('active');
  // gnavのクラスに.openをトグルする
  gnav.classList.toggle('open');
  // htmlScrollのクラスリストに.scrollPreventをトグルする
  htmlScroll.classList.toggle('scrollPrevent');
});

// gnavのliをクリックしたらgnavを閉じる
// gnavLinks(#gnav li)の数だけループ
for (let i = 0; i < gnavLinks.length; i++) {
  // i番目のgnavLinksを変数gnavLinkに代入
  const gnavLink = gnavLinks[i];
  // gnavLinkがクリックされたら
  gnavLink.addEventListener('click', () => {
    // それぞれのクラスにつけたactive,openを外す
    hmb_menu.classList.remove('active');
    gnav.classList.remove('open');
    // もしhtmlScrollのクラスリストに.scrollPreventが含まれていたら
    if(htmlScroll.classList.contains('scrollPrevent')) {
      // htmlScrollのクラスリストから.scrollPreventを削除
      htmlScroll.classList.remove('scrollPrevent');
    }
  });
}


/* ---------------------------
  ScrollAnimetion
--------------------------- */

// アニメーションしたいターゲットを変数animeTargetsに代入（今回は3つ）
let animeTargets = document.querySelectorAll('.animate__animated');
// console.log(animeTargets);

window.addEventListener('scroll', () => {
  for (let i = 0; i < animeTargets.length; i++) {
    // ↓ ターゲットTOPの現在の座標(スクロールしていくと0に近づく-lefttop基準)
    let animeTarget = animeTargets[i].getBoundingClientRect().top;
    // ↓ スクロール中の座標
    let scroll = window.pageYOffset || document.documentElement.scrollTop;
    // ↓ windowのTOPからのターゲットまでの実際の距離
    let offset = animeTarget + scroll;
    // ↓ 現在開いているブラウザのドキュメントウィンドウの高さ
    let windowHeight = window.innerHeight;
    // ターゲットのアニメーションの種類をdeta-animatinoから取得し、変数animeに代入
    let anime = animeTargets[i].dataset.animation;
    // スクロールしてターゲットがウィンドウに現れたら
    if(scroll > offset - windowHeight + 200) {
      // animeTargetのクラスリストにクラス名animeを加える
      animeTargets[i].classList.add(anime, 'visi');
    } else {
      // ターゲットがウィンドウから外れている間は
      animeTargets[i].classList.remove(anime, 'visi');
    }
  }
});

/* ---------------------------
  FileReader
--------------------------- */

// #fireをcapImgに代入
let capImg = document.getElementById('file');

// capImgのchange(ファイル選択)をaddEventListenerでキャッチ
capImg.addEventListener('change', (e) => {
  // e.targetに格納されているfilesオブジェクト(配列形式)の
  // 0番目に選択したファイルを、変数fileに代入
  let file = e.target.files[0];
  // FileReaderオブジェクトを作成し、変数flrdrに代入
  let flrdr = new FileReader();
  // readAsDataURLメソッドに選択したファイルオブジェクトを渡すと
  // resultプロパティにURL形式でデータが格納される
  flrdr.readAsDataURL(file);
  // flrdrで選択ファイルの読込が完了したら
  flrdr.addEventListener('load', () => {
    // flrdrに代入されたFileReaderオブジェクトの
    // resultプロパティの値(url形式のファイルデータ)を変数urlに代入
    let url = flrdr.result;
    // Imageオブジェクトを作成し、変数imgに代入
    let img = new Image();
    // 作成した変数imgのsrcプロパティにurlを代入する
    img.src = url;
    // #img_wrapperにimgオブジェクトを追加
    document.getElementById('img_wrapper').appendChild(img);
  });
});



