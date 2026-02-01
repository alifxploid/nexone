// PPOB Categories - Prabayar (Prepaid)
export const prabayarCategories = [
    {
        id: "pulsa",
        name: "Pulsa",
        enabled: true,
        providers: [
            {
                id: "telkomsel",
                name: "Telkomsel",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Telkomsel_2021_icon.svg/1200px-Telkomsel_2021_icon.svg.png",
                enabled: true,
                profitType: "percentage",
                profitValue: 5,
                products: [
                    { id: "tsel-5k", name: "Pulsa 5.000", basePrice: 5700, sellPrice: 6200, enabled: true },
                    { id: "tsel-10k", name: "Pulsa 10.000", basePrice: 10700, sellPrice: 11200, enabled: true },
                    { id: "tsel-25k", name: "Pulsa 25.000", basePrice: 25700, sellPrice: 26500, enabled: true },
                    { id: "tsel-50k", name: "Pulsa 50.000", basePrice: 50700, sellPrice: 52000, enabled: true },
                    { id: "tsel-100k", name: "Pulsa 100.000", basePrice: 100700, sellPrice: 103000, enabled: true },
                ],
            },
            {
                id: "indosat",
                name: "Indosat Ooredoo",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Logo_of_Indosat_Ooredoo_Hutchison.svg/1200px-Logo_of_Indosat_Ooredoo_Hutchison.svg.png",
                enabled: true,
                profitType: "percentage",
                profitValue: 5,
                products: [
                    { id: "isat-5k", name: "Pulsa 5.000", basePrice: 5400, sellPrice: 5900, enabled: true },
                    { id: "isat-10k", name: "Pulsa 10.000", basePrice: 10400, sellPrice: 10900, enabled: true },
                    { id: "isat-25k", name: "Pulsa 25.000", basePrice: 25400, sellPrice: 26000, enabled: true },
                    { id: "isat-50k", name: "Pulsa 50.000", basePrice: 50400, sellPrice: 51500, enabled: true },
                ],
            },
            {
                id: "xl",
                name: "XL Axiata",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/XL_logo_2016.svg/1200px-XL_logo_2016.svg.png",
                enabled: true,
                profitType: "percentage",
                profitValue: 5,
                products: [
                    { id: "xl-5k", name: "Pulsa 5.000", basePrice: 5450, sellPrice: 5950, enabled: true },
                    { id: "xl-10k", name: "Pulsa 10.000", basePrice: 10450, sellPrice: 10950, enabled: true },
                    { id: "xl-25k", name: "Pulsa 25.000", basePrice: 25450, sellPrice: 26000, enabled: true },
                ],
            },
            {
                id: "tri",
                name: "Tri (3)",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/3_logo.svg/1200px-3_logo.svg.png",
                enabled: true,
                profitType: "percentage",
                profitValue: 5,
                products: [
                    { id: "tri-5k", name: "Pulsa 5.000", basePrice: 5300, sellPrice: 5800, enabled: true },
                    { id: "tri-10k", name: "Pulsa 10.000", basePrice: 10300, sellPrice: 10800, enabled: true },
                ],
            },
        ],
    },
    {
        id: "games",
        name: "Games",
        enabled: true,
        providers: [
            {
                id: "ml",
                name: "Mobile Legends",
                logo: "https://play-lh.googleusercontent.com/HOb9v_3jCMv5Q9KXBem4Bb6cAMJgRoaGTsxJNIxJctDCZwGBBVdQS4t8zHw_xwmrLJs=w240-h480-rw",
                enabled: true,
                profitType: "percentage",
                profitValue: 8,
                products: [
                    { id: "ml-86", name: "86 Diamonds", basePrice: 18000, sellPrice: 20000, enabled: true },
                    { id: "ml-172", name: "172 Diamonds", basePrice: 35000, sellPrice: 39000, enabled: true },
                    { id: "ml-257", name: "257 Diamonds", basePrice: 52000, sellPrice: 57000, enabled: true },
                ],
            },
            {
                id: "ff",
                name: "Free Fire",
                logo: "https://play-lh.googleusercontent.com/WWcssdzTZvx7Fc84lfMhfxVxBPg9Kt8VCnX8F4xBYcL0v2iXIB6o1gDRakq3wqKw3XQ=w240-h480-rw",
                enabled: true,
                profitType: "percentage",
                profitValue: 8,
                products: [
                    { id: "ff-100", name: "100 Diamonds", basePrice: 14000, sellPrice: 16000, enabled: true },
                    { id: "ff-310", name: "310 Diamonds", basePrice: 42000, sellPrice: 47000, enabled: true },
                ],
            },
            {
                id: "pubg",
                name: "PUBG Mobile",
                logo: "https://play-lh.googleusercontent.com/JRd05pyBH41qjgsJuWduRJpDeZG0Hnb0yjf2nWqO7VaGKL10-G5DBtBSzpW0hSeqS9E=w240-h480-rw",
                enabled: true,
                profitType: "percentage",
                profitValue: 8,
                products: [
                    { id: "pubg-60", name: "60 UC", basePrice: 14000, sellPrice: 16000, enabled: true },
                    { id: "pubg-325", name: "325 UC", basePrice: 68000, sellPrice: 75000, enabled: true },
                ],
            },
        ],
    },
    {
        id: "voucher",
        name: "Voucher",
        enabled: true,
        providers: [
            {
                id: "google-play",
                name: "Google Play",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1200px-Google_Play_Store_badge_EN.svg.png",
                enabled: true,
                profitType: "fixed",
                profitValue: 2000,
                products: [
                    { id: "gp-50k", name: "Google Play 50.000", basePrice: 49000, sellPrice: 52000, enabled: true },
                    { id: "gp-100k", name: "Google Play 100.000", basePrice: 98000, sellPrice: 102000, enabled: true },
                ],
            },
        ],
    },
    {
        id: "emoney",
        name: "E-Money",
        enabled: true,
        providers: [
            {
                id: "gopay",
                name: "GoPay",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Gopay_logo.svg/1200px-Gopay_logo.svg.png",
                enabled: true,
                profitType: "fixed",
                profitValue: 1000,
                products: [
                    { id: "gopay-20k", name: "Saldo 20.000", basePrice: 20500, sellPrice: 21500, enabled: true },
                    { id: "gopay-50k", name: "Saldo 50.000", basePrice: 50500, sellPrice: 51500, enabled: true },
                ],
            },
            {
                id: "ovo",
                name: "OVO",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Logo_ovo_purple.svg/1200px-Logo_ovo_purple.svg.png",
                enabled: true,
                profitType: "fixed",
                profitValue: 1000,
                products: [
                    { id: "ovo-20k", name: "Saldo 20.000", basePrice: 20500, sellPrice: 21500, enabled: true },
                    { id: "ovo-50k", name: "Saldo 50.000", basePrice: 50500, sellPrice: 51500, enabled: true },
                ],
            },
            {
                id: "dana",
                name: "DANA",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Logo_dana_blue.svg/1200px-Logo_dana_blue.svg.png",
                enabled: true,
                profitType: "fixed",
                profitValue: 1000,
                products: [
                    { id: "dana-20k", name: "Saldo 20.000", basePrice: 20500, sellPrice: 21500, enabled: true },
                    { id: "dana-50k", name: "Saldo 50.000", basePrice: 50500, sellPrice: 51500, enabled: true },
                ],
            },
        ],
    },
    {
        id: "pln",
        name: "PLN",
        enabled: true,
        providers: [
            {
                id: "pln-prepaid",
                name: "PLN Prabayar",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Logo_PLN.svg/1200px-Logo_PLN.svg.png",
                enabled: true,
                profitType: "fixed",
                profitValue: 2000,
                products: [
                    { id: "pln-20k", name: "Token 20.000", basePrice: 20500, sellPrice: 22500, enabled: true },
                    { id: "pln-50k", name: "Token 50.000", basePrice: 50500, sellPrice: 52500, enabled: true },
                    { id: "pln-100k", name: "Token 100.000", basePrice: 100500, sellPrice: 102500, enabled: true },
                    { id: "pln-200k", name: "Token 200.000", basePrice: 200500, sellPrice: 202500, enabled: true },
                ],
            },
        ],
    },
    {
        id: "china-topup",
        name: "China TopUp",
        enabled: false,
        providers: [],
    },
    {
        id: "malaysia-topup",
        name: "Malaysia TopUp",
        enabled: false,
        providers: [],
    },
    {
        id: "philippines-topup",
        name: "Philippines TopUp",
        enabled: false,
        providers: [],
    },
    {
        id: "singapore-topup",
        name: "Singapore TopUp",
        enabled: false,
        providers: [],
    },
    {
        id: "thailand-topup",
        name: "Thailand TopUp",
        enabled: false,
        providers: [],
    },
    {
        id: "paket-sms-telp",
        name: "Paket SMS & Telp",
        enabled: true,
        providers: [
            {
                id: "tsel-sms",
                name: "Telkomsel",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Telkomsel_2021_icon.svg/1200px-Telkomsel_2021_icon.svg.png",
                enabled: true,
                profitType: "fixed",
                profitValue: 1000,
                products: [
                    { id: "tsel-sms-100", name: "100 SMS 7 Hari", basePrice: 5000, sellPrice: 6000, enabled: true },
                    { id: "tsel-telp-30", name: "30 Menit Telp 7 Hari", basePrice: 8000, sellPrice: 10000, enabled: true },
                ],
            },
        ],
    },
    {
        id: "vietnam-topup",
        name: "Vietnam TopUp",
        enabled: false,
        providers: [],
    },
    {
        id: "streaming",
        name: "Streaming",
        enabled: true,
        providers: [
            {
                id: "netflix",
                name: "Netflix",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png",
                enabled: true,
                profitType: "percentage",
                profitValue: 5,
                products: [
                    { id: "netflix-1m", name: "1 Bulan", basePrice: 54000, sellPrice: 59000, enabled: true },
                ],
            },
            {
                id: "spotify",
                name: "Spotify",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1200px-Spotify_logo_without_text.svg.png",
                enabled: true,
                profitType: "percentage",
                profitValue: 5,
                products: [
                    { id: "spotify-1m", name: "1 Bulan", basePrice: 49000, sellPrice: 55000, enabled: true },
                ],
            },
        ],
    },
    {
        id: "tv",
        name: "TV",
        enabled: true,
        providers: [
            {
                id: "vidio",
                name: "Vidio",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Vidio.com_logo.svg/1200px-Vidio.com_logo.svg.png",
                enabled: true,
                profitType: "fixed",
                profitValue: 2000,
                products: [
                    { id: "vidio-1m", name: "Premier 1 Bulan", basePrice: 49000, sellPrice: 52000, enabled: true },
                ],
            },
        ],
    },
    {
        id: "aktivasi-voucher",
        name: "Aktivasi Voucher",
        enabled: false,
        providers: [],
    },
    {
        id: "masa-aktif",
        name: "Masa Aktif",
        enabled: true,
        providers: [
            {
                id: "tsel-ma",
                name: "Telkomsel",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Telkomsel_2021_icon.svg/1200px-Telkomsel_2021_icon.svg.png",
                enabled: true,
                profitType: "fixed",
                profitValue: 500,
                products: [
                    { id: "tsel-ma-30", name: "Masa Aktif 30 Hari", basePrice: 3500, sellPrice: 5000, enabled: true },
                ],
            },
        ],
    },
    {
        id: "bundling",
        name: "Bundling",
        enabled: false,
        providers: [],
    },
    {
        id: "aktivasi-perdana",
        name: "Aktivasi Perdana",
        enabled: false,
        providers: [],
    },
    {
        id: "gas",
        name: "Gas",
        enabled: false,
        providers: [],
    },
    {
        id: "esim",
        name: "eSIM",
        enabled: false,
        providers: [],
    },
    {
        id: "paket-data-sosmed",
        name: "Paket Data Sosmed",
        enabled: true,
        providers: [
            {
                id: "tsel-sosmed",
                name: "Telkomsel",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Telkomsel_2021_icon.svg/1200px-Telkomsel_2021_icon.svg.png",
                enabled: true,
                profitType: "fixed",
                profitValue: 1500,
                products: [
                    { id: "tsel-ig-1gb", name: "Instagram 1GB 7 Hari", basePrice: 8000, sellPrice: 10000, enabled: true },
                    { id: "tsel-wa-1gb", name: "WhatsApp 1GB 7 Hari", basePrice: 6000, sellPrice: 8000, enabled: true },
                    { id: "tsel-tiktok-1gb", name: "TikTok 1GB 7 Hari", basePrice: 8000, sellPrice: 10000, enabled: true },
                ],
            },
        ],
    },
];

