// 字体枚举
interface fontName  {
    name: string
    value: string
}
export const fontNames:fontName[] = [
    {
        name: '字体 fontFamily',
        value: 'Xingkai SC'
    },
    {
        name: '字体 fontFamily',
        value: 'STKaiti'
    },
    {
        name: '字体 fontFamily',
        value: 'Hanzipen SC'
    },
    {
        name: '字体 fontFamily',
        value: 'Yuanti SC'
    },
    {
        name: '字体 fontFamily',
        value: `'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif`
    }
]
interface fontSize  {
    name: string
    value: number
}
export const fontSizes:fontSize[] = [
    {
        name: '字号 1',
        value: 1
    },
    {
        name: '字号 2',
        value: 2
    },
    {
        name: '字号 3',
        value: 3
    },
    {
        name: '字号 4',
        value: 4
    },
    {
        name: '字号 5',
        value: 5
    },
    {
        name: '字号 6',
        value: 6
    },
    {
        name: '字号 7',
        value: 7
    }
]

// 预定义颜色
export const predefineColors = [
    '#000000',
    '#c0c0c0',
    '#808080',
    '#ffffff',
    '#800000',
    '#ff0000',
    '#800080',
    '#ff00ff',
    '#008000',
    '#00ff00',
    '#808000',
    '#ffff00',
    '#000080',
    '#0000ff',
    '#008080',
    '#00ffff',
    '#ffa500',
    '#f0f8ff',
    '#faebd7',
    '#7fffd4',
    '#f0ffff',
    '#f5f5dc',
    '#ffe4c4',
    '#ffebcd',
    '#8a2be2',
    '#a52a2a',
    '#deb887',
    '#5f9ea0',
    '#7fff00',
    '#d2691e',
    '#ff7f50',
    '#6495ed',
    '#fff8dc',
    '#dc143c',
    '#00008b',
    '#008b8b',
    '#b8860b',
    '#a9a9a9',
    '#006400',
    '#bdb76b',
    '#8b008b',
    '#556b2f',
    '#ff8c00',
    '#9932cc',
    '#8b0000',
    '#e9967a',
    '#8fbc8f',
    '#483d8b',
    '#2f4f4f',
    '#00ced1',
    '#9400d3',
    '#ff1493',
    '#00bfff',
    '#696969',
    '#1e90ff',
    '#b22222',
    '#fffaf0',
    '#228b22',
    '#dcdcdc',
    '#f8f8ff',
    '#ffd700',
    '#daa520',
    '#adff2f',
    '#f0fff0',
    '#ff69b4',
    '#cd5c5c',
    '#4b0082',
    '#fffff0',
    '#f0e68c',
    '#e6e6fa',
    '#fff0f5',
    '#7cfc00',
    '#fffacd',
    '#add8e6',
    '#f08080',
    '#e0ffff',
    '#fafad2',
    '#90ee90',
    '#d3d3d3',
    '#ffb6c1',
    '#ffa07a',
    '#20b2aa',
    '#87cefa',
    '#778899',
    '#b0c4de',
    '#ffffe0',
    '#32cd32',
    '#faf0e6',
    '#66cdaa',
    '#0000cd',
    '#ba55d3',
    '#9370db',
    '#3cb371',
    '#7b68ee',
    '#00fa9a',
    '#48d1cc',
    '#c71585',
    '#191970',
    '#f5fffa',
    '#ffe4e1',
    '#ffe4b5',
    '#ffdead',
    '#fdf5e6',
    '#6b8e23',
    '#ff4500',
    '#da70d6',
    '#eee8aa',
    '#98fb98',
    '#afeeee',
    '#db7093',
    '#ffefd5',
    '#ffdab9',
    '#cd853f',
    '#ffc0cb',
    '#dda0dd',
    '#b0e0e6',
    '#bc8f8f',
    '#4169e1',
    '#8b4513',
    '#fa8072',
    '#f4a460',
    '#2e8b57',
    '#fff5ee',
    '#a0522d',
    '#87ceeb',
    '#6a5acd',
    '#708090',
    '#fffafa',
    '#00ff7f',
    '#4682b4',
    '#d2b48c',
    '#d8bfd8',
    '#ff6347',
    '#40e0d0',
    '#ee82ee',
    '#f5deb3',
    '#f5f5f5',
    '#9acd32',
    '#663399',
]

