export type AffiliateProduct = {
  key: string;
  displayName: string;
  manufacturer: string;
  model: string;
  asin: string;
  amazonJpUrl: string;
  image?: {
    url: string;
    alt: string;
    source: 'amazon-api' | 'manufacturer-authorized';
  };
};

export const affiliateProducts = {
  kai7250ProfessionalShears: {
    key: 'kai7250ProfessionalShears',
    displayName: 'KAI 7250 Professional Shears 250mm',
    manufacturer: 'KAI Corporation',
    model: '7250',
    asin: 'B002P8YRYA',
    amazonJpUrl:
      'https://www.amazon.co.jp/%E3%82%AB%E3%82%A4%E3%82%A4%E3%83%B3%E3%83%80%E3%82%B9%E3%83%88%E3%83%AA%E3%83%BC%E3%82%BA-7250-%E8%B2%9D%E5%8D%B0-%E8%81%B7%E5%B0%82%E3%83%A9%E3%82%B7%E3%83%A3%E9%8B%8F-250%E3%8E%9C/dp/B002P8YRYA?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=1EOTXS21G7DRD&dib=eyJ2IjoiMSJ9.zkzHwV7-7E0SzoVxTFebwEgRHUpAtIG65CeZToO7bFr0M93r9v-UUuNMyv0Wp6ekc-o2TDO4WmDjrusKzHC_KHfklHJlEQImpjh_9Nn_Kc4.a9e4FQbBgffVuE8bKtpxaJlyLWmfl-V65j52AsQUnTw&dib_tag=se&keywords=KAI%2B7250%2B250mm&qid=1788933121&sprefix=%2Caps%2C284&sr=8-2&ufe=app_do%3Aamzn1.fos.35785624-70c4-44ae-a5c3-3f044f475d63&th=1&linkCode=ll2&tag=japanlivinged-22&linkId=c5b966092618a9c4f0b4b0bb8c8770ca&ref_=as_li_ss_tl',
  },
  engineerNejiSaurusGtPz58: {
    key: 'engineerNejiSaurusGtPz58',
    displayName: 'ENGINEER Neji-Saurus GT PZ-58',
    manufacturer: 'ENGINEER',
    model: 'PZ-58',
    asin: 'B002L6HJAA',
    amazonJpUrl:
      'https://www.amazon.co.jp/dp/B002L6HJAA?linkCode=ll2&tag=japanlivinged-22&ref_=as_li_ss_tl',
  },
  nychairXNy125: {
    key: 'nychairXNy125',
    displayName: 'Nychair X NY-125',
    manufacturer: 'FUJIEI',
    model: 'NY-125',
    asin: 'B01484CO6G',
    amazonJpUrl:
      'https://www.amazon.co.jp/NychairX-NY-125-%E3%83%8B%E3%83%BC%E3%83%81%E3%82%A7%E3%82%A2X-%E3%83%8A%E3%83%81%E3%83%A5%E3%83%A9%E3%83%AB%E3%82%AD%E3%83%A3%E3%83%A1%E3%83%AB/dp/B01484CO6G?mcid=6b15dd8f8e3b305d88af128b55514072&hvadid=707560138250&hvpos=&hvnetw=g&hvrand=15711211053992683247&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1028853&hvtargid=pla-442713427158&hvocijid=15711211053992683247-B01484CO6G-&hvexpln=0&th=1&linkCode=ll2&tag=japanlivinged-22&linkId=f999051c4def1756727477dc4f2bf571&ref_=as_li_ss_tl',
  },
  sekiMagorokuDamascusBlackSantoku165: {
    key: 'sekiMagorokuDamascusBlackSantoku165',
    displayName: 'KAI Seki Magoroku Damascus Black Santoku 165mm',
    manufacturer: 'KAI Corporation',
    model: '950AE2843',
    asin: 'B0GFML4Y5P',
    amazonJpUrl:
      'https://www.amazon.co.jp/%E9%96%A2%E5%AD%AB%E5%85%AD-%E3%83%80%E3%83%9E%E3%82%B9%E3%82%AB%E3%82%B9%E3%83%96%E3%83%A9%E3%83%83%E3%82%AF-165mm-%E3%83%96%E3%83%A9%E3%83%83%E3%82%AF-AE2843/dp/B0GFML4Y5P?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=2JSPBEPG67SNO&dib=eyJ2IjoiMSJ9.pAl9QAmLwdN5uDsWme9zkqB1lKd3qcw9V_D2_NsUDR4GRy4n4G03Y8HrOOSH7SZEloDaGGTbck2hEE33qoQuqgzjbysUozeNTv_XSti3dO7jsAD8oWJQsbeZSEig0_W487Id_QBBFTj1t-f5xcmbLqMLF2d2-VFn80bwLk9pHy3jli36zEEN5dElgIPYoCtd-j6maicPpzpzze5opsTxF_So8LqUSpI622Q_iBrnRLO3b5nNqtU2PpFagUX7v1UlakLs9BygQ4R2XkcL0AXhOc_Rer9Voe8UDTdu_BjPWIU.7C7OZGIXRShe5o7A0WznYlloJYJj7syuCvqaTL0BprA&dib_tag=se&keywords=%E9%96%A2%E5%AD%AB%E5%85%AD+%E3%83%80%E3%83%9E%E3%82%B9%E3%82%AB%E3%82%B9+%E4%B8%89%E5%BE%B3%E5%8C%85%E4%B8%81+165mm&qid=1788755723&sprefix=%E9%96%A2%E5%AD%AB%E5%85%AD+%E3%83%80%E3%83%9E%E3%82%B9%E3%82%AB%E3%82%B9+%E4%B8%89%E5%BE%B3%E5%8C%85%E4%B8%81+165mm%2Caps%2C322&sr=8-6&ufe=app_do%3Aamzn1.fos.35785624-70c4-44ae-a5c3-3f044f475d63&linkCode=ll2&tag=japanlivinged-22&linkId=346e5c9b519434bedce0f23ff2a14d75&ref_=as_li_ss_tl',
  },
  geoProductSaucepan16: {
    key: 'geoProductSaucepan16',
    displayName: 'GEO PRODUCT Saucepan 16cm',
    manufacturer: 'Miyazaki Seisakusho',
    model: 'GEO-16N',
    asin: 'B0000DIJ3N',
    amazonJpUrl:
      'https://www.amazon.co.jp/%E5%AE%AE%E5%B4%8E%E8%A3%BD%E4%BD%9C%E6%89%80-16cm-IH%E5%AF%BE%E5%BF%9C%E3%82%AA%E3%83%BC%E3%83%AB%E7%86%B1%E6%BA%90%E5%AF%BE%E5%BF%9C-15%E5%B9%B4%E4%BF%9D%E8%A8%BC-GEO-16N/dp/B0000DIJ3N?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dib=eyJ2IjoiMSJ9.NYxDYVuq9XBxzGyIkRpbqqHo6yUTfkxtcb1xD8KMwBTk4blp809xJL9LssYvW___9uHzgJQergLRY8v0v2gj7AytmXLkydAN07ricdrmRGrUhuErL6x7kWeIwryNLvjhfIoXY2hF1AEHM6zVYLThFiseKXzLQtt_WNV89K6t35ORlEZY1famkfN2VLZIhZ93WSvtcQnfBdACygtWBi4IAJzTI5-BNRmSEZlGayB49bHjQ7yey55idvVEgRSORWYFvt1EkdJk5G2li75jWqvOl41g1k40qtH6KKooJS9HE5Q.NHKNPOlt-3fZYGA-OvOOnl7o8VKfOUxcD5Ni8TsMKLw&dib_tag=se&keywords=GEO+PRODUCT+%E7%89%87%E6%89%8B%E9%8D%8B+16cm&qid=1788326417&sr=8-2&ufe=app_do%3Aamzn1.fos.35785624-70c4-44ae-a5c3-3f044f475d63&linkCode=ll2&tag=japanlivinged-22&linkId=1fc4360fabb1332b7e4579868c07b50b&ref_=as_li_ss_tl',
  },
  harioV60GlassDripper02Black: {
    key: 'harioV60GlassDripper02Black',
    displayName: 'HARIO V60 Glass Dripper 02, Black',
    manufacturer: 'HARIO',
    model: 'VDGR-02-B',
    asin: 'B09VX9GXHS',
    amazonJpUrl:
      'https://www.amazon.co.jp/HARIO-%E3%83%8F%E3%83%AA%E3%82%AA-%E8%80%90%E7%86%B1%E3%82%AC%E3%83%A9%E3%82%B9%E9%80%8F%E9%81%8E%E3%83%89%E3%83%AA%E3%83%83%E3%83%91%E3%83%BC-1%EF%BD%9E4%E6%9D%AF%E7%94%A8-VDGR-02-B/dp/B09VX9GXHS?th=1&linkCode=ll2&tag=japanlivinged-22&linkId=88465a3a6907c3269a4b7f1f63e2ecc8&ref_=as_li_ss_tl',
  },
  iwachuIronKettle7ArareIH: {
    key: 'iwachuIronKettle7ArareIH',
    displayName: 'IWACHU Iron Kettle 7-Type Arare, IH Compatible',
    manufacturer: 'IWACHU',
    model: '11720',
    asin: 'B091BS9VMM',
    amazonJpUrl:
      'https://www.amazon.co.jp/%E5%B2%A9%E9%8B%B3-Iwachu-7%E5%9E%8B%E3%82%A2%E3%83%A9%E3%83%AC-IH%E5%AF%BE%E5%BF%9C-11720/dp/B091BS9VMM?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=3RI7BRYJAM67V&dib=eyJ2IjoiMSJ9.1e-M-kUl4Xxybex6tVxEkjhI_8IS7WsVTpnwPEDOVOYyYD0TUo1GDsHytdBwBtRH-DWjSsCXJuTbNMnLhl-vHMhlCcQOoclh-Q-vnvwHQMquh8uT1IvVARQb_vjws8o5zTnb-l7thSPsvV2jfd6N-8Id6DDNChz1mVlrXS7PQ_Siz5BuSGHfQX6s6db4rBPKIMcTq0h3uj8VEu9v2_6WwhctVqABEDWYIyNQcIYiMFduZP1k2h-_j7Tb0_Bl4LFmcIhN9dt2rn4-Bwuqrw1ffBzkcq4Zmk6425Ip1D8F6-c.42wnT2q1pkdvKLumrA2JhPJKLAAFIx51NK23d9yPHGg&dib_tag=se&keywords=%E5%B2%A9%E9%8B%B3%2B%E9%89%84%E7%93%B6%2B7%E5%9E%8B%E3%82%A2%E3%83%A9%E3%83%AC%2BIH&qid=1788324454&sprefix=%E5%B2%A9%E9%8B%B3%2B%E9%89%84%E7%93%B6%2B7%E5%9E%8B%E3%82%A2%E3%83%A9%E3%83%AC%2Bih%2Caps%2C330&sr=8-1&ufe=app_do%3Aamzn1.fos.35785624-70c4-44ae-a5c3-3f044f475d63&th=1&linkCode=ll2&tag=japanlivinged-22&linkId=271dfaf5255f36ff71420f774283820f&ref_=as_li_ss_tl',
  },
  pilotCustom823TransparentBlackFine: {
    key: 'pilotCustom823TransparentBlackFine',
    displayName: 'PILOT CUSTOM 823, Transparent Black, Fine',
    manufacturer: 'PILOT',
    model: 'FKK-3MRP-TBF',
    asin: 'B001AXB956',
    amazonJpUrl:
      'https://www.amazon.co.jp/%E3%83%91%E3%82%A4%E3%83%AD%E3%83%83%E3%83%88-%E4%B8%87%E5%B9%B4%E7%AD%86-%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0823-FKK3MRPBNF-%E3%83%96%E3%83%A9%E3%82%A6%E3%83%B3%E8%BB%B8/dp/B001AXB956?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=AW1GV9CV50J0&dib=eyJ2IjoiMSJ9.rji8eN9h_iA35Za35XD8-q6l8raawSjlNdyIV0F-frzJ4TjAV-vhGJZfcYLVjvdR.B1YW0i_xiIEuN_6AN3P4nCCAkDy55GwlwJUpfORc72g&dib_tag=se&keywords=PILOT%2B%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0823%2B%E7%B4%B0%E5%AD%97&qid=1788323105&sprefix=pilot%2B%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0823%2B%E7%B4%B0%E5%AD%97%2Caps%2C227&sr=8-1&th=1&linkCode=ll2&tag=japanlivinged-22&linkId=b032f92c04f5a4f8b4250d845a17a150&ref_=as_li_ss_tl',
  },
  harioV60CeramicDripper02White: {
    key: 'harioV60CeramicDripper02White',
    displayName: 'HARIO V60 Ceramic Coffee Dripper, Size 02, White',
    manufacturer: 'HARIO',
    model: 'VDC-02W',
    asin: 'B000P4D5HG',
    amazonJpUrl:
      'https://www.amazon.co.jp/HARIO-%E3%83%8F%E3%83%AA%E3%82%AA-%E3%82%B3%E3%83%BC%E3%83%92%E3%83%BC%E3%83%89%E3%83%AA%E3%83%83%E3%83%91%E3%83%BC-%E3%82%B3%E3%83%BC%E3%83%92%E3%83%BC%E3%83%89%E3%83%AA%E3%83%83%E3%83%97-VDC-02W/dp/B000P4D5HG?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&th=1&linkCode=ll2&tag=japanlivinged-22&linkId=7f11d959c4485d0258a67c74d9a2c80f&ref_=as_li_ss_tl',
  },
} satisfies Record<string, AffiliateProduct>;

export type AffiliateProductKey = keyof typeof affiliateProducts;
