'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f9c8574b4e9486b1ca3b6149139e80d4",
"index.html": "cce148fcfad898e557993f2c05f46b2a",
"/": "96b9ccd62ab5d141014571aa445f80dc",
"main.dart.js": "522174c6a009059ffe3da0cf1a737862",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"cors.json": "ca86c0ed703ce2135eaf4a37e5c22aef",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "df527f6dbde9c00ac5ad94c76e96f84e",
"assets/AssetManifest.json": "ab5cb4b9ac6e63915827d645a42764f9",
"assets/NOTICES": "15aa5314489b5824b927d8844fdd2517",
"assets/FontManifest.json": "b65d539e6f729b2693911d52b49a729b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/packages/hot_sport/lib/fonts/%25E9%2592%2589%25E9%2592%2589%25E8%25BF%259B%25E6%25AD%25A5%25E4%25BD%2593/DingTalk_JinBuTi_Regular.ttf": "f059c1c61f135f8143b27ad3ab22a1ab",
"assets/packages/hot_sport/lib/fonts/%25E6%2580%259D%25E6%25BA%2590%25E9%25BB%2591%25E4%25BD%2593-%25E7%25AE%2580%25E4%25BD%2593%25E4%25B8%25AD%25E6%2596%2587/Source_Han_Sans_SC_Heavy_Heavy.otf": "2dbb493c201153533bc0f92e93cee6af",
"assets/packages/hot_sport/lib/fonts/%25E6%2580%259D%25E6%25BA%2590%25E9%25BB%2591%25E4%25BD%2593-%25E7%25AE%2580%25E4%25BD%2593%25E4%25B8%25AD%25E6%2596%2587/Source_Han_Sans_SC_Bold.otf": "c76f8a8f08293d0e1c5dc8302f7062aa",
"assets/packages/hot_sport/lib/fonts/%25E6%2580%259D%25E6%25BA%2590%25E9%25BB%2591%25E4%25BD%2593-%25E7%25AE%2580%25E4%25BD%2593%25E4%25B8%25AD%25E6%2596%2587/Source_Han_Sans_SC_Medium_Medium.otf": "ebc3cd485fe89cc90b38be33464894ae",
"assets/packages/hot_sport/lib/fonts/%25E6%2580%259D%25E6%25BA%2590%25E9%25BB%2591%25E4%25BD%2593-%25E7%25AE%2580%25E4%25BD%2593%25E4%25B8%25AD%25E6%2596%2587/Source_Han_Sans_SC_Regular.otf": "56195441817e7172c4cd914388710f20",
"assets/packages/hot_sport/lib/fonts/%25E5%25BE%2597%25E6%2584%258F%25E9%25BB%2591/Smiley_Sans_Oblique_%25E6%2596%259C%25E4%25BD%2593.ttf": "09b02d77d567a54c42bc6620810304bc",
"assets/packages/hot_sport/lib/fonts/%25E7%2599%25BD%25E6%2597%25A0%25E5%25B8%25B8%25E5%258F%25AF%25E5%258F%25AF%25E4%25BD%2593/%25E5%258F%25AF%25E5%258F%25AF%25E4%25BD%2593%25E7%25BB%2586.ttf": "98eb80ba9f4d9ce81cb1e9441ec15adb",
"assets/packages/hot_sport/lib/fonts/%25E7%2599%25BD%25E6%2597%25A0%25E5%25B8%25B8%25E5%258F%25AF%25E5%258F%25AF%25E4%25BD%2593/%25E5%258F%25AF%25E5%258F%25AF%25E4%25BD%2593%25E5%25B8%25B8%25E8%25A7%2584.ttf": "c5dc86147fa28d6af7693c0da458814c",
"assets/packages/hot_sport/lib/fonts/%25E7%2599%25BD%25E6%2597%25A0%25E5%25B8%25B8%25E5%258F%25AF%25E5%258F%25AF%25E4%25BD%2593/%25E5%258F%25AF%25E5%258F%25AF%25E7%25B2%2597%25E4%25BD%2593.ttf": "dd0f3a39472d0a82b272f615193ce16c",
"assets/packages/hot_sport/lib/fonts/Source_Han_Serif_SC_Light_Light.otf": "ca12527e3a1a01d66d58fa0714306cd7",
"assets/packages/hot_sport/lib/fonts/zcool-gdh_Regular.ttf": "b201c25ecfc5ee6f159223ef2746f78d",
"assets/packages/hot_sport/lib/fonts/%25E9%2598%25BF%25E9%2587%258C%25E5%25A6%2588%25E5%25A6%2588%25E6%2595%25B0%25E9%25BB%2591%25E4%25BD%2593/Alimama_ShuHeiTi_Bold.ttf": "98a341cd7783fb4d69e9b831d9d70482",
"assets/packages/hot_sport/lib/fonts/%25E7%25AB%2599%25E9%2585%25B7%25E4%25BB%2593%25E8%2580%25B3%25E6%25B8%2594%25E9%2598%25B3%25E4%25BD%2593/TsangerYuYangT_W04_W04.ttf": "133201c6ac092546a167168ccda05668",
"assets/packages/hot_sport/lib/fonts/%25E7%25AB%2599%25E9%2585%25B7%25E4%25BB%2593%25E8%2580%25B3%25E6%25B8%2594%25E9%2598%25B3%25E4%25BD%2593/TsangerYuYangT_W05_W05.ttf": "e1e23f943083ae7a8e33764d76d97a09",
"assets/packages/hot_sport/lib/fonts/%25E7%25AB%2599%25E9%2585%25B7%25E4%25BB%2593%25E8%2580%25B3%25E6%25B8%2594%25E9%2598%25B3%25E4%25BD%2593/TsangerYuYangT_W01_W01.ttf": "4c8c4bd4bf1918831f33b2930b4dc173",
"assets/packages/hot_sport/lib/fonts/%25E7%25AB%2599%25E9%2585%25B7%25E4%25BB%2593%25E8%2580%25B3%25E6%25B8%2594%25E9%2598%25B3%25E4%25BD%2593/TsangerYuYangT_W02_W02.ttf": "2b202acb88f857066b8744aae1006116",
"assets/packages/hot_sport/lib/fonts/%25E7%25AB%2599%25E9%2585%25B7%25E4%25BB%2593%25E8%2580%25B3%25E6%25B8%2594%25E9%2598%25B3%25E4%25BD%2593/TsangerYuYangT_W03_W03.ttf": "074317ddeee65d7448fc71e40d68cfeb",
"assets/packages/hot_sport/lib/fonts/%25E9%2598%25BF%25E9%2587%258C%25E5%25B7%25B4%25E5%25B7%25B4%25E6%2599%25AE%25E6%2583%25A0%25E4%25BD%2593%25202.0/Alibaba_PuHuiTi_2.0_55_Regular_55_Regular.ttf": "7d731481e9c4c5be457ebf734ae9ba61",
"assets/packages/hot_sport/lib/fonts/%25E9%2598%25BF%25E9%2587%258C%25E5%25B7%25B4%25E5%25B7%25B4%25E6%2599%25AE%25E6%2583%25A0%25E4%25BD%2593%25202.0/Alibaba_PuHuiTi_2.0_45_Light_45_Light.ttf": "f2f9486d06db343b0fa167d2d6c6d758",
"assets/packages/hot_sport/lib/fonts/%25E9%2598%25BF%25E9%2587%258C%25E5%25B7%25B4%25E5%25B7%25B4%25E6%2599%25AE%25E6%2583%25A0%25E4%25BD%2593%25202.0/Alibaba_PuHuiTi_2.0_105_Heavy_105_Heavy.ttf": "12bbf943a7cccc41ca8776b0fcc90e79",
"assets/packages/hot_sport/lib/fonts/%25E9%2598%25BF%25E9%2587%258C%25E5%25B7%25B4%25E5%25B7%25B4%25E6%2599%25AE%25E6%2583%25A0%25E4%25BD%2593%25202.0/Alibaba_PuHuiTi_2.0_35_Thin_35_Thin.ttf": "dfa78e845f80b4ed9aaf9b71e5081cde",
"assets/packages/hot_sport/lib/fonts/%25E9%2598%25BF%25E9%2587%258C%25E5%25B7%25B4%25E5%25B7%25B4%25E6%2599%25AE%25E6%2583%25A0%25E4%25BD%2593%25202.0/Alibaba_PuHuiTi_2.0_65_Medium_65_Medium.ttf": "092a99ee52bbaef7481cc96c5b85b992",
"assets/packages/hot_sport/lib/fonts/%25E9%2598%25BF%25E9%2587%258C%25E5%25B7%25B4%25E5%25B7%25B4%25E6%2599%25AE%25E6%2583%25A0%25E4%25BD%2593%25202.0/Alibaba_PuHuiTi_2.0_95_ExtraBold_95_ExtraBold.ttf": "7bc7c655bc345b5d150e66ae50e2c0b7",
"assets/packages/hot_sport/lib/fonts/ZCOOL_KuHei_Regular.ttf": "6b4f114c44c815accc37538e06e79d6b",
"assets/packages/hot_sport/lib/fonts/%25E9%2598%25BF%25E9%2587%258C%25E5%25A6%2588%25E5%25A6%2588%25E4%25B8%259C%25E6%2596%25B9%25E5%25A4%25A7%25E6%25A5%25B7/Alimama_DongFangDaKai_Regular.ttf": "41ff7351d5ea9f282d95b8fb07161165",
"assets/packages/hot_sport/assets/images/%25E6%2588%25AA%25E5%25B1%258F2023-05-25%252015.21.06.png": "7ffe66faf63f7b3b6f4dbd688db9bcb4",
"assets/packages/hot_sport/assets/images/shoppingCartIconButton.png": "d37d41e7492c3008915c2a2a44a58070",
"assets/packages/hot_sport/assets/images/writeText.png": "db257db983e09a8898fe4fe72c3de5e9",
"assets/packages/hot_sport/assets/images/shoppingCart.png": "299654a57b469aae93cc0394fdf543c7",
"assets/packages/hot_sport/assets/images/search.png": "bab02cdd14262d0660d44ca8789ef660",
"assets/packages/hot_sport/assets/images/navbar_snapshot.png": "d1b370fe00c7a8a2508e1842277bf9e2",
"assets/packages/flutter_login/assets/images/ecorp.png": "24e80e9441acf073076893cebbe60ac0",
"assets/packages/sign_in_button/assets/logos/google_dark.png": "d18b748c2edbc5c4e3bc221a1ec64438",
"assets/packages/sign_in_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"assets/packages/sign_in_button/assets/logos/2.0x/google_dark.png": "68d675bc88e8b2a9079fdfb632a974aa",
"assets/packages/sign_in_button/assets/logos/2.0x/google_light.png": "1f00e2bbc0c16b9e956bafeddebe7bf2",
"assets/packages/sign_in_button/assets/logos/2.0x/facebook_new.png": "dd8e500c6d946b0f7c24eb8b94b1ea8c",
"assets/packages/sign_in_button/assets/logos/3.0x/google_dark.png": "c75b35db06cb33eb7c52af696026d299",
"assets/packages/sign_in_button/assets/logos/3.0x/google_light.png": "3aeb09c8261211cfc16ac080a555c43c",
"assets/packages/sign_in_button/assets/logos/3.0x/facebook_new.png": "689ce8e0056bb542425547325ce690ba",
"assets/packages/sign_in_button/assets/logos/facebook_new.png": "93cb650d10a738a579b093556d4341be",
"assets/packages/eva_icons_flutter/lib/fonts/Eva-Icons.ttf": "a71dbd49ad4a52020638190e30ac52e0",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/design/add.png": "9f06446dd689d367539b0e1771bc71fd",
"assets/assets/images/design/%25E6%2590%259C%25E7%25B4%25A2.png": "31ef283efa4f6511a856ee55ec376e26",
"assets/assets/images/design/run_text.png": "60a7bfe2eb2b3c270791fedc14315619",
"assets/assets/images/design/maximize.png": "fc8d00c2d28400f409c35c3c1b5cb120",
"assets/assets/images/design/manycard.png": "ef77fde76e929df06a40c6e24d6b810f",
"assets/assets/images/design/dashedline.png": "709bba74eb6acf07a83c3d68242837df",
"assets/assets/images/design/text_content.png": "c9b2dbe38411751772bc9e8ea1f54655",
"assets/assets/images/design/dottedline.png": "d4baba2ff6dd784390025324e65ba22c",
"assets/assets/images/design/minus.png": "7bd1d5978dc5898a2c1fba6360407ba4",
"assets/assets/images/design/%25E9%2580%2589%25E4%25B8%25AD.png": "c86f7f569ca876614763195d303b5d8d",
"assets/assets/images/design/trash.png": "b9435ab91628c3c97ade4fb8444ae725",
"assets/assets/images/design/rectangleline.png": "fdba1ede3c6996eaaa5624b507b8eb88",
"assets/assets/images/design/broom.png": "79ee08d5498b1f2c11403afe3e5659ea",
"assets/assets/images/3_user_placeholder.png": "2785b1bedaed3962692a1850a4c50faa",
"assets/assets/images/kong.png": "c4acbd06fd4f7928576853e999ca37af",
"assets/assets/images/login_bg.png": "89b70331dd418acc072b747840d8908f",
"assets/assets/images/hotsportsnapshot/bgimage.png": "bd5c91220c3a3b755b062ba204040ef9",
"assets/assets/images/hotsportsnapshot/food4.jpg": "537cfa9dfde17b0d2095bcea14b2cce5",
"assets/assets/images/hotsportsnapshot/food5.jpg": "b1172fb01502eb76c8341b14082f7f38",
"assets/assets/images/hotsportsnapshot/animation.png": "185a9b9c8a94d89881682a1aaf3a2262",
"assets/assets/images/hotsportsnapshot/writeText.png": "db257db983e09a8898fe4fe72c3de5e9",
"assets/assets/images/hotsportsnapshot/food2.jpg": "9c3e7dac68df0d4e2de212c9dd305715",
"assets/assets/images/hotsportsnapshot/food3.jpg": "79286b2fdda39e32fcc4839085c651c6",
"assets/assets/images/hotsportsnapshot/div.png": "5fe53b9d877485b9ff800465ec1af4e8",
"assets/assets/images/hotsportsnapshot/food1.jpg": "181dcff37ac49f66aee565286dcd16b0",
"assets/assets/images/hotsportsnapshot/video.jpg": "46bad8b001ad55a00cdc3fb3aa22ac63",
"assets/assets/images/hotsportsnapshot/foodimage.png": "6c298271b0b3d5c63a0b002754ef3bfa",
"assets/assets/images/hotsportsnapshot/navbar_snapshot.png": "d1b370fe00c7a8a2508e1842277bf9e2",
"assets/assets/images/hotsportsnapshot/text.png": "60db6416d8431f3be6a2c01b1d5016ad",
"assets/assets/images/hotsportsnapshot/image.png": "1c6d908c65e3877d4fdad4a3dcc51162",
"assets/assets/images/hotsportsnapshot/button.png": "b7e057428186ea2d5ca134bdf13809fa",
"assets/assets/images/home_spaceBar_bg.png": "cb4789a8694e8633a4cd48d227ac375f",
"assets/assets/images/home_menu_item_bg.png": "a5da51246a8d15ff4be25520084197bb",
"assets/assets/images/2_user_placeholder.png": "70386dc75afa9e8f9844ab14937e5e6f",
"assets/assets/images/web_logo_light.png": "1eca798d8ee3340b9904c20ce6d15fca",
"assets/assets/images/dowmload.png": "7ba04cfc84c30c05dcc43b467fa4c835",
"assets/assets/images/section1_b01.png": "22f7ddbce8c8dd9042620988d318a2fc",
"assets/assets/images/home_number_sh.png": "3c2cc1ec4a63f270065174ce626641a6",
"assets/assets/images/project_app.png": "6194eb229087f75f2f64768f0873e760",
"assets/assets/images/logo.png": "69532b40b7a6a73232f9bb8b1c71984c",
"assets/assets/images/1_user_placeholder.png": "9f4d09ec627a1a36d1923d29a9f970e6",
"assets/assets/images/raster/avatar-1.png": "038abc501087aefce746e3cb7fb8494b",
"assets/assets/images/raster/avatar-2.png": "0fe16aa5bd1c9033f32d71ddb993c91f",
"assets/assets/images/raster/avatar-3.png": "53437fa458fc601e4b96c25c2e1507f9",
"assets/assets/images/raster/avatar-7.png": "46ddd2bad19579e222454be61d251fee",
"assets/assets/images/raster/avatar-6.png": "b45be2fdfb522cc3687cd2701afb1a97",
"assets/assets/images/raster/avatar-4.png": "6140a06fa0ab4908aa8a935f951cd8d2",
"assets/assets/images/raster/avatar-5.png": "bd608d7293941c6df8b9acd5b36faa7f",
"assets/assets/images/raster/logo-2.png": "dc813c3e1d73f9af353bc1b22d57ab3c",
"assets/assets/images/raster/logo-3.png": "7911ea59183e005c6d658b02c3b1dc0e",
"assets/assets/images/raster/logo-1.png": "dcb7eb7b4afd43d556194a256bbdd901",
"assets/assets/images/raster/logo-4.png": "17732192a654a5626f85479374fa7af0",
"assets/assets/images/raster/avatar-8.png": "8d36c0d6cea93a38a175c21a01ccc6d0",
"assets/assets/images/andioid_icon.png": "84a3101f2274b1ea5e605fb486e63609",
"assets/assets/images/ifredom.jpg": "d0d42e541ec1af2886de278b26b987ff",
"assets/assets/images/vector/happy.svg": "0fdd229a2a0b16b64d866d6ba7a892c9",
"assets/assets/images/vector/happy-2.svg": "bf5170fdad8b2d38cd42072669d55360",
"assets/assets/images/vector/wavy-bus.svg": "a0a4c269539613572cbaec495a537bc6",
"assets/assets/images/web_logo_back.png": "cf3b55dbc33cc78c3797eeebf0723f02",
"assets/assets/images/bg.png": "407cd2297936a15fab092cd160b7c679",
"assets/assets/markdown/markdown_test_page.md": "b07071c55e3cc1c569d3d18ee758ce24",
"assets/assets/food_lst.json": "a691af55259865584e3e98d9bfbb928b",
"assets/assets/webview/dist/favicon.ico": "1ba2ae710d927f13d483fd5d1e548c9b",
"assets/assets/webview/dist/index.html": "96b9ccd62ab5d141014571aa445f80dc",
"assets/assets/webview/dist/css/chunk-904b882c.f05ad106.css": "abda9c183bdbf4815392e7b8a3062074",
"assets/assets/webview/dist/css/app.d40fc157.css": "dfca11727ccf9e74f393b0c223db19ce",
"assets/assets/webview/dist/js/app.11b6c626.js": "01b0a5e55eea63b9b4e98ca38bd7c90f",
"assets/assets/webview/dist/js/chunk-904b882c.b0e0c1c6.js": "86df75305dbb2276457c5505635137d7",
"assets/assets/webview/dist/js/chunk-vendors.2b3a5ceb.js": "4fb640aaf9e4e32408249462e074c84a",
"assets/assets/webview/dist/musicXML/Beethoven_AnDieFerneGeliebte.xml": "d97ae8ba5e436a8a086f7018679efe55",
"assets/assets/webview/dist/musicXML/Mozart_DasVeilchen.xml": "c9e359acfeb1649ebaf5aa165675d441",
"assets/assets/webview/dist/musicXML/MuzioClementi_SonatinaOpus36No1_Part1.xml": "6ac1f99bcada97824b500a21bedbd393",
"assets/assets/nav_1.json": "687bae8b99bb2b6bd6651ffe2fe85b59",
"assets/assets/lang/zh.json": "3ac5398c0bdf97ff220487f62dc35124",
"assets/assets/lang/en.json": "97ac65cdcdf5c1f2ffab04e2c9658d01",
"assets/assets/audio/viper.mp3": "d1abeacf256aa0bd9a6b35b5358e1e08",
"assets/assets/audio/bgaudio.mp3": "da9d1a5be825bc2dc0150a8cfe4ecfeb",
"assets/assets/animations/lottie/29056-nepenthe-illustration.json": "ae15b1663eaa3983d989ba09d1765409",
"assets/assets/animations/lottie/18582-as-the-waters-rise.json": "78ddd877055380f26fbcca26f058c2d3",
"assets/assets/animations/lottie/cong_example.json": "eefbebb5dbc9fd21c81754e213b94380",
"assets/assets/animations/lottie/wave.json": "c58c23b7906e0330c24b80f2b7dbc1aa",
"assets/assets/animations/lottie/coin.json": "d0daeba9ccf6c48e2ce4efcb99484ff7",
"assets/assets/animations/loader.flr": "1e9d4dd205b155c5c5e6ced8f131ed4d",
"assets/canvaskit/canvaskit.js": "c65ed02d7d5d5b2ec7e9ace8cd890240",
"assets/canvaskit/KFOmCnqEu92Fr1Me5WZLCzYlKw.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"assets/canvaskit/localfonts.css": "da5dddba5b1084fbae778be3470d4e34",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
