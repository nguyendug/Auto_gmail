const { default: axios } = require("axios");

const list = [
  /*{
    id: "google_search_2",
    name: "Google - Farming 1",
    tags: "google",
    description: "Random search - Random click - Surf",
    price: 0,
    protectedCode: false,
    code: '{"nodes":[{"id":"trigger","position":{"x":0,"y":0},"type":"BlockTrigger","key":"trigger","maxConnection":1,"data":{"disableBlock":false,"description":"","type":"manual","interval":60,"delay":5,"date":"","time":"00:00","url":"","shortcut":"","activeInInput":false,"isUrlRegex":false,"days":[],"contextMenuName":"","contextTypes":[],"parameters":[],"preferParamsInTab":false,"observeElement":{"selector":"","baseSelector":"","matchPattern":"","targetOptions":{"subtree":false,"childList":true,"attributes":false,"attributeFilter":[],"characterData":false},"baseElOptions":{"subtree":false,"childList":true,"attributes":false,"attributeFilter":[],"characterData":false}}}},{"id":"_9xhu71ci4umd8r0","position":{"x":160,"y":0},"type":"BlockBasic","key":"new-tab","maxConnection":1,"data":{"disableBlock":false,"description":"","url":"https://www.google.com/","userAgent":"","active":true,"inGroup":false,"waitTabLoaded":false,"updatePrevTab":true,"customUserAgent":false}},{"id":"_omfs5jhbgwqg8kv","position":{"x":320,"y":0},"type":"BlockBasic","key":"type-text","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"textarea[name=\\"q\\"]","markEl":false,"multiple":false,"contentFrom":"google","content":"","contentLoop":""}},{"id":"_jgvu9orjvamt1ts","position":{"x":480,"y":0},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[1,2]}},{"id":"_rkoenkctlvokdzu","position":{"x":640,"y":0},"type":"BlockBasic","key":"press-key","maxConnection":1,"data":{"disableBlock":false,"keys":"","selector":"","description":"","keysToPress":["Enter"],"action":"press-key"}},{"id":"_zg9n3muf5omlbtd","position":{"x":0,"y":80},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[1,3]}},{"id":"_lldnfm59kz04ojl","position":{"x":160,"y":80},"type":"BlockBasic","key":"swipe-down","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"html","markEl":false,"multiple":false,"scrollY":200,"scrollX":0,"incX":false,"incY":false,"smooth":false,"scrollIntoView":false,"numScroll":2,"breakTime":2,"random":true,"scrollToY":600,"scrollToX":0,"numScrollTo":4}},{"id":"_nv7dfhh7syw3wih","position":{"x":320,"y":80},"type":"BlockBasic","key":"swipe-up","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"html","markEl":false,"multiple":false,"scrollY":300,"scrollX":0,"incX":false,"incY":false,"smooth":false,"scrollIntoView":false,"numScroll":1,"breakTime":2,"random":true,"scrollToY":600,"scrollToX":0,"numScrollTo":2}},{"id":"_ksw3d6xlmo16l5y","position":{"x":480,"y":80},"type":"BlockBasic","key":"event-click","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"#rso a","markEl":false,"multiple":false,"rate":-1,"random":true,"waitForNavigation":true}},{"id":"_1lir1klrblxwhkx","position":{"x":640,"y":80},"type":"BlockBasic","key":"event-click","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"#rso a","markEl":false,"multiple":false,"rate":-1,"random":true,"waitForNavigation":true}},{"id":"_2e4s128mh19qmei","position":{"x":0,"y":160},"type":"BlockBasic","key":"swipe-down","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"html","markEl":false,"multiple":false,"scrollY":200,"scrollX":0,"incX":false,"incY":false,"smooth":false,"scrollIntoView":false,"numScroll":3,"breakTime":10,"random":true,"scrollToY":500,"scrollToX":0,"numScrollTo":5}},{"id":"_yme6nydmh2186xo","position":{"x":160,"y":160},"type":"BlockBasic","key":"swipe-up","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"html","markEl":false,"multiple":false,"scrollY":200,"scrollX":0,"incX":false,"incY":false,"smooth":false,"scrollIntoView":false,"numScroll":1,"breakTime":5,"random":true,"scrollToY":500,"scrollToX":0,"numScrollTo":3}},{"id":"_s3s7vtk1e6rv9ya","position":{"x":320,"y":160},"type":"BlockBasic","key":"go-back","maxConnection":1,"data":{"disableBlock":false}},{"id":"_mfufn9i21j34edx","position":{"x":480,"y":160},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[2,5]}},{"id":"_8dywaslihg2vmlr","position":{"x":640,"y":160},"type":"BlockBasic","key":"event-click","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"#rso a","markEl":false,"multiple":false,"rate":-1,"random":true,"waitForNavigation":true}},{"id":"_m2mlug7td4m0c0p","position":{"x":0,"y":240},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[2,5]}},{"id":"_vim5f00yeebpbfv","position":{"x":160,"y":240},"type":"BlockBasic","key":"swipe-down","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"html","markEl":false,"multiple":false,"scrollY":450,"scrollX":0,"incX":false,"incY":false,"smooth":false,"scrollIntoView":false,"numScroll":4,"breakTime":15,"random":true,"scrollToY":1000,"scrollToX":0,"numScrollTo":6}},{"id":"_ws0nnrsb27sp8cl","position":{"x":320,"y":240},"type":"BlockBasic","key":"go-back","maxConnection":1,"data":{"disableBlock":false}},{"id":"_kcrav9aijx0it7m","position":{"x":480,"y":240},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[2,3]}},{"id":"_97bzxi5l9v914d7","position":{"x":640,"y":240},"type":"BlockBasic","key":"event-click","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"#rso a","markEl":false,"multiple":false,"rate":-1,"random":true,"waitForNavigation":true}},{"id":"_1pby1qinxepnt7s","position":{"x":0,"y":320},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[5,8]}},{"id":"_tjqmr8cbqa7kb5f","position":{"x":160,"y":320},"type":"BlockBasic","key":"swipe-down","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"html","markEl":false,"multiple":false,"scrollY":160,"scrollX":0,"incX":false,"incY":false,"smooth":false,"scrollIntoView":false,"numScroll":6,"breakTime":15,"random":true,"scrollToY":600,"scrollToX":0,"numScrollTo":5}},{"id":"_rugwawwiyq83ipo","position":{"x":320,"y":320},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[6]}}],"edges":[{"id":"_5e9sdevecqdybun","source":"trigger","target":"_9xhu71ci4umd8r0","sourceHandle":null,"targetHandle":null},{"id":"_f92au2wayyyvqz7","source":"_omfs5jhbgwqg8kv","target":"_jgvu9orjvamt1ts","sourceHandle":null,"targetHandle":null},{"id":"_ifue5qx4ezs1f52","source":"_jgvu9orjvamt1ts","target":"_rkoenkctlvokdzu","sourceHandle":null,"targetHandle":null},{"id":"_za7pfrkjwm3s1tp","source":"_rkoenkctlvokdzu","target":"_zg9n3muf5omlbtd","sourceHandle":null,"targetHandle":null},{"id":"_0rpef4ajla61w7x","source":"_zg9n3muf5omlbtd","target":"_lldnfm59kz04ojl","sourceHandle":null,"targetHandle":null},{"id":"_axl64ackm0ma5qd","source":"_lldnfm59kz04ojl","target":"_nv7dfhh7syw3wih","sourceHandle":null,"targetHandle":null},{"id":"_cbwp6d5hjgricct","source":"_nv7dfhh7syw3wih","target":"_ksw3d6xlmo16l5y","sourceHandle":null,"targetHandle":null},{"id":"_pizzl46vkotykv2","source":"_2e4s128mh19qmei","target":"_yme6nydmh2186xo","sourceHandle":null,"targetHandle":null},{"id":"_z0pcsv4ftu98v6u","source":"_yme6nydmh2186xo","target":"_s3s7vtk1e6rv9ya","sourceHandle":null,"targetHandle":null},{"id":"_6hjzq41qtce2yw4","source":"_s3s7vtk1e6rv9ya","target":"_mfufn9i21j34edx","sourceHandle":null,"targetHandle":null},{"id":"_pqq60qrwxhpvp9k","source":"_mfufn9i21j34edx","target":"_8dywaslihg2vmlr","sourceHandle":null,"targetHandle":null},{"id":"_aiepzmfhbe1agsh","source":"_8dywaslihg2vmlr","target":"_m2mlug7td4m0c0p","sourceHandle":null,"targetHandle":null},{"id":"_bp7jvaookx9bwvv","source":"_m2mlug7td4m0c0p","target":"_vim5f00yeebpbfv","sourceHandle":null,"targetHandle":null},{"id":"_advvsydgne0umra","source":"_vim5f00yeebpbfv","target":"_ws0nnrsb27sp8cl","sourceHandle":null,"targetHandle":null},{"id":"_odbf8xs50wvvedu","source":"_ws0nnrsb27sp8cl","target":"_kcrav9aijx0it7m","sourceHandle":null,"targetHandle":null},{"id":"_pm5lhffmd9g8gt1","source":"_kcrav9aijx0it7m","target":"_97bzxi5l9v914d7","sourceHandle":null,"targetHandle":null},{"id":"_g0s2gcoqjswwsc9","source":"_97bzxi5l9v914d7","target":"_1pby1qinxepnt7s","sourceHandle":null,"targetHandle":null},{"id":"_2h919lp17p0zk5e","source":"_1pby1qinxepnt7s","target":"_tjqmr8cbqa7kb5f","sourceHandle":null,"targetHandle":null},{"id":"_qj4a7a6qcgyw563","source":"_9xhu71ci4umd8r0","target":"_omfs5jhbgwqg8kv","sourceHandle":null,"targetHandle":null},{"id":"_je1lwsgpinb64kw","source":"_tjqmr8cbqa7kb5f","target":"_rugwawwiyq83ipo","sourceHandle":null,"targetHandle":null},{"id":"_le2r8qs14j3c02u","source":"_ksw3d6xlmo16l5y","target":"_1lir1klrblxwhkx","sourceHandle":null,"targetHandle":null},{"id":"_fiw3jyc5wjiiks1","source":"_1lir1klrblxwhkx","target":"_2e4s128mh19qmei","sourceHandle":null,"targetHandle":null}]}',
  },
  {
    id: "ebay_search_3",
    name: "Ebay - Random Search 1",
    tags: "ebay",
    description: "Search after random click view  product",
    price: 0,
    protectedCode: false,
    code: '{"nodes":[{"id":"trigger","position":{"x":0,"y":0},"type":"BlockTrigger","key":"trigger","maxConnection":1,"data":{"disableBlock":false,"description":"","type":"manual","interval":60,"delay":5,"date":"","time":"00:00","url":"","shortcut":"","activeInInput":false,"isUrlRegex":false,"days":[],"contextMenuName":"","contextTypes":[],"parameters":[],"preferParamsInTab":false,"observeElement":{"selector":"","baseSelector":"","matchPattern":"","targetOptions":{"subtree":false,"childList":true,"attributes":false,"attributeFilter":[],"characterData":false},"baseElOptions":{"subtree":false,"childList":true,"attributes":false,"attributeFilter":[],"characterData":false}}}},{"id":"_6mq19zap54z99st","position":{"x":160,"y":0},"type":"BlockBasic","key":"new-tab","maxConnection":1,"data":{"disableBlock":false,"description":"","url":"https://www.ebay.com/","userAgent":"","active":true,"inGroup":false,"waitTabLoaded":false,"updatePrevTab":false,"customUserAgent":false}},{"id":"_2a6meztns8seruh","position":{"x":320,"y":0},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[2,3]}},{"id":"_qvv8zkxo34pmcu1","position":{"x":480,"y":0},"type":"BlockBasic","key":"event-click","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"#gh-ac","markEl":false,"multiple":false,"rate":-1,"random":false,"waitForNavigation":false}},{"id":"_4aniogom6od0rez","position":{"x":640,"y":0},"type":"BlockBasic","key":"type-text","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"#gh-ac","markEl":false,"multiple":false,"contentFrom":"ebay","content":"","contentLoop":""}},{"id":"_bu76061lx5szaak","position":{"x":0,"y":80},"type":"BlockBasic","key":"press-key","maxConnection":1,"data":{"disableBlock":false,"keys":"","selector":"","description":"","keysToPress":["Enter"],"action":"press-key"}},{"id":"_1rf1gsdegsfhsle","position":{"x":160,"y":80},"type":"BlockBasic","key":"swipe-down","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"html","markEl":false,"multiple":false,"scrollY":500,"scrollX":0,"incX":false,"incY":false,"smooth":false,"scrollIntoView":false,"numScroll":1,"breakTime":1,"random":false,"scrollToY":1000,"scrollToX":0,"numScrollTo":5}},{"id":"_ainlgr9dqyy83al","position":{"x":321,"y":80},"type":"BlockBasic","key":"event-click","maxConnection":1,"data":{"disableBlock":false,"description":"Click product","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"#srp-river-results > ul > li > div > div.s-item__info > a","markEl":false,"multiple":false,"rate":-1,"random":true,"waitForNavigation":true}},{"id":"_ctz0bxrkxzfx2dm","position":{"x":480,"y":80},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[2,3]}},{"id":"_jg7qljce7pw337f","position":{"x":640,"y":80},"type":"BlockBasic","key":"swipe-down","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"html","markEl":false,"multiple":false,"scrollY":550,"scrollX":0,"incX":false,"incY":false,"smooth":false,"scrollIntoView":false,"numScroll":6,"breakTime":2,"random":false,"scrollToY":1000,"scrollToX":0,"numScrollTo":5}},{"id":"_n0uqqph0cn15m5q","position":{"x":0,"y":160},"type":"BlockBasic","key":"event-click","maxConnection":1,"data":{"disableBlock":false,"description":"Click item other","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"a.merch-item-tile","markEl":false,"multiple":false,"rate":-1,"random":true,"waitForNavigation":true}},{"id":"_e3kxcka80rcigd5","position":{"x":157,"y":159},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[1,2]}},{"id":"_y76ks0p0r27k5gp","position":{"x":320,"y":160},"type":"BlockBasic","key":"swipe-down","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"html","markEl":false,"multiple":false,"scrollY":500,"scrollX":0,"incX":false,"incY":false,"smooth":false,"scrollIntoView":false,"numScroll":5,"breakTime":2,"random":false,"scrollToY":1000,"scrollToX":0,"numScrollTo":5}},{"id":"_geyuyl7nd2x3a5x","position":{"x":480,"y":160},"type":"BlockBasic","key":"event-click","maxConnection":1,"data":{"disableBlock":false,"description":"Click tab about item","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"div[role=\\"tablist\\"] > div[role=\\"tab\\"]:not([aria-selected])","markEl":false,"multiple":false,"rate":-1,"random":true,"waitForNavigation":false}},{"id":"_ho66pmhez451sde","position":{"x":640,"y":160},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[2,5]}},{"id":"_25ntudmrfy0cf5b","position":{"x":0,"y":240},"type":"BlockBasic","key":"swipe-down","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"html","markEl":false,"multiple":false,"scrollY":500,"scrollX":0,"incX":false,"incY":false,"smooth":false,"scrollIntoView":false,"numScroll":6,"breakTime":4,"random":false,"scrollToY":1000,"scrollToX":0,"numScrollTo":5}},{"id":"_3dmkyf9tu6l7kk9","position":{"x":160,"y":240},"type":"BlockBasic","key":"go-back","maxConnection":1,"data":{"disableBlock":false}},{"id":"_rongahwdvqqkja6","position":{"x":320,"y":240},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[2,3]}},{"id":"_8e49rjbomz6asfd","position":{"x":480,"y":240},"type":"BlockBasic","key":"event-click","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"#gh-la","markEl":false,"multiple":false,"rate":-1,"random":false,"waitForNavigation":true}},{"id":"_edzpacuh1mq06ed","position":{"x":640,"y":240},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[1,3]}},{"id":"_8ihf0dlbemuba1t","position":{"x":0,"y":320},"type":"BlockBasic","key":"swipe-down","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"html","markEl":false,"multiple":false,"scrollY":400,"scrollX":0,"incX":false,"incY":false,"smooth":false,"scrollIntoView":false,"numScroll":2,"breakTime":2,"random":false,"scrollToY":1000,"scrollToX":0,"numScrollTo":5}},{"id":"_sovi1i20smdcgon","position":{"x":160,"y":320},"type":"BlockBasic","key":"close-tab","maxConnection":1,"data":{"disableBlock":false,"url":"","description":"","activeTab":true,"closeType":"tab","allWindows":true}}],"edges":[{"id":"_rib1krfk25qrk9k","source":"trigger","target":"_6mq19zap54z99st","sourceHandle":null,"targetHandle":null},{"id":"_2o26yzim87sl024","source":"_6mq19zap54z99st","target":"_2a6meztns8seruh","sourceHandle":null,"targetHandle":null},{"id":"_k4xrayxd3uk9zs8","source":"_1rf1gsdegsfhsle","target":"_ainlgr9dqyy83al","sourceHandle":null,"targetHandle":null},{"id":"_v8il810uzyjl4dj","source":"_ainlgr9dqyy83al","target":"_ctz0bxrkxzfx2dm","sourceHandle":null,"targetHandle":null},{"id":"_yi5978umlwv4cdz","source":"_ctz0bxrkxzfx2dm","target":"_jg7qljce7pw337f","sourceHandle":null,"targetHandle":null},{"id":"_ajnov6v7bjmakoq","source":"_e3kxcka80rcigd5","target":"_y76ks0p0r27k5gp","sourceHandle":null,"targetHandle":null},{"id":"_a152nqfqgj8c440","source":"_y76ks0p0r27k5gp","target":"_geyuyl7nd2x3a5x","sourceHandle":null,"targetHandle":null},{"id":"_t2lryr5d04xhgn9","source":"_geyuyl7nd2x3a5x","target":"_ho66pmhez451sde","sourceHandle":null,"targetHandle":null},{"id":"_givww9k79eeu1kr","source":"_8e49rjbomz6asfd","target":"_edzpacuh1mq06ed","sourceHandle":null,"targetHandle":null},{"id":"_54tme5q6uzplh62","source":"_ho66pmhez451sde","target":"_25ntudmrfy0cf5b","sourceHandle":null,"targetHandle":null},{"id":"_ny7gpptt3nijl62","source":"_jg7qljce7pw337f","target":"_n0uqqph0cn15m5q","sourceHandle":null,"targetHandle":null},{"id":"_c570yks2vhazjyi","source":"_n0uqqph0cn15m5q","target":"_e3kxcka80rcigd5","sourceHandle":null,"targetHandle":null},{"id":"_et3rcsyo28yoxl2","source":"_edzpacuh1mq06ed","target":"_8ihf0dlbemuba1t","sourceHandle":null,"targetHandle":null},{"id":"_3kgmnhldfvzziq6","source":"_3dmkyf9tu6l7kk9","target":"_rongahwdvqqkja6","sourceHandle":null,"targetHandle":null},{"id":"_k33n9bw397xryyi","source":"_25ntudmrfy0cf5b","target":"_3dmkyf9tu6l7kk9","sourceHandle":null,"targetHandle":null},{"id":"_4enw76p9sr1sxui","source":"_rongahwdvqqkja6","target":"_8e49rjbomz6asfd","sourceHandle":null,"targetHandle":null},{"id":"_8hylyn9nw4phme6","source":"_4aniogom6od0rez","target":"_bu76061lx5szaak","sourceHandle":null,"targetHandle":null},{"id":"_sd5h3iaz0tj94uk","source":"_qvv8zkxo34pmcu1","target":"_4aniogom6od0rez","sourceHandle":null,"targetHandle":null},{"id":"_veoe9m70dw5g63m","source":"_2a6meztns8seruh","target":"_qvv8zkxo34pmcu1","sourceHandle":null,"targetHandle":null},{"id":"_kwmd0gxn0jb0qxq","source":"_bu76061lx5szaak","target":"_1rf1gsdegsfhsle","sourceHandle":null,"targetHandle":null},{"id":"_hybympwulkxx9kv","source":"_8ihf0dlbemuba1t","target":"_sovi1i20smdcgon","sourceHandle":null,"targetHandle":null}]}',
  },
  {
    id: "ebay_search_1",
    name: "Ebay - Random search 2",
    tags: "ebay",
    description: "Random search - Random view product - Surf",
    price: 0,
    protectedCode: false,
    code: '{"nodes":[{"id":"trigger","position":{"x":0,"y":0},"type":"BlockTrigger","key":"trigger","maxConnection":1,"data":{"disableBlock":false,"description":"","type":"manual","interval":60,"delay":5,"date":"","time":"00:00","url":"","shortcut":"","activeInInput":false,"isUrlRegex":false,"days":[],"contextMenuName":"","contextTypes":[],"parameters":[],"preferParamsInTab":false,"observeElement":{"selector":"","baseSelector":"","matchPattern":"","targetOptions":{"subtree":false,"childList":true,"attributes":false,"attributeFilter":[],"characterData":false},"baseElOptions":{"subtree":false,"childList":true,"attributes":false,"attributeFilter":[],"characterData":false}}}},{"id":"_28p3ynx2l15y7vb","position":{"x":160,"y":0},"type":"BlockBasic","key":"new-tab","maxConnection":1,"data":{"disableBlock":false,"description":"","url":"https://www.ebay.com/","userAgent":"","active":true,"inGroup":false,"waitTabLoaded":false,"updatePrevTab":false,"customUserAgent":false}},{"id":"_t3xqu154u1bnnag","position":{"x":320,"y":0},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[1,3]}},{"id":"_7tjcs84kl29kl5y","position":{"x":480,"y":0},"type":"BlockBasic","key":"event-click","maxConnection":1,"data":{"disableBlock":false,"description":"Click search","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"input[id=\\"gh-ac\\"]","markEl":false,"multiple":false,"rate":-1,"random":false,"waitForNavigation":false}},{"id":"_ja6b0bey97gxicg","position":{"x":640,"y":0},"type":"BlockBasic","key":"type-text","maxConnection":1,"data":{"disableBlock":false,"description":"Random search","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"input[id=\\"gh-ac\\"]","markEl":false,"multiple":false,"contentFrom":"ebay","content":"","contentLoop":""}},{"id":"_dv876x8klwrr0u8","position":{"x":0,"y":80},"type":"BlockBasic","key":"press-key","maxConnection":1,"data":{"disableBlock":false,"keys":"","selector":"","description":"","keysToPress":["Enter"],"action":"press-key"}},{"id":"_szmu3k4v8e45ybv","position":{"x":160,"y":80},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[1,3]}},{"id":"_baryd2xkcze3o3g","position":{"x":320,"y":80},"type":"BlockBasic","key":"event-click","maxConnection":1,"data":{"disableBlock":false,"description":"View random products","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"#mainContent > div > div > div > ul > li a[class=\\"s-item__link\\"]","markEl":false,"multiple":false,"rate":-1,"random":true,"waitForNavigation":true}},{"id":"_aavf5417gssvpbh","position":{"x":480,"y":80},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[1,3]}},{"id":"_iv6osbsqcyln4w1","position":{"x":640,"y":80},"type":"BlockBasic","key":"swipe-down","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"html","markEl":false,"multiple":false,"scrollY":200,"scrollX":0,"incX":false,"incY":false,"smooth":false,"scrollIntoView":false,"numScroll":1,"breakTime":1,"random":true,"scrollToY":800,"scrollToX":0,"numScrollTo":3}},{"id":"_h6sbr3y1hgva5ov","position":{"x":0,"y":160},"type":"BlockBasic","key":"go-back","maxConnection":1,"data":{"disableBlock":false}},{"id":"_pexpd39uqms80t3","position":{"x":160,"y":160},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[2,3]}},{"id":"_0ao9uqobbnyhy9i","position":{"x":320,"y":160},"type":"BlockBasic","key":"event-click","maxConnection":1,"data":{"disableBlock":false,"description":"Random click to change the page","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"ol[class=\\"pagination__items\\"] > li > a[class=\\"pagination__item\\"]","markEl":false,"multiple":false,"rate":-1,"random":true,"waitForNavigation":true}},{"id":"_tae297tx820htlv","position":{"x":480,"y":160},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[1,2]}},{"id":"_hf3ijc36clnrtzj","position":{"x":640,"y":160},"type":"BlockBasic","key":"swipe-down","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"html","markEl":false,"multiple":false,"scrollY":200,"scrollX":0,"incX":false,"incY":false,"smooth":false,"scrollIntoView":false,"numScroll":1,"breakTime":1,"random":true,"scrollToY":600,"scrollToX":0,"numScrollTo":3}},{"id":"_66tnj6mm7rap00y","position":{"x":0,"y":240},"type":"BlockBasic","key":"swipe-up","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"html","markEl":false,"multiple":false,"scrollY":450,"scrollX":0,"incX":false,"incY":false,"smooth":false,"scrollIntoView":false,"numScroll":2,"breakTime":1,"random":false,"scrollToY":1000,"scrollToX":0,"numScrollTo":5}},{"id":"_5w453j3s7pkmzw1","position":{"x":160,"y":240},"type":"BlockBasic","key":"go-back","maxConnection":1,"data":{"disableBlock":false}},{"id":"_cj72dratx5twrei","position":{"x":320,"y":240},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[2,3]}},{"id":"_g5clelobb8fa4zh","position":{"x":480,"y":240},"type":"BlockBasic","key":"event-click","maxConnection":1,"data":{"disableBlock":false,"description":"View random products","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"div[id=\\"mainContent\\"]>div>div>div>ul>li a[class=\\"s-item__link\\"]","markEl":false,"multiple":false,"rate":-1,"random":true,"waitForNavigation":true}},{"id":"_n0rdun6f1xy965u","position":{"x":640,"y":240},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[1,2]}},{"id":"_hco4ncpcnnthsxq","position":{"x":0,"y":320},"type":"BlockBasic","key":"swipe-down","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"html","markEl":false,"multiple":false,"scrollY":600,"scrollX":0,"incX":false,"incY":false,"smooth":false,"scrollIntoView":false,"numScroll":3,"breakTime":1,"random":false,"scrollToY":1000,"scrollToX":0,"numScrollTo":5}},{"id":"_j5nhvjxdprt60v0","position":{"x":160,"y":320},"type":"BlockBasic","key":"swipe-up","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"html","markEl":false,"multiple":false,"scrollY":350,"scrollX":0,"incX":false,"incY":false,"smooth":false,"scrollIntoView":false,"numScroll":1,"breakTime":1,"random":false,"scrollToY":1000,"scrollToX":0,"numScrollTo":5}},{"id":"_dn0d6z0an47rxkd","position":{"x":320,"y":320},"type":"BlockBasic","key":"event-click","maxConnection":1,"data":{"disableBlock":false,"description":"Click See all reviews","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"div[role=\\"tabpanel\\"]:not([hidden]) a[class=\\"fdbk-detail-list__tabbed-btn fake-btn fake-btn--large fake-btn--secondary\\"]","markEl":false,"multiple":false,"rate":-1,"random":false,"waitForNavigation":false}},{"id":"_d32zzftbqlypqxi","position":{"x":480,"y":320},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[1,2]}},{"id":"_9ugu52jkk1s41o0","position":{"x":640,"y":320},"type":"BlockBasic","key":"swipe-down","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"html","markEl":false,"multiple":false,"scrollY":200,"scrollX":0,"incX":false,"incY":false,"smooth":false,"scrollIntoView":false,"numScroll":2,"breakTime":1,"random":true,"scrollToY":600,"scrollToX":0,"numScrollTo":5}},{"id":"_fm8uqm3y263ioyo","position":{"x":0,"y":400},"type":"BlockBasic","key":"go-back","maxConnection":1,"data":{"disableBlock":false}},{"id":"_jb8kbmx8gmaacz9","position":{"x":160,"y":400},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[2,5]}},{"id":"_kgoigz8arnxybim","position":{"x":320,"y":400},"type":"BlockBasic","key":"event-click","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"div[role=\\"tabpanel\\"]:not([hidden]) a[class=\\"fdbk-detail-list__tabbed-btn fake-btn fake-btn--large fake-btn--secondary\\"]","markEl":false,"multiple":false,"rate":-1,"random":true,"waitForNavigation":false}},{"id":"_5mc8xkww03rqxft","position":{"x":480,"y":400},"type":"BlockBasic","key":"swipe-down","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"html","markEl":false,"multiple":false,"scrollY":200,"scrollX":0,"incX":false,"incY":false,"smooth":false,"scrollIntoView":false,"numScroll":3,"breakTime":1,"random":true,"scrollToY":600,"scrollToX":0,"numScrollTo":6}},{"id":"_z6l2g3c7dbh6ufq","position":{"x":640,"y":400},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[2,5]}},{"id":"_lx28e3g0u52pslz","position":{"x":0,"y":480},"type":"BlockBasic","key":"go-back","maxConnection":1,"data":{"disableBlock":false}},{"id":"_uznyxstcwn2qh1r","position":{"x":160,"y":480},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[1,3]}}],"edges":[{"id":"_97abqa8pzlmzuyg","source":"trigger","target":"_28p3ynx2l15y7vb","sourceHandle":null,"targetHandle":null},{"id":"_bku59ifyha5gyib","source":"_28p3ynx2l15y7vb","target":"_t3xqu154u1bnnag","sourceHandle":null,"targetHandle":null},{"id":"_dm7ak3dof3ab95y","source":"_t3xqu154u1bnnag","target":"_7tjcs84kl29kl5y","sourceHandle":null,"targetHandle":null},{"id":"_j1p3q8ja1tpy6gw","source":"_ja6b0bey97gxicg","target":"_dv876x8klwrr0u8","sourceHandle":null,"targetHandle":null},{"id":"_0i20r7ij0fk1e2e","source":"_dv876x8klwrr0u8","target":"_szmu3k4v8e45ybv","sourceHandle":null,"targetHandle":null},{"id":"_s1lysigqap2zyey","source":"_0ao9uqobbnyhy9i","target":"_tae297tx820htlv","sourceHandle":null,"targetHandle":null},{"id":"_k9kh3097frlyqdr","source":"_tae297tx820htlv","target":"_hf3ijc36clnrtzj","sourceHandle":null,"targetHandle":null},{"id":"_bdzoxmzjp3b2dpl","source":"_hf3ijc36clnrtzj","target":"_66tnj6mm7rap00y","sourceHandle":null,"targetHandle":null},{"id":"_tbda59zf5qioelf","source":"_66tnj6mm7rap00y","target":"_5w453j3s7pkmzw1","sourceHandle":null,"targetHandle":null},{"id":"_l032lzkpryfr6n3","source":"_5w453j3s7pkmzw1","target":"_cj72dratx5twrei","sourceHandle":null,"targetHandle":null},{"id":"_g49aaqcx82yhje6","source":"_cj72dratx5twrei","target":"_g5clelobb8fa4zh","sourceHandle":null,"targetHandle":null},{"id":"_rqauhj3y0uiofp9","source":"_g5clelobb8fa4zh","target":"_n0rdun6f1xy965u","sourceHandle":null,"targetHandle":null},{"id":"_xubapq4rmfjx32x","source":"_n0rdun6f1xy965u","target":"_hco4ncpcnnthsxq","sourceHandle":null,"targetHandle":null},{"id":"_ogjsiad2uas6o8w","source":"_hco4ncpcnnthsxq","target":"_j5nhvjxdprt60v0","sourceHandle":null,"targetHandle":null},{"id":"_g1bywslq7k661ep","source":"_dn0d6z0an47rxkd","target":"_d32zzftbqlypqxi","sourceHandle":null,"targetHandle":null},{"id":"_1k0tw1v0udpl7ih","source":"_d32zzftbqlypqxi","target":"_9ugu52jkk1s41o0","sourceHandle":null,"targetHandle":null},{"id":"_c4th0ztjuczwr61","source":"_fm8uqm3y263ioyo","target":"_jb8kbmx8gmaacz9","sourceHandle":null,"targetHandle":null},{"id":"_9b8w2f3dxfowqze","source":"_jb8kbmx8gmaacz9","target":"_kgoigz8arnxybim","sourceHandle":null,"targetHandle":null},{"id":"_m00befh8m4bieg5","source":"_kgoigz8arnxybim","target":"_5mc8xkww03rqxft","sourceHandle":null,"targetHandle":null},{"id":"_omkjrgas1es7l7j","source":"_5mc8xkww03rqxft","target":"_z6l2g3c7dbh6ufq","sourceHandle":null,"targetHandle":null},{"id":"_dsxjk93tg37stjw","source":"_z6l2g3c7dbh6ufq","target":"_lx28e3g0u52pslz","sourceHandle":null,"targetHandle":null},{"id":"_e24zi2edcg6odfl","source":"_j5nhvjxdprt60v0","target":"_dn0d6z0an47rxkd","sourceHandle":null,"targetHandle":null},{"id":"_pdetydbvzkujpqx","source":"_9ugu52jkk1s41o0","target":"_fm8uqm3y263ioyo","sourceHandle":null,"targetHandle":null},{"id":"_jrbgt28bczo9uhk","source":"_lx28e3g0u52pslz","target":"_uznyxstcwn2qh1r","sourceHandle":null,"targetHandle":null},{"id":"_eni54r4qogy9v9q","source":"_7tjcs84kl29kl5y","target":"_ja6b0bey97gxicg","sourceHandle":null,"targetHandle":null},{"id":"_7c2z1uiqmz4xrbq","source":"_baryd2xkcze3o3g","target":"_aavf5417gssvpbh","sourceHandle":null,"targetHandle":null},{"id":"_5tqu1f7npc2zp08","source":"_aavf5417gssvpbh","target":"_iv6osbsqcyln4w1","sourceHandle":null,"targetHandle":null},{"id":"_kgxbmkumaktwbc0","source":"_iv6osbsqcyln4w1","target":"_h6sbr3y1hgva5ov","sourceHandle":null,"targetHandle":null},{"id":"_ko9l2yqb8fs3h0l","source":"_szmu3k4v8e45ybv","target":"_baryd2xkcze3o3g","sourceHandle":null,"targetHandle":null},{"id":"_f4a8m49278yi9sq","source":"_h6sbr3y1hgva5ov","target":"_pexpd39uqms80t3","sourceHandle":null,"targetHandle":null},{"id":"_9bknw1zgrdnp7xe","source":"_pexpd39uqms80t3","target":"_0ao9uqobbnyhy9i","sourceHandle":null,"targetHandle":null}]}',
  },
  {
    id: "ebay_search_2",
    name: "Ebay - Random search 3",
    tags: "ebay",
    description: "Click menu - Search - Random click and See product details",
    price: 0,
    protectedCode: false,
    code: '{"nodes":[{"id":"trigger","position":{"x":0,"y":0},"type":"BlockTrigger","key":"trigger","maxConnection":1,"data":{"disableBlock":false,"description":"","type":"manual","interval":60,"delay":5,"date":"","time":"00:00","url":"","shortcut":"","activeInInput":false,"isUrlRegex":false,"days":[],"contextMenuName":"","contextTypes":[],"parameters":[],"preferParamsInTab":false,"observeElement":{"selector":"","baseSelector":"","matchPattern":"","targetOptions":{"subtree":false,"childList":true,"attributes":false,"attributeFilter":[],"characterData":false},"baseElOptions":{"subtree":false,"childList":true,"attributes":false,"attributeFilter":[],"characterData":false}}}},{"id":"_w2taxlhau11bju9","position":{"x":160,"y":0},"type":"BlockBasic","key":"new-tab","maxConnection":1,"data":{"disableBlock":false,"description":"","url":"https://www.ebay.com/","userAgent":"","active":true,"inGroup":false,"waitTabLoaded":false,"updatePrevTab":false,"customUserAgent":false}},{"id":"_09mrowlayt2bvbv","position":{"x":320,"y":0},"type":"BlockBasic","key":"event-click","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"li.hl-cat-nav__js-tab[data-currenttabindex=\\"1\\"] > a","markEl":false,"multiple":false,"rate":-1,"random":false,"waitForNavigation":true}},{"id":"_7pckfudwxlc28cm","position":{"x":480,"y":0},"type":"BlockBasic","key":"swipe-down","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"html","markEl":false,"multiple":false,"scrollY":300,"scrollX":0,"incX":false,"incY":false,"smooth":false,"scrollIntoView":false,"numScroll":1,"breakTime":1,"random":true,"scrollToY":800,"scrollToX":0,"numScrollTo":2}},{"id":"_ysil3lpf7pdo2oh","position":{"x":640,"y":0},"type":"BlockBasic","key":"type-text","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"input#gh-ac","markEl":false,"multiple":false,"contentFrom":"ebay","content":"","contentLoop":""}},{"id":"_9cjxg4161mnleos","position":{"x":0,"y":80},"type":"BlockBasic","key":"press-key","maxConnection":1,"data":{"disableBlock":false,"keys":"","selector":"","description":"","keysToPress":["Enter"],"action":"press-key"}},{"id":"_6w1eeqoav63zcd8","position":{"x":160,"y":80},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[1,2]}},{"id":"_fervd4nkf2a8bh6","position":{"x":320,"y":80},"type":"BlockBasic","key":"swipe-down","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"html","markEl":false,"multiple":false,"scrollY":200,"scrollX":0,"incX":false,"incY":false,"smooth":false,"scrollIntoView":false,"numScroll":2,"breakTime":1,"random":true,"scrollToY":600,"scrollToX":0,"numScrollTo":3}},{"id":"_4uwktqic2ylu6pj","position":{"x":480,"y":80},"type":"BlockBasic","key":"event-click","maxConnection":1,"data":{"disableBlock":false,"description":"click sp","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":".s-item__info.clearfix > a.s-item__link","markEl":false,"multiple":false,"rate":-1,"random":true,"waitForNavigation":true}},{"id":"_voz2dd8u14hkerv","position":{"x":640,"y":80},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[1]}},{"id":"_s10jf7r67cnoens","position":{"x":0,"y":160},"type":"BlockBasic","key":"event-click","maxConnection":1,"data":{"disableBlock":false,"description":"view image","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"#vi_main_img_fs > div > div > div > button","markEl":false,"multiple":false,"rate":-1,"random":true,"waitForNavigation":false}},{"id":"_92a1zu0ujotsvsz","position":{"x":160,"y":160},"type":"BlockBasic","key":"swipe-down","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"html","markEl":false,"multiple":false,"scrollY":100,"scrollX":0,"incX":false,"incY":false,"smooth":false,"scrollIntoView":false,"numScroll":1,"breakTime":1,"random":true,"scrollToY":500,"scrollToX":0,"numScrollTo":5}},{"id":"_5d4q1kjwram40ak","position":{"x":320,"y":160},"type":"BlockBasic","key":"event-click","maxConnection":1,"data":{"disableBlock":false,"description":"view shop","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"#LISTING_FRAME_MODULE > div > div.d-stores-info-categories__container > div.d-stores-info-categories__container__action > a:nth-child(1)","markEl":false,"multiple":false,"rate":-1,"random":false,"waitForNavigation":true}},{"id":"_1r26g1niee3w6ya","position":{"x":480,"y":160},"type":"BlockBasic","key":"swipe-down","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"html","markEl":false,"multiple":false,"scrollY":350,"scrollX":0,"incX":false,"incY":false,"smooth":false,"scrollIntoView":false,"numScroll":3,"breakTime":1,"random":false,"scrollToY":1000,"scrollToX":0,"numScrollTo":10}},{"id":"_gqa5yzh1i04wnip","position":{"x":640,"y":160},"type":"BlockBasic","key":"event-click","maxConnection":1,"data":{"disableBlock":false,"description":"dialog sp","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"article.str-item-card [role=\\"button\\"]","markEl":false,"multiple":false,"rate":-1,"random":true,"waitForNavigation":true}},{"id":"_6ry4uuorrauv8dl","position":{"x":0,"y":240},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[2,5]}},{"id":"_xo4k2pqp3niskp0","position":{"x":160,"y":240},"type":"BlockBasic","key":"event-click","maxConnection":1,"data":{"disableBlock":false,"description":"close dialog","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"[role=\\"dialog\\"][aria-hidden=\\"false\\"] > div > div > button[aria-label]","markEl":false,"multiple":false,"rate":-1,"random":false,"waitForNavigation":false}},{"id":"_5urrfik2tey8p1j","position":{"x":320,"y":240},"type":"BlockBasic","key":"swipe-down","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"html","markEl":false,"multiple":false,"scrollY":500,"scrollX":0,"incX":false,"incY":false,"smooth":false,"scrollIntoView":false,"numScroll":1,"breakTime":1,"random":false,"scrollToY":1000,"scrollToX":0,"numScrollTo":10}},{"id":"_rcw1ksk8dmoi5lw","position":{"x":480,"y":240},"type":"BlockBasic","key":"go-back","maxConnection":1,"data":{"disableBlock":false}},{"id":"_612ybjo2azeq5fe","position":{"x":640,"y":240},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[2,5]}},{"id":"_xnvfdb1koaj1zw0","position":{"x":0,"y":320},"type":"BlockBasic","key":"close-tab","maxConnection":1,"data":{"disableBlock":false,"url":"","description":"","activeTab":true,"closeType":"tab","allWindows":true}}],"edges":[{"id":"_bpe92hayq426pbf","source":"trigger","target":"_w2taxlhau11bju9","sourceHandle":null,"targetHandle":null},{"id":"_4rch0k0ejz0l38b","source":"_ysil3lpf7pdo2oh","target":"_9cjxg4161mnleos","sourceHandle":null,"targetHandle":null},{"id":"_a500lyv64hm0a89","source":"_9cjxg4161mnleos","target":"_6w1eeqoav63zcd8","sourceHandle":null,"targetHandle":null},{"id":"_qhyn460r44iy2cq","source":"_6w1eeqoav63zcd8","target":"_fervd4nkf2a8bh6","sourceHandle":null,"targetHandle":null},{"id":"_l6qr236jkws2la6","source":"_fervd4nkf2a8bh6","target":"_4uwktqic2ylu6pj","sourceHandle":null,"targetHandle":null},{"id":"_6hn8b9jpqc8vmlf","source":"_voz2dd8u14hkerv","target":"_s10jf7r67cnoens","sourceHandle":null,"targetHandle":null},{"id":"_7gux4mw9psn141l","source":"_s10jf7r67cnoens","target":"_92a1zu0ujotsvsz","sourceHandle":null,"targetHandle":null},{"id":"_iucy0yhhjkvcqm2","source":"_92a1zu0ujotsvsz","target":"_5d4q1kjwram40ak","sourceHandle":null,"targetHandle":null},{"id":"_q7fzsm8ta873see","source":"_5d4q1kjwram40ak","target":"_1r26g1niee3w6ya","sourceHandle":null,"targetHandle":null},{"id":"_4fz1p34g1miaf2d","source":"_1r26g1niee3w6ya","target":"_gqa5yzh1i04wnip","sourceHandle":null,"targetHandle":null},{"id":"_o0k7wq4mldi7i6h","source":"_5urrfik2tey8p1j","target":"_rcw1ksk8dmoi5lw","sourceHandle":null,"targetHandle":null},{"id":"_qu5eikgnv1mxmpe","source":"_6ry4uuorrauv8dl","target":"_xo4k2pqp3niskp0","sourceHandle":null,"targetHandle":null},{"id":"_fj5405cjyyhhzjl","source":"_xo4k2pqp3niskp0","target":"_5urrfik2tey8p1j","sourceHandle":null,"targetHandle":null},{"id":"_t7y1mras24wm78t","source":"_gqa5yzh1i04wnip","target":"_6ry4uuorrauv8dl","sourceHandle":null,"targetHandle":null},{"id":"_cyzqpgon60uknzc","source":"_rcw1ksk8dmoi5lw","target":"_612ybjo2azeq5fe","sourceHandle":null,"targetHandle":null},{"id":"_nor24k0n6khgur0","source":"_612ybjo2azeq5fe","target":"_xnvfdb1koaj1zw0","sourceHandle":null,"targetHandle":null},{"id":"_h4q1ittnpkehpyh","source":"_4uwktqic2ylu6pj","target":"_voz2dd8u14hkerv","sourceHandle":null,"targetHandle":null},{"id":"_60vlh293d3zzwbr","source":"_09mrowlayt2bvbv","target":"_7pckfudwxlc28cm","sourceHandle":null,"targetHandle":null},{"id":"_zxvuqp2w4ubl5b7","source":"_7pckfudwxlc28cm","target":"_ysil3lpf7pdo2oh","sourceHandle":null,"targetHandle":null},{"id":"_1p5dws66akjegiq","source":"_w2taxlhau11bju9","target":"_09mrowlayt2bvbv","sourceHandle":null,"targetHandle":null}]}',
  },

  {
    id: "etsy_search_1",
    name: "Etsy - Random Search",
    tags: "etsy",
    description: "Search and random view product",
    price: 0,
    protectedCode: false,
    code: '{"nodes":[{"id":"trigger","position":{"x":0,"y":0},"type":"BlockTrigger","key":"trigger","maxConnection":1,"data":{"disableBlock":false,"description":"","type":"manual","interval":60,"delay":5,"date":"","time":"00:00","url":"","shortcut":"","activeInInput":false,"isUrlRegex":false,"days":[],"contextMenuName":"","contextTypes":[],"parameters":[],"preferParamsInTab":false,"observeElement":{"selector":"","baseSelector":"","matchPattern":"","targetOptions":{"subtree":false,"childList":true,"attributes":false,"attributeFilter":[],"characterData":false},"baseElOptions":{"subtree":false,"childList":true,"attributes":false,"attributeFilter":[],"characterData":false}}}},{"id":"_phoscfq3epbz487","position":{"x":160,"y":0},"type":"BlockBasic","key":"new-tab","maxConnection":1,"data":{"disableBlock":false,"description":"","url":"https://www.etsy.com","userAgent":"","active":true,"inGroup":false,"waitTabLoaded":false,"updatePrevTab":true,"customUserAgent":false}},{"id":"_0i5l34qajbjgwzk","position":{"x":320,"y":0},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[1,2]}},{"id":"_f04rqogfzcoxuqz","position":{"x":480,"y":0},"type":"BlockBasic","key":"event-click","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"#global-enhancements-search-query","markEl":false,"multiple":false,"rate":-1,"random":false,"waitForNavigation":false}},{"id":"_ew1a3te53djmfkg","position":{"x":640,"y":0},"type":"BlockBasic","key":"type-text","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"#global-enhancements-search-query","markEl":false,"multiple":false,"contentFrom":"etsy","content":"","contentLoop":""}},{"id":"_omj89cnz2x1y1mk","position":{"x":0,"y":80},"type":"BlockBasic","key":"press-key","maxConnection":1,"data":{"disableBlock":false,"keys":"","selector":"","description":"","keysToPress":["Enter"],"action":"press-key"}},{"id":"_pigcywqi6phtwr4","position":{"x":160,"y":80},"type":"BlockBasic","key":"swipe-down","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"html","markEl":false,"multiple":false,"scrollY":200,"scrollX":0,"incX":false,"incY":false,"smooth":false,"scrollIntoView":false,"numScroll":2,"breakTime":1,"random":true,"scrollToY":700,"scrollToX":0,"numScrollTo":3}},{"id":"_6b9h0x886k24l8o","position":{"x":320,"y":80},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[1,2]}},{"id":"_hi19thd0kh8tgi4","position":{"x":480,"y":80},"type":"BlockBasic","key":"event-click","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"a.listing-link.wt-display-inline-block","markEl":false,"multiple":false,"rate":-1,"random":true,"waitForNavigation":true}},{"id":"_fv97ipi0jckyrgg","position":{"x":640,"y":80},"type":"BlockBasic","key":"swipe-down","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"html","markEl":false,"multiple":false,"scrollY":200,"scrollX":0,"incX":false,"incY":false,"smooth":false,"scrollIntoView":false,"numScroll":1,"breakTime":1,"random":true,"scrollToY":800,"scrollToX":0,"numScrollTo":3}},{"id":"_p4euh1r3wu9ny12","position":{"x":0,"y":160},"type":"BlockBasic","key":"event-click","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"a.listing-link.wt-display-inline-block","markEl":false,"multiple":false,"rate":-1,"random":true,"waitForNavigation":true}},{"id":"_i3mwprh1sfx3rtx","position":{"x":160,"y":160},"type":"BlockBasic","key":"swipe-down","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"html","markEl":false,"multiple":false,"scrollY":200,"scrollX":0,"incX":false,"incY":false,"smooth":false,"scrollIntoView":false,"numScroll":1,"breakTime":1,"random":true,"scrollToY":800,"scrollToX":0,"numScrollTo":3}},{"id":"_cbtt041zgy309v7","position":{"x":320,"y":160},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[2,5]}},{"id":"_tnqyq5t3ap5nxez","position":{"x":480,"y":160},"type":"BlockBasic","key":"go-back","maxConnection":1,"data":{"disableBlock":false}},{"id":"_06vfi7z2h4ejl2s","position":{"x":640,"y":160},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[1,3]}},{"id":"_h6dt1gi8uo7rkwv","position":{"x":0,"y":240},"type":"BlockBasic","key":"event-click","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"#reviews nav > ul > li > a[data-page=\\"2\\"]","markEl":false,"multiple":false,"rate":-1,"random":false,"waitForNavigation":false}},{"id":"_ba6qfph8c6cdfwe","position":{"x":160,"y":240},"type":"BlockBasic","key":"swipe-up","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"html","markEl":false,"multiple":false,"scrollY":200,"scrollX":0,"incX":false,"incY":false,"smooth":false,"scrollIntoView":false,"numScroll":1,"breakTime":1,"random":true,"scrollToY":600,"scrollToX":0,"numScrollTo":3}},{"id":"_zy5a3n1ydzlu3wy","position":{"x":320,"y":240},"type":"BlockBasic","key":"swipe-down","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"html","markEl":false,"multiple":false,"scrollY":300,"scrollX":0,"incX":false,"incY":false,"smooth":false,"scrollIntoView":false,"numScroll":4,"breakTime":1,"random":true,"scrollToY":700,"scrollToX":0,"numScrollTo":8}},{"id":"_jbdc8gm2qh0ydwx","position":{"x":480,"y":240},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[1,3]}},{"id":"_qp8jsqjmirwb8h5","position":{"x":640,"y":240},"type":"BlockBasic","key":"event-click","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"a.listing-link.wt-display-inline-block","markEl":false,"multiple":false,"rate":-1,"random":true,"waitForNavigation":true}},{"id":"_kk3xaesh3e244yn","position":{"x":0,"y":320},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[1,3]}},{"id":"_y0dyizt5jb60q1e","position":{"x":160,"y":320},"type":"BlockBasic","key":"event-click","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"a.wt-transparent-card tag-card-with-image","markEl":false,"multiple":false,"rate":-1,"random":true,"waitForNavigation":true}},{"id":"_lxjboqp4g2lxvrr","position":{"x":320,"y":320},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[1,3]}},{"id":"_n8ktlm972vdn5kd","position":{"x":480,"y":320},"type":"BlockBasic","key":"swipe-down","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"html","markEl":false,"multiple":false,"scrollY":300,"scrollX":0,"incX":false,"incY":false,"smooth":false,"scrollIntoView":false,"numScroll":3,"breakTime":1,"random":true,"scrollToY":700,"scrollToX":0,"numScrollTo":8}},{"id":"_cdt96qe5yftho68","position":{"x":640,"y":320},"type":"BlockBasic","key":"swipe-up","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"html","markEl":false,"multiple":false,"scrollY":200,"scrollX":0,"incX":false,"incY":false,"smooth":false,"scrollIntoView":false,"numScroll":2,"breakTime":1,"random":true,"scrollToY":500,"scrollToX":0,"numScrollTo":3}},{"id":"_837pp9obpt26lsp","position":{"x":0,"y":400},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[1,5]}}],"edges":[{"id":"_2lot4yoqnsoq7sm","source":"trigger","target":"_phoscfq3epbz487","sourceHandle":null,"targetHandle":null},{"id":"_6lrhvk3bp77piod","source":"_phoscfq3epbz487","target":"_0i5l34qajbjgwzk","sourceHandle":null,"targetHandle":null},{"id":"_jrgwca1rq2dgilv","source":"_jbdc8gm2qh0ydwx","target":"_qp8jsqjmirwb8h5","sourceHandle":null,"targetHandle":null},{"id":"_sfudndxhj58tbju","source":"_qp8jsqjmirwb8h5","target":"_kk3xaesh3e244yn","sourceHandle":null,"targetHandle":null},{"id":"_i8dvdtmad3o7jx7","source":"_pigcywqi6phtwr4","target":"_6b9h0x886k24l8o","sourceHandle":null,"targetHandle":null},{"id":"_wr2dcvj3ount5jt","source":"_6b9h0x886k24l8o","target":"_hi19thd0kh8tgi4","sourceHandle":null,"targetHandle":null},{"id":"_b9la4s3wi1z7nde","source":"_y0dyizt5jb60q1e","target":"_lxjboqp4g2lxvrr","sourceHandle":null,"targetHandle":null},{"id":"_n3bc8crs1gcp3ta","source":"_lxjboqp4g2lxvrr","target":"_n8ktlm972vdn5kd","sourceHandle":null,"targetHandle":null},{"id":"_qmlrnsncmo0kzs6","source":"_n8ktlm972vdn5kd","target":"_cdt96qe5yftho68","sourceHandle":null,"targetHandle":null},{"id":"_dxevzvzmytvtz2m","source":"_cdt96qe5yftho68","target":"_837pp9obpt26lsp","sourceHandle":null,"targetHandle":null},{"id":"_x30ze9t0pbpdljt","source":"_f04rqogfzcoxuqz","target":"_ew1a3te53djmfkg","sourceHandle":null,"targetHandle":null},{"id":"_traftdh98w4vtq7","source":"_ew1a3te53djmfkg","target":"_omj89cnz2x1y1mk","sourceHandle":null,"targetHandle":null},{"id":"_w917j54kyipqj40","source":"_0i5l34qajbjgwzk","target":"_f04rqogfzcoxuqz","sourceHandle":null,"targetHandle":null},{"id":"_4j1q0rai9vupmhs","source":"_omj89cnz2x1y1mk","target":"_pigcywqi6phtwr4","sourceHandle":null,"targetHandle":null},{"id":"_648ylrufrzxzq1w","source":"_06vfi7z2h4ejl2s","target":"_h6dt1gi8uo7rkwv","sourceHandle":null,"targetHandle":null},{"id":"_2e4tcxl5ozwa1v7","source":"_h6dt1gi8uo7rkwv","target":"_ba6qfph8c6cdfwe","sourceHandle":null,"targetHandle":null},{"id":"_kqfdr6pibpj3cqi","source":"_ba6qfph8c6cdfwe","target":"_zy5a3n1ydzlu3wy","sourceHandle":null,"targetHandle":null},{"id":"_zzj43jbqlfxsbdm","source":"_zy5a3n1ydzlu3wy","target":"_jbdc8gm2qh0ydwx","sourceHandle":null,"targetHandle":null},{"id":"_fftjja7fm7x8bck","source":"_kk3xaesh3e244yn","target":"_y0dyizt5jb60q1e","sourceHandle":null,"targetHandle":null},{"id":"_orfc7i1jel6vxy3","source":"_fv97ipi0jckyrgg","target":"_p4euh1r3wu9ny12","sourceHandle":null,"targetHandle":null},{"id":"_bsd3bfuxcosbjkt","source":"_i3mwprh1sfx3rtx","target":"_cbtt041zgy309v7","sourceHandle":null,"targetHandle":null},{"id":"_jdn2z6dnhojxbup","source":"_p4euh1r3wu9ny12","target":"_i3mwprh1sfx3rtx","sourceHandle":null,"targetHandle":null},{"id":"_w4hzig33rdx8v2p","source":"_cbtt041zgy309v7","target":"_tnqyq5t3ap5nxez","sourceHandle":null,"targetHandle":null},{"id":"_tmkklwt72ptww5i","source":"_hi19thd0kh8tgi4","target":"_fv97ipi0jckyrgg","sourceHandle":null,"targetHandle":null},{"id":"_i21pwc7ckpn370k","source":"_tnqyq5t3ap5nxez","target":"_06vfi7z2h4ejl2s","sourceHandle":null,"targetHandle":null}]}',
  },

  {
    id: "etsy_3",
    name: "Etsy - Farming 1",
    tags: "etsy",
    description: "Random click Category + Random view product",
    price: 0,
    protectedCode: false,
    code: '{"nodes":[{"id":"trigger","position":{"x":0,"y":0},"type":"BlockTrigger","key":"trigger","maxConnection":1,"data":{"disableBlock":false,"description":"","type":"manual","interval":60,"delay":5,"date":"","time":"00:00","url":"","shortcut":"","activeInInput":false,"isUrlRegex":false,"days":[],"contextMenuName":"","contextTypes":[],"parameters":[],"preferParamsInTab":false,"observeElement":{"selector":"","baseSelector":"","matchPattern":"","targetOptions":{"subtree":false,"childList":true,"attributes":false,"attributeFilter":[],"characterData":false},"baseElOptions":{"subtree":false,"childList":true,"attributes":false,"attributeFilter":[],"characterData":false}}}},{"id":"_aiwto1j2ut7v5l3","position":{"x":160,"y":0},"type":"BlockBasic","key":"new-tab","maxConnection":1,"data":{"disableBlock":false,"description":"","url":"https://www.etsy.com/","userAgent":"","active":true,"inGroup":false,"waitTabLoaded":false,"updatePrevTab":true,"customUserAgent":false}},{"id":"_4kdp3bvbsum5wi3","position":{"x":320,"y":0},"type":"BlockBasic","key":"event-click","maxConnection":1,"data":{"disableBlock":false,"description":"Click category","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"a.wt-card__link.wt-display-flex-xs","markEl":false,"multiple":false,"rate":-1,"random":true,"waitForNavigation":true}},{"id":"_o55cthn7d9vyz9n","position":{"x":480,"y":0},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[1,3]}},{"id":"_d9ymiv6d2cqvbgx","position":{"x":640,"y":0},"type":"BlockBasic","key":"event-click","maxConnection":1,"data":{"disableBlock":false,"description":"click product","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"a.listing-link.wt-display-inline-block","markEl":false,"multiple":false,"rate":-1,"random":true,"waitForNavigation":true}},{"id":"_0alfqbh0t9knkih","position":{"x":0,"y":80},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[1,3]}},{"id":"_lbabyfasczl0s5w","position":{"x":160,"y":80},"type":"BlockBasic","key":"swipe-down","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"html","markEl":false,"multiple":false,"scrollY":200,"scrollX":0,"incX":false,"incY":false,"smooth":false,"scrollIntoView":false,"numScroll":2,"breakTime":1,"random":true,"scrollToY":350,"scrollToX":0,"numScrollTo":6}},{"id":"_j1iulanpyg3l06b","position":{"x":320,"y":80},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[1,3]}},{"id":"_dw717mhica2bdle","position":{"x":480,"y":80},"type":"BlockBasic","key":"swipe-up","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"html","markEl":false,"multiple":false,"scrollY":200,"scrollX":0,"incX":false,"incY":false,"smooth":false,"scrollIntoView":false,"numScroll":1,"breakTime":1,"random":true,"scrollToY":500,"scrollToX":0,"numScrollTo":3}},{"id":"_kcz7xzfk11f4wdk","position":{"x":640,"y":80},"type":"BlockBasic","key":"event-click","maxConnection":1,"data":{"disableBlock":false,"description":"click see more","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"a.wt-no-wrap","markEl":false,"multiple":false,"rate":50,"random":true,"waitForNavigation":false}},{"id":"_mkrvkh465fa0jcz","position":{"x":0,"y":160},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[1,3]}},{"id":"_j3ba2uanyjenui3","position":{"x":160,"y":160},"type":"BlockBasic","key":"swipe-down","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"html","markEl":false,"multiple":false,"scrollY":200,"scrollX":0,"incX":false,"incY":false,"smooth":false,"scrollIntoView":false,"numScroll":2,"breakTime":1,"random":true,"scrollToY":500,"scrollToX":0,"numScrollTo":6}},{"id":"_k91xje9447hb9lc","position":{"x":320,"y":160},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[1,3]}},{"id":"_m4stk6z7txridvv","position":{"x":480,"y":160},"type":"BlockBasic","key":"event-click","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"a.wt-transparent-card.tag-card-with-image","markEl":false,"multiple":false,"rate":-1,"random":true,"waitForNavigation":true}},{"id":"_lgnjgrrmhfenn1b","position":{"x":640,"y":160},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[1,3]}},{"id":"_2s5zm6w809ulybp","position":{"x":0,"y":240},"type":"BlockBasic","key":"swipe-down","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"html","markEl":false,"multiple":false,"scrollY":200,"scrollX":0,"incX":false,"incY":false,"smooth":false,"scrollIntoView":false,"numScroll":2,"breakTime":1,"random":true,"scrollToY":500,"scrollToX":0,"numScrollTo":6}},{"id":"_ldwtcowg6qh1evk","position":{"x":160,"y":240},"type":"BlockBasic","key":"go-back","maxConnection":1,"data":{"disableBlock":false}},{"id":"_au1mkoep3mpybfr","position":{"x":320,"y":240},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[1,3]}},{"id":"_cctp064qgh74p1h","position":{"x":480,"y":240},"type":"BlockBasic","key":"event-click","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"a.listing-link.wt-display-inline-block","markEl":false,"multiple":false,"rate":-1,"random":false,"waitForNavigation":false}},{"id":"_1uskq7kpeg4kg2c","position":{"x":640,"y":240},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[1,3]}},{"id":"_pis5esl96e6usdn","position":{"x":0,"y":320},"type":"BlockBasic","key":"swipe-down","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"html","markEl":false,"multiple":false,"scrollY":300,"scrollX":0,"incX":false,"incY":false,"smooth":false,"scrollIntoView":false,"numScroll":2,"breakTime":1,"random":true,"scrollToY":700,"scrollToX":0,"numScrollTo":5}},{"id":"_nkshar9id9gpnt7","position":{"x":160,"y":320},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[1,8]}}],"edges":[{"id":"_872kyxvzjrcb9wm","source":"trigger","target":"_aiwto1j2ut7v5l3","sourceHandle":null,"targetHandle":null},{"id":"_b8io16bptwh7xra","source":"_o55cthn7d9vyz9n","target":"_d9ymiv6d2cqvbgx","sourceHandle":null,"targetHandle":null},{"id":"_sj59oggojf1oosr","source":"_d9ymiv6d2cqvbgx","target":"_0alfqbh0t9knkih","sourceHandle":null,"targetHandle":null},{"id":"_08e9vj96pu6v4rd","source":"_0alfqbh0t9knkih","target":"_lbabyfasczl0s5w","sourceHandle":null,"targetHandle":null},{"id":"_sneh3h8fjrwd61s","source":"_lbabyfasczl0s5w","target":"_j1iulanpyg3l06b","sourceHandle":null,"targetHandle":null},{"id":"_37vigfuwx1jlfxo","source":"_j1iulanpyg3l06b","target":"_dw717mhica2bdle","sourceHandle":null,"targetHandle":null},{"id":"_4eat6psmt8nzc8r","source":"_kcz7xzfk11f4wdk","target":"_mkrvkh465fa0jcz","sourceHandle":null,"targetHandle":null},{"id":"_z5cpf45w5fg9hv7","source":"_mkrvkh465fa0jcz","target":"_j3ba2uanyjenui3","sourceHandle":null,"targetHandle":null},{"id":"_gfm7wpeq1mc86ho","source":"_j3ba2uanyjenui3","target":"_k91xje9447hb9lc","sourceHandle":null,"targetHandle":null},{"id":"_8r5mackixo9rpay","source":"_cctp064qgh74p1h","target":"_1uskq7kpeg4kg2c","sourceHandle":null,"targetHandle":null},{"id":"_odzbzy0hn8pw8i9","source":"_4kdp3bvbsum5wi3","target":"_o55cthn7d9vyz9n","sourceHandle":null,"targetHandle":null},{"id":"_k5mongp9r4bvkyq","source":"_dw717mhica2bdle","target":"_kcz7xzfk11f4wdk","sourceHandle":null,"targetHandle":null},{"id":"_38pcnb5bies8w01","source":"_k91xje9447hb9lc","target":"_m4stk6z7txridvv","sourceHandle":null,"targetHandle":null},{"id":"_fckop0299fhs04h","source":"_m4stk6z7txridvv","target":"_lgnjgrrmhfenn1b","sourceHandle":null,"targetHandle":null},{"id":"_3oficph8lu9hkjy","source":"_lgnjgrrmhfenn1b","target":"_2s5zm6w809ulybp","sourceHandle":null,"targetHandle":null},{"id":"_p3skd6d1cvawbkz","source":"_2s5zm6w809ulybp","target":"_ldwtcowg6qh1evk","sourceHandle":null,"targetHandle":null},{"id":"_a5s104t0csio2sg","source":"_ldwtcowg6qh1evk","target":"_au1mkoep3mpybfr","sourceHandle":null,"targetHandle":null},{"id":"_d8s2hvd84304c2b","source":"_au1mkoep3mpybfr","target":"_cctp064qgh74p1h","sourceHandle":null,"targetHandle":null},{"id":"_ychnqvszzk5ngvs","source":"_1uskq7kpeg4kg2c","target":"_pis5esl96e6usdn","sourceHandle":null,"targetHandle":null},{"id":"_x2zsyc37li7vfzi","source":"_pis5esl96e6usdn","target":"_nkshar9id9gpnt7","sourceHandle":null,"targetHandle":null},{"id":"_h3tyhtxye3q5zzz","source":"_aiwto1j2ut7v5l3","target":"_4kdp3bvbsum5wi3","sourceHandle":null,"targetHandle":null}]}',
  },

  {
    id: "amazon_search_1",
    name: "Amazon - Random search",
    tags: "amazon",
    description: "Random click - Surf",
    price: 0,
    protectedCode: false,
    code: '{"nodes":[{"id":"trigger","position":{"x":0,"y":0},"type":"BlockTrigger","key":"trigger","maxConnection":1,"data":{"disableBlock":false,"description":"","type":"manual","interval":60,"delay":5,"date":"","time":"00:00","url":"","shortcut":"","activeInInput":false,"isUrlRegex":false,"days":[],"contextMenuName":"","contextTypes":[],"parameters":[],"preferParamsInTab":false,"observeElement":{"selector":"","baseSelector":"","matchPattern":"","targetOptions":{"subtree":false,"childList":true,"attributes":false,"attributeFilter":[],"characterData":false},"baseElOptions":{"subtree":false,"childList":true,"attributes":false,"attributeFilter":[],"characterData":false}}}},{"id":"_c5o0hiqvn1r8s3s","position":{"x":160,"y":0},"type":"BlockBasic","key":"new-tab","maxConnection":1,"data":{"disableBlock":false,"description":"","url":"https://www.google.com/","userAgent":"","active":true,"inGroup":false,"waitTabLoaded":false,"updatePrevTab":true,"customUserAgent":false}},{"id":"_oqpiisdeamcov7q","position":{"x":320,"y":0},"type":"BlockBasic","key":"event-click","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"textarea[name=\\"q\\"]","markEl":false,"multiple":false,"rate":-1,"random":false}},{"id":"_8eadb8gh9vznbzm","position":{"x":480,"y":0},"type":"BlockBasic","key":"type-text","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"textarea[name=\\"q\\"]","markEl":false,"multiple":false,"contentFrom":"text","content":"Amazon\\namazon","contentLoop":"randomly"}},{"id":"_nq26tmwah3458hn","position":{"x":640,"y":0},"type":"BlockBasic","key":"press-key","maxConnection":1,"data":{"disableBlock":false,"keys":"","selector":"","description":"","keysToPress":["Enter"],"action":"press-key"}},{"id":"_diqt0dys6i0k2bt","position":{"x":0,"y":80},"type":"BlockBasic","key":"event-click","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"a[href=\\"https://www.amazon.com/\\"]","markEl":false,"multiple":false,"rate":-1,"random":false,"waitForNavigation":false}},{"id":"_nej7s0arhus1cam","position":{"x":160,"y":80},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[1,3],"waitForNavigation":true}},{"id":"_itsc2kcdni61oq5","position":{"x":320,"y":80},"type":"BlockBasic","key":"swipe-down","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"html","markEl":false,"multiple":false,"scrollY":200,"scrollX":0,"incX":false,"incY":false,"smooth":false,"scrollIntoView":false,"numScroll":3,"breakTime":3,"random":true,"scrollToY":500,"scrollToX":0,"numScrollTo":5}},{"id":"_vc4aah8bifle5z2","position":{"x":480,"y":80},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[2]}},{"id":"_rzhm0xn6rnf4tza","position":{"x":640,"y":80},"type":"BlockBasic","key":"event-click","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"#twotabsearchtextbox","markEl":false,"multiple":false,"rate":-1,"random":false}},{"id":"_1fis4brz1p24oh3","position":{"x":0,"y":160},"type":"BlockBasic","key":"type-text","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"#twotabsearchtextbox","markEl":false,"multiple":false,"contentFrom":"amazon","content":"Laptop","contentLoop":""}},{"id":"_4ygomkelo4tuuk6","position":{"x":160,"y":160},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[1]}},{"id":"_43smn8jbpsxt6ub","position":{"x":320,"y":160},"type":"BlockBasic","key":"press-key","maxConnection":1,"data":{"disableBlock":false,"keys":"","selector":"","description":"","keysToPress":["Enter"],"action":"press-key"}},{"id":"_yon5pinwjycmfhv","position":{"x":480,"y":160},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[2]}},{"id":"_v8xhmnv2vot2war","position":{"x":640,"y":160},"type":"BlockBasic","key":"swipe-down","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"html","markEl":false,"multiple":false,"scrollY":300,"scrollX":0,"incX":false,"incY":false,"smooth":false,"scrollIntoView":false,"numScroll":3,"breakTime":3,"random":true,"scrollToY":500,"scrollToX":0,"numScrollTo":5}},{"id":"_umhda3c81ctwdwd","position":{"x":0,"y":240},"type":"BlockBasic","key":"swipe-up","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"html","markEl":false,"multiple":false,"scrollY":300,"scrollX":0,"incX":false,"incY":false,"smooth":false,"scrollIntoView":false,"numScroll":1,"breakTime":2,"random":true,"scrollToY":600,"scrollToX":0,"numScrollTo":3}},{"id":"_ydzs5xukjqofl79","position":{"x":160,"y":240},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[1,3]}},{"id":"_qfai27nsrdpvscx","position":{"x":320,"y":240},"type":"BlockBasic","key":"event-click","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"div[class=\\"s-main-slot s-result-list s-search-results sg-row\\"] div[class=\\"sg-col-inner\\"] h2>a","markEl":false,"multiple":false,"rate":-1,"random":true,"waitForNavigation":true}},{"id":"_030qca4n8h2wj34","position":{"x":480,"y":240},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[3,10]}},{"id":"_9nh6ppyxj1s8gtd","position":{"x":640,"y":240},"type":"BlockBasic","key":"swipe-down","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"html","markEl":false,"multiple":false,"scrollY":300,"scrollX":0,"incX":false,"incY":false,"smooth":false,"scrollIntoView":false,"numScroll":2,"breakTime":2,"random":true,"scrollToY":650,"scrollToX":0,"numScrollTo":6}},{"id":"_19xtwbte428g1lb","position":{"x":0,"y":320},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[1,3]}},{"id":"_oai35g54u4jap8v","position":{"x":160,"y":320},"type":"BlockBasic","key":"swipe-up","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"html","markEl":false,"multiple":false,"scrollY":200,"scrollX":0,"incX":false,"incY":false,"smooth":false,"scrollIntoView":false,"numScroll":1,"breakTime":1,"random":true,"scrollToY":600,"scrollToX":0,"numScrollTo":3}},{"id":"_p2m80azfxeyt6pp","position":{"x":320,"y":320},"type":"BlockBasic","key":"close-tab","maxConnection":1,"data":{"disableBlock":false,"url":"","description":"","activeTab":true,"closeType":"tab","allWindows":true}}],"edges":[{"id":"_fdpql789gdtxela","source":"_diqt0dys6i0k2bt","target":"_nej7s0arhus1cam","sourceHandle":null,"targetHandle":null},{"id":"_rchzcttp4fj8jvz","source":"_nej7s0arhus1cam","target":"_itsc2kcdni61oq5","sourceHandle":null,"targetHandle":null},{"id":"_3s3gy39ulr41vax","source":"_vc4aah8bifle5z2","target":"_rzhm0xn6rnf4tza","sourceHandle":null,"targetHandle":null},{"id":"_bpfha7hhmxqx49d","source":"_rzhm0xn6rnf4tza","target":"_1fis4brz1p24oh3","sourceHandle":null,"targetHandle":null},{"id":"_flet5g068egyx2q","source":"_1fis4brz1p24oh3","target":"_4ygomkelo4tuuk6","sourceHandle":null,"targetHandle":null},{"id":"_x1p7f8uzpnpkwj1","source":"_4ygomkelo4tuuk6","target":"_43smn8jbpsxt6ub","sourceHandle":null,"targetHandle":null},{"id":"_5ll263gn0cgi3p0","source":"_43smn8jbpsxt6ub","target":"_yon5pinwjycmfhv","sourceHandle":null,"targetHandle":null},{"id":"_woiu4wynnngmmeo","source":"_v8xhmnv2vot2war","target":"_umhda3c81ctwdwd","sourceHandle":null,"targetHandle":null},{"id":"_he672tj8xjeq7hl","source":"trigger","target":"_c5o0hiqvn1r8s3s","sourceHandle":null,"targetHandle":null},{"id":"_o2xuptkjezgvypw","source":"_oqpiisdeamcov7q","target":"_8eadb8gh9vznbzm","sourceHandle":null,"targetHandle":null},{"id":"_pwgush71nn5q6t8","source":"_umhda3c81ctwdwd","target":"_ydzs5xukjqofl79","sourceHandle":null,"targetHandle":null},{"id":"_ax6hzfp3scei0zk","source":"_ydzs5xukjqofl79","target":"_qfai27nsrdpvscx","sourceHandle":null,"targetHandle":null},{"id":"_ja177lhs34ef3xl","source":"_qfai27nsrdpvscx","target":"_030qca4n8h2wj34","sourceHandle":null,"targetHandle":null},{"id":"_w2acqik4f2b76et","source":"_030qca4n8h2wj34","target":"_9nh6ppyxj1s8gtd","sourceHandle":null,"targetHandle":null},{"id":"_cl4xz3s00axema0","source":"_19xtwbte428g1lb","target":"_oai35g54u4jap8v","sourceHandle":null,"targetHandle":null},{"id":"_xm55kl0l42maowu","source":"_oai35g54u4jap8v","target":"_p2m80azfxeyt6pp","sourceHandle":null,"targetHandle":null},{"id":"_m4k7luvx1idon5v","source":"_8eadb8gh9vznbzm","target":"_nq26tmwah3458hn","sourceHandle":null,"targetHandle":null},{"id":"_a742w4vzki8docf","source":"_c5o0hiqvn1r8s3s","target":"_oqpiisdeamcov7q","sourceHandle":null,"targetHandle":null},{"id":"_e49vt42i00d3wvz","source":"_nq26tmwah3458hn","target":"_diqt0dys6i0k2bt","sourceHandle":null,"targetHandle":null},{"id":"_ry08b38qz56ojud","source":"_itsc2kcdni61oq5","target":"_vc4aah8bifle5z2","sourceHandle":null,"targetHandle":null},{"id":"_sfdzxzcn4wsh2je","source":"_yon5pinwjycmfhv","target":"_v8xhmnv2vot2war","sourceHandle":null,"targetHandle":null},{"id":"_zz43wkjod6yzw4k","source":"_9nh6ppyxj1s8gtd","target":"_19xtwbte428g1lb","sourceHandle":null,"targetHandle":null}]}',
  },

  {
    id: "twitter_1",
    name: "Twitter - Farming 1",
    tags: "twitter",
    description: "Sign in",
    price: 0,
    protectedCode: false,
    code: '{"nodes":[{"id":"trigger","position":{"x":0,"y":0},"type":"BlockTrigger","key":"trigger","maxConnection":1,"data":{"disableBlock":false,"description":"","type":"manual","interval":60,"delay":5,"date":"","time":"00:00","url":"","shortcut":"","activeInInput":false,"isUrlRegex":false,"days":[],"contextMenuName":"","contextTypes":[],"parameters":[],"preferParamsInTab":false,"observeElement":{"selector":"","baseSelector":"","matchPattern":"","targetOptions":{"subtree":false,"childList":true,"attributes":false,"attributeFilter":[],"characterData":false},"baseElOptions":{"subtree":false,"childList":true,"attributes":false,"attributeFilter":[],"characterData":false}}}},{"id":"_mt96zcs9bhnurza","position":{"x":160,"y":0},"type":"BlockBasic","key":"new-tab","maxConnection":1,"data":{"disableBlock":false,"description":"","url":"https://twitter.com","userAgent":"","active":true,"inGroup":false,"waitTabLoaded":false,"updatePrevTab":true,"customUserAgent":false}},{"id":"_6md9ty2899cgfli","position":{"x":320,"y":0},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[1,8]}},{"id":"_yf7xbjmc4thrvqi","position":{"x":480,"y":0},"type":"BlockBasic","key":"event-click","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"main[role=\\"main\\"] div > a[data-testid=\\"loginButton\\"]","markEl":false,"multiple":false,"rate":-1,"random":false,"waitForNavigation":false}},{"id":"_7qvj02h91mep7p0","position":{"x":640,"y":0},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[10]}},{"id":"_q8qodgu7br49t5d","position":{"x":0,"y":80},"type":"BlockBasic","key":"event-click","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"input[name=\\"text\\"]","markEl":false,"multiple":false,"rate":-1,"random":false,"waitForNavigation":false}},{"id":"_1avpsewi7kx2my3","position":{"x":160,"y":80},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[1,8]}},{"id":"_90fzs9nf30lk1nd","position":{"x":320,"y":80},"type":"BlockBasic","key":"type-text","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"input[name=\\"text\\"]","markEl":false,"multiple":false,"contentFrom":"text","content":"hidemyacc","contentLoop":""}},{"id":"_h5uc2uq9frrnll5","position":{"x":480,"y":80},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[10]}},{"id":"_re0pj90nydyicka","position":{"x":640,"y":80},"type":"BlockBasic","key":"press-key","maxConnection":1,"data":{"disableBlock":false,"keys":"","selector":"","description":"","keysToPress":["Enter"],"action":"press-key"}},{"id":"_ijqvyqzg2geoufi","position":{"x":0,"y":160},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[10]}},{"id":"_cfbxlme0ap0oh2f","position":{"x":160,"y":160},"type":"BlockBasic","key":"event-click","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"input[name=\\"password\\"]","markEl":false,"multiple":false,"rate":-1,"random":false,"waitForNavigation":false}},{"id":"_h5jrolr3l72lj4i","position":{"x":320,"y":160},"type":"BlockBasic","key":"type-text","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"input[name=\\"password\\"]","markEl":false,"multiple":false,"contentFrom":"text","content":"password","contentLoop":""}},{"id":"_gyre8jwnmilakev","position":{"x":480,"y":160},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[1,8]}},{"id":"_ghdr1swetrvn43v","position":{"x":640,"y":160},"type":"BlockBasic","key":"press-key","maxConnection":1,"data":{"disableBlock":false,"keys":"","selector":"","description":"","keysToPress":["Enter"],"action":"press-key"}},{"id":"_6gpdvritt57mrku","position":{"x":0,"y":240},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[10]}},{"id":"_iginrcay22uhon2","position":{"x":160,"y":240},"type":"BlockBasic","key":"swipe-down","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"html","markEl":false,"multiple":false,"scrollY":500,"scrollX":0,"incX":false,"incY":false,"smooth":false,"scrollIntoView":false,"numScroll":3,"breakTime":1,"random":true,"scrollToY":700,"scrollToX":0,"numScrollTo":6}},{"id":"_mtyc51iz6p2s1fl","position":{"x":320,"y":240},"type":"BlockBasic","key":"close-tab","maxConnection":1,"data":{"disableBlock":false,"url":"","description":"","activeTab":true,"closeType":"tab","allWindows":true}}],"edges":[{"id":"_ae3khec126ehnbm","source":"trigger","target":"_mt96zcs9bhnurza","sourceHandle":null,"targetHandle":null},{"id":"_o08bfzaf7fl8huk","source":"_mt96zcs9bhnurza","target":"_6md9ty2899cgfli","sourceHandle":null,"targetHandle":null},{"id":"_wagh3147ti42b2d","source":"_6md9ty2899cgfli","target":"_yf7xbjmc4thrvqi","sourceHandle":null,"targetHandle":null},{"id":"_wt2hqtw5aacun88","source":"_yf7xbjmc4thrvqi","target":"_7qvj02h91mep7p0","sourceHandle":null,"targetHandle":null},{"id":"_7hidgqgev0g72z6","source":"_7qvj02h91mep7p0","target":"_q8qodgu7br49t5d","sourceHandle":null,"targetHandle":null},{"id":"_s5l5f7scxg5c735","source":"_q8qodgu7br49t5d","target":"_1avpsewi7kx2my3","sourceHandle":null,"targetHandle":null},{"id":"_9q8dv8gef1xwos5","source":"_1avpsewi7kx2my3","target":"_90fzs9nf30lk1nd","sourceHandle":null,"targetHandle":null},{"id":"_sgv4d4r4mlcoczj","source":"_90fzs9nf30lk1nd","target":"_h5uc2uq9frrnll5","sourceHandle":null,"targetHandle":null},{"id":"_xefa6sautxm99dw","source":"_h5uc2uq9frrnll5","target":"_re0pj90nydyicka","sourceHandle":null,"targetHandle":null},{"id":"_ty3bxeoql62mej4","source":"_re0pj90nydyicka","target":"_ijqvyqzg2geoufi","sourceHandle":null,"targetHandle":null},{"id":"_wvv00wi85ger0jw","source":"_ijqvyqzg2geoufi","target":"_cfbxlme0ap0oh2f","sourceHandle":null,"targetHandle":null},{"id":"_23ru8m452869mnu","source":"_cfbxlme0ap0oh2f","target":"_h5jrolr3l72lj4i","sourceHandle":null,"targetHandle":null},{"id":"_gzmaxtw3kcdwxiq","source":"_h5jrolr3l72lj4i","target":"_gyre8jwnmilakev","sourceHandle":null,"targetHandle":null},{"id":"_j6l6vi8h9m0dn20","source":"_gyre8jwnmilakev","target":"_ghdr1swetrvn43v","sourceHandle":null,"targetHandle":null},{"id":"_i66552453wob32k","source":"_ghdr1swetrvn43v","target":"_6gpdvritt57mrku","sourceHandle":null,"targetHandle":null},{"id":"_n7d7ofgs93bn8r9","source":"_6gpdvritt57mrku","target":"_iginrcay22uhon2","sourceHandle":null,"targetHandle":null},{"id":"_nz05hzhltgjfl6u","source":"_iginrcay22uhon2","target":"_mtyc51iz6p2s1fl","sourceHandle":null,"targetHandle":null}]}',
  },
  {
    id: "twitter_2",
    name: "Twitter - Farming 2",
    tags: "twitter",
    description: "Surf - Like - Follow (logged)",
    price: 0,
    protectedCode: false,
    code: '{"nodes":[{"id":"trigger","position":{"x":0,"y":0},"type":"BlockTrigger","key":"trigger","maxConnection":1,"data":{"disableBlock":false,"description":"","type":"manual","interval":60,"delay":5,"date":"","time":"00:00","url":"","shortcut":"","activeInInput":false,"isUrlRegex":false,"days":[],"contextMenuName":"","contextTypes":[],"parameters":[],"preferParamsInTab":false,"observeElement":{"selector":"","baseSelector":"","matchPattern":"","targetOptions":{"subtree":false,"childList":true,"attributes":false,"attributeFilter":[],"characterData":false},"baseElOptions":{"subtree":false,"childList":true,"attributes":false,"attributeFilter":[],"characterData":false}}}},{"id":"_newtab","position":{"x":160,"y":0},"type":"BlockBasic","key":"new-tab","maxConnection":1,"data":{"disableBlock":false,"description":"","url":"https://twitter.com","userAgent":"","active":true,"inGroup":false,"waitTabLoaded":false,"updatePrevTab":false,"customUserAgent":false}},{"id":"_akg9fu9k5tchmzz","position":{"x":320,"y":0},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[2]}},{"id":"_8e5yf0yacnbzwm4","position":{"x":480,"y":0},"type":"BlockBasic","key":"swipe-down","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"html","markEl":false,"multiple":false,"scrollY":200,"scrollX":0,"incX":false,"incY":false,"smooth":false,"scrollIntoView":false,"numScroll":1,"breakTime":1,"random":true,"scrollToY":650,"scrollToX":0,"numScrollTo":3}},{"id":"_dtb0ipdi8tnbgqy","position":{"x":640,"y":0},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[2,5]}},{"id":"_8142mzlttvb3epw","position":{"x":0,"y":80},"type":"BlockBasic","key":"event-click","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"div[data-testid=\\"like\\"]","markEl":false,"multiple":false,"rate":-1,"random":true,"waitForNavigation":false,"selectors":[],"coordinates":null}},{"id":"_yiyqwwpicut11xi","position":{"x":160,"y":80},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[2,5]}},{"id":"_m6kt1i8itpck035","position":{"x":320,"y":80},"type":"BlockBasic","key":"swipe-down","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"html","markEl":false,"multiple":false,"scrollY":200,"scrollX":0,"incX":false,"incY":false,"smooth":false,"scrollIntoView":false,"numScroll":1,"breakTime":1,"random":true,"scrollToY":650,"scrollToX":0,"numScrollTo":3}},{"id":"_d3f0idd4ng2tt95","position":{"x":480,"y":80},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[2,5]}},{"id":"_cjc9fmbw8odqmyk","position":{"x":640,"y":80},"type":"BlockBasic","key":"event-click","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"div[data-testid=\\"like\\"]","markEl":false,"multiple":false,"rate":-1,"random":true,"waitForNavigation":false,"selectors":[],"coordinates":null}},{"id":"_9yt3t9t5z1pngza","position":{"x":0,"y":160},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[2,5]}},{"id":"_w4hw7pxsq1pajgi","position":{"x":160,"y":160},"type":"BlockBasic","key":"swipe-down","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"html","markEl":false,"multiple":false,"scrollY":200,"scrollX":0,"incX":false,"incY":false,"smooth":false,"scrollIntoView":false,"numScroll":1,"breakTime":1,"random":true,"scrollToY":650,"scrollToX":0,"numScrollTo":3}},{"id":"_8vjzwcnnd9an4w5","position":{"x":320,"y":160},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[2]}},{"id":"_h54q5x83nln9dgz","position":{"x":480,"y":160},"type":"BlockBasic","key":"type-text","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"input[placeholder=\\"Search\\"]","markEl":false,"multiple":false,"contentFrom":"text","content":"@hidemyacc_com","contentLoop":""}},{"id":"_zbugk8xwc1hk6kv","position":{"x":640,"y":160},"type":"BlockBasic","key":"press-key","maxConnection":1,"data":{"disableBlock":false,"keys":"","selector":"","description":"","keysToPress":["Enter"],"action":"press-key"}},{"id":"_tifteaipcgy8fh2","position":{"x":0,"y":240},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[2,5]}},{"id":"_4f2lzoi7rzhlvir","position":{"x":160,"y":240},"type":"BlockBasic","key":"event-click","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"a[href=\\"/hidemyacc_com\\"]","markEl":false,"multiple":false,"rate":-1,"random":false,"waitForNavigation":false,"selectors":[],"coordinates":null}},{"id":"_y5w0cq2gi7xwsn3","position":{"x":320,"y":240},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[2,5]}},{"id":"_u0gsebwe2hx2gf5","position":{"x":480,"y":240},"type":"BlockBasic","key":"swipe-down","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"html","markEl":false,"multiple":false,"scrollY":200,"scrollX":0,"incX":false,"incY":false,"smooth":false,"scrollIntoView":false,"numScroll":2,"breakTime":1,"random":true,"scrollToY":650,"scrollToX":0,"numScrollTo":5}},{"id":"_lihlpn4n75uhe3q","position":{"x":640,"y":240},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[2,5]}},{"id":"_cndwo9xij3eorcz","position":{"x":0,"y":320},"type":"BlockBasic","key":"event-click","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"div[data-testid=\\"like\\"]","markEl":false,"multiple":false,"rate":-1,"random":true,"waitForNavigation":false,"selectors":[],"coordinates":null}},{"id":"_xsrojxma1wdfi1d","position":{"x":160,"y":320},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[2,5]}},{"id":"_1f7xk3waihndshc","position":{"x":320,"y":320},"type":"BlockBasic","key":"event-click","maxConnection":1,"data":{"disableBlock":false,"description":"","findBy":"cssSelector","waitForSelector":false,"waitSelectorTimeout":5000,"selector":"div[data-testid=\\"placementTracking\\"]","markEl":false,"multiple":false,"rate":-1,"random":false,"waitForNavigation":false,"selectors":[],"coordinates":null}},{"id":"_ozqla8ctb078b1b","position":{"x":480,"y":320},"type":"BlockBasic","key":"delay","maxConnection":1,"data":{"disableBlock":false,"time":[2,5]}}],"edges":[{"id":"_hidemyacc","source":"trigger","target":"_newtab","sourceHandle":null,"targetHandle":null},{"id":"_zitww24xazfftpm","source":"_newtab","target":"_akg9fu9k5tchmzz","sourceHandle":null,"targetHandle":null},{"id":"_7m5ceee4g7mz7ux","source":"_akg9fu9k5tchmzz","target":"_8e5yf0yacnbzwm4","sourceHandle":null,"targetHandle":null},{"id":"_0mh6t46g2q35oe3","source":"_8e5yf0yacnbzwm4","target":"_dtb0ipdi8tnbgqy","sourceHandle":null,"targetHandle":null},{"id":"_9ax9lyoxuall1rc","source":"_dtb0ipdi8tnbgqy","target":"_8142mzlttvb3epw","sourceHandle":null,"targetHandle":null},{"id":"_g4qkxt2l9e2lrsl","source":"_8142mzlttvb3epw","target":"_yiyqwwpicut11xi","sourceHandle":null,"targetHandle":null},{"id":"_op0xljh00itbsxj","source":"_yiyqwwpicut11xi","target":"_m6kt1i8itpck035","sourceHandle":null,"targetHandle":null},{"id":"_oax32nb7oqk14tq","source":"_m6kt1i8itpck035","target":"_d3f0idd4ng2tt95","sourceHandle":null,"targetHandle":null},{"id":"_7987uq1a3lv1wpe","source":"_d3f0idd4ng2tt95","target":"_cjc9fmbw8odqmyk","sourceHandle":null,"targetHandle":null},{"id":"_5a8kfxtn4yelmd3","source":"_cjc9fmbw8odqmyk","target":"_9yt3t9t5z1pngza","sourceHandle":null,"targetHandle":null},{"id":"_4wr5tpuy8twmfcl","source":"_9yt3t9t5z1pngza","target":"_w4hw7pxsq1pajgi","sourceHandle":null,"targetHandle":null},{"id":"_k59sjpmgjm6b79h","source":"_w4hw7pxsq1pajgi","target":"_8vjzwcnnd9an4w5","sourceHandle":null,"targetHandle":null},{"id":"_4n26slz0kkijvf9","source":"_8vjzwcnnd9an4w5","target":"_h54q5x83nln9dgz","sourceHandle":null,"targetHandle":null},{"id":"_x334xi8pm1rserl","source":"_h54q5x83nln9dgz","target":"_zbugk8xwc1hk6kv","sourceHandle":null,"targetHandle":null},{"id":"_s7xslxomxa4u2au","source":"_zbugk8xwc1hk6kv","target":"_tifteaipcgy8fh2","sourceHandle":null,"targetHandle":null},{"id":"_3tuyzh5pxrdfev5","source":"_u0gsebwe2hx2gf5","target":"_lihlpn4n75uhe3q","sourceHandle":null,"targetHandle":null},{"id":"_on7ks92uh2j4vj7","source":"_lihlpn4n75uhe3q","target":"_cndwo9xij3eorcz","sourceHandle":null,"targetHandle":null},{"id":"_p382hp371nsblml","source":"_cndwo9xij3eorcz","target":"_xsrojxma1wdfi1d","sourceHandle":null,"targetHandle":null},{"id":"_oq4jbpir3zksj8h","source":"_xsrojxma1wdfi1d","target":"_1f7xk3waihndshc","sourceHandle":null,"targetHandle":null},{"id":"_8wy2onkejjyv6oc","source":"_1f7xk3waihndshc","target":"_ozqla8ctb078b1b","sourceHandle":null,"targetHandle":null},{"id":"_6hhn5pmxkz6j6b9","source":"_tifteaipcgy8fh2","target":"_4f2lzoi7rzhlvir","sourceHandle":null,"targetHandle":null},{"id":"_am8osf8yqqow0sj","source":"_4f2lzoi7rzhlvir","target":"_y5w0cq2gi7xwsn3","sourceHandle":null,"targetHandle":null},{"id":"_arn6knr3wz4w85d","source":"_y5w0cq2gi7xwsn3","target":"_u0gsebwe2hx2gf5","sourceHandle":null,"targetHandle":null}]}',
  },
  // script code
  {
    name: "Facebook - Like",
    tags: "facebook",
    description: "Surf newsfeed - Random like post (logged)",
    protectedCode: true,
    code: `const delay = (timeout) =>
    new Promise((resolve) => setTimeout(resolve, timeout));
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  async function navigateToUrl(page, url) {
    try {
      await page.goto(url, {
        waitUntil: "networkidle2",
      });
    } catch (error) {
      throw new Error("Error navigating to URL " + url + ": " + error.message);
    }
  }
  
  let logErrors = [];
  async function likeFacebook(page, numPosts, minDuration, maxDuration) {
    let postsLiked = 0;
    let scrolledTimes = 0;
    const startTime = new Date();
    let count = 0;
    const durationInMs =
      (Math.random() * (maxDuration - minDuration) + minDuration) * 60000; // chọn 1 mốc thời gian để dừng trong khoảng min và max
    // Tính toán thời gian chờ giữa mỗi lần chia sẻ
    const waitTimeBetweenPosts = durationInMs / numPosts;
    while (Date.now() - startTime < durationInMs) {
      if (postsLiked >= numPosts) {
        // Nếu đã like đủ bài, chỉ cuộn trang
        await page.mouse.wheel({ deltaY: getRandomInt(500, 1000) });
        await delay(5000);
        continue;
      }
      // Lướt random một khoảng thời gian, tránh việc vừa vào đã thực hiện chức năng
      const scrollAmount = getRandomInt(400, 700);
      if (count == 0) {
        let elapsedWaitTime = 0;
        while (elapsedWaitTime < 0.3 * durationInMs) {
          await page.mouse.wheel({ deltaY: scrollAmount });
          await delay(5000);
          elapsedWaitTime += 5000;
        }
      }
      count++;
      // Tìm nút like ở page để click
      const likeButtons = await page.$$(
        'div[class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg x1ja2u2z x1t137rt x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x3nfvp2 x1q0g3np x87ps6o x1lku1pv x1a2a7pz x5ve5x3"]'
      );
  
      if (likeButtons.length > 0) {
        for (const button of likeButtons) {
          // xem giải thích file explain
          const buttonPosition = await button.boundingBox();
          if (buttonPosition && buttonPosition.y > scrolledTimes * scrollAmount) {
            await button.scrollIntoView({
              block: "center", // Đảm bảo button nằm ở trung tâm theo chiều dọc
              inline: "center", // Đảm bảo button nằm ở trung tâm theo chiều ngang
              behavior: "smooth", // Hiệu ứng cuộn mượt mà
            }),
              await delay(3000);
            await button.click();
            await delay(3000);
            // Thực hiện cuộn trang trong thời gian chờ
            let elapsedWaitTime1 = 0;
            while (elapsedWaitTime1 < waitTimeBetweenPosts * 0.4) {
              await page.mouse.wheel({ deltaY: getRandomInt(500, 700) });
              await delay(5000);
              elapsedWaitTime1 += 5000;
            }
            postsLiked++;
          }
        }
      }
      scrolledTimes++;
    }
  }
  try {
    const url = "https://www.facebook.com/";
    await navigateToUrl(page, url);
    await likeFacebook(page, 5, 1, 3);
  } catch (error) {
    logErrors.push({
      error: "Error during like Facebook execution",
      detail: error.message,
    });
  }
  return logErrors;`,
  },*/
  //facebook
  {
    name: "Facebook - Newsfeed",
    tags: "facebook",
    description: "Surf newsfeed (logged)",
    protectedCode: true,
    code: `const delay = (timeout) =>
    new Promise((resolve) => setTimeout(resolve, timeout));
  
  let logErrors = [];
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  async function navigateToUrl(page, url) {
    try {
      await page.goto(url, {
        waitUntil: "networkidle2",
      });
    } catch (error) {
      throw new Error("Error navigating to URL " + url + ": " + error.message);
    }
  }
  
  async function readContent(page, minDuration, maxDuration) {
    const startTime = new Date();
    const durationInMs =
      (Math.random() * (maxDuration - minDuration) + minDuration) * 60000; // chọn 1 mốc thời gian để dừng trong khoảng min và max
    while (Date.now() - startTime < durationInMs) {
      // Scroll down a random amount
      const scrollAmount = getRandomInt(500, 1000);
      await page.mouse.wheel({ deltaY: scrollAmount });
      await delay(5000);
    }
  }
  try {
    const url = "https://www.facebook.com/";
    await navigateToUrl(page, url);
    await readContent(page, 1, 2);
  } catch (error) {
    logErrors.push({
      error: "Error during newfeeds execution",
      detail: error.message,
    });
  }
  return logErrors;`,
  },
  {
    name: "Facebook - Share",
    tags: "facebook",
    description: "Surf newsfeed - Random share post (logged)",
    protectedCode: true,
    code: `const delay = (timeout) =>
    new Promise((resolve) => setTimeout(resolve, timeout));
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  async function navigateToUrl(page, url) {
    try {
      await page.goto(url, {
        waitUntil: "networkidle2",
      });
    } catch (error) {
      throw new Error("Error navigating to URL " + url + ": " + error.message);
    }
  }
  let logErrors = [];
  async function shareFacebook(page, numPosts, minDuration, maxDuration) {
    let postShare = 0;
    let scrolledTimes = 0;
    let count = 0;
    const startTime = new Date();
    const durationInMs =
      (Math.random() * (maxDuration - minDuration) + minDuration) * 60000; // chọn 1 mốc thời gian để dừng trong khoảng min và max
    // Tính toán thời gian chờ giữa mỗi lần chia sẻ
    const waitTimeBetweenPosts = durationInMs / numPosts;
    while (Date.now() - startTime < durationInMs) {
      if (postShare >= numPosts) {
        // Nếu đã chia sẻ đủ bài, chỉ cuộn trang
        await page.mouse.wheel({ deltaY: getRandomInt(500, 1000) });
        await delay(2000);
        continue;
      }
      // Bắt đầu sẽ lướt trong 1 khoảng thời gian, tránh việc thực hiện ngay chức năng
      const scrollAmount = getRandomInt(400, 700);
      if (count == 0) {
        let elapsedWaitTime = 0;
        while (elapsedWaitTime < 0.3 * durationInMs) {
          await page.mouse.wheel({ deltaY: scrollAmount });
          await delay(5000);
          elapsedWaitTime += 5000;
        }
      }
      count++;
      // Tìm nút share trong page
      const shareButtons = await page.$$(
        'div[class="x9f619 x1n2onr6 x1ja2u2z x78zum5 x2lah0s x1qughib x1qjc9v5 xozqiw3 x1q0g3np x150jy0e x1e558r4 xjkvuk6 x1iorvi4 xwrv7xz x8182xy x4cne27 xifccgj"] > div[class="x9f619 x1n2onr6 x1ja2u2z x78zum5 xdt5ytf x193iq5w xeuugli x1r8uery x1iyjqo2 xs83m0k xg83lxy x1h0ha7o x10b6aqq x1yrsyyn"]:nth-child(3)'
      );
      if (shareButtons.length > 0) {
        for (const button of shareButtons) {
          const buttonPosition = await button.boundingBox();
          // xem file explain
          if (buttonPosition && buttonPosition.y > scrolledTimes * scrollAmount) {
            await button.scrollIntoView({
              block: "center", // Đảm bảo button nằm ở trung tâm theo chiều dọc
              inline: "center", // Đảm bảo button nằm ở trung tâm theo chiều ngang
              behavior: "smooth", // Hiệu ứng cuộn mượt mà
            }),
            await delay(3000);
            await button.click();
            await delay(5000);
            const closeButton = await page.$(
              'div[class="x92rtbv x10l6tqk x1tk7jg1 x1vjfegm"]'
            );
            if (closeButton) {
              await delay(3000);
              await closeButton.click();
              continue;
            } else {
              const share = await page.$(
                'div[class="xsag5q8 xz9dl7a"] > div > div[data-visualcompletion="ignore-dynamic"]:nth-child(1)'
              );
              if (share == null) {
                throw new Error(
                  "Share options not found. Please check your selector"
                );
              }
              await delay(5000);
              await share.click();
              // Thực hiện cuộn trang trong thời gian chờ
              let elapsedWaitTime1 = 0;
              while (elapsedWaitTime1 < waitTimeBetweenPosts * 0.3) {
                await page.mouse.wheel({ deltaY: getRandomInt(400, 700) });
                await delay(5000);
                elapsedWaitTime1 += 5000;
              }
              postShare++;
            }
          }
        }
      } else {
        throw new Error("Share button not found. Please check your selector");
      }
      scrolledTimes++;
      await page.mouse.wheel({ deltaY: getRandomInt(100, 200) });
    }
  }
  try {
    const url = "https://www.facebook.com/";
    await navigateToUrl(page, url);
    await shareFacebook(page, 2, 1, 3);
  } catch (error) {
    logErrors.push({
      error: "Error during shareFacebook execution",
      detail: error.message,
    });
  }
  return logErrors;`,
  },
  {
    name: "Facebook - Story",
    tags: "facebook",
    description: "Watch Story (logged)",
    protectedCode: true,
    code: `const delay = (timeout) =>
    new Promise((resolve) => setTimeout(resolve, timeout));
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  async function navigateToUrl(page, url) {
    try {
      await page.goto(url, {
        waitUntil: "networkidle2",
      });
    } catch (error) {
      throw new Error("Error navigating to URL " + url + ": " + error.message);
    }
  }
  
  let logErrors = [];
  async function clickNext(page) {
    const nextButton = await page.$x(
      "//div[3]/div[2]/div/div/div/div/div[3]/div/div/div/div[1]/div[1]/div[3]/div"
    );
    if (nextButton.length > 0) {
      await delay(getRandomInt(5000, 7000));
      await nextButton[0].click();
    } else {
      throw new Error("Next button not found. Please check your selector.");
    }
  }
  async function storyFacebook(page, minDuration, maxDuration) {
    const story = await page.$$(
      'div[class = "x1c4vz4f x2lah0s xeuugli x1bhewko x1emribx xnqqybz"]'
    );
    if (story == null) {
      throw new Error("Story button not found. Please check your selector.");
    }
    await story[1].click(); // click vào story đầu tiên
    await delay(5000);
    const startTime = new Date();
    const durationInMs =
      (Math.random() * (maxDuration - minDuration) + minDuration) * 60000; // chọn 1 mốc thời gian để dừng trong khoảng min và max
    while (Date.now() - startTime < durationInMs) {
      // nếu còn thời gian thì lướt tiếp
      await delay(getRandomInt(10000, 15000));
      await clickNext(page);
    }
  }
  try {
    const url = "https://www.facebook.com/";
    await navigateToUrl(page, url);
    await storyFacebook(page, 1, 3);
  } catch (error) {
    logErrors.push({
      error: "Error during watch story execution",
      detail: error.message,
    });
  }
  return logErrors;`,
  },
  {
    name: "Facebook - Reels - Save",
    tags: "facebook",
    description: "Watch reels - Random save post (logged)",
    protectedCode: true,
    code: `const delay = (timeout) =>
    new Promise((resolve) => setTimeout(resolve, timeout));
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  async function navigateToUrl(page, url) {
    try {
      await page.goto(url, {
        waitUntil: "networkidle2",
      });
    } catch (error) {
      throw new Error("Error navigating to URL " + url + ": " + error.message);
    }
  }
  let logErrors = [];
  async function clickNext(page) {
    const nextButton = await page.$x(
      "//div[2]/div/div/div[1]/div/div/div/div/div[2]/div[1]/div/div/div[3]"
    );
    if (nextButton.length > 0) {
      await delay(getRandomInt(3000, 5000));
      await nextButton[0].click();
    } else {
      throw new Error("Next button not found. Please check your selector.");
    }
  }
  async function saveReels(page, numsSave, minDuration, maxDuration) {
    // click video
    const video = await page.$('a[aria-label="Video"]');
    if (video == null) {
      throw new Error("Video button not found. Please check your selector.");
    }
    await delay(3000);
    await video.click();
    await delay(3000);
    // click reels
    const reel = await page.$('a[href="/reel/"]');
    if (reel == null) {
      throw new Error("Reels button not found. Please check your selector.");
    }
    await delay(3000);
    await reel.click();
    await delay(3000);
    let saveReels = 0;
    const startTime = new Date();
    let count = 0;
    const durationInMs =
      (Math.random() * (maxDuration - minDuration) + minDuration) * 60000; // chọn 1 mốc thời gian để dừng trong khoảng min và max
    // Tính toán thời gian chờ giữa mỗi lần save
    const waitTimeBetweenPosts = durationInMs / numsSave;
    while (Date.now() - startTime < durationInMs) {
      if (saveReels >= numsSave) {
        // Nếu đã save đủ bài, chỉ bấm Next
        await clickNext(page);
        continue;
      }
      // thời gian đầu sẽ lướt một thời gian, hạn chế việc vừa vào đã thực hiện chức năng
      if (count == 0) {
        let elapsedWaitTime = 0;
        while (elapsedWaitTime < durationInMs * 0.1) {
          await clickNext(page);
          await delay(getRandomInt(3000, 5000));
          elapsedWaitTime += 5000;
        }
      }
      count++;
      // Tìm nút save để click
      const saveButton = await page.$x(
        "//div[2]/div[1]/div/div[1]/div[3]/div/div/div[2]/div/div[3]"
      );
  
      if (saveButton.length > 0) {
        await saveButton[0].click();
        await delay(getRandomInt(3000, 5000));
        const save = await page.$x(
          "//div/div[5]/div/div/div[4]/div/div/div[1]/div[1]/div/div/div/div/div/div/div[1]/div/div[1]"
        );
        if (save.length > 0) {
          await save[0].click();
        } else {
          throw new Error("Save options not found. Please check your selector.");
        }
        saveReels++;
        // sau khi save thì click next, đảm bảo save đồng đều trong khoảng thời gian
        let elapsedWaitTime1 = 0;
        while (elapsedWaitTime1 < waitTimeBetweenPosts * 0.3) {
          await clickNext(page);
          elapsedWaitTime1 += 5000;
        }
      } else {
        throw new Error("Save button not found. Please check your selector.");
      }
    }
  }
  try {
    const url = "https://www.facebook.com/";
    await navigateToUrl(page, url);
    await saveReels(page, 3, 1, 3);
  } catch (error) {
    logErrors.push({
      error: "Error during save reel execution",
      detail: error.message,
    });
  }
  return logErrors;`,
  },
  {
    name: "Facebook - Unfriend",
    tags: "facebook",
    description: "Random unfriend (logged)",
    protectedCode: true,
    code: `const delay = (timeout) =>
    new Promise((resolve) => setTimeout(resolve, timeout));
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  async function navigateToUrl(page, url) {
    try {
      await page.goto(url, {
        waitUntil: "networkidle2",
      });
    } catch (error) {
      throw new Error("Error navigating to URL " + url + ": " + error.message);
    }
  }
  
  let logErrors = [];
  
  async function unFriends(page, numFriends) {
    const friendButton = await page.$('a[href="/friends/"]');
    if (friendButton == null) {
      throw new Error("Friend button not found. Please check your selector.");
    }
    await delay(3000);
    await friendButton.click();
    await delay(3000);
    const friendList = await page.$('a[href="/friends/list/"]');
    if (friendList == null) {
      throw new Error(
        "Friend list button not found. Please check your selector."
      );
    }
    await friendList.click();
    await delay(3000);
    // Lướt một khoảng random trước khi thực hiện chức năng
    let elapsedWaitTime = 0;
    while (elapsedWaitTime < 10000) {
      await page.mouse.wheel({ deltaY: getRandomInt(500, 700) });
      await delay(5000);
      elapsedWaitTime += 4000;
    }
    let count = 0;
    let moreButtons = await page.$$('div[class="x6s0dn4 x78zum5 x1q0g3np"]');
    if (moreButtons == null) {
      throw new Error("Can't found any More button. Please check your selector.");
    }
    while (count < numFriends) {
      // click random 1 người
      let randomIndex = Math.floor(Math.random() * moreButtons.length);
      let moreButton = moreButtons[randomIndex];
      await delay(5000);
      await moreButton.click();
      await delay(3000);
      const unFriendsButton = await page.$(
        'div[class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou xe8uvvx x1hl2dhg xggy1nq x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x87ps6o x1lku1pv x1a2a7pz xjyslct x9f619 x1ypdohk x78zum5 x1q0g3np x2lah0s xnqzcj9 x1gh759c xdj266r xat24cr x1344otq x1de53dj x1n2onr6 x16tdsg8 x1ja2u2z x6s0dn4 x1y1aw1k xwib8y2"]:nth-child(4)'
      );
      if (unFriendsButton == null) {
        throw new Error("Unfriend button not found. Please check your selector.");
      }
      await delay(3000);
      await unFriendsButton.click();
      await delay(3000);
      const confirm = await page.$(
        'div[class="x1n2onr6 x1ja2u2z x78zum5 x2lah0s xl56j7k x6s0dn4 xozqiw3 x1q0g3np xi112ho x17zwfj4 x585lrc x1403ito x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xbxaen2 x1u72gb5 xtvsq51 x1r1pt67"]'
      );
      if (confirm == null) {
        throw new Error("Confirm button not found. Please check your selector.");
      }
      await confirm.click();
      await delay(3000);
      count++;
    }
  }
  try {
    const url = "https://www.facebook.com/";
    await navigateToUrl(page, url);
    await unFriends(page, 2);
  } catch (error) {
    logErrors.push({
      error: "Error during unfriend execution",
      detail: error.message,
    });
  }
  return logErrors;`,
  },
  {
    name: "Facebook - Unfollow",
    tags: "facebook",
    description: "Random unfollow (logged)",
    protectedCode: true,
    code: `const delay = (timeout) =>
    new Promise((resolve) => setTimeout(resolve, timeout));
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  async function navigateToUrl(page, url) {
    try {
      await page.goto(url, {
        waitUntil: "networkidle2",
      });
    } catch (error) {
      throw new Error("Error navigating to URL " + url + ": " + error.message);
    }
  }
  let logErrors = [];
  async function unFollows(page, numFollow) {
    const friendIcon = await page.$('a[href="/friends/"]');
    if (friendIcon == null) {
      throw new Error("Friend button not found. Please check your selector.");
    }
    await delay(3000);
    await friendIcon.click();
    await delay(3000);
    const friendList = await page.$('a[href="/friends/list/"]');
    if (friendList == null) {
      throw new Error(
        "Friend list button not found. Please check your selector."
      );
    }
    await delay(2000);
    await friendList.click();
    await delay(3000);
    // Lướt một khoảng random trước khi thực hiện chức năng
    let elapsedWaitTime = 0;
    while (elapsedWaitTime < 10000) {
      await page.mouse.wheel({ deltaY: getRandomInt(300, 500) });
      await delay(5000);
      elapsedWaitTime += 5000;
    }
    let count = 0;
  
    while (count < numFollow) {
      await delay(2000);
      const elements = await page.$$(
        'div[class="x135pmgq"] > div[data-visualcompletion="ignore-dynamic"] > a[class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1q0g3np x87ps6o x1lku1pv x1a2a7pz x1lq5wgf xgqcy7u x30kzoy x9jhf4c x1lliihq"]'
      );
      console.log(elements.length);
      // const elements = await page.$$eval(
      //   'div[class="x135pmgq"] > div[data-visualcompletion="ignore-dynamic"] > a[class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1q0g3np x87ps6o x1lku1pv x1a2a7pz x1lq5wgf xgqcy7u x30kzoy x9jhf4c x1lliihq"]',
      //   (elements) => (elements ? elements.map((element) => element) : [])
      // );
      await delay(3000);
      if (elements.length === 0) {
        console.error("No elements found. Exiting loop.");
        break;
      }
  
      let randomIndex = Math.floor(Math.random() * (elements.length - 1));
      let inforButton = elements[randomIndex];
      console.log(randomIndex);
      if (inforButton) {
        await delay(2000);
        await inforButton.click();
        await delay(5000);
        const friendButton = await page.$x(
          "/html/body/div[1]/div/div[1]/div/div[3]/div/div/div/div[1]/div[1]/div[2]/div/div/div/div/div/div[1]/div[2]/div/div/div/div[4]/div/div/div[1]/div/div"
        );
        if (friendButton == null) {
          throw new Error("Friend button not found. Please check your selector.");
        }
        await delay(3000);
        await friendButton[0].click();
        await delay(5000);
        const unFollowsIcon = await page.$(
          'img[src="https://static.xx.fbcdn.net/rsrc.php/v3/yw/r/Kluyv0pwyPt.png"]'
        );
        const followIcon = await page.$(
          'img[src="https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/SBPvsU_pPhg.png"]'
        );
        if (unFollowsIcon) {
          await delay(3000);
          await unFollowsIcon.click();
          console.log("Đã click unfollow");
          await delay(3000);
          count++;
          console.log(count);
        } else if (followIcon) {
          console.log("Chưa follow. Bỏ qua");
          await delay(3000);
        } else {
          throw new Error("Unfollow icon not found. Please check your selector.");
        }
      } else {
        throw new Error(
          "Friend information not found. Please check your selector."
        );
      }
    }
  }
  try {
    const url = "https://www.facebook.com/";
    await navigateToUrl(page, url);
    await unFollows(page, 2);
  } catch (error) {
    logErrors.push({
      error: "Error during unfollow execution",
      detail: error.message,
    });
  }
  return logErrors;`,
  },
  {
    name: "Facebook - Reels - Share",
    tags: "facebook",
    description: "Watch reels - Random share post (logged)",
    protectedCode: true,
    code: `const delay = (timeout) =>
    new Promise((resolve) => setTimeout(resolve, timeout));
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  async function navigateToUrl(page, url) {
    try {
      await page.goto(url, {
        waitUntil: "networkidle2",
      });
    } catch (error) {
      throw new Error("Error navigating to URL " + url + ": " + error.message);
    }
  }
  async function clickReelIcon(page) {
    const reel = await page.$('a[href="/reel/"]');
    if (reel == null) {
      throw new Error("Reels button not found. Please check your selector.");
    }
    await delay(3000);
    await reel.click();
  }
  async function clickVideoIcon(page) {
    const video = await page.$('a[aria-label="Video"]');
    if (video == null) {
      throw new Error("Video button not found. Please check your selector.");
    }
    await delay(3000);
    await video.click();
  }
  async function clickNext(page) {
    const nextButton = await page.$x(
      "//div[2]/div/div/div[1]/div/div/div/div/div[2]/div[1]/div/div/div[3]"
    );
    if (nextButton.length > 0) {
      await delay(getRandomInt(5000, 7000));
      await nextButton[0].click();
    } else {
      throw new Error("Next button not found. Please check your selector.");
    }
  }
  let logErrors = [];
  async function shareReels(page, numsShare, minDuration, maxDuration) {
    await clickVideoIcon(page);
    await delay(3000);
    await clickReelIcon(page);
    await delay(3000);
    let shareReels = 0;
    const startTime = new Date();
    let count = 0;
    const durationInMs =
      (Math.random() * (maxDuration - minDuration) + minDuration) * 60000; // chọn 1 mốc thời gian để dừng trong khoảng min và max
    // Tính toán thời gian chờ giữa mỗi lần chia sẻ
    const waitTimeBetweenPosts = durationInMs / numsShare;
    while (Date.now() - startTime < durationInMs) {
      if (shareReels >= numsShare) {
        // Nếu đã share đủ bài, chỉ bấm Next
        await clickNext(page);
        continue;
      }
      // thời gian đầu sẽ lướt một thời gian, hạn chế việc vừa vào đã thực hiện chức năng
      if (count == 0) {
        let elapsedWaitTime = 0;
        while (elapsedWaitTime < durationInMs * 0.1) {
          await clickNext(page);
          await delay(getRandomInt(3000, 5000));
          elapsedWaitTime += 5000;
        }
      }
      count++;
      // Tìm nút share để click
      const shareButton = await page.$x(
        "//div/div[1]/div/div/div[2]/div[2]/div/div/div/div[4]"
      );
  
      if (shareButton.length > 0) {
        await shareButton[0].click();
        await delay(getRandomInt(3000, 5000));
        const dialog = await page.$(
          'div[class="x9f619 x78zum5 xl56j7k x2lwn1j xeuugli x47corl x1qjc9v5 x1bwycvy x1e558r4 x150jy0e x1x97wu9 xbr3nou xqit15g x1bi8yb4"]'
        );
        if (dialog) {
          const shareNow = await page.$(
            'div[class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x87ps6o x1lku1pv x1a2a7pz x9f619 x3nfvp2 xdt5ytf xl56j7k x1n2onr6 xh8yej3"]'
          );
          if (shareNow == null) {
            throw new Error("Can't share. Please check your selector.");
          } else {
            await shareNow.click();
            await delay(3000);
          }
        } else {
          const share = await page.$x(
            "//div/div/div[4]/div/div/div[1]/div[1]/div/div/div/div/div/div[1]/div/div/div[1]/div"
          );
          if (share.length > 0) {
            await share[0].click();
            await delay(3000);
          } else {
            throw new Error(
              "Share options not found. Please check your selector."
            );
          }
        }
        shareReels++;
        console.log(shareReels);
        // sau khi share thì click next, đảm bảo share đồng đều trong khoảng thời gian
        let elapsedWaitTime1 = 0;
        while (elapsedWaitTime1 < waitTimeBetweenPosts * 0.3) {
          await clickNext(page);
          await delay(5000);
          elapsedWaitTime1 += 5000;
        }
      } else {
        throw new Error("Share button not found. Please check your selector.");
      }
    }
  }
  try {
    const url = "https://www.facebook.com/";
    await navigateToUrl(page, url);
    await shareReels(page, 2, 1, 3);
  } catch (error) {
    logErrors.push({
      error: "Error during share reels execution",
      detail: error.message,
    });
  }
  return logErrors;`,
  },
  {
    name: "Facebook - Reels - Like",
    tags: "facebook",
    description: "Watch reels - Random like post (logged)",
    protectedCode: true,
    code: `const delay = (timeout) =>
    new Promise((resolve) => setTimeout(resolve, timeout));
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  async function navigateToUrl(page, url) {
    try {
      await page.goto(url, {
        waitUntil: "networkidle2",
      });
    } catch (error) {
      throw new Error("Error navigating to URL " + url + ": " + error.message);
    }
  }
  
  async function clickNext(page) {
    const nextButton = await page.$x(
      "//div[2]/div/div/div[1]/div/div/div/div/div[2]/div[1]/div/div/div[3]"
    );
    if (nextButton.length > 0) {
      await delay(getRandomInt(3000, 5000));
      await nextButton[0].click();
    } else {
      throw new Error("Next button not found. Please check your selector.");
    }
  }
  let logErrors = [];
  
  async function likeReels(page, numsLike, minDuration, maxDuration) {
    // click video
    const video = await page.$('a[aria-label="Video"]');
    if (video == null) {
      throw new Error("Video button not found. Please check your selector.");
    }
    await delay(3000);
    await video.click();
    await delay(3000);
    // click reels
    const reel = await page.$('a[href="/reel/"]');
    if (reel == null) {
      throw new Error("Reels button not found. Please check your selector.");
    }
    await delay(3000);
    await reel.click();
    await delay(3000);
    let likeReels = 0;
    let startTime = new Date();
    let count = 0;
    const durationInMs =
      (Math.random() * (maxDuration - minDuration) + minDuration) * 60000; // chọn 1 mốc thời gian để dừng trong khoảng min và max
    // // Tính toán thời gian chờ giữa mỗi lần like
    const waitTimeBetweenPosts = durationInMs / numsLike;
    while (Date.now() - startTime < durationInMs) {
      if (likeReels >= numsLike) {
        // Nếu đã like đủ bài, chỉ bấm Next
        await clickNext(page);
        continue;
      }
      // thời gian đầu sẽ lướt một thời gian, hạn chế việc vừa vào đã thực hiện chức năng
      if (count == 0) {
        let elapsedWaitTime = 0;
        while (elapsedWaitTime < durationInMs * 0.1) {
          await clickNext(page);
          await delay(5000);
          elapsedWaitTime += 5000;
        }
      }
      count++;
      // Tìm nút like
      const likeButton = await page.$x(
        "//div[2]/div[2]/div/div/div/div[2]/div/div/div/div[1]/div"
      );
  
      if (likeButton.length > 0) {
        await likeButton[0].click();
        await delay(getRandomInt(3000, 5000));
        likeReels++;
        // sau khi like thì click next, đảm bảo like đồng đều trong khoảng thời gian
        let elapsedWaitTime1 = 0;
        while (elapsedWaitTime1 < waitTimeBetweenPosts * 0.3) {
          await clickNext(page);
          await delay(5000);
          elapsedWaitTime1 += 5000;
        }
      } else {
        throw new Error("Like button not found. Please check your selector.");
      }
    }
  }
  try {
    const url = "https://www.facebook.com/";
    await navigateToUrl(page, url);
    await likeReels(page, 3, 1, 3);
  } catch (error) {
    logErrors.push({
      error: "Error during like reels execution",
      detail: error.message,
    });
  }
  return logErrors;`,
  },
  //Instagram
  {
    name: "Instagram - Reels - Like",
    tags: "instagram",
    description: "Watch reels - Random like post (logged)",
    protectedCode: true,
    code: `async function checkURL(page, url) {
      try {
        if (url.includes("https://www.instagram.com/")) {
          await page.goto(url, {
            timeout: 60000,
            waitUntil: "networkidle2",
          });
        } else {
          await delay(3000);
          throw new Error("Wrong url");
        }
      } catch (error) {
        throw new Error(error.message);
      }
    }
    
    const delay = (timeout) =>
      new Promise((resolve) => setTimeout(resolve, timeout));
    
    let logErrors = [];
    
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    async function watchReels(page, duration, maxLikes) {
      let countLike = 0;
      let lastProcessedIndex = 0;
      const startTime = new Date().getTime();
      const endTime = startTime + duration;
    
      await page.click("svg.x1lliihq.x1n2onr6.x5n08af[aria-label='Reels']");
      await delay(5000);
    
      while (new Date().getTime() <= endTime) {
        const itemReels = await page.$$("div.xgv127d");
        if (itemReels.length > 0) {
          let currentTime = new Date().getTime();
          if (currentTime - startTime < duration * 0.3) {
            await page.keyboard.down("PageDown");
            await delay(2000);
            lastProcessedIndex++;
            continue;
          }
    
          const likeButton = await itemReels[lastProcessedIndex].$(
            'svg[aria-label="Like"]'
          );
    
          if (likeButton) {
            if (countLike >= maxLikes) {
              await page.keyboard.down("PageDown");
              await delay(getRandomInt(5,30) * 1000);
              continue;
            }
            const shouldLike = getRandomInt(0, 2) === 0;
    
            if (shouldLike) {
              await likeButton.click();
              await delay(2000);
              countLike++;
            }
            lastProcessedIndex++;
          } else {
            throw new Error("Can't find like button");
          }
    
          await page.keyboard.down("PageDown");
          await delay(getRandomInt(5,30) * 1000);
        } else {
          throw new Error("Can't find reels post");
        }
      }
    }
    
    try {
      const url = "https://www.instagram.com/";
      await checkURL(page, url);
      const buttonLogin = await page.$$("button._ap30[type='submit']");
      if (buttonLogin.length > 0) {
        throw new Error("Not logged in yet");
      } else {
        await watchReels(page, 240000, 2);
      }
    } catch (error) {
      logErrors.push({
        error: "Error during watch reels(just like)",
        detail: error.message,
      });
    }
    
    return logErrors;`,
  },
  {
    name: "Instagram - Story",
    tags: "instagram",
    description: "Random watch story (logged)",
    protectedCode: true,
    code: `async function checkURL(page, url) {
      try {
        if (url.includes("https://www.instagram.com/")) {
          await page.goto(url, {
            timeout: 60000,
            waitUntil: "networkidle2",
          });
        } else {
          await delay(3000);
          throw new Error("Wrong url");
        }
      } catch (error) {
        throw new Error(error.message);
      }
    }
    
    const delay = (timeout) =>
      new Promise((resolve) => setTimeout(resolve, timeout));
    
    let logErrors = [];
    
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    
    async function WatchStories(page, duration) {
      let currentUrl = await page.url();
      const startTime = new Date().getTime();
      const listStory = await page.$$("button.x1fu8urw");
      if (listStory.length > 0) {
        const randomStoryIndex = getRandomInt(0, listStory.length - 1);
        await listStory[randomStoryIndex].click();
        await delay(3000);
        while (new Date().getTime() - startTime <= duration) {
          const nextButton = await page.$("div._9zm2");
          if (nextButton) {
            await nextButton.click();
            await delay(getRandomInt(2, 5) * 1000);
            currentUrl = await page.url();
            if (currentUrl === "https://www.instagram.com/") {
              throw new Error("Have seen all the stories");
            }
          } else {
            throw new Error("Can't find next button");
          }
        }
      } else {
        throw new Error("Can't find story");
      }
    }
    
    try {
      const url = "https://www.instagram.com/";
      await checkURL(page, url);
      const buttonLogin = await page.$$("button._ap30[type='submit']");
      if (buttonLogin.length > 0) {
        throw new Error("Not logged in yet");
      } else {
        await WatchStories(page, 240000);
      }
    } catch (error) {
      logErrors.push({
        error: "Error uring watch story",
        detail: error.message,
      });
    }
    
    return logErrors;`,
  },
  {
    name: "Instagram - Like",
    tags: "instagram",
    description: "Surf newsfeed - Random like post(logged)",
    protectedCode: true,
    code: `const delay = (timeout) =>
    new Promise((resolve) => setTimeout(resolve, timeout));
  
  async function checkURL(page, url) {
    try {
      if (url.includes("https://www.instagram.com/")) {
        await page.goto(url, {
          timeout: 60000,
          waitUntil: "networkidle2",
        });
      } else {
        await delay(3000);
        throw new Error("Wrong url");
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
  
  let logErrors = [];
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  async function likePost(page, duration, maxLikes) {
    const startTime = new Date().getTime();
    const endTime = startTime + duration;
    let likeCount = 0;
  
    const likeInterval = duration / maxLikes;
    const scrollDelay = getRandomInt(2, 5) * 1000;
  
    while (new Date().getTime() <= endTime) {
      let currentTime = new Date().getTime();
      if (likeCount >= maxLikes || currentTime - startTime < duration * 0.3) {
        await page.mouse.wheel({ deltaY: getRandomInt(400, 700) });
        await delay(scrollDelay);
        continue;
      }
  
      await page.mouse.wheel({ deltaY: getRandomInt(400, 700) });
      await delay(scrollDelay);
  
      const likeButtons = await page.$$("svg.xyb1xck[aria-label='Like']");
  
      if (likeButtons.length > 0) {
        const visibleLikeButtons = await Promise.all(
          likeButtons.map(async (button) => {
            const isButtonInViewPort = await button.isIntersectingViewport();
            const boundingBox = await button.boundingBox();
            const screenHeight = await page.evaluate(() => window.innerHeight);
            const distanceFromTop = boundingBox.y;
            const distanceFromBottom =
              screenHeight - (boundingBox.y + boundingBox.height);
  
            return {
              button,
              isButtonInViewPort,
              distanceFromTop,
              distanceFromBottom,
            };
          })
        );
  
        const inViewportButtons = visibleLikeButtons.filter(
          (buttonInfo) => buttonInfo.isButtonInViewPort
        );
  
        if (inViewportButtons.length > 0) {
          const randomIndex = getRandomInt(0, inViewportButtons.length - 1);
          const randomLikeButton = inViewportButtons[randomIndex].button;
          await randomLikeButton.click();
          await delay(3000);
          likeCount++;
  
          const likeStartTime = new Date().getTime();
          while (new Date().getTime() - likeStartTime < likeInterval) {
            await page.mouse.wheel({ deltaY: getRandomInt(400, 700) });
            await delay(scrollDelay);
          }
        }
      } else {
        throw new Error("No like buttons found");
      }
    }
  }
  
  try {
    const url = "https://www.instagram.com/";
    await checkURL(page, url);
    const buttonLogin = await page.$$("button._ap30[type='submit']");
    if (buttonLogin.length > 0) {
      throw new Error("Not logged in yet");
    } else {
      await likePost(page, 240000, 3);
    }
  } catch (error) {
    logErrors.push({
      error: "Error during like post",
      detail: error.message,
    });
  }
  return logErrors;`,
  },
  {
    name: "Instagram - Newsfeed",
    tags: "instagram",
    description: "Surf newsfeed (logged)",
    protectedCode: true,
    code: `let logErrors = [];
    async function checkURL(page, url) {
      try {
        if (url.includes("https://www.instagram.com/")) {
          await page.goto(url, {
            timeout: 60000,
            waitUntil: "networkidle2",
          });
        } else {
          await delay(3000);
          throw new Error("Wrong url");
        }
      } catch (error) {
        throw new Error(error.message);
      }
    }
    
    const delay = (timeout) =>
      new Promise((resolve) => setTimeout(resolve, timeout));
    
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    async function readContent(page, duration) {
      const startTime = new Date().getTime();
      const endTime = startTime + duration;
      let countReload = 0;
      while (new Date().getTime() <= endTime) {
        const scrollAmount = getRandomInt(400, 700);
        await page.mouse.wheel({ deltaY: scrollAmount });
        const randomTime = getRandomInt(4, 6);
        await delay(randomTime * 1000);
    
        const hasFullCode = await page.$("div.x1gan7if");
    
        if (hasFullCode) {
          const checkShowFullCode = await page.evaluate((button) => {
            const rect = button.getBoundingClientRect();
            return (
              rect.top >= 0 &&
              rect.left >= 0 &&
              rect.bottom <=
                (window.innerHeight || document.documentElement.clientHeight) &&
              rect.right <=
                (window.innerWidth || document.documentElement.clientWidth)
            );
          }, hasFullCode);
          if (checkShowFullCode) {
            if (countReload >= 2) {
              throw new Error("Maxium reload");
            } else {
              await page.reload();
              await delay(5000);
              countReload++;
            }
          }
        }
      }
    }
    
    try {
      const url = "https://www.instagram.com/";
      await checkURL(page, url);
      const buttonLogin = await page.$$("button._ap30[type='submit']");
      if (buttonLogin.length > 0) {
        throw new Error("Not logged in yet");
      } else {
        await readContent(page, 240000);
      }
    } catch (error) {
      logErrors.push({
        error: "Error during reading post",
        detail: error.message,
      });
    }
    return logErrors;`,
  },
  //Tiktok
  {
    name: "Tiktok - Newsfeed",
    tags: "tiktok",
    description: "Surf newsfeed (logged)",
    protectedCode: true,
    code: `async function checkURL(page, url) {
      try {
        if (url.includes("https://www.tiktok.com")) {
          await page.goto(url, {
            timeout: 60000,
            waitUntil: "networkidle2",
          });
          await delay(3000);
          let currentURL = await page.url();
          if(currentURL.includes("/explore")){
            await page.click('a[data-e2e="tiktok-logo"]')
          }
        } else {
          await delay(3000);
          throw new Error("Wrong url");
        }
      } catch (error) {
        throw new Error(error.message);
      }
    }
    const delay = (timeout) =>
      new Promise((resolve) => setTimeout(resolve, timeout));
    
    let logErrors = [];
    
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    async function readingContent(page, duration) {
      try {
        const startTime = new Date().getTime();
        const endTime = startTime + duration;
    
        await page.click("div.css-41hm0z");
        await delay(2000);
    
        while (new Date().getTime() <= endTime) {
    
          let randomDelay = getRandomInt(2,5) * 1000;
    
          const video = await page.$('div.e11s2kul4');
          await video.hover();
          await delay(2000);
          
          await goToNextPost(page);
        }
      } catch (error) {
        throw new Error("Error reading content");
      }
    }
    
    async function goToNextPost(page) {
      try {
        let randomDelay = getRandomInt(30, 60) * 1000;
    
        const timeText = await page.$eval(
          "div.css-o2z5xv-DivSeekBarTimeContainer.e1rpry1m1",
          (element) => element.textContent
        );
        
        const [currentTime, totalTime] = timeText.split('/').map((time) => time.trim());
    
        let [minutes, seconds] = totalTime.split(':').map(Number);
        let [minutesCurentTime, secondsCurentTime] = currentTime.split(':').map(Number);
        
        let duration = (minutes * 60 + seconds) * 1000;
        let durationCurentTime = (minutesCurentTime * 60 + secondsCurentTime) * 1000;
        
        if (duration < randomDelay) {
          randomDelay = duration - durationCurentTime - 1500;
        }
        
        await delay(randomDelay);
        await page.click('button[data-e2e="arrow-right"]');
        
        
      } catch (error) {
        throw new Error("Error clicking next post " + error.message);
      }
    }
    
    try {
      const url = "https://www.tiktok.com";
      await checkURL(page, url);
      await delay(3000);
      const buttonLogin = await page.$$("button#header-login-button[type='button']"); 
      if (buttonLogin.length > 0) {
        throw new Error("Not logged in yet");
      } else {
        await readingContent(page, 240000);
      }
    } catch (error) {
      logErrors.push({
        error: "Error",
        detail: error.message,
      });
      console.log(logErrors);
    }
    
    return logErrors;`,
  },
  {
    name: "Tiktok - Like",
    tags: "tiktok",
    description: "Surf newsfeed - Random like post(logged)",
    protectedCode: true,
    code: `async function checkURL(page, url) {
      try {
        if (url.includes("https://www.tiktok.com")) {
          await page.goto(url, {
            timeout: 60000,
            waitUntil: "networkidle2",
          });
          await delay(3000);
          let currentURL = await page.url();
          if(currentURL.includes("/explore")){
            await page.click('a[data-e2e="tiktok-logo"]')
          }
        } else {
          await delay(3000);
          throw new Error("Wrong url");
        }
      } catch (error) {
        throw new Error(error.message);
      }
    }
    
    const delay = (timeout) =>
      new Promise((resolve) => setTimeout(resolve, timeout));
    
    let logErrors = [];
    
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    async function likePost(page, duration, maxLikes) {
    
        let countLike = 0;
        const startTime = new Date().getTime();
        const endTime = startTime + duration;
        let checked = true;
        await page.click("div.css-41hm0z");
        await delay(2000);
    
        while (new Date().getTime() <= endTime) {
    
            const clickLike = await processLike(
              page,
              countLike,
              startTime,
              duration,
              maxLikes,
              checked
            );
            if (clickLike) {
              await goToNextPost(page);
            } else {
              break;
            }
        }
    }
    async function processLike(
      page,
      countLike,
      startTime,
      duration,
      maxLikes,
      checked
    ) {
      try {
        const likeButton = await page.$('span[data-e2e="browse-like-icon"]');
        if (likeButton) {
          if (countLike >= maxLikes) {
            await goToNextPost(page);
            return;
          }
          const isButtonVisible = await isElementVisible(page, likeButton);
          const shouldLike = getRandomInt(0, 2) === 0;
          let currentTime = new Date().getTime();
    
          if (
            shouldLike &&
            currentTime - startTime >= duration * 0.3 &&
            isButtonVisible
          ) {
            await likeButton.click();
            await delay(2000);
            countLike++;
          }
        } else {
          checked = true;
          throw new Error("Can't find like button");
        }
        return checked;
      } catch (error) {
        throw new Error(error.message);
      }
    }
    async function goToNextPost(page) {
      try {
        let randomDelay = getRandomInt(30, 60) * 1000;
        const hoverDiv = await page.$('div.e11s2kul4');
        await hoverDiv.hover();
        const timeText = await page.$eval(
          "div.css-o2z5xv-DivSeekBarTimeContainer.e1rpry1m1",
          (element) => element.textContent
        );
        
        const [currentTime, totalTime] = timeText.split('/').map((time) => time.trim());
    
        console.log("timeText: " + timeText);
    
        let [minutes, seconds] = totalTime.split(':').map(Number);
        let [minutesCurentTime, secondsCurentTime] = currentTime.split(':').map(Number);
        console.log("minutes: " + minutes);
        console.log("seconds: " + seconds);
        
        let duration = (minutes * 60 + seconds) * 1000;
        let durationCurentTime = (minutesCurentTime * 60 + secondsCurentTime) * 1000;
        console.log("duration: " + duration);
        
        console.log("randomDelay 1: " + randomDelay);
        
        if (duration < randomDelay) {
          randomDelay = duration - durationCurentTime - 2000;
          console.log("Adjusted random delay: " + randomDelay);
        }
        
        await delay(randomDelay);
        console.log("Real execution time: " + randomDelay );
        console.log("Delay completed" + "\n");
        await page.click('button[data-e2e="arrow-right"]');
        console.log("Clicking 'Next Post' button");
        await delay(2000);
        
      } catch (error) {
        throw new Error("Error clicking next post " + error.message);
      }
    }
    async function isElementVisible(page, element) {
      try {
        return await page.evaluate((el) => {
          const rect = el.getBoundingClientRect();
          return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
              (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <=
              (window.innerWidth || document.documentElement.clientWidth)
          );
        }, element);
      } catch (error) {
        throw new Error(error.message);
      }
    }
    try {
      const url = "https://www.tiktok.com";
      await checkURL(page, url);
      await delay(3000);
      const buttonLogin = await page.$$("button#header-login-button[type='button']"); 
      if (buttonLogin.length > 0) {
        throw new Error("Not logged in yet");
      } else {
        await likePost(page, 240000, 2);
      }
    } catch (error) {
      logErrors.push({
        error: "Error during like post",
        detail: error.message,
      });
    }
    
    return logErrors;`,
  },
  {
    name: "Tiktok - Share",
    tags: "tiktok",
    description: "Surf newsfeed - Random share post (logged)",
    protectedCode: true,
    code: `async function checkURL(page, url) {
      try {
        if (url.includes("https://www.tiktok.com")) {
          await page.goto(url, {
            timeout: 60000,
            waitUntil: "networkidle2",
          });
          await delay(3000);
          let currentURL = await page.url();
          if(currentURL.includes("/explore")){
            await page.click('a[data-e2e="tiktok-logo"]')
          }
        } else {
          await delay(3000);
          throw new Error("Wrong url");
        }
      } catch (error) {
        throw new Error(error.message);
      }
    }
    
    const delay = (timeout) =>
      new Promise((resolve) => setTimeout(resolve, timeout));
    
    let logErrors = [];
    
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    async function savePost(page, duration, maxSavePost) {
      try {
        let lastProcessedIndex = 0;
        let countSave = 0;
        const startTime = new Date().getTime();
        const endTime = startTime + duration;
    
        await page.click("div.css-41hm0z");
        await delay(2000);
    
        while (new Date().getTime() <= endTime) {
          try {
            const saveButton = await page.$(
              'span.css-3ahw3w-SpanIconWrapper.e1hk3hf91[data-e2e="undefined-icon"]'
            );
            if (saveButton) {
              if(countSave >= maxSavePost){
                await goToNextPost(page);
                lastProcessedIndex++;
                continue;
              }
    
              const isButtonVisible = await isElementVisible(page, saveButton);
              const shouldSave = getRandomInt(0, 2) === 0;
              let currentTime = new Date().getTime();
    
              if (
                shouldSave &&
                currentTime - startTime >= duration * 0.3 &&
                isButtonVisible
              ) {
                await saveButton.click();
                await delay(2000);
                countSave++;
              }
              lastProcessedIndex++;
              await goToNextPost(page);
            }  else {
              throw new Error("Couldn't find save button");
            }
          } catch (error) {
            throw new Error(error.message);
          }
        }
      } catch (error) {
        throw new Error(error.message);
      }
    }
    
    async function goToNextPost(page) {
      try {
        let randomDelay = getRandomInt(30, 60) * 1000;
        const hoverDiv = await page.$('div.e11s2kul4');
        await hoverDiv.hover();
        const timeText = await page.$eval(
          "div.css-o2z5xv-DivSeekBarTimeContainer.e1rpry1m1",
          (element) => element.textContent
        );
        
        const [currentTime, totalTime] = timeText.split('/').map((time) => time.trim());
    
        console.log("timeText: " + timeText);
    
        let [minutes, seconds] = totalTime.split(':').map(Number);
        let [minutesCurentTime, secondsCurentTime] = currentTime.split(':').map(Number);
        console.log("minutes: " + minutes);
        console.log("seconds: " + seconds);
        
        let duration = (minutes * 60 + seconds) * 1000;
        let durationCurentTime = (minutesCurentTime * 60 + secondsCurentTime) * 1000;
        console.log("duration: " + duration);
        
        console.log("randomDelay 1: " + randomDelay);
        
        if (duration < randomDelay) {
          randomDelay = duration - durationCurentTime - 2000;
          console.log("Adjusted random delay: " + randomDelay);
        }
        
        await delay(randomDelay);
        console.log("Real execution time: " + randomDelay );
        console.log("Delay completed" + "\n");
        await page.click('button[data-e2e="arrow-right"]');
        console.log("Clicking 'Next Post' button");
        await delay(2000);
        
      } catch (error) {
        throw new Error("Error clicking next post " + error.message);
      }
    }
    
    async function isElementVisible(page, element) {
      try {
        return await page.evaluate((el) => {
          const rect = el.getBoundingClientRect();
          return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
              (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <=
              (window.innerWidth || document.documentElement.clientWidth)
          );
        }, element);
      } catch (error) {
        throw new Error(error.message);
      }
    }
    
    try {
      const url = "https://www.tiktok.com";
      await checkURL(page, url);
      await delay(3000);
      const buttonLogin = await page.$$("button#header-login-button[type='button']"); 
      if (buttonLogin.length > 0) {
        throw new Error("Not logged in yet");
      } else {
        await savePost(page, 240000, 2);
      }
    } catch (error) {
      logErrors.push({
        error: "Error during save post",
        detail: error.message,
      });
    }
    
    return logErrors;`,
  },
  {
    name: "X(Twitter) - Newsfeed",
    tags: "twitter",
    description: "Surf newsfeed (logged)",
    protectedCode: true,
    code: `const delay = (timeout) =>
    new Promise((resolve) => setTimeout(resolve, timeout));
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  let logErrors = [];
  async function featureAutoScrollX(page, scrollTime) {
    try {
      await page.goto("https://twitter.com", {
          timeout: 60000,
          waitUntil: "networkidle2",
        });
  await delay(random(2000, 5000));
  const currentUrl = await page.url();
        if (!currentUrl.includes("twitter.com/home")) {
          logErrors.push({
            error: "title error",
            detail: "You need to log in X",
          });
          return;
        }
      const scrollTimeInMilliseconds = scrollTime * 60 * 1000;
      const startTime = new Date().getTime();
      let currentTime = new Date().getTime();
      while (currentTime - startTime < scrollTimeInMilliseconds) {
        await page.mouse.wheel({ deltaY: random(500, 1000) });
        await delay(random(2000, 5000));
        currentTime = new Date().getTime();
      }
    } catch (error) {
      logErrors.push({
        error: "title error",
        detail: error.message,
      });
    }
  }
  try {
  await featureAutoScrollX(page, 1);
  } catch (error) {
      logErrors.push({
          error: "title error",
          detail: error.message,
        });
  }
  return logErrors;`,
  },
  {
    name: "X(Twitter) - Like",
    tags: "twitter",
    description: "Surf newsfeed - Random like post(logged)",
    protectedCode: true,
    code: `const random = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    const delay = (timeout) =>
      new Promise((resolve) => setTimeout(resolve, timeout));
    let logErrors = [];
    async function featureLikeX(
      page,
      durationInMinutes,
      numberStart,
      numberFinish
    ) {
      try {
        await page.goto("https://twitter.com", {
            timeout: 60000,
            waitUntil: "networkidle2",
          });
    await delay(random(2000, 5000));
    const currentUrl = await page.url();
          if (!currentUrl.includes("twitter.com/home")) {
            logErrors.push({
              error: "title error",
              detail: "You need to log in X",
            });
            return;
          }
    await delay(random(2000, 5000));
        const durationInMilliseconds = durationInMinutes * 60 * 1000;
        const startTime = new Date().getTime();
        const likeAverageTime =
          durationInMilliseconds / (numberFinish - numberStart);
        let currentTime = new Date().getTime();
        while (currentTime - startTime < durationInMilliseconds) {
          let likeStartTime = (5 / 100) * durationInMilliseconds;
          while (currentTime - startTime < likeStartTime) {
            await page.mouse.wheel({ deltaY: random(500, 700) });
            await delay(random(2000, 5000));
            currentTime = new Date().getTime();
          }
          while (numberStart < numberFinish) {
            const likeElements = await page.$$('div[data-testid="like"]');
            await delay(random(2000, 5000));
    
            if (likeElements.length === 0) {
              logErrors.push({
                error: "title error",
                detail: "Can't find button like",
              });
              return;
            }
            const indexRandom = Math.floor(Math.random() * likeElements.length);
            const positionLike = await likeElements[indexRandom].boundingBox();
            await delay(random(2000, 5000));
            if (!positionLike) {
              logErrors.push({
                error: "title error",
                detail: "Can't find position like",
              });
              return;
            }
            const scrollToLike = async (totalHeight) => {
              if (totalHeight < positionLike.y) {
                await page.mouse.wheel({ deltaY: random(500, 700) });
                await delay(random(2000, 5000));
                return await scrollToLike(totalHeight + random(500, 700));
              }
    
              if (likeElements[indexRandom]) {
                await delay(random(4000, 7000));
                await likeElements[indexRandom].click();
                await delay(random(2000, 5000));
                return;
              } else {
                logErrors.push({
                  error: "title error",
                  detail: "Can't click like",
                });
                return;
              }
            };
            await scrollToLike(random(0, 100));
            const likeCurrentTime = new Date().getTime();
            let scrollTime = new Date().getTime();
            const waitTimeLike = random(
              (1 / 3) * likeAverageTime,
              (2 / 3) * likeAverageTime
            );
            while (scrollTime - likeCurrentTime < waitTimeLike) {
              await page.mouse.wheel({ deltaY: random(500, 700) });
              await delay(random(2000, 5000));
              scrollTime = new Date().getTime();
            }
            await delay(random(2000, 5000));
    
            numberStart++;
          }
    
          await page.mouse.wheel({ deltaY: random(500, 700) });
          await delay(random(2000, 5000));
    
          currentTime = new Date().getTime();
        }
      } catch (error) {
        logErrors.push({
          error: "title error",
          detail: error.message,
        });
      }
    }
    try {
    await featureLikeX(page, 5, 0, 4);
    } catch (error) {
        logErrors.push({
            error: "title error",
            detail: error.message,
          });
    }
    return logErrors;`,
  },
  {
    name: "X(Twitter) - Repost",
    tags: "twitter",
    description: "Surf newsfeed - Random repost(logged)",
    protectedCode: true,
    code: ` const delay = (timeout) =>
    new Promise((resolve) => setTimeout(resolve, timeout));
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  let logErrors = [];
  async function featureShareNotTitleX(
    page,
    durationInMinutes,
    numberStart,
    numberFinish
  ) {
    try {
      await page.goto("https://twitter.com", {
          timeout: 60000,
          waitUntil: "networkidle2",
        });
  await delay(random(2000, 5000));
  const currentUrl = await page.url();
        if (!currentUrl.includes("twitter.com/home")) {
          logErrors.push({
            error: "title error",
            detail: "You need to log in X",
          });
          return;
        }
  await delay(random(2000, 5000));
      const durationInMilliseconds = durationInMinutes * 60 * 1000;
      const shareAverageTime =
        durationInMilliseconds / (numberFinish - numberStart);
      const startTime = new Date().getTime();
      let currentTime = new Date().getTime();
      while (currentTime - startTime <= durationInMilliseconds) {
        let breakTime = (5 / 100) * durationInMilliseconds;
        while (currentTime - startTime < breakTime) {
          await page.mouse.wheel({ deltaY: random(500, 700) });
          await delay(random(2000, 5000));
          currentTime = new Date().getTime();
        }
        while (numberStart < numberFinish) {
          const repostElements = await page.$$('div[data-testid="retweet"]');
  
          if (repostElements.length === 0) {
            logErrors.push({
              error: "title error",
              detail: "Can't find button share",
            });
            return;
          }
          const indexRandom = Math.floor(Math.random() * repostElements.length);
  
          try {
            await delay(random(4000, 7000));
            await repostElements[indexRandom].click();
  
            await delay(random(4000, 7000));
            await page.click('[data-testid="retweetConfirm"]');
            await delay(random(2000, 5000));
          } catch (error) {
            logErrors.push({
              error: "title error",
              detail: error.message,
            });
            return;
          }
  
          const shareCurrentTime = new Date().getTime();
          let scrollTime = new Date().getTime();
          const waitTime = random(
            (1 / 3) * shareAverageTime,
            (2 / 3) * shareAverageTime
          );
          try {
            await page.mouse.wheel({ deltaY: random(500, 700) });
            await delay(random(2000, 5000));
  
            while (scrollTime - shareCurrentTime < waitTime) {
              await page.mouse.wheel({ deltaY: random(500, 700) });
              await delay(random(2000, 5000));
              scrollTime = new Date().getTime();
            }
          } catch (error) {
            logErrors.push({
              error: "title error",
              detail: error.message,
            });
            return;
          }
  
          numberStart++;
        }
        await page.mouse.wheel({ deltaY: random(500, 700) });
        await delay(random(2000, 5000));
  
        currentTime = new Date().getTime();
      }
    } catch (error) {
      logErrors.push({
        error: "title error",
        detail: error.message,
      });
    }
  }
  try {
  await featureShareNotTitleX(page, 5, 0, 3);
  } catch (error) {
      logErrors.push({
          error: "title error",
          detail: error.message,
        });
  }
    return logErrors;`,
  },
  {
    name: "X(Twitter) - Unfollow",
    tags: "twitter",
    description: "Random unfollow",
    protectedCode: true,
    code: `const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout));
    const random = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
     let logErrors = [];
    async function featureUnfollowingX(page) {
      try {
        await page.goto("https://twitter.com", {
          timeout: 60000,
          waitUntil: "networkidle2",
        });
        await delay(random(2000, 5000));
        const currentUrl = await page.url();
        if (!currentUrl.includes("twitter.com/home")) {
          logErrors.push({
            error: "title error",
            detail: "You need to log in X",
          });
          return;
        }
        await delay(random(2000, 5000));
        const buttonProfile_0 = await page.$(
          'a[data-testid="AppTabBar_Profile_Link"]'
        );
        await delay(random(2000, 5000));
        const buttonProfile_1 = await page.$('a[aria-label="Profile"]');
        await delay(random(3000, 7000));
        if (buttonProfile_0) {
          await buttonProfile_0.click();
          await delay(random(2000, 5000));
        } else if (buttonProfile_1) {
          await buttonProfile_1.click();
          await delay(random(2000, 5000));
        } else {
          logErrors.push({
            error: "title errorr",
            message: "Can't find button profile",
          });
          return;
        }
    
        const buttonFollowing_1 = await page.$("div.css-175oi2r.r-1mf7evn");
        const buttonFollowing_0 = await page.$(
          "span.css-1qaijid.r-bcqeeo.r-qvutc0.r-poiln3.r-1b43r93.r-1cwl3u0"
        );
        await delay(random(3000, 7000));
        if (buttonFollowing_0) {
          await buttonFollowing_0.click();
          await delay(random(2000, 5000));
        } else if (buttonFollowing_1) {
          await buttonFollowing_1.click();
          await delay(random(2000, 5000));
        } else {
          logErrors.push({
            error: "title error",
            detail: "Can't find person following button",
          });
          return;
        }
        let countUnfollow = 0;
        while (countUnfollow < random(1, 3)) {
          const buttonUnfollow_0 = await page.$x(
            '//section//div//div//div//div//div//div//div//div[2]//div[1]//div//div[@class="css-175oi2r r-sdzlij r-1phboty r-rs99b7 r-lrvibr r-15ysp7h r-4wgw6l r-ymttw5 r-1loqt21 r-o7ynqc r-6416eg r-1ny4l3l"]//div//span[@class="css-1qaijid r-dnmrzs r-1udh08x r-3s2u2q r-bcqeeo r-qvutc0 r-poiln3 r-1b43r93 r-1cwl3u0"]//span[@class="css-1qaijid r-bcqeeo r-qvutc0 r-poiln3"]'
          );
          const buttonUnfollow_1 = await page.$$(
            "span.css-1qaijid.r-dnmrzs.r-1udh08x.r-3s2u2q.r-bcqeeo.r-qvutc0.r-poiln3.r-1b43r93.r-1cwl3u0"
          );
          await delay(random(2000, 5000));
    
          if (buttonUnfollow_0.length > 0) {
              if (buttonFollowing_0.length === 1) {
            await delay(random(3000, 5000));
            await buttonFollowing_0[0].click();
            return;
          } else if (buttonFollowing_1.length === 1) {
            await delay(random(3000, 5000));
            await buttonFollowing_1[0].click();
            return;
          }
    
          if (buttonFollowing_0.length === 2) {
            await delay(random(3000, 5000));
            await buttonFollowing_0[random(0, 1)].click();
            return;
          } else if (buttonFollowing_1.length === 2) {
            await delay(random(3000, 5000));
            await buttonFollowing_1[random(0, 1)].click();
            return;
          }
            const index = random(0, buttonUnfollow_0.length - 1);
            const positionUnfollow = await buttonUnfollow_0[index].boundingBox();
            if (!positionUnfollow) {
              logErrors.push({
                error: "title error",
                detail: "Can't find unfollowing position",
              });
              return;
            }
            let totalHeight = 0;
            while (totalHeight <= positionUnfollow.y) {
              await page.mouse.wheel({ detalY: random(500, 1000) });
              await delay(random(500, 1000));
              totalHeight += random(500, 1000);
            }
            await buttonUnfollow_0[index].click();
            await delay(random(2000, 5000));
            const buttonConfirmUn_0 = await page.$(
              'div[data-testid="confirmationSheetConfirm"]'
            );
            const buttonConfirmUn_1 = await page.$(
              "div.css-1rynq56.r-bcqeeo.r-qvutc0.r-37j5jr.r-q4m81j.r-a023e6.r-rjixqe.r-b88u0q.r-1awozwy.r-6koalj.r-18u37iz.r-16y2uox.r-1777fci"
            );
    
            if (buttonConfirmUn_0) {
              await buttonConfirmUn_0.click();
              await delay(random(2000, 5000));
            } else if (buttonConfirmUn_1) {
              await buttonConfirmUn_1.click();
              await delay(random(2000, 5000));
            } else {
              logErrors.push({
                error: "title error",
                detail: "Confirm unfollowing is not success",
              });
              return;
            }
          } else {
            logErrors.push({
              error: "title error",
              detail: "There are not person to unfollowing",
            });
            return;
          }
          countUnfollow++;
        }
      } catch (error) {
        logErrors.push({
          error: "title error",
          detail: error.message,
        });
      }
    }
    try {
    await featureUnfollowingX(page);   
    } catch (error) {
        logErrors.push({
            error: "title error",
            detail: error.message,
          });
    }
    return logErrors;`,
  },
  {
    name: "X(Twitter) - Save",
    tags: "twitter",
    description: "Surf newsfeed - Random save post (logged)",
    protectedCode: true,
    code: `const delay = (timeout) =>
    new Promise((resolve) => setTimeout(resolve, timeout));
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  let logErrors = [];
  async function featureSavePostsX(
    page,
    durationInMinutes,
    numberStart,
    numberFinish
  ) {
    try {
      await page.goto("https://twitter.com", {
          timeout: 60000,
          waitUntil: "networkidle2",
        });
  await delay(random(2000, 5000));
  const currentUrl = await page.url();
        if (!currentUrl.includes("twitter.com/home")) {
          logErrors.push({
            error: "title error",
            detail: "You need to log in X",
          });
          return;
        }
  await delay(random(2000, 5000));
      const durationInMilliseconds = durationInMinutes * 60 * 1000;
      const saveAverageTime =
        durationInMilliseconds / (numberFinish - numberStart);
      const startTime = new Date().getTime();
      let currentTime = new Date().getTime();
  
      while (currentTime - startTime < durationInMilliseconds) {
        while (currentTime - startTime < (5 / 100) * durationInMilliseconds) {
          await page.mouse.wheel({ deltaY: random(500, 700) });
          await delay(random(2000, 5000));
          currentTime = new Date().getTime();
        }
        while (numberStart < numberFinish) {
          const buttonSave = await page.$$('div[data-testid="bookmark"]');
          await delay(random(2000, 5000));
          if (buttonSave.length === 0) {
            logErrors.push({
              error: "title error",
              detail: "Can't find button save",
            });
            return;
          }
  
          const index = random(0, buttonSave.length - 1);
          const positionSave = await buttonSave[index].boundingBox();
          await delay(random(2000, 5000));
          if (!positionSave) {
            logErrors.push({
              error: "title error",
              detail: "Can't find position save",
            });
            return;
          }
  
          let totalHeight = 0;
          while (totalHeight < positionSave.y) {
            await page.mouse.wheel({ deltaY: random(500, 700) });
            await delay(random(2000, 5000));
            totalHeight += random(500, 700);
          }
  
          if (buttonSave[index]) {
            await delay(random(4000, 7000));
            await buttonSave[index].click();
            await delay(random(2000, 5000));
          } else {
            logErrors.push({
              error: "title error",
              detail: "Can't click save",
            });
            return;
          }
  
          const saveCurrentTime = new Date().getTime();
          let scrollTime = new Date().getTime();
          const waitSaveTime = random(
            (1 / 3) * saveAverageTime,
            (2 / 3) * saveAverageTime
          );
          while (scrollTime - saveCurrentTime < waitSaveTime) {
            await page.mouse.wheel({ deltaY: random(500, 700) });
            await delay(random(2000, 5000));
            scrollTime = new Date().getTime();
          }
          await delay(random(2000, 5000));
  
          numberStart++;
        }
        await page.mouse.wheel({ deltaY: random(500, 700) });
        await delay(random(2000, 5000));
        currentTime = new Date().getTime();
      }
    } catch (error) {
      logErrors.push({
        error: "title error",
        detail: error.message,
      });
    }
  }
  try {
  await featureSavePostsX(page, 4, 0, 3);
  } catch (error) {
      logErrors.push({
          error: "title error",
          detail: error.message,
        });
  }
  return logErrors;`,
  },
];