// PPOB Categories - Pascabayar (Postpaid)
export const pascabayarCategories = [
    {
        id: "pln-pascabayar",
        name: "PLN Pascabayar",
        enabled: true,
        providers: [
            {
                id: "pln-postpaid",
                name: "PLN Tagihan",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Logo_PLN.svg/1200px-Logo_PLN.svg.png",
                enabled: true,
                profitType: "fixed",
                profitValue: 2500,
                products: [
                    { id: "pln-tagihan", name: "Cek & Bayar Tagihan", basePrice: 0, sellPrice: 2500, enabled: true },
                ],
            },
        ],
    },
    {
        id: "pdam",
        name: "PDAM",
        enabled: true,
        providers: [
            {
                id: "pdam-all",
                name: "PDAM Seluruh Indonesia",
                logo: "https://img.icons8.com/color/96/water.png",
                enabled: true,
                profitType: "fixed",
                profitValue: 2500,
                products: [
                    { id: "pdam-tagihan", name: "Cek & Bayar Tagihan PDAM", basePrice: 0, sellPrice: 2500, enabled: true },
                ],
            },
        ],
    },
    {
        id: "hp-pascabayar",
        name: "HP Pascabayar",
        enabled: true,
        providers: [
            {
                id: "halo",
                name: "Telkomsel Halo",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Telkomsel_2021_icon.svg/1200px-Telkomsel_2021_icon.svg.png",
                enabled: true,
                profitType: "fixed",
                profitValue: 2000,
                products: [
                    { id: "halo-tagihan", name: "Bayar Tagihan Halo", basePrice: 0, sellPrice: 2000, enabled: true },
                ],
            },
            {
                id: "matrix",
                name: "Indosat Matrix",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Logo_of_Indosat_Ooredoo_Hutchison.svg/1200px-Logo_of_Indosat_Ooredoo_Hutchison.svg.png",
                enabled: true,
                profitType: "fixed",
                profitValue: 2000,
                products: [
                    { id: "matrix-tagihan", name: "Bayar Tagihan Matrix", basePrice: 0, sellPrice: 2000, enabled: true },
                ],
            },
            {
                id: "xplor",
                name: "XL Xplor",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/XL_logo_2016.svg/1200px-XL_logo_2016.svg.png",
                enabled: true,
                profitType: "fixed",
                profitValue: 2000,
                products: [
                    { id: "xplor-tagihan", name: "Bayar Tagihan Xplor", basePrice: 0, sellPrice: 2000, enabled: true },
                ],
            },
        ],
    },
    {
        id: "internet-pascabayar",
        name: "Internet Pascabayar",
        enabled: true,
        providers: [
            {
                id: "indihome",
                name: "IndiHome",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/IndiHome_Logo.svg/1200px-IndiHome_Logo.svg.png",
                enabled: true,
                profitType: "fixed",
                profitValue: 2500,
                products: [
                    { id: "indihome-tagihan", name: "Bayar Tagihan IndiHome", basePrice: 0, sellPrice: 2500, enabled: true },
                ],
            },
            {
                id: "biznet",
                name: "Biznet",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Biznet_Logo.svg/1200px-Biznet_Logo.svg.png",
                enabled: true,
                profitType: "fixed",
                profitValue: 2500,
                products: [
                    { id: "biznet-tagihan", name: "Bayar Tagihan Biznet", basePrice: 0, sellPrice: 2500, enabled: true },
                ],
            },
            {
                id: "myrepublic",
                name: "MyRepublic",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MyRepublic_logo.svg/1200px-MyRepublic_logo.svg.png",
                enabled: true,
                profitType: "fixed",
                profitValue: 2500,
                products: [
                    { id: "myrepublic-tagihan", name: "Bayar Tagihan MyRepublic", basePrice: 0, sellPrice: 2500, enabled: true },
                ],
            },
        ],
    },
    {
        id: "bpjs-kesehatan",
        name: "BPJS Kesehatan",
        enabled: true,
        providers: [
            {
                id: "bpjs-kes",
                name: "BPJS Kesehatan",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/BPJS_Kesehatan_logo.svg/1200px-BPJS_Kesehatan_logo.svg.png",
                enabled: true,
                profitType: "fixed",
                profitValue: 2500,
                products: [
                    { id: "bpjs-kes-tagihan", name: "Bayar Iuran BPJS Kesehatan", basePrice: 0, sellPrice: 2500, enabled: true },
                ],
            },
        ],
    },
    {
        id: "multifinance",
        name: "Multifinance",
        enabled: true,
        providers: [
            {
                id: "adira",
                name: "Adira Finance",
                logo: "https://img.icons8.com/color/96/bank-building.png",
                enabled: true,
                profitType: "fixed",
                profitValue: 3000,
                products: [
                    { id: "adira-tagihan", name: "Bayar Angsuran Adira", basePrice: 0, sellPrice: 3000, enabled: true },
                ],
            },
            {
                id: "fif",
                name: "FIF Group",
                logo: "https://img.icons8.com/color/96/bank-building.png",
                enabled: true,
                profitType: "fixed",
                profitValue: 3000,
                products: [
                    { id: "fif-tagihan", name: "Bayar Angsuran FIF", basePrice: 0, sellPrice: 3000, enabled: true },
                ],
            },
            {
                id: "wom",
                name: "WOM Finance",
                logo: "https://img.icons8.com/color/96/bank-building.png",
                enabled: true,
                profitType: "fixed",
                profitValue: 3000,
                products: [
                    { id: "wom-tagihan", name: "Bayar Angsuran WOM", basePrice: 0, sellPrice: 3000, enabled: true },
                ],
            },
        ],
    },
    {
        id: "pbb",
        name: "PBB",
        enabled: true,
        providers: [
            {
                id: "pbb-all",
                name: "PBB Seluruh Indonesia",
                logo: "https://img.icons8.com/color/96/tax.png",
                enabled: true,
                profitType: "fixed",
                profitValue: 3000,
                products: [
                    { id: "pbb-tagihan", name: "Bayar PBB", basePrice: 0, sellPrice: 3000, enabled: true },
                ],
            },
        ],
    },
    {
        id: "gas-negara",
        name: "Gas Negara",
        enabled: true,
        providers: [
            {
                id: "pgn",
                name: "PGN",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Logo_PGN.svg/1200px-Logo_PGN.svg.png",
                enabled: true,
                profitType: "fixed",
                profitValue: 2500,
                products: [
                    { id: "pgn-tagihan", name: "Bayar Tagihan PGN", basePrice: 0, sellPrice: 2500, enabled: true },
                ],
            },
        ],
    },
    {
        id: "tv-pascabayar",
        name: "TV Pascabayar",
        enabled: true,
        providers: [
            {
                id: "transvision",
                name: "Transvision",
                logo: "https://img.icons8.com/color/96/retro-tv.png",
                enabled: true,
                profitType: "fixed",
                profitValue: 2500,
                products: [
                    { id: "transvision-tagihan", name: "Bayar Tagihan Transvision", basePrice: 0, sellPrice: 2500, enabled: true },
                ],
            },
            {
                id: "indovision",
                name: "Indovision",
                logo: "https://img.icons8.com/color/96/retro-tv.png",
                enabled: true,
                profitType: "fixed",
                profitValue: 2500,
                products: [
                    { id: "indovision-tagihan", name: "Bayar Tagihan Indovision", basePrice: 0, sellPrice: 2500, enabled: true },
                ],
            },
        ],
    },
    {
        id: "samsat",
        name: "Samsat",
        enabled: true,
        providers: [
            {
                id: "samsat-all",
                name: "E-Samsat",
                logo: "https://img.icons8.com/color/96/car.png",
                enabled: true,
                profitType: "fixed",
                profitValue: 5000,
                products: [
                    { id: "samsat-pajak", name: "Bayar Pajak Kendaraan", basePrice: 0, sellPrice: 5000, enabled: true },
                ],
            },
        ],
    },
    {
        id: "bpjs-ketenagakerjaan",
        name: "BPJS Ketenagakerjaan",
        enabled: true,
        providers: [
            {
                id: "bpjs-tk",
                name: "BPJS Ketenagakerjaan",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/BPJS_Ketenagakerjaan_logo.svg/1200px-BPJS_Ketenagakerjaan_logo.svg.png",
                enabled: true,
                profitType: "fixed",
                profitValue: 2500,
                products: [
                    { id: "bpjs-tk-tagihan", name: "Bayar Iuran BPJS TK", basePrice: 0, sellPrice: 2500, enabled: true },
                ],
            },
        ],
    },
    {
        id: "pln-nontaglis",
        name: "PLN Nontaglis",
        enabled: true,
        providers: [
            {
                id: "pln-nontaglis-prov",
                name: "PLN Nontaglis",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Logo_PLN.svg/1200px-Logo_PLN.svg.png",
                enabled: true,
                profitType: "fixed",
                profitValue: 2500,
                products: [
                    { id: "pln-nontaglis-bayar", name: "Bayar PLN Nontaglis", basePrice: 0, sellPrice: 2500, enabled: true },
                ],
            },
        ],
    },
    {
        id: "emoney-pascabayar",
        name: "E-Money",
        enabled: false,
        providers: [],
    },
    {
        id: "telkomsel-omni",
        name: "Telkomsel Omni",
        enabled: false,
        providers: [],
    },
    {
        id: "indosat-only4u",
        name: "Indosat Only4u",
        enabled: false,
        providers: [],
    },
    {
        id: "tri-cuanmax",
        name: "Tri CuanMax",
        enabled: false,
        providers: [],
    },
    {
        id: "xl-axis-cuanku",
        name: "XL Axis Cuanku",
        enabled: false,
        providers: [],
    },
    {
        id: "byu",
        name: "By.u",
        enabled: false,
        providers: [],
    },
];

// Helper functions
export function getTotalProviders(categories: typeof prabayarCategories) {
    return categories.reduce((acc, cat) => acc + cat.providers.length, 0);
}

export function getTotalProducts(categories: typeof prabayarCategories) {
    return categories.reduce((acc, cat) => acc + cat.providers.reduce((a, p) => a + p.products.length, 0), 0);
}

export function getEnabledProviders(categories: typeof prabayarCategories) {
    return categories.reduce((acc, cat) => acc + cat.providers.filter(p => p.enabled).length, 0);
}

export function getEnabledCategories(categories: typeof prabayarCategories) {
    return categories.filter(cat => cat.enabled).length;
}
