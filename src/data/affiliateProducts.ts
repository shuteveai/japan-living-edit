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