const request = async ({ url, method = "GET", body, config }) => {
  try {
    const options = {
      url,
      method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // "Authorization": ""
      },
      timeout: 30000,
      ...config,
    };
    if (body) {
      options.data = body;
    }
    const response = await axios(options);
    if (response.data) return response.data;
    return response;
  } catch (error) {
    return error;
  }
};

(async () => {
  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    await request({
      url: "https://api.hidemyacc.com/scripts/system/script",
      method: "POST",
      body: {
        name: element.name,
        tags: element.tags,
        description: element.description,
        protectedCode: element.protectedCode,
        code: element.code,
      },
      config: {
        headers: {
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzEwZmYwY2M0MmYxY2I0YTcxN2QyOCIsInNrZXkiOiJBRnhRNlEuSGpRS1FMcEo2cEFnRllPMWJuSTB2QVdhRkNDNU1qTzBSTFBmMFRMdnNleWg3cSIsInNlc3Npb25JZCI6IjY1NzY5YzczYzgyNTRjNGIyNDBmZGE3MiIsImlhdCI6MTcwMjI3MjExNX0.A-RLecKJ_5RYxgyY0MasJgkffbVxyFHxoHrxBEhYZ3w",
        },
      },
    }).then((res) => {
      console.log(res);
    });
  }
})();
