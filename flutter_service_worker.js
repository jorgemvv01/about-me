'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"manifest.json": "4553255ab7091a525107eb82133e18b3",
"assets/AssetManifest.bin.json": "5b4df8b560699c28c79852309d74d076",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "736a791654db6d16490a8961f1ee8d02",
"assets/res/SourceCodePro-Bold.ttf": "2ffe6059c12752d6c7c20cb5e8f78bea",
"assets/res/postgresql.svg": "95ea0ccc7a6fceff8fee5331e2d51c96",
"assets/res/bg.jpg": "ea11079db5663759296299e4c9a711fd",
"assets/res/profile.jpeg": "385e98582ea1cced438a33cf572a727f",
"assets/res/git.svg": "fef8e95112e6ab6f2169430ee510db5e",
"assets/res/sqlite.svg": "9cd0afda09d84d1dff47a2e1a86522bd",
"assets/res/linux.svg": "17eb8f433d72c073ec12417f3ca5d157",
"assets/res/SourceCodePro-Regular.ttf": "d1f776b31a50ae68ace3819fdc58b065",
"assets/res/docker.svg": "1380befa46d4027b411bc47b093424a9",
"assets/res/mysql.svg": "e8eb3c35a4724c59933bb8b80b402586",
"assets/res/dart.svg": "11b770f163584b0e8cbba1f7bc626f55",
"assets/res/flutter.svg": "5ff1722cbed36fdb869cba0c95788d42",
"assets/res/medium.svg": "38004ce14569eb68e0e6b9c79541ffe2",
"assets/res/linkedin.svg": "48a406d5c052f8db83514425edc122b1",
"assets/res/go.svg": "00d05689ef69fd771e1b0bd9b88ec666",
"assets/res/github.svg": "4b8a4845e3c03b05cc92e2b3199889d5",
"assets/NOTICES": "11f674f9242c705bae514c88e8b529ed",
"assets/FontManifest.json": "e767eefe27b1112db3e1688400ea671f",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/AssetManifest.bin": "e0c87bf61d0868b282a9cf4cf3c7c089",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter_bootstrap.js": "22fa2132966f0a586a530d79edfb5826",
"version.json": "4362240ac7d64407c2135182461c0051",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "44126413738e311e0d00656d7bc34ee1",
".git/config": "10f550d571710728a861e634e94f65e2",
".git/index": "98caaa23b0a4d46bd0e1f5a5d3aeaf38",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/heads/main": "aba16e9e764ac3ebc0d29e4f34509603",
".git/refs/remotes/origin/main": "aba16e9e764ac3ebc0d29e4f34509603",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/d7/84c5fccb782a3cf008ac099a29538e72813ac5": "440478be3dcac69744fade38c45593ec",
".git/objects/90/42ffca68ee1909ef83180154ff1b8f94421435": "b14f63ff2e714cdea9f708682ed4b22f",
".git/objects/90/420c60c185b697593794cb4defc05d518a597a": "653868018749c6db1175c2564d36ce7b",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/bd/8d0b4ac1e176d52e3a738fa619b063040d7e27": "9fea1467930ec403b0be85644af024db",
".git/objects/79/eb3d04a0f275c2f3ac5b89c1f9a7e4331720ee": "baef71e92dfb5b21a8262bf4ea08f494",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/7170c1103aba5d26a3de34ed0735e5f32ea619": "2be4acd2d88fd06c7213ccefee1a2e85",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/93/f25f9235d5b3fdfc9b9c8256941a1ec22523af": "ca38e8fbe7b3e4c323006169ad0f858e",
".git/objects/0e/99ba29232fff84acf46f6b0978aeeece6e2682": "11e9792d426642f92b0872228766036e",
".git/objects/4f/b069e1287b2d75f2896e6efac839eae6dd095a": "dfae5e86f21803e1ca68d779ef2cef94",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/52/f6c75b23b24addf72242cc24d5e2247ca2b282": "578fea8d3f9ca7537869b96189d95af4",
".git/objects/ad/5bca9f21cab282f0bd76ecf901e265eee42f1a": "f87d4fe04a09219180c8f143bdda5448",
".git/objects/80/cd4fae79e52775935c7cd6b7ae86b46dc3cd93": "a7f0a3591025889bc22212a1a6a76410",
".git/objects/b8/866f659f1fdb2558b909330544953aabb943cb": "7b63a546f0b8f3156357d1b4fd6a0972",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f0/fbdb49791eade198119e46858e1e51bfb579bf": "5c81d3b0171ab46a30ebc267766158c7",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/3d/7ed55fb53a2777b11b8bbb898e1a9965e6b748": "7a7ee2d6f7dfaa948a2e8883186d816a",
".git/objects/bb/eaed2effdc1f6840aff73491a5faa2a585885b": "2b68ecb3c380c5b3b537166169fb7b36",
".git/objects/4e/ca0628c00b55c4301b28d7a14d9f0262ba3dc3": "d18f5365a2de6b135e81fa429c8cec1b",
".git/objects/b1/fa336cd52b3d88269920d325505a70c95225d9": "31e12607fe516d781d998236dc6d21ba",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/33/f9643b4f5200459d5d5794df3ee6f94fde388e": "fa75a03f212506803ad762cac3527417",
".git/objects/46/53b76c80383cbce2452ddbdab318ab3fdab83c": "dcbaad871d65cd2c4ff15449a97cad4f",
".git/objects/46/56cb79adde771d6eb3bf58647f4e82e89e083b": "7664fa436d829028b24b1b4a45803bef",
".git/objects/c5/d8105feaeb258f2738bf43c783d1efb0539a30": "7d733b4f28336920d14d595592e33393",
".git/objects/16/6cbc5a4162563a275c1f67d782b90c900fe82d": "c28ea61bd8ecddc75e54533570cbeb57",
".git/objects/4b/8b351d6ff282501595843a5651cbf74e278772": "30374790ae70c099a836d3ca218a25f8",
".git/objects/ea/aeb88c41d58f959e93bf09d28491d83a784bdb": "0a612bfb30283fb3aef50274c0729960",
".git/objects/be/3dfc84bbd056b985fb33890e064201cc9222d6": "7b6aa6f1977eadb766ea240d480d1bae",
".git/objects/06/abd587359a922fe3737dfa2e7446c14fdfda4c": "d9254333ac301f56c1d6714793be96ed",
".git/objects/cc/8e9787d7b3554a725eea4cee351a5d2cfef1c1": "51b1b2b6e86743f8864d775da9facdc6",
".git/objects/e1/ee221a13bd1d79941791ed6db305104688c37f": "ae0978952453c35f35495040f3137d68",
".git/objects/11/c468f2a9e43edb21a28bef3bd51215a165c51b": "728a01b4685dadfe9303700d4411587a",
".git/objects/41/4a56ae3d5d7776518ac78e11216dd2251b3fe2": "5ee741ec7990d1bc85baf57a2c21a3c7",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/0f/bf6fd1d7cd5a0309252e5264ed30cf594930f7": "516714991b33ebdb5cd36c11e8c95dfe",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/37/e16fe5c1f16d99cedc2046c7a8e53a80572506": "ee51b716f005cffed0507475a80457f9",
".git/objects/b7/9f02127f2451d3fc4cedd341938aca04198ded": "11a561ce203d1704f5f1ede9b064979f",
".git/objects/73/e72a4cd6b58fb9b33ba350b36ff4284f4398f8": "f7863b3f89c367d660bfa082511ee2c3",
".git/objects/8c/78fdb263118cb6b5fbf5556efabd9daefdae27": "44b9c21056f3ba627769a53f24b355f1",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/2c/fe8fe6a6f340aa378243f839f8dfd1eb2ce0f9": "b4a0bcb06342a98cdb8be3b928dcba24",
".git/objects/00/777cfc61a0adbb8f862391b66ec2f26064ee7e": "c7aca9cfdb2d6174a7bb27113223595b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/refs/heads/main": "ae381bca9511c4060367ecc40ab99da1",
".git/logs/refs/remotes/origin/main": "a48b537f0e37d421384efc88dd53ee9c",
".git/logs/HEAD": "ae381bca9511c4060367ecc40ab99da1",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"main.dart.js": "e929ed4fd05bef8ed5e0c16ef058fa6d",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"index.html": "f25a32bbce86515d6f0ab50c7e35f501",
"/": "f25a32bbce86515d6f0ab50c7e35f501",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