export const fontEmgs = '&#9194,&#9195,&#9196,&#9197,&#9198,&#9199,&#9200,&#9201,&#9202,&#9203,&#9208,&#9209,&#9210,&#9410,&#9748,&#9749,&#9757,&#9800,&#9801,&#9802,&#9803,&#9804,&#9805,&#9806,&#9807,&#9808,&#9809,&#9810,&#9811,&#9823,&#9855,&#9875,&#9889,&#9898,&#9899,&#9917,&#9918,&#9924,&#9925,&#9934,&#9935,&#9937,&#9939,&#9940,&#9961,&#9962,&#9968,&#9969,&#9970,&#9971,&#9972,&#9973,&#9975,&#9976,&#9977,&#9978,&#9981,&#9986,&#9989,&#9992,&#9993,&#9994,&#9995,&#9996,&#9997,&#9999,&#10002,&#10004,&#10006,&#10013,&#10017,&#10024,&#10035,&#10036,&#10052,&#10055,&#10060,&#10062,&#10067,&#10068,&#10069,&#10071,&#10083,&#10084,&#10133,&#10134,&#10135,&#10145,&#10160,&#10175,&#10548,&#10549,&#11013,&#11014,&#11015,&#11035,&#11036,&#11088,&#11093,&#12336,&#12349,&#12951,&#12953,&#126980,&#127183,&#127344,&#127345,&#127358,&#127359,&#127374,&#127377,&#127378,&#127379,&#127380,&#127381,&#127382,&#127383,&#127384,&#127385,&#127386,&#127489,&#127490,&#127514,&#127535,&#127538,&#127539,&#127540,&#127541,&#127542,&#127543,&#127544,&#127545,&#127546,&#127568,&#127569,&#127744,&#127745,&#127746,&#127747,&#127748,&#127749,&#127750,&#127751,&#127752,&#127753,&#127754,&#127755,&#127756,&#127757,&#127758,&#127759,&#127760,&#127761,&#127762,&#127763,&#127764,&#127765,&#127766,&#127767,&#127768,&#127769,&#127770,&#127771,&#127772,&#127773,&#127774,&#127775,&#127776,&#127777,&#127780,&#127781,&#127782,&#127783,&#127784,&#127785,&#127786,&#127787,&#127788,&#127789,&#127790,&#127791,&#127792,&#127793,&#127794,&#127795,&#127796,&#127797,&#127798,&#127799,&#127800,&#127801,&#127802,&#127803,&#127804,&#127805,&#127806,&#127807,&#127808,&#127809,&#127810,&#127811,&#127812,&#127813,&#127814,&#127815,&#127816,&#127817,&#127818,&#127819,&#127820,&#127821,&#127822,&#127823,&#127824,&#127825,&#127826,&#127827,&#127828,&#127829,&#127830,&#127831,&#127832,&#127833,&#127834,&#127835,&#127836,&#127837,&#127838,&#127839,&#127840,&#127841,&#127842,&#127843,&#127844,&#127845,&#127846,&#127847,&#127848,&#127849,&#127850,&#127851,&#127852,&#127853,&#127854,&#127855,&#127856,&#127857,&#127858,&#127859,&#127860,&#127861,&#127862,&#127863,&#127864,&#127865,&#127866,&#127867,&#127868,&#127869,&#127870,&#127871,&#127872,&#127873,&#127874,&#127875,&#127876,&#127877,&#127878,&#127879,&#127880,&#127881,&#127882,&#127883,&#127884,&#127885,&#127886,&#127887,&#127888,&#127889,&#127890,&#127891,&#127894,&#127895,&#127897,&#127898,&#127899,&#127902,&#127903,&#127904,&#127905,&#127906,&#127907,&#127908,&#127909,&#127910,&#127911,&#127912,&#127913,&#127914,&#127915,&#127916,&#127917,&#127918,&#127919,&#127920,&#127921,&#127922,&#127923,&#127924,&#127925,&#127926,&#127927,&#127928,&#127929,&#127930,&#127931,&#127932,&#127933,&#127934,&#127935,&#127936,&#127937,&#127938,&#127939,&#127940,&#127941,&#127942,&#127943,&#127944,&#127945,&#127946,&#127947,&#127948,&#127949,&#127950,&#127951,&#127952,&#127953,&#127954,&#127955,&#127956,&#127957,&#127958,&#127959,&#127960,&#127961,&#127962,&#127963,&#127964,&#127965,&#127966,&#127967,&#127968,&#127969,&#127970,&#127971,&#127972,&#127973,&#127974,&#127975,&#127976,&#127977,&#127978,&#127979,&#127980,&#127981,&#127982,&#127983,&#127984,&#127987,&#127988,&#127989,&#127991,&#127992,&#127993,&#127994,&#127995,&#127996,&#127997,&#127998,&#127999,&#128000,&#128001,&#128002,&#128003,&#128004,&#128005,&#128006,&#128007,&#128008,&#128009,&#128010,&#128011,&#128012,&#128013,&#128014,&#128015,&#128016,&#128017,&#128018,&#128019,&#128020,&#128021,&#128022,&#128023,&#128024,&#128025,&#128026,&#128027,&#128028,&#128029,&#128030,&#128031,&#128032,&#128033,&#128034,&#128035,&#128036,&#128037,&#128038,&#128039,&#128040,&#128041,&#128042,&#128043,&#128044,&#128045,&#128046,&#128047,&#128048,&#128049,&#128050,&#128051,&#128052,&#128053,&#128054,&#128055,&#128056,&#128057,&#128058,&#128059,&#128060,&#128061,&#128062,&#128063,&#128064,&#128065,&#128066,&#128067,&#128068,&#128069,&#128070,&#128071,&#128072,&#128073,&#128074,&#128075,&#128076,&#128077,&#128078,&#128079,&#128080,&#128081,&#128082,&#128083,&#128084,&#128085,&#128086,&#128087,&#128088,&#128089,&#128090,&#128091,&#128092,&#128093,&#128094,&#128095,&#128096,&#128097,&#128098,&#128099,&#128100,&#128101,&#128102,&#128103,&#128104,&#128105,&#128106,&#128107,&#128108,&#128109,&#128110,&#128111,&#128112,&#128113,&#128114,&#128115,&#128116,&#128117,&#128118,&#128119,&#128120,&#128121,&#128122,&#128123,&#128124,&#128125,&#128126,&#128127,&#128128,&#128129,&#128130,&#128131,&#128132,&#128133,&#128134,&#128135,&#128136,&#128137,&#128138,&#128139,&#128140,&#128141,&#128142,&#128143,&#128144,&#128145,&#128146,&#128147,&#128148,&#128149,&#128150,&#128151,&#128152,&#128153,&#128154,&#128155,&#128156,&#128157,&#128158,&#128159,&#128160,&#128161,&#128162,&#128163,&#128164,&#128165,&#128166,&#128167,&#128168,&#128169,&#128170,&#128171,&#128172,&#128173,&#128174,&#128175,&#128176,&#128177,&#128178,&#128179,&#128180,&#128181,&#128182,&#128183,&#128184,&#128185,&#128186,&#128187,&#128188,&#128189,&#128190,&#128191,&#128192,&#128193,&#128194,&#128195,&#128196,&#128197,&#128198,&#128199,&#128200,&#128201,&#128202,&#128203,&#128204,&#128205,&#128206,&#128207,&#128208,&#128209,&#128210,&#128211,&#128212,&#128213,&#128214,&#128215,&#128216,&#128217,&#128218,&#128219,&#128220,&#128221,&#128222,&#128223,&#128224,&#128225,&#128226,&#128227,&#128228,&#128229,&#128230,&#128231,&#128232,&#128233,&#128234,&#128235,&#128236,&#128237,&#128238,&#128239,&#128240,&#128241,&#128242,&#128243,&#128244,&#128245,&#128246,&#128247,&#128248,&#128249,&#128250,&#128251,&#128252,&#128253,&#128255,&#128256,&#128257,&#128258,&#128259,&#128260,&#128261,&#128262,&#128263,&#128264,&#128265,&#128266,&#128267,&#128268,&#128269,&#128270,&#128271,&#128272,&#128273,&#128274,&#128275,&#128276,&#128277,&#128278,&#128279,&#128280,&#128281,&#128282,&#128283,&#128284,&#128285,&#128286,&#128287,&#128288,&#128289,&#128290,&#128291,&#128292,&#128293,&#128294,&#128295,&#128296,&#128297,&#128298,&#128299,&#128300,&#128301,&#128302,&#128303,&#128304,&#128305,&#128306,&#128307,&#128308,&#128309,&#128310,&#128311,&#128312,&#128313,&#128314,&#128315,&#128316,&#128317,&#128329,&#128330,&#128331,&#128332,&#128333,&#128334,&#128336,&#128337,&#128338,&#128339,&#128340,&#128341,&#128342,&#128343,&#128344,&#128345,&#128346,&#128347,&#128348,&#128349,&#128350,&#128351,&#128352,&#128353,&#128354,&#128355,&#128356,&#128357,&#128358,&#128359,&#128367,&#128368,&#128371,&#128372,&#128373,&#128374,&#128375,&#128376,&#128377,&#128378,&#128391,&#128394,&#128395,&#128396,&#128397,&#128400,&#128405,&#128406,&#128420,&#128421,&#128424,&#128433,&#128434,&#128444,&#128450,&#128451,&#128452,&#128465,&#128466,&#128467,&#128476,&#128477,&#128478,&#128481,&#128483,&#128488,&#128495,&#128499,&#128506,&#128507,&#128508,&#128509,&#128510,&#128511,&#128512,&#128513,&#128514,&#128515,&#128516,&#128517,&#128518,&#128519,&#128520,&#128521,&#128522,&#128523,&#128524,&#128525,&#128526,&#128527,&#128528,&#128529,&#128530,&#128531,&#128532,&#128533,&#128534,&#128535,&#128536,&#128537,&#128538,&#128539,&#128540,&#128541,&#128542,&#128543,&#128544,&#128545,&#128546,&#128547,&#128548,&#128549,&#128550,&#128551,&#128552,&#128553,&#128554,&#128555,&#128556,&#128557,&#128558,&#128559,&#128560,&#128561,&#128562,&#128563,&#128564,&#128565,&#128566,&#128567,&#128568,&#128569,&#128570,&#128571,&#128572,&#128573,&#128574,&#128575,&#128576,&#128577,&#128578,&#128579,&#128580,&#128581,&#128582,&#128583,&#128584,&#128585,&#128586,&#128587,&#128588,&#128589,&#128590,&#128591,&#128640,&#128641,&#128642,&#128643,&#128644,&#128645,&#128646,&#128647,&#128648,&#128649,&#128650,&#128651,&#128652,&#128653,&#128654,&#128655,&#128656,&#128657,&#128658,&#128659,&#128660,&#128661,&#128662,&#128663,&#128664,&#128665,&#128666,&#128667,&#128668,&#128669,&#128670,&#128671,&#128672,&#128673,&#128674,&#128675,&#128676,&#128677,&#128678,&#128679,&#128680,&#128681,&#128682,&#128683,&#128684,&#128685,&#128686,&#128687,&#128688,&#128689,&#128690,&#128691,&#128692,&#128693,&#128694,&#128695,&#128696,&#128697,&#128698,&#128699,&#128700,&#128701,&#128702,&#128703,&#128704,&#128705,&#128706,&#128707,&#128708,&#128709,&#128715,&#128716,&#128717,&#128718,&#128719,&#128720,&#128721,&#128722,&#128736,&#128737,&#128738,&#128739,&#128740,&#128741,&#128745,&#128747,&#128748,&#128752,&#128755,&#128756,&#128757,&#128758,&#128759,&#128760,&#128761,&#128762,&#129296,&#129297,&#129298,&#129299,&#129300,&#129301,&#129302,&#129303,&#129304,&#129305,&#129306,&#129307,&#129308,&#129309,&#129310,&#129311,&#129312,&#129313,&#129314,&#129315,&#129316,&#129317,&#129318,&#129319,&#129320,&#129321,&#129322,&#129323,&#129324,&#129325,&#129326,&#129327,&#129328,&#129329,&#129330,&#129331,&#129332,&#129333,&#129334,&#129335,&#129336,&#129337,&#129338,&#129340,&#129341,&#129342,&#129344,&#129345,&#129346,&#129347,&#129348,&#129349,&#129351,&#129352,&#129353,&#129354,&#129355,&#129356,&#129357,&#129358,&#129359,&#129360,&#129361,&#129362,&#129363,&#129364,&#129365,&#129366,&#129367,&#129368,&#129369,&#129370,&#129371,&#129372,&#129373,&#129374,&#129375,&#129376,&#129377,&#129378,&#129379,&#129380,&#129381,&#129382,&#129383,&#129384,&#129385,&#129386,&#129387,&#129387,&#1129387,&#129408,&#129409,&#129410,&#129411,&#129412,&#129413,&#129414,&#129415,&#129416,&#129417,&#129418,&#129419,&#129420,&#129421,&#129422,&#129423,&#129424,&#129425,&#129426,&#129427,&#129428,&#129429,&#129430,&#129431,&#129472,&#129488,&#129489,&#129490,&#129491,&#129492,&#129493,&#129494,&#129495,&#129496,&#129497,&#129498,&#129499,&#129500,&#129501,&#129502,&#129503,&#129504,&#129505,&#129506,&#129507,&#129508,&#129509,&#129510'.split(',')
export const fontCards = [
    {
        vm: `
            <p />
                <div class="fontCard1">我是小卡片01号</div>
            <p />
        `,
        key: 'masterplate01'
    },
    {
        vm: `
            <p />
                <div class="fontCard2">我是小卡片02号</div>
            <p /> 
        `,
        key: 'masterplate02'
    },
    {
        vm: `
            <p/>
                <div class="fontCard3">我是小卡片03号</div>
            <p/>
        `,
        key: 'masterplate03'
    }
]
export const fontAnimis = [
    // 'nr-none',
    // 'nr-beat',
    // 'nr-blur',
    // 'nr-bounceAlt',
    // 'nr-tick-alt',
    'nr-bounce',
    // 'nr-clock',
    'nr-fade',
    // 'nr-flip',
    // 'nr-float',
    // 'nr-heartbeat',
    // 'nr-hit',
    // 'nr-move-ltr',
    // 'nr-move-rtl',
    // 'nr-move-ttb',
    // 'nr-move-btt',
    // 'nr-orbit',
    'nr-breath',
    // 'nr-dim',
    // 'nr-metronome',
    // 'nr-swing',
    // 'nr-wander-v',
    // 'nr-wander-h',
    // 'nr-pulse',
    // 'nr-move-fade-ltr',
    // 'nr-move-fade-rtl',
    // 'nr-move-fade-ttb',
    // 'nr-move-fade-btt',
    // 'nr-rubber-h',
    'nr-shake-v',
    // 'nr-shake-h',
    // 'nr-tick',
    // 'nr-jelly',
    'nr-damage',
    // 'nr-rush-ltr',
    // 'nr-skew-alt',
    // 'nr-slide-ltr',
    // 'nr-slide-rtl',
    // 'nr-slide-btt',
    // 'nr-slide-ttb',
    // 'nr-coin-h',
    'nr-coin-v',
    // 'nr-cycle',
    // 'nr-cycle-alt',
    // 'nr-flip-h',
    'nr-flip-v',
    // 'nr-spin-fast',
    // 'nr-squeeze',
    // 'nr-spin',
    // 'nr-surprise',
    // 'nr-measure',
    // 'nr-shiver',
    'nr-swim',
    // 'nr-vortex ',
    // 'nr-vortex-alt',
    // 'nr-wrench',
]