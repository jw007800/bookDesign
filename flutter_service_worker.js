'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f9c8574b4e9486b1ca3b6149139e80d4",
"index.html": "88e380ac218a038796851581b39e9682",
"/": "96b9ccd62ab5d141014571aa445f80dc",
"main.dart.js": "ccc0653c909abdb338a76c660a0affe5",
"cors.json": "ca86c0ed703ce2135eaf4a37e5c22aef",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "df527f6dbde9c00ac5ad94c76e96f84e",
"assets/AssetManifest.json": "5c0698519131e903abbe65a0b10a4b3c",
"assets/NOTICES": "e2d3cd38ec1afe31ba9720a619575736",
"assets/FontManifest.json": "d24f47c29906d6e61a2365ebc00a6d24",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "b62641afc9ab487008e996a5c5865e56",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/flutter_signin_button/assets/logos/google_dark.png": "c32e2778b1d6552b7b4055e49407036f",
"assets/packages/flutter_signin_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_dark.png": "937022ea241c167c8ce463d2ef7ed105",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_light.png": "8f10eb93525f0c0259c5e97271796b3c",
"assets/packages/flutter_signin_button/assets/logos/2.0x/facebook_new.png": "83bf0093719b2db2b16e2839aee1069f",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_dark.png": "ac553491f0002941159b405c2d37e8c6",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_light.png": "fe46d37e7d6a16ecd15d5908a795b4ee",
"assets/packages/flutter_signin_button/assets/logos/3.0x/facebook_new.png": "12531aa3541312b7e5ddd41223fc60cb",
"assets/packages/flutter_signin_button/assets/logos/facebook_new.png": "e1dff5c319a9d7898aee817f624336e3",
"assets/packages/flutter_login/assets/images/ecorp.png": "24e80e9441acf073076893cebbe60ac0",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
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
"assets/assets/images/hotsportsnapshot/text.png": "60db6416d8431f3be6a2c01b1d5016ad",
"assets/assets/images/hotsportsnapshot/image.png": "1c6d908c65e3877d4fdad4a3dcc51162",
"assets/assets/images/hotsportsnapshot/button.png": "b7e057428186ea2d5ca134bdf13809fa",
"assets/assets/images/home_spaceBar_bg.jpg": "7d3edd40f5129b6d71769867b5511e48",
"assets/assets/images/home_menu_item_bg.png": "a5da51246a8d15ff4be25520084197bb",
"assets/assets/images/weilaiyilai.png": "eccfa251a274612036bbf1f3d12e660a",
"assets/assets/images/logo.png": "69532b40b7a6a73232f9bb8b1c71984c",
"assets/assets/images/ifredom.jpg": "d0d42e541ec1af2886de278b26b987ff",
"assets/assets/images/bg.png": "407cd2297936a15fab092cd160b7c679",
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
"assets/assets/lang/zh.json": "3ac5398c0bdf97ff220487f62dc35124",
"assets/assets/lang/en.json": "97ac65cdcdf5c1f2ffab04e2c9658d01",
"assets/assets/audio/viper.mp3": "d1abeacf256aa0bd9a6b35b5358e1e08",
"assets/assets/audio/bgaudio.mp3": "da9d1a5be825bc2dc0150a8cfe4ecfeb",
"assets/assets/animations/lottie/29056-nepenthe-illustration.json": "ae15b1663eaa3983d989ba09d1765409",
"assets/assets/animations/lottie/18582-as-the-waters-rise.json": "78ddd877055380f26fbcca26f058c2d3",
"assets/assets/animations/loader.flr": "1e9d4dd205b155c5c5e6ced8f131ed4d",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
