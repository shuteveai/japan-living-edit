export type AffiliateProduct = {
  key: string;
  displayName: string;
  manufacturer: string;
  model: string;
  asin: string;
  amazonJpUrl: string;
};

export const affiliateProducts = {
  harioV60GlassDripper02Black: {
    key: 'harioV60GlassDripper02Black',
    displayName: 'HARIO V60 Glass Dripper 02, Black',
    manufacturer: 'HARIO',
    model: 'VDGR-02-B',
    asin: 'B09VX9GXHS',
    amazonJpUrl:
      'https://www.amazon.co.jp/HARIO-%E3%83%8F%E3%83%AA%E3%82%AA-%E8%80%90%E7%86%B1%E3%82%AC%E3%83%A9%E3%82%B9%E9%80%8F%E9%81%8E%E3%83%89%E3%83%AA%E3%83%83%E3%83%91%E3%83%BC-1%EF%BD%9E4%E6%9D%AF%E7%94%A8-VDGR-02-B/dp/B09VX9GXHS?th=1&linkCode=ll2&tag=japanlivinged-22&linkId=88465a3a6907c3269a4b7f1f63e2ecc8&ref_=as_li_ss_tl',
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
