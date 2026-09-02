export type AffiliateProduct = {
  key: string;
  displayName: string;
  manufacturer: string;
  model: string;
  asin: string;
  amazonJpUrl: string;
};

export const affiliateProducts = {
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
