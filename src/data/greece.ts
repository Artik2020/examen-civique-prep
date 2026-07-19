import type { Question } from '../types'

export const greeceQuestions: Question[] = [
  // ── SANTORINI (25) ──────────────────────────────────────────────────────────
  {
    id: 'gr-san-001',
    country: 'Greece',
    region: 'Santorini',
    topic: 'Grape Varieties',
    difficulty: 'Easy',
    question: 'What is the dominant white grape variety of Santorini PDO, comprising 75% or more of plantings?',
    options: ['Athiri', 'Aidani', 'Assyrtiko', 'Malagousia'],
    answer: 2,
    explanation: 'Assyrtiko dominates Santorini, accounting for at least 75% of plantings. It is prized for its extremely high natural acidity, mineral character and ability to retain acid even in the hot volcanic island climate.'
  },
  {
    id: 'gr-san-002',
    country: 'Greece',
    region: 'Santorini',
    topic: 'Soils',
    difficulty: 'Medium',
    question: 'Why has Santorini escaped phylloxera devastation that affected most other European vineyards?',
    options: [
      'Strict quarantine laws prevented the louse from entering the island',
      'The volcanic sandy soils (aspa and pumice) are inhospitable to phylloxera',
      'Native rootstocks on Santorini are naturally resistant to phylloxera',
      'Saltwater spray from the Aegean acts as a natural phylloxera deterrent'
    ],
    answer: 1,
    explanation: 'Santorini\'s volcanic soils — composed of aspa (volcanic ash), pumice and lava — are too sandy and porous for phylloxera to survive. The louse cannot burrow effectively in these loose, non-clay soils, so vines remain ungrafted on their own roots.'
  },
  {
    id: 'gr-san-003',
    country: 'Greece',
    region: 'Santorini',
    topic: 'Grape Growing',
    difficulty: 'Medium',
    question: 'What is the name of the traditional vine training method used in Santorini, and why is it used?',
    options: [
      'Gobelet — to maximise airflow and reduce disease pressure',
      'Kouloura — to protect vines from fierce meltemi winds and preserve moisture',
      'Pergola — to shade bunches from intense summer sun',
      'Lyre — to increase exposure and maximise sugar accumulation'
    ],
    answer: 1,
    explanation: 'Kouloura (meaning "basket") is the traditional Santorini training system where vines are woven into low, circular basket shapes close to the ground. This protects the grapes from the fierce northerly meltemi winds and allows the vine to absorb overnight dew in lieu of rainfall, which averages only about 200 mm per year.'
  },
  {
    id: 'gr-san-004',
    country: 'Greece',
    region: 'Santorini',
    topic: 'Climate',
    difficulty: 'Easy',
    question: 'Approximately how much annual rainfall does Santorini typically receive?',
    options: ['600 mm', '400 mm', '200 mm', '800 mm'],
    answer: 2,
    explanation: 'Santorini receives approximately 200 mm of rainfall per year, making it one of the driest wine regions in Europe. Vines survive partly by absorbing moisture from overnight dew and mist, which condenses on the leaves and soil.'
  },
  {
    id: 'gr-san-005',
    country: 'Greece',
    region: 'Santorini',
    topic: 'Styles',
    difficulty: 'Medium',
    question: 'Vinsanto from Santorini is produced using which winemaking method?',
    options: [
      'Botrytis-affected grapes harvested late',
      'Sun-dried grapes followed by minimum 2 years of oak ageing',
      'Freeze-concentration of must (cryoextraction)',
      'Fortification with neutral grape spirit during fermentation'
    ],
    answer: 1,
    explanation: 'Santorini Vinsanto is made by sun-drying harvested grapes (Assyrtiko, Aidani, Athiri) on mats or rooftops to concentrate sugars, followed by fermentation and a minimum of two years\' ageing in oak barrels. It is not botrytis-affected and is not fortified.'
  },
  {
    id: 'gr-san-006',
    country: 'Greece',
    region: 'Santorini',
    topic: 'Grape Varieties',
    difficulty: 'Medium',
    question: 'Which aromatic white grape is blended with Assyrtiko in Santorini Vinsanto and in some dry Santorini blends?',
    options: ['Savvatiano', 'Roditis', 'Aidani', 'Moschofilero'],
    answer: 2,
    explanation: 'Aidani is an aromatic white variety permitted in Santorini PDO. It contributes floral and fruit aromatic complexity to blended dry whites and is one of the permitted varieties in Vinsanto alongside Assyrtiko and Athiri.'
  },
  {
    id: 'gr-san-007',
    country: 'Greece',
    region: 'Santorini',
    topic: 'Classification',
    difficulty: 'Medium',
    question: 'What is the minimum Assyrtiko content required for a wine to be labelled as Santorini PDO dry white?',
    options: ['50%', '60%', '75%', '100%'],
    answer: 2,
    explanation: 'Santorini PDO dry white wine must contain a minimum of 75% Assyrtiko. The remaining percentage may be made up of permitted local white varieties such as Aidani and Athiri.'
  },
  {
    id: 'gr-san-008',
    country: 'Greece',
    region: 'Santorini',
    topic: 'Styles',
    difficulty: 'Hard',
    question: 'What does the term "Nykteri" mean in Greek, and what is its significance for Santorini wine?',
    options: [
      'It means "volcanic" and refers to the mineral terroir of the island',
      'It means "harvested at night" and refers to a style of barrel-fermented white with minimum 13.5% alcohol',
      'It means "old vine" and designates wines from pre-phylloxera ungrafted vines',
      'It means "basket vine" referring to the kouloura training system'
    ],
    answer: 1,
    explanation: 'Nykteri derives from the Greek word for "night" (nychta) and refers to the traditional practice of harvesting grapes during the cool nighttime hours to preserve acidity and aromatics. In modern Santorini wine law, Nykteri is a style category designating a barrel-fermented white wine with a minimum of 13.5% alcohol, typically richer and more textured.'
  },
  {
    id: 'gr-san-009',
    country: 'Greece',
    region: 'Santorini',
    topic: 'Grape Varieties',
    difficulty: 'Medium',
    question: 'Which sensory characteristic most distinctively sets Assyrtiko apart from the majority of other white wine grapes?',
    options: [
      'Its very low natural acidity even in warm climates',
      'Its deep golden colour and high residual sugar even in dry wines',
      'Its exceptionally high natural acidity retained even at high alcohol levels (14–15%)',
      'Its intense floral aromatics resembling Muscat'
    ],
    answer: 2,
    explanation: 'Assyrtiko is remarkable for retaining very high natural acidity even when grapes ripen to high alcohol levels of 14–15% in Santorini\'s hot volcanic climate. This combination of power and freshness is rare among white wine grapes and gives Assyrtiko exceptional ageing potential.'
  },
  {
    id: 'gr-san-010',
    country: 'Greece',
    region: 'Santorini',
    topic: 'Business',
    difficulty: 'Medium',
    question: 'Why do Santorini wines typically command higher prices than wines from most other Greek PDOs?',
    options: [
      'Santorini applies a government levy on all wine exports to fund tourism',
      'High tourism demand, extremely low yields from old vines, and the high cost of hand labour all combine to drive prices up',
      'Foreign investors have formed a cartel to maintain artificially high price floors',
      'European Union subsidies for volcanic terroir designations inflate bottle prices'
    ],
    answer: 1,
    explanation: 'Santorini\'s wine prices are driven by a combination of factors: enormous tourist demand (the island is one of Greece\'s most visited), very low yields from ancient, ungrafted vines trained in kouloura, the need for entirely hand labour on steep volcanic terrain, and the small total production area of the island.'
  },
  {
    id: 'gr-san-011',
    country: 'Greece',
    region: 'Santorini',
    topic: 'Winemaking',
    difficulty: 'Hard',
    question: 'Which key producer is credited with pioneering high-quality barrel-fermented Assyrtiko and was among the first to produce Santorini wines with international recognition?',
    options: ['Boutari', 'Domaine Sigalas', 'Gai\'a', 'Skouras'],
    answer: 1,
    explanation: 'Domaine Sigalas, founded by Paris Sigalas, is widely credited as a pioneer of quality Santorini winemaking, producing barrel-fermented Assyrtiko blends and single-variety wines that helped establish the international reputation of the appellation.'
  },
  {
    id: 'gr-san-012',
    country: 'Greece',
    region: 'Santorini',
    topic: 'Soils',
    difficulty: 'Easy',
    question: 'Santorini\'s soils are predominantly composed of which material that gives them their unique character?',
    options: [
      'Limestone and clay, similar to Burgundy',
      'Schist and granite, similar to the Northern Rhône',
      'Volcanic ash (aspa), pumice and lava',
      'Red iron-rich clay and sandstone'
    ],
    answer: 2,
    explanation: 'Santorini sits on the rim of an ancient volcanic caldera, and its soils are composed primarily of volcanic ash known locally as aspa, along with pumice and lava fragments. These soils drain rapidly, are low in nutrients and create distinctive mineral characters in the wines.'
  },
  {
    id: 'gr-san-013',
    country: 'Greece',
    region: 'Santorini',
    topic: 'Styles',
    difficulty: 'Medium',
    question: 'How does Santorini Vinsanto differ from Tuscan Vin Santo?',
    options: [
      'They are identical wines — Santorini copied the Tuscan recipe',
      'Vinsanto uses botrytis-affected grapes, while Vin Santo uses air-dried grapes',
      'Santorini Vinsanto uses sun-dried grapes and is not botrytis-affected, while Vin Santo is from air-dried grapes; they are entirely separate traditions',
      'Vin Santo is always dry while Vinsanto is always sweet'
    ],
    answer: 2,
    explanation: 'Santorini Vinsanto and Tuscan Vin Santo are entirely separate wine traditions that share a similar name. Santorini Vinsanto is made from sun-dried Assyrtiko, Aidani and Athiri; it is not botrytis-affected and is aged in oak for a minimum of two years. Tuscan Vin Santo uses air-dried Trebbiano and Malvasia grapes, often pressed and aged in small caratelli barrels, sometimes with some botrytis. Neither is fortified.'
  },
  {
    id: 'gr-san-014',
    country: 'Greece',
    region: 'Santorini',
    topic: 'Grape Growing',
    difficulty: 'Hard',
    question: 'What wind is responsible for shaping viticulture practices on Santorini, and from which direction does it blow?',
    options: [
      'The sirocco, blowing hot from the south across the Sahara',
      'The mistral, blowing cold from the northwest across the Mediterranean',
      'The meltemi, a strong dry northerly wind typical of the Aegean in summer',
      'The tramontane, blowing from the north across the Pyrenees'
    ],
    answer: 2,
    explanation: 'The meltemi is a strong, dry northerly wind that affects the Aegean islands during summer. On Santorini it can reach destructive speeds, which is why the kouloura (basket) training system was developed — the low basket shape keeps grapes close to the ground and out of the worst of the wind, while the vine\'s own canopy shelters the fruit.'
  },
  {
    id: 'gr-san-015',
    country: 'Greece',
    region: 'Santorini',
    topic: 'Winemaking',
    difficulty: 'Medium',
    question: 'Estate Argyros is a well-known Santorini producer. Which wine style is it particularly famous for?',
    options: [
      'Sparkling Assyrtiko made by traditional method',
      'Old-vine Vinsanto aged for very long periods, and single-vineyard dry Assyrtiko',
      'Red wines made from Mandilaria',
      'Unoaked Moschofilero produced from imported mainland grapes'
    ],
    answer: 1,
    explanation: 'Estate Argyros is renowned for its Vinsanto, which it ages for extended periods (some releases aged 15+ years in oak), and for producing benchmark dry Assyrtiko from old vines, including single-vineyard expressions that showcase Santorini\'s terroir.'
  },
  {
    id: 'gr-san-016',
    country: 'Greece',
    region: 'Santorini',
    topic: 'Classification',
    difficulty: 'Hard',
    question: 'Under Greek wine law, what is the older regulatory term that corresponds to the current EU classification "PDO" (Protected Designation of Origin) for the highest category of Greek wines?',
    options: ['VQPRD', 'OPAP', 'IGP', 'OPE'],
    answer: 1,
    explanation: 'OPAP (Ονομασία Προελεύσεως Ανωτέρας Ποιότητος — Appellation of Superior Quality) was the traditional Greek term for what is now classified as PDO for dry wines. The EU harmonisation introduced PDO and PGI terminology, but OPAP remains a recognised older designation on many labels.'
  },
  {
    id: 'gr-san-017',
    country: 'Greece',
    region: 'Santorini',
    topic: 'Classification',
    difficulty: 'Hard',
    question: 'What does the Greek designation OPE refer to, and which Santorini wine does it apply to?',
    options: [
      'OPE applies to all Santorini dry whites as an alternative to PDO',
      'OPE (Appellation of Origin of High Quality) applies to naturally sweet PDO wines, such as Vinsanto',
      'OPE is the Greek equivalent of the French AOC and applies to all quality wines',
      'OPE designates organic wines from PDO appellations'
    ],
    answer: 1,
    explanation: 'OPE (Ονομασία Προελεύσεως Ελεγχόμενη — Controlled Appellation of Origin) is the traditional Greek designation for naturally sweet wines of PDO quality. Santorini Vinsanto carries this designation, distinguishing it from the dry Santorini OPAP wines.'
  },
  {
    id: 'gr-san-018',
    country: 'Greece',
    region: 'Santorini',
    topic: 'Styles',
    difficulty: 'Easy',
    question: 'What flavour profile is most characteristic of dry Santorini Assyrtiko?',
    options: [
      'Rich tropical fruit (pineapple, mango) with low acidity and oaky vanilla',
      'Mineral/saline character, citrus and stone fruit, with high acidity',
      'Deeply floral (rose, lychee) with low alcohol and noticeable sweetness',
      'Earthy, mushroom and forest floor with medium acidity'
    ],
    answer: 1,
    explanation: 'Dry Santorini Assyrtiko is characterised by its pronounced mineral and saline notes (often described as reminiscent of sea spray), citrus (lemon, lime, grapefruit), green apple and stone fruit (peach, nectarine), with distinctive, mouthwatering high acidity. These features reflect the volcanic terroir and the grape\'s inherent acid-preserving character.'
  },
  {
    id: 'gr-san-019',
    country: 'Greece',
    region: 'Santorini',
    topic: 'Winemaking',
    difficulty: 'Medium',
    question: 'Gai\'a Wines produces wines in both Santorini and which other major Greek PDO?',
    options: ['Naoussa', 'Nemea', 'Mantinia', 'Goumenissa'],
    answer: 1,
    explanation: 'Gai\'a Wines is a prominent Greek producer with wineries in both Santorini (for Assyrtiko-based wines including Thalassitis) and Nemea in the Peloponnese (for Agiorgitiko-based reds including the Gaia Estate label), demonstrating how successful Greek producers often span multiple quality regions.'
  },
  {
    id: 'gr-san-020',
    country: 'Greece',
    region: 'Santorini',
    topic: 'Topography',
    difficulty: 'Easy',
    question: 'What geological feature defines the landscape of Santorini and directly influences its viticulture?',
    options: [
      'A river delta providing alluvial soils and irrigation water',
      'A caldera (collapsed volcanic crater) creating the characteristic crescent-shaped island',
      'A mountain range providing altitude and rainfall to the vineyards',
      'Glacial moraines depositing diverse mineral soils across the island'
    ],
    answer: 1,
    explanation: 'Santorini is the rim of an ancient volcanic caldera that collapsed in approximately 1600 BCE, creating the iconic crescent-shaped island around a submerged crater (now a bay). This volcanic origin is responsible for the island\'s unique soils, the ancient ungrafted vines and the island\'s dramatic topography.'
  },
  {
    id: 'gr-san-021',
    country: 'Greece',
    region: 'Santorini',
    topic: 'Grape Varieties',
    difficulty: 'Easy',
    question: 'Which third white variety, less distinguished than Assyrtiko and Aidani, is permitted in Santorini PDO blends?',
    options: ['Savvatiano', 'Athiri', 'Malagousia', 'Roditis'],
    answer: 1,
    explanation: 'Athiri is the third white grape variety permitted in Santorini PDO blends. It is lighter and less complex than Assyrtiko and contributes softness and aromatic freshness to blends, though it is less widely planted on the island.'
  },
  {
    id: 'gr-san-022',
    country: 'Greece',
    region: 'Santorini',
    topic: 'Styles',
    difficulty: 'Hard',
    question: 'Aged dry Assyrtiko from Santorini is sometimes compared to which classic white wine region, due to its combination of texture, mineral complexity and ageing potential?',
    options: [
      'Alsace Riesling',
      'White Burgundy (Chardonnay from the Côte d\'Or)',
      'Grüner Veltliner from the Wachau',
      'Vermentino from Sardinia'
    ],
    answer: 1,
    explanation: 'Aged barrel-fermented Assyrtiko from Santorini is frequently compared to white Burgundy. Both wines develop complex mineral, nutty and creamy characters with age, have excellent acidity-driven freshness and a textured palate weight. The comparison is most apt for oaked Nykteri-style or aged single-vineyard Assyrtiko from top producers.'
  },
  {
    id: 'gr-san-023',
    country: 'Greece',
    region: 'Santorini',
    topic: 'Grape Growing',
    difficulty: 'Medium',
    question: 'How do Santorini vines obtain moisture given that there is no irrigation and minimal rainfall?',
    options: [
      'Deep root systems reach underground aquifers below the volcanic rock',
      'Vines absorb overnight dew and mist that condenses on leaves and into the soil',
      'Rainwater is channelled into cisterns and slowly released into the soil by capillary action',
      'The volcanic soil retains monsoon rainfall from winter for up to 12 months'
    ],
    answer: 1,
    explanation: 'In the absence of irrigation and with only approximately 200 mm of annual rainfall, Santorini vines survive by absorbing moisture from overnight dew and mist that forms when humid sea air meets the cooler island surface. The low kouloura baskets keep leaves and the soil surface close to the ground where condensation is greatest.'
  },
  {
    id: 'gr-san-024',
    country: 'Greece',
    region: 'Santorini',
    topic: 'Winemaking',
    difficulty: 'Hard',
    question: 'What is the minimum oak ageing requirement for Santorini Vinsanto under PDO regulations?',
    options: [
      '6 months in barrel',
      '1 year in barrel',
      '2 years in barrel',
      '4 years in barrel'
    ],
    answer: 2,
    explanation: 'Santorini Vinsanto PDO regulations require a minimum of two years\' ageing in oak barrels before release. This extended oxidative ageing contributes to Vinsanto\'s characteristic dried fruit, coffee, caramel and nutty complexity. Some producers age their Vinsanto for far longer — Estate Argyros is known for releasing Vinsanto aged 15 or more years.'
  },
  {
    id: 'gr-san-025',
    country: 'Greece',
    region: 'Santorini',
    topic: 'Business',
    difficulty: 'Medium',
    question: 'Hatzidakis Winery was a highly regarded small Santorini estate. Which type of viticulture was it particularly associated with?',
    options: [
      'Conventional viticulture with heavy pesticide use for maximum yield',
      'Biodynamic and organic viticulture prioritising old-vine quality',
      'Experimental irrigation trials to increase yields',
      'International variety trials to introduce non-Greek grapes to the island'
    ],
    answer: 1,
    explanation: 'Hatzidakis Winery, founded by Haridimos Hatzidakis, was known for its commitment to organic and biodynamic viticulture and for producing high-quality, terroir-driven Assyrtiko and Vinsanto from old vines. The estate was regarded as one of Santorini\'s finest before Hatzidakis\'s death in 2017, after which his daughters continued the estate.'
  },

  // ── NEMEA (18) ───────────────────────────────────────────────────────────────
  {
    id: 'gr-nem-001',
    country: 'Greece',
    region: 'Nemea',
    topic: 'Grape Varieties',
    difficulty: 'Easy',
    question: 'What is the sole permitted grape variety for red Nemea PDO wines?',
    options: ['Xinomavro', 'Agiorgitiko', 'Limnio', 'Mavrodaphne'],
    answer: 1,
    explanation: 'Agiorgitiko (also known as Saint George) is the only grape permitted for red wines under the Nemea PDO. It is one of Greece\'s most widely planted red varieties and produces wines ranging from light, fresh rosés to rich, age-worthy reds.'
  },
  {
    id: 'gr-nem-002',
    country: 'Greece',
    region: 'Nemea',
    topic: 'Topography',
    difficulty: 'Medium',
    question: 'Which altitude zone within the Nemea appellation is generally considered to produce the highest quality, most balanced red wines?',
    options: [
      'Low altitude below 250 m — fertile soils produce concentrated, structured reds',
      'Mid altitude 250–650 m — balanced fruit concentration and acidity in the best reds',
      'High altitude above 650 m — cool conditions give extra richness and depth',
      'Valley floor — river proximity moderates temperatures for elegance'
    ],
    answer: 1,
    explanation: 'The mid-altitude zone between 250 and 650 metres is widely regarded as the sweet spot in Nemea. Vineyards are warm enough to ripen Agiorgitiko fully but at sufficient altitude to retain acidity and freshness. The low-altitude zone (below 250 m) tends to produce fuller, sometimes softer wines often used for rosé, while the highest zone can sometimes struggle with full ripeness.'
  },
  {
    id: 'gr-nem-003',
    country: 'Greece',
    region: 'Nemea',
    topic: 'Styles',
    difficulty: 'Easy',
    question: 'Which style of wine is commonly and successfully made from Agiorgitiko in Nemea, using short maceration to extract colour and fruit but minimal tannins?',
    options: [
      'Sparkling wine by traditional method',
      'Rosé wine',
      'Orange wine with extended skin contact',
      'Late-harvest sweet white wine'
    ],
    answer: 1,
    explanation: 'Agiorgitiko produces attractive, fruity rosés in Nemea. Short maceration extracts the grape\'s vibrant cherry and strawberry fruit and appealing pinkish-red colour while limiting tannin extraction. Nemea rosé is one of the more commercially successful styles from the region.'
  },
  {
    id: 'gr-nem-004',
    country: 'Greece',
    region: 'Nemea',
    topic: 'Grape Varieties',
    difficulty: 'Medium',
    question: 'What does the name "Agiorgitiko" mean in Greek, and what mythological association does Nemea have?',
    options: [
      'It means "acid-black" and Nemea is associated with the voyage of the Argonauts',
      'It means "Saint George" and Nemea is associated with Hercules and the Nemean Lion',
      'It means "red grape" and Nemea is associated with the god Dionysus',
      'It means "mountain wine" and Nemea is associated with the oracle at Delphi'
    ],
    answer: 1,
    explanation: 'Agiorgitiko translates directly as "Saint George" grape. Nemea has mythological associations with Hercules, specifically the First Labour — the slaying of the Nemean Lion — which is why the region sometimes refers to its wines in the context of Hercules, and why the town has adopted the lion as a symbol.'
  },
  {
    id: 'gr-nem-005',
    country: 'Greece',
    region: 'Nemea',
    topic: 'Classification',
    difficulty: 'Medium',
    question: 'Can Nemea PDO produce white wines?',
    options: [
      'Yes, Roditis and Moschofilero are permitted for white Nemea PDO',
      'No, Nemea PDO is exclusively for red wines made from Agiorgitiko',
      'Yes, but only as a minority component in red blends',
      'Yes, Nemea produces a rare white from Aidani under the PDO'
    ],
    answer: 1,
    explanation: 'Nemea PDO is exclusively for red wines produced from Agiorgitiko. There is no white Nemea PDO. Producers wishing to make white wines in the Nemea area must use a PGI designation rather than the PDO.'
  },
  {
    id: 'gr-nem-006',
    country: 'Greece',
    region: 'Nemea',
    topic: 'Soils',
    difficulty: 'Medium',
    question: 'What are the predominant soil types in the Nemea wine zone?',
    options: [
      'Volcanic ash and pumice, similar to Santorini',
      'Red schist and granite on steep slopes',
      'Limestone and clay',
      'Deep alluvial sand deposited by the Asopos River'
    ],
    answer: 2,
    explanation: 'The Nemea zone is characterised by limestone and clay soils, which contribute to the structure and ageing potential of its Agiorgitiko wines. The clay component helps retain moisture during the dry Mediterranean summers, while limestone provides drainage and mineral character.'
  },
  {
    id: 'gr-nem-007',
    country: 'Greece',
    region: 'Nemea',
    topic: 'Grape Varieties',
    difficulty: 'Medium',
    question: 'How does Agiorgitiko\'s tannin and colour profile compare to Xinomavro?',
    options: [
      'Agiorgitiko has higher tannins and deeper colour than Xinomavro',
      'Both varieties are virtually identical in tannin, colour and acidity',
      'Agiorgitiko has lower-medium tannins and medium-deep ruby colour; Xinomavro has very high tannins and lower colour intensity',
      'Agiorgitiko is always blended with Xinomavro to compensate for its lack of colour'
    ],
    answer: 2,
    explanation: 'Agiorgitiko typically shows medium to deep ruby colour, low-medium tannins and medium-high acidity, giving wines that are approachable when young. Xinomavro, by contrast, has very high tannins, very high acidity and surprisingly low colour intensity — more similar in structure to Nebbiolo — and generally requires considerable ageing.'
  },
  {
    id: 'gr-nem-008',
    country: 'Greece',
    region: 'Nemea',
    topic: 'Winemaking',
    difficulty: 'Hard',
    question: 'What are the ageing requirements that distinguish a standard Nemea PDO red from a Nemea PDO Reserve?',
    options: [
      'Standard Nemea requires no ageing; Reserve requires 6 months in oak only',
      'Reserve Nemea requires extended ageing in oak barrels and bottle ageing beyond the standard Nemea requirements',
      'The only difference is that Reserve Nemea must use 100% new French oak',
      'Reserve Nemea is aged in amphora (clay vessels) rather than oak barrels'
    ],
    answer: 1,
    explanation: 'Nemea PDO Reserve wines must meet extended ageing requirements in oak and bottle beyond those for standard Nemea. The exact minimum periods are set under Greek wine law. The Reserve category signals a producer\'s intention to produce a more structured, oak-influenced wine from higher-quality fruit, though the precise requirements have evolved with regulatory updates.'
  },
  {
    id: 'gr-nem-009',
    country: 'Greece',
    region: 'Nemea',
    topic: 'Styles',
    difficulty: 'Medium',
    question: 'What typical fruit character does young Agiorgitiko wine from Nemea most commonly express?',
    options: [
      'Black olive, dried tomato and tobacco — savoury from the start',
      'Red fruit (cherry, strawberry) with floral notes; darker plum and spice develops with concentration or age',
      'Tropical fruit (passion fruit, pineapple) due to the warm Mediterranean climate',
      'Citrus zest and green herbs because of the high-altitude growing conditions'
    ],
    answer: 1,
    explanation: 'Young Agiorgitiko from Nemea characteristically shows vibrant red fruit — fresh cherry, strawberry and raspberry — with floral violet notes. In more concentrated, mid-altitude examples or with oak ageing, darker plum, blackberry and spice notes emerge. Savoury complexity develops more with bottle age.'
  },
  {
    id: 'gr-nem-010',
    country: 'Greece',
    region: 'Nemea',
    topic: 'Winemaking',
    difficulty: 'Medium',
    question: 'Which producer is known both for its Nemea Estate red wine and its Santorini Thalassitis Assyrtiko, operating across two major Greek PDOs?',
    options: ['Boutari', 'Gai\'a Wines', 'Tselepos', 'Thymiopoulos'],
    answer: 1,
    explanation: 'Gai\'a Wines, founded by oenologist Yiannis Paraskevopoulos and agronomist Leon Karatsalos, operates in both Nemea (producing the Gaia Estate Nemea and Notios labels) and Santorini (Thalassitis Assyrtiko). The dual-region operation has helped bring international attention to both appellations.'
  },
  {
    id: 'gr-nem-011',
    country: 'Greece',
    region: 'Nemea',
    topic: 'Climate',
    difficulty: 'Medium',
    question: 'How does altitude affect the climate across Nemea\'s vineyards, and what is the consequence for wine style?',
    options: [
      'Higher altitude is always warmer due to the bowl-shaped valley trapping heat',
      'Higher altitude is cooler, leading to lighter-bodied, sometimes under-ripe wines above 650 m, while mid-altitude zones balance ripeness and freshness',
      'Altitude has negligible effect because Nemea\'s Mediterranean climate is uniform across the zone',
      'Higher altitude vineyards benefit from greater humidity and rainfall, producing richer, more concentrated wines'
    ],
    answer: 1,
    explanation: 'Altitude significantly affects Nemea\'s mesoclimates. Below 250 m the climate is warmer, vineyards are more fertile and wines can be rich but lack complexity. Mid-altitude (250–650 m) provides the balance for the best quality reds. Above 650 m, temperatures drop enough that Agiorgitiko can sometimes struggle to reach full ripeness, producing lighter, more elegant but occasionally herbaceous wines.'
  },
  {
    id: 'gr-nem-012',
    country: 'Greece',
    region: 'Nemea',
    topic: 'Business',
    difficulty: 'Easy',
    question: 'In which broader Greek region (administrative) is Nemea located?',
    options: [
      'Macedonia',
      'Attica',
      'The Peloponnese (specifically the Corinth regional unit)',
      'Thessaly'
    ],
    answer: 2,
    explanation: 'Nemea is located in the Peloponnese peninsula, in the regional unit of Corinth. The ancient town of Nemea, famous in Greek mythology for Hercules\'s First Labour (slaying the Nemean Lion), gives its name to the PDO. The Peloponnese is Greece\'s most important quality wine-producing peninsula.'
  },
  {
    id: 'gr-nem-013',
    country: 'Greece',
    region: 'Nemea',
    topic: 'Winemaking',
    difficulty: 'Hard',
    question: 'Papaioannou winery in Nemea is known for producing which style of wine that demonstrates the ageing potential of Agiorgitiko?',
    options: [
      'Light, immediately drinkable Beaujolais-style wines using carbonic maceration',
      'Age-worthy, structured Agiorgitiko reds using traditional winemaking including extended maceration',
      'Sparkling wines from Agiorgitiko using traditional method',
      'Passito-style sweet reds from sun-dried Agiorgitiko'
    ],
    answer: 1,
    explanation: 'Papaioannou winery, under the guidance of oenologist Takis Papaioannou, has become a benchmark producer for serious, age-worthy Agiorgitiko. The winery uses extended maceration and traditional winemaking to produce structured reds that demonstrate Agiorgitiko\'s potential for long-term cellaring, comparable in ambition to the region\'s finest estates.'
  },
  {
    id: 'gr-nem-014',
    country: 'Greece',
    region: 'Nemea',
    topic: 'Classification',
    difficulty: 'Easy',
    question: 'Which classification system does Nemea use for its top quality red wines?',
    options: [
      'PGI (Protected Geographical Indication)',
      'PDO (Protected Designation of Origin)',
      'Table Wine with no geographical indication',
      'IGP (Indication Géographique Protégée) under French law'
    ],
    answer: 1,
    explanation: 'Nemea red wines are classified as PDO (Protected Designation of Origin), the highest category of EU wine designation. This means wines must meet specific rules on grape variety (Agiorgitiko only), geographical origin, production methods and minimum quality standards.'
  },
  {
    id: 'gr-nem-015',
    country: 'Greece',
    region: 'Nemea',
    topic: 'Grape Growing',
    difficulty: 'Medium',
    question: 'Skouras winery is a prominent Nemea producer. What style of Agiorgitiko is it especially known for?',
    options: [
      'Light rosé wines only',
      'Both approachable fruit-forward Agiorgitiko and serious barrel-aged reds, helping establish international interest in the variety',
      'Traditional amphora-aged wines using ancient Greek techniques',
      'Organic natural wines with no sulphur additions'
    ],
    answer: 1,
    explanation: 'George Skouras established his winery in the 1980s and has been instrumental in bringing Nemea to international attention. Skouras produces a range from accessible, fruit-forward Agiorgitiko labels to more serious, oak-aged Grande Cuvée versions, spanning different quality tiers and styles to demonstrate the variety\'s versatility.'
  },
  {
    id: 'gr-nem-016',
    country: 'Greece',
    region: 'Nemea',
    topic: 'Styles',
    difficulty: 'Hard',
    question: 'Why does Agiorgitiko from the lowest-altitude vineyards in Nemea (below 250 m) tend to be used predominantly for rosé rather than premium red wine?',
    options: [
      'The soils at low altitude are too sandy to produce concentrated red wine',
      'Regulations prohibit red wine production below 250 m',
      'The warm, fertile conditions at low altitude encourage over-cropping and high yields, producing grapes better suited to fresh rosé than structured red wine',
      'Phylloxera has destroyed most red wine vines at low altitude'
    ],
    answer: 2,
    explanation: 'At altitudes below 250 m in Nemea, the warmer temperatures and fertile soils encourage vigorous vine growth and higher yields. This tends to dilute concentration and limit the intensity needed for premium red wine. The grapes from this zone are often better suited to lighter styles such as rosé, where freshness and fruit character (rather than structure and concentration) are the primary goals.'
  },
  {
    id: 'gr-nem-017',
    country: 'Greece',
    region: 'Nemea',
    topic: 'Appellations',
    difficulty: 'Medium',
    question: 'Domaine Spiropoulos is known for producing Nemea wines under which specific philosophy that sets it apart from many conventional producers in the region?',
    options: [
      'Heavy use of new American oak to appeal to international markets',
      'Certified organic viticulture',
      'Producing only sparkling wine from Agiorgitiko',
      'Using imported Syrah as a blending component with Agiorgitiko'
    ],
    answer: 1,
    explanation: 'Domaine Spiropoulos is one of the best-known certified organic producers in Nemea and across the Peloponnese. Its commitment to organic viticulture positions it as a quality-focused estate and reflects a broader trend among forward-thinking Greek wine estates.'
  },
  {
    id: 'gr-nem-018',
    country: 'Greece',
    region: 'Nemea',
    topic: 'Topography',
    difficulty: 'Easy',
    question: 'Where is the Nemea PDO zone located within the Peloponnese?',
    options: [
      'On the southwestern coast, near Kalamata',
      'In the mountainous interior of the Corinth regional unit, around the ancient town of Nemea',
      'On the northern coast of the Peloponnese overlooking the Gulf of Corinth',
      'In the Arcadian highlands near Tripoli'
    ],
    answer: 1,
    explanation: 'The Nemea PDO zone is situated in the mountainous interior of the Corinth regional unit in the northeast Peloponnese, centred around the ancient town of Nemea. The vineyards are largely at altitude on hillside and plateau terrain.'
  },

  // ── NAOUSSA (15) ─────────────────────────────────────────────────────────────
  {
    id: 'gr-nao-001',
    country: 'Greece',
    region: 'Naoussa',
    topic: 'Grape Varieties',
    difficulty: 'Easy',
    question: 'What is the sole grape variety permitted in Naoussa PDO wines?',
    options: ['Agiorgitiko', 'Limnio', 'Xinomavro', 'Mavrodaphne'],
    answer: 2,
    explanation: 'Xinomavro is the only grape permitted in Naoussa PDO. Its name means "acid-black" in Greek — a reference to its very high acidity combined with deep colour potential — though in practice its colour intensity is often lower than its tannin and acid levels suggest.'
  },
  {
    id: 'gr-nao-002',
    country: 'Greece',
    region: 'Naoussa',
    topic: 'Grape Varieties',
    difficulty: 'Medium',
    question: 'Which classic Italian red wine grape is Xinomavro most frequently compared to, and why?',
    options: [
      'Sangiovese — because of its cherry fruit and medium body',
      'Nebbiolo — because of its very high tannins, very high acidity, and relatively low colour intensity that can turn brick-orange with age',
      'Montepulciano — because of its deep colour and generous fruit',
      'Barbera — because of its low tannin and very high acidity'
    ],
    answer: 1,
    explanation: 'Xinomavro is most often compared to Nebbiolo (the grape of Barolo and Barbaresco). Both share a similar paradoxical profile: very high tannins, very high acidity and relatively low colour intensity that develops brick and orange tints with age. Both varieties also require significant ageing to integrate their tannins and develop complex aromas of dried fruit, herbs and earth.'
  },
  {
    id: 'gr-nao-003',
    country: 'Greece',
    region: 'Naoussa',
    topic: 'Styles',
    difficulty: 'Medium',
    question: 'What aroma profile is most typical of mature Xinomavro from Naoussa?',
    options: [
      'Fresh red cherry and violet with soft, round tannins',
      'Tropical fruit (mango, passion fruit) with herbal mint notes',
      'Tomato, olive, dried herbs (thyme, oregano), sour cherry, earth and spice',
      'Dark chocolate, espresso and vanilla from heavy new oak treatment'
    ],
    answer: 2,
    explanation: 'Mature Xinomavro from Naoussa develops a distinctive and complex aroma profile dominated by savoury characters: sun-dried tomato, black olive, dried herbs such as thyme and oregano, sour cherry, leather and earthy spice. These savoury, Mediterranean-herb-driven aromas, combined with the variety\'s structural backbone, are among Xinomavro\'s most celebrated attributes.'
  },
  {
    id: 'gr-nao-004',
    country: 'Greece',
    region: 'Naoussa',
    topic: 'Climate',
    difficulty: 'Medium',
    question: 'How does Naoussa\'s climate differ from that of most other Greek wine regions?',
    options: [
      'Naoussa has a maritime climate with high humidity and mild winters',
      'Naoussa has a more continental climate with cold winters and higher rainfall than southern Greece',
      'Naoussa has the same hot Mediterranean climate as Santorini but at higher altitude',
      'Naoussa has a semi-arid desert climate similar to Xinjiang'
    ],
    answer: 1,
    explanation: 'Naoussa, in northern Greek Macedonia near the Vermio mountain, has a continental climate that is significantly cooler and wetter than most Greek wine regions. Cold winters (with snow) and warm summers are moderated by altitude and the mountain. This helps preserve Xinomavro\'s high acidity and provides the long growing season the variety needs.'
  },
  {
    id: 'gr-nao-005',
    country: 'Greece',
    region: 'Naoussa',
    topic: 'Classification',
    difficulty: 'Hard',
    question: 'What are the minimum ageing requirements for Naoussa PDO Reserve wines?',
    options: [
      'Reserve Naoussa requires a minimum of 3 years total ageing (including barrel and bottle)',
      'Reserve Naoussa requires only that the wine has passed a tasting panel',
      'Reserve Naoussa must be aged for 6 months in new French oak only',
      'There is no Reserve category for Naoussa PDO'
    ],
    answer: 0,
    explanation: 'Reserve Naoussa PDO wines must spend a minimum of three years of total ageing, combining barrel and bottle time, before release. This extended period allows the high tannins and acidity of Xinomavro to soften and integrate, developing greater complexity.'
  },
  {
    id: 'gr-nao-006',
    country: 'Greece',
    region: 'Naoussa',
    topic: 'Winemaking',
    difficulty: 'Medium',
    question: 'Which large, historically important Greek wine company was a pioneering producer in Naoussa and helped define the region\'s early reputation?',
    options: ['Gai\'a', 'Domaine Gerovassiliou', 'Boutari', 'Papaioannou'],
    answer: 2,
    explanation: 'Boutari is one of Greece\'s largest wine companies and was a pioneering producer in Naoussa, establishing the region\'s early reputation for quality Xinomavro in the 1970s and 1980s. Their Naoussa Grande Réserve was among the first Greek wines to gain international recognition for quality.'
  },
  {
    id: 'gr-nao-007',
    country: 'Greece',
    region: 'Naoussa',
    topic: 'Winemaking',
    difficulty: 'Medium',
    question: 'Thymiopoulos Vineyards is a modern benchmark Naoussa producer. What approach sets it apart?',
    options: [
      'Heavy use of new American oak and extended maceration for rich, international-style wines',
      'Organic viticulture, focus on old vines and minimal intervention winemaking to express terroir-driven Xinomavro',
      'Blending Xinomavro with Merlot and Syrah for international market appeal',
      'Using only stainless steel with no oak whatsoever for all wines'
    ],
    answer: 1,
    explanation: 'Thymiopoulos Vineyards, under Apostolos Thymiopoulos, farms organically and focuses on old-vine Xinomavro with minimal intervention winemaking. The estate produces both an approachable unoaked style ("Xinomavro Rosé" and young red) and serious age-worthy reds from old vines, helping redefine what modern Naoussa can achieve.'
  },
  {
    id: 'gr-nao-008',
    country: 'Greece',
    region: 'Naoussa',
    topic: 'Appellations',
    difficulty: 'Medium',
    question: 'Which neighbouring PDO to Naoussa is at a higher altitude and produces a notably lighter style of Xinomavro, as well as unique traditional-method sparkling wine from the same grape?',
    options: ['Goumenissa', 'Rapsani', 'Amyndeon', 'Côtes de Meliton'],
    answer: 2,
    explanation: 'Amyndeon PDO is located at higher altitude than Naoussa (around 600–700 m and above), where the cooler conditions produce lighter, more elegant Xinomavro. Amyndeon is also unique in producing a traditional-method sparkling wine from Xinomavro — a pale rosé fizz that is one of the most original sparkling wine styles in Greece.'
  },
  {
    id: 'gr-nao-009',
    country: 'Greece',
    region: 'Naoussa',
    topic: 'Grape Varieties',
    difficulty: 'Hard',
    question: 'Goumenissa PDO, near Naoussa, allows Xinomavro to be blended with which variety to produce softer, more approachable wines?',
    options: ['Agiorgitiko', 'Negoska', 'Mandilaria', 'Limnio'],
    answer: 1,
    explanation: 'Goumenissa PDO permits the blending of Xinomavro with Negoska, a local red variety that contributes softer tannins and more generous fruit, helping to round out Xinomavro\'s sometimes austere tannic structure. The blend typically results in wines that are more approachable in youth than pure Xinomavro from Naoussa.'
  },
  {
    id: 'gr-nao-010',
    country: 'Greece',
    region: 'Naoussa',
    topic: 'Appellations',
    difficulty: 'Hard',
    question: 'Rapsani PDO, on the slopes of Mount Olympus, uses Xinomavro in a blend with which two other indigenous varieties?',
    options: [
      'Krassato and Stavroto',
      'Negoska and Mavrodaphne',
      'Limnio and Mandilaria',
      'Roditis and Savvatiano'
    ],
    answer: 0,
    explanation: 'Rapsani PDO requires Xinomavro to be blended with Krassato and Stavroto, two other indigenous Greek varieties also grown on the eastern slopes of Mount Olympus. The three-variety blend produces structured, complex reds that are distinct from either pure Naoussa Xinomavro or the Goumenissa Xinomavro-Negoska blend.'
  },
  {
    id: 'gr-nao-011',
    country: 'Greece',
    region: 'Naoussa',
    topic: 'Styles',
    difficulty: 'Easy',
    question: 'What happens to Xinomavro\'s colour as it ages in bottle over many years?',
    options: [
      'The colour deepens from garnet to near-black, similar to Tannat',
      'The colour remains stable deep purple with no evolution',
      'The colour lightens from garnet/ruby to brick-orange and tawny tones at the rim',
      'The wine becomes white after extended bottle ageing as pigments are destroyed'
    ],
    answer: 2,
    explanation: 'Like Nebbiolo, Xinomavro starts with relatively low colour intensity and evolves quickly in the bottle, developing brick, orange and tawny hues at the rim even after just a few years. Older Xinomavro can appear quite pale and garnet-orange — a stark contrast to, say, aged Cabernet Sauvignon which retains much deeper colour.'
  },
  {
    id: 'gr-nao-012',
    country: 'Greece',
    region: 'Naoussa',
    topic: 'Climate',
    difficulty: 'Hard',
    question: 'Which mountain range directly influences Naoussa\'s microclimate, providing altitude moderation and increased rainfall?',
    options: [
      'Mount Olympus to the east',
      'Vermio Mountain to the west',
      'The Rhodope Mountains to the north',
      'The Pindus Range to the southwest'
    ],
    answer: 1,
    explanation: 'The Vermio mountain range, rising to the west of Naoussa, is the key topographic feature moderating the appellation\'s climate. The mountain provides altitude, channelled cool air and higher rainfall than most Greek wine regions, helping Xinomavro retain its characteristic high acidity and giving the growing season a more continental character.'
  },
  {
    id: 'gr-nao-013',
    country: 'Greece',
    region: 'Naoussa',
    topic: 'Soils',
    difficulty: 'Medium',
    question: 'What types of soil are found in the Naoussa PDO vineyards?',
    options: [
      'Volcanic pumice and ash, similar to Santorini',
      'Limestone, clay and sandy loam',
      'Deep alluvial gravel, similar to Médoc',
      'Schist and slate, similar to Mosel'
    ],
    answer: 1,
    explanation: 'Naoussa vineyards are primarily on limestone, clay and sandy loam soils. The limestone provides drainage and mineral character, while clay helps retain some moisture during dry summer periods. This combination suits Xinomavro\'s need for balanced water supply to develop its complex tannin and acid structure.'
  },
  {
    id: 'gr-nao-014',
    country: 'Greece',
    region: 'Naoussa',
    topic: 'Business',
    difficulty: 'Easy',
    question: 'In which broad region of Greece is Naoussa located?',
    options: [
      'The Peloponnese',
      'The Aegean Islands',
      'Macedonia (northern Greece)',
      'Epirus (northwestern Greece)'
    ],
    answer: 2,
    explanation: 'Naoussa is located in Macedonia, the northernmost wine-producing region of mainland Greece. Macedonia is also home to other important appellations including Amyndeon, Goumenissa and the Slopes of Meliton (Côtes de Meliton), and produces a significant proportion of Greece\'s finest red wines.'
  },
  {
    id: 'gr-nao-015',
    country: 'Greece',
    region: 'Naoussa',
    topic: 'Grape Growing',
    difficulty: 'Medium',
    question: 'Kir-Yianni is a major Naoussa producer. Who founded it and what is its significance for Macedonian wine?',
    options: [
      'It was founded by the Greek government as a state model winery in the 1960s',
      'It was founded by Yiannis Boutari after leaving the family Boutari company, and is known for quality-focused Xinomavro from Naoussa and Amyndeon',
      'It was founded by a French négociant as a joint venture to introduce Bordeaux varieties to Macedonia',
      'It was founded by a German investor and specialises in Riesling grown at Naoussa\'s high-altitude sites'
    ],
    answer: 1,
    explanation: 'Kir-Yianni was founded by Yiannis Boutari after he departed the family Boutari winery, and represents a quality-focused estate approach to Macedonian wine. The winery produces acclaimed Xinomavro from Naoussa under several labels and also makes wines from the Amyndeon PDO, helping to elevate both appellations internationally.'
  },

  // ── OTHER GREECE (22) ────────────────────────────────────────────────────────
  {
    id: 'gr-oth-001',
    country: 'Greece',
    region: 'Mantinia',
    topic: 'Grape Varieties',
    difficulty: 'Easy',
    question: 'What is the dominant grape variety of Mantinia PDO, and what is unusual about its skin colour?',
    options: [
      'Roditis — red-skinned but used for white wine production in certain styles',
      'Moschofilero — pink-skinned but primarily used to make white and occasionally sparkling wine',
      'Savvatiano — green-skinned and produces the dry whites of Mantinia',
      'Debina — yellow-skinned and produces high-acid sparkling wine'
    ],
    answer: 1,
    explanation: 'Moschofilero is a pink-skinned grape variety that is the defining variety of Mantinia PDO. Despite its pink skin, it is predominantly used to produce white wine, though with brief skin contact it can yield deeply coloured rosés. It is highly aromatic, with rose petal, citrus and spice notes similar to Gewürztraminer.'
  },
  {
    id: 'gr-oth-002',
    country: 'Greece',
    region: 'Mantinia',
    topic: 'Styles',
    difficulty: 'Medium',
    question: 'Which flavour profile most accurately describes dry white Moschofilero from Mantinia PDO?',
    options: [
      'Full-bodied, oaky, high alcohol (14–15%) with peach and vanilla',
      'Light-bodied, highly aromatic (rose petal, citrus), high acidity, low alcohol (~11–12%)',
      'Mineral and saline with high acidity, like Santorini Assyrtiko',
      'Deeply coloured amber wine from extended skin contact'
    ],
    answer: 1,
    explanation: 'Mantinia PDO dry white from Moschofilero is characteristically light-bodied and highly aromatic, with rose petal, violet, citrus and sometimes spice aromas reminiscent of Gewürztraminer or Muscat. The wines have high natural acidity but low alcohol (typically around 11–12%) due to Mantinia\'s high altitude (around 600–700 m on the Arcadian plateau).'
  },
  {
    id: 'gr-oth-003',
    country: 'Greece',
    region: 'Mantinia',
    topic: 'Climate',
    difficulty: 'Medium',
    question: 'Why does Mantinia PDO produce wines with lower alcohol than most other Greek PDOs?',
    options: [
      'Mantinia uses water addition (chaptalization) to reduce potential alcohol',
      'Mantinia is located on the high Arcadian plateau (around 600–700 m altitude), which creates cooler temperatures that slow ripening and limit sugar accumulation',
      'Mantinia\'s soils are extremely poor, preventing the vine from accumulating sugar',
      'Mantinia harvests very early in June before sugars build up'
    ],
    answer: 1,
    explanation: 'Mantinia sits on the high Arcadian plateau in the central Peloponnese at approximately 600–700 m altitude. These cooler conditions slow the ripening of Moschofilero, limiting sugar accumulation while preserving high natural acidity. The result is wines typically at 11–12% alcohol — among the lowest of any Greek PDO — with freshness and aromatic vibrancy.'
  },
  {
    id: 'gr-oth-004',
    country: 'Greece',
    region: 'Mantinia',
    topic: 'Winemaking',
    difficulty: 'Medium',
    question: 'Which producer is considered the benchmark estate for Mantinia PDO and Moschofilero?',
    options: ['Boutari', 'Tselepos', 'Gai\'a', 'Domaine Sigalas'],
    answer: 1,
    explanation: 'Tselepos (also written Tselepou) winery is widely regarded as the benchmark producer for Mantinia PDO and Moschofilero. Yiannis Tselepos studied in Bordeaux and returned to produce quality-focused wines that have helped define the modern style of Mantinia and bring Moschofilero to international attention.'
  },
  {
    id: 'gr-oth-005',
    country: 'Greece',
    region: 'Patras',
    topic: 'Grape Varieties',
    difficulty: 'Medium',
    question: 'Muscat of Patras OPE is produced from which grape variety, and what style of wine does it yield?',
    options: [
      'Muscat of Alexandria; a dry, high-alcohol white wine',
      'Muscat Blanc à Petits Grains; a naturally sweet, golden dessert wine',
      'Muscat Ottonel; a light, off-dry white wine for everyday drinking',
      'Malagousia; a naturally sweet amber wine from late-harvested grapes'
    ],
    answer: 1,
    explanation: 'Muscat of Patras OPE is produced from Muscat Blanc à Petits Grains (also called Muscat de Frontignan or White Muscat), the noblest of the Muscat family. It produces a naturally sweet, golden-coloured dessert wine in a style similar to Muscat de Beaumes de Venise or Setúbal Moscatel — not fortified in the traditional Greek classification, though mutage-style concentration methods may be used.'
  },
  {
    id: 'gr-oth-006',
    country: 'Greece',
    region: 'Patras',
    topic: 'Classification',
    difficulty: 'Hard',
    question: 'What does the designation OPE signify on a Greek wine label, compared with OPAP?',
    options: [
      'OPE and OPAP are identical designations; the terms are used interchangeably',
      'OPE applies to naturally sweet PDO wines; OPAP applies to dry PDO wines',
      'OPE wines are lower quality than OPAP; OPE is equivalent to PGI',
      'OPAP applies to single-estate wines only; OPE applies to cooperative-produced wines'
    ],
    answer: 1,
    explanation: 'OPE (Ονομασία Προελεύσεως Ελεγχόμενη) designates naturally sweet wines of PDO quality — most notably the Muscat wines of Patras, Samos and Cephalonia, and Vinsanto from Santorini. OPAP (Ονομασία Προελεύσεως Ανωτέρας Ποιότητος) applies to dry wines of PDO quality such as Naoussa, Nemea and Santorini. Both are historical Greek PDO equivalent designations now subsumed under the EU\'s unified PDO framework.'
  },
  {
    id: 'gr-oth-007',
    country: 'Greece',
    region: 'Cephalonia',
    topic: 'Appellations',
    difficulty: 'Medium',
    question: 'What is the key dry white wine PDO from the island of Cephalonia, and which indigenous grape is its sole permitted variety?',
    options: [
      'Muscat of Cephalonia OPE — made from Muscat Blanc à Petits Grains',
      'Robola of Cephalonia PDO — made from the Robola grape',
      'Mavrodaphne of Cephalonia OPE — made from Mavrodaphne',
      'Athiri of Cephalonia PDO — made from the Athiri grape'
    ],
    answer: 1,
    explanation: 'Robola of Cephalonia PDO is the island\'s principal dry white wine designation, made exclusively from the indigenous Robola grape. It produces mineral, citrus-driven whites with lively acidity. Robola is found almost exclusively on Cephalonia and is one of Greece\'s most distinctive indigenous white varieties.'
  },
  {
    id: 'gr-oth-008',
    country: 'Greece',
    region: 'Other Greece',
    topic: 'Appellations',
    difficulty: 'Hard',
    question: 'Monemvasia-Malvasia PDO takes its name from an ancient Greek port. Why is this historically significant for wine?',
    options: [
      'Monemvasia was the main export port for ancient amphorae wine bound for Rome',
      'Monemvasia (Malvasia) was the port through which Malmsey wine was shipped to medieval Europe, giving its name to the entire Malvasia grape family',
      'Monemvasia was the birthplace of Dionysus and the original site of Greek wine production',
      'The port was where the Greeks signed the first international wine treaty with Venice'
    ],
    answer: 1,
    explanation: 'Monemvasia was a key medieval port in the Peloponnese through which sweet wines from the Greek islands were traded to western Europe. The port\'s name became synonymous with the wine and gave rise to the widespread Malvasia/Malmsey grape name — one of the most historically important wine names in Europe, appearing in wines from Madeira (Malmsey) to the Canaries to the Azores.'
  },
  {
    id: 'gr-oth-009',
    country: 'Greece',
    region: 'Other Greece',
    topic: 'Grape Varieties',
    difficulty: 'Hard',
    question: 'Which aromatic white variety did Domaine Gerovassiliou single-handedly rescue from near extinction, and in which region is this estate located?',
    options: [
      'Malagousia, near Thessaloniki (Epanomi)',
      'Moschofilero, in the Peloponnese highlands',
      'Debina, in Epirus',
      'Athiri, on the island of Rhodes'
    ],
    answer: 0,
    explanation: 'Domaine Gerovassiliou, established by Evangelos Gerovassiliou near Epanomi (close to Thessaloniki) in Macedonia, is credited with single-handedly rescuing Malagousia from extinction. He found ancient Malagousia vines, propagated them, and produced the first modern wines from this aromatic variety. Malagousia is now established as one of Greece\'s most exciting indigenous white grapes, producing floral, full-bodied wines with apricot, peach and rose notes.'
  },
  {
    id: 'gr-oth-010',
    country: 'Greece',
    region: 'Other Greece',
    topic: 'Grape Varieties',
    difficulty: 'Medium',
    question: 'What is Cabernet Gernischt and why is it significant to Greek wine history — or is it?',
    options: [
      'It is a Greek cross of Cabernet Sauvignon and Xinomavro produced at the University of Athens',
      'Cabernet Gernischt is actually a Chinese term (not Greek) for what is likely Carménère; it has no Greek wine connection',
      'It is an obscure Greek red variety from Crete used only in blends',
      'It is the Greek name for Grenache, widely grown in the Drama region'
    ],
    answer: 1,
    explanation: 'Cabernet Gernischt has no Greek wine connection. It is a Chinese term (particularly used in Hebei province) for what DNA analysis has confirmed is likely Carménère — the same grape once thought to be extinct in Bordeaux and now widely grown in Chile. This is a reminder not to confuse Chinese wine terminology with Greek wine content.'
  },
  {
    id: 'gr-oth-011',
    country: 'Greece',
    region: 'Other Greece',
    topic: 'Grape Varieties',
    difficulty: 'Medium',
    question: 'The island of Crete produces red wines from a blend of which two principal indigenous varieties?',
    options: [
      'Xinomavro and Agiorgitiko',
      'Kotsifali and Mandilaria',
      'Limnio and Mavrodaphne',
      'Roditis and Vilana'
    ],
    answer: 1,
    explanation: 'Crete\'s principal red wines are made from Kotsifali and Mandilaria. Kotsifali provides softness, moderate alcohol and red fruit character, while Mandilaria (also grown on Rhodes and other islands) contributes deep colour, tannin and structure. The blend is particularly important in the Peza PDO and Archanes PDO appellations.'
  },
  {
    id: 'gr-oth-012',
    country: 'Greece',
    region: 'Other Greece',
    topic: 'Appellations',
    difficulty: 'Medium',
    question: 'Which two PDOs on the island of Crete are the most important appellations for red wine production?',
    options: [
      'Santorini and Nemea',
      'Peza PDO and Archanes PDO',
      'Naoussa and Amyndeon',
      'Muscat of Samos and Muscat of Patras'
    ],
    answer: 1,
    explanation: 'Peza PDO and Archanes PDO are the main quality red wine appellations on Crete, both using blends of Kotsifali and Mandilaria. Crete is Greece\'s largest island and has an ancient wine heritage, though much of its production historically was bulk wine. Several producers have raised quality significantly in recent decades.'
  },
  {
    id: 'gr-oth-013',
    country: 'Greece',
    region: 'Other Greece',
    topic: 'Wine Law',
    difficulty: 'Easy',
    question: 'What were the two highest quality-tier designations for Greek wines before harmonisation with EU terminology?',
    options: [
      'Grand Cru and Premier Cru',
      'OPAP (dry wines) and OPE (naturally sweet wines)',
      'DOC and DOCG',
      'QbA and Prädikat'
    ],
    answer: 1,
    explanation: 'Greece\'s two traditional PDO-equivalent designations were OPAP (for dry wines of Appellation of Superior Quality) and OPE (for naturally sweet wines of Controlled Appellation of Origin). These have been subsumed into the EU\'s unified PDO system, though both terms still appear on labels and in wine education.'
  },
  {
    id: 'gr-oth-014',
    country: 'Greece',
    region: 'Other Greece',
    topic: 'Business',
    difficulty: 'Medium',
    question: 'What drove the major quality improvement in Greek wine from the 1970s to the 1990s, often called the "Greek wine renaissance"?',
    options: [
      'EU funding for new vineyard plantings of international varieties exclusively',
      'Winemakers trained in France and Germany returning home; introduction of stainless steel and temperature control; investment in quality equipment',
      'A government ban on all bulk wine production forcing estates to produce quality wine',
      'The arrival of Bordeaux négociants who purchased all major Greek estates'
    ],
    answer: 1,
    explanation: 'The Greek wine renaissance from the 1970s–90s was driven by a generation of Greek winemakers who had trained in France, Germany and elsewhere in Europe returning home with new oenological knowledge. They introduced stainless steel tanks, temperature-controlled fermentation and other modern cellar technology, dramatically improving wine quality and helping Greek wines compete internationally for the first time.'
  },
  {
    id: 'gr-oth-015',
    country: 'Greece',
    region: 'Other Greece',
    topic: 'Grape Varieties',
    difficulty: 'Easy',
    question: 'Which feature most distinguishes Greece from virtually all other wine-producing countries in terms of its grape variety portfolio?',
    options: [
      'Greece grows only international varieties (Cabernet Sauvignon, Chardonnay, etc.)',
      'The majority of Greek wine production uses indigenous Greek grape varieties found almost nowhere else in the world',
      'Greece bans all indigenous varieties and requires international varieties for PDO wines',
      'Greece grows the same varieties as France, having imported all varieties in the 19th century'
    ],
    answer: 1,
    explanation: 'Greece is unique among major wine-producing countries in that the overwhelming majority of its plantings are indigenous Greek varieties — Assyrtiko, Xinomavro, Agiorgitiko, Moschofilero, Roditis, Malagousia, Robola, Moschofilero, Savvatiano and many others. This contrasts with most other countries where international varieties (particularly Cabernet Sauvignon and Chardonnay) dominate.'
  },
  {
    id: 'gr-oth-016',
    country: 'Greece',
    region: 'Other Greece',
    topic: 'Appellations',
    difficulty: 'Hard',
    question: 'The Drama wine zone in northern Macedonia is best known for producing what style of wine from which varieties?',
    options: [
      'Traditional indigenous Xinomavro PDO reds in the same style as Naoussa',
      'International varieties (Merlot, Cabernet Sauvignon, Syrah, Viognier) under PGI designation, often at a premium level',
      'Muscat-based sweet wines using the OPE designation',
      'Sparkling wines from Xinomavro using traditional method'
    ],
    answer: 1,
    explanation: 'Drama in northeastern Macedonia has developed a reputation for premium wines from international varieties — particularly Cabernet Sauvignon, Merlot, Syrah and Viognier — produced under PGI designation rather than PDO. Producers such as Pavlidis and Lazaridi have led the quality charge, producing wines that compete at premium price points.'
  },
  {
    id: 'gr-oth-017',
    country: 'Greece',
    region: 'Other Greece',
    topic: 'Grape Varieties',
    difficulty: 'Medium',
    question: 'Savvatiano is a widely grown white grape in central Greece, particularly in Attica. What wine is it most closely associated with?',
    options: [
      'Santorini PDO dry white',
      'Retsina — the resin-flavoured Greek wine traditionally made with Savvatiano',
      'Muscat of Samos OPE',
      'Nemea rosé'
    ],
    answer: 1,
    explanation: 'Savvatiano is the primary grape used in Retsina, the distinctive Greek wine flavoured with Aleppo pine resin. Retsina has ancient origins (resin was used to seal amphorae and also as a preservative) and remains uniquely Greek. High-quality modern Retsina, made with care from Savvatiano (and sometimes Assyrtiko), has gained renewed interest among wine enthusiasts.'
  },
  {
    id: 'gr-oth-018',
    country: 'Greece',
    region: 'Other Greece',
    topic: 'Classification',
    difficulty: 'Easy',
    question: 'What is the Greek equivalent of the EU\'s PGI (Protected Geographical Indication), which applies to a broader range of wines below PDO level?',
    options: [
      'OPAP',
      'Table Wine (Επιτραπέζιος Οίνος)',
      'PGI (Τοπικός Οίνος — Local/Regional Wine)',
      'Reserve'
    ],
    answer: 2,
    explanation: 'Greece\'s PGI wines are designated as Τοπικός Οίνος (Local/Regional Wine), equivalent to what used to be called Vin de Pays in France. These wines have a broader geographical designation and fewer production restrictions than PDO wines, allowing greater flexibility in variety choice. Many high-quality wines — including international variety wines from Drama — are sold as PGI.'
  },
  {
    id: 'gr-oth-019',
    country: 'Greece',
    region: 'Other Greece',
    topic: 'Climate',
    difficulty: 'Easy',
    question: 'How would you broadly characterise Greece\'s climate, and how does it vary across the country?',
    options: [
      'Uniformly hot and desert-like throughout, with no regional variation',
      'Predominantly Mediterranean (hot, dry summers; mild winters) in the south and islands, becoming more continental in the north with cooler winters and more rainfall',
      'Predominantly cool and continental throughout, similar to Germany',
      'Tropical in the south and arctic in the north due to extreme latitude differences'
    ],
    answer: 1,
    explanation: 'Greece\'s climate is predominantly Mediterranean — hot, dry summers with mild, wet winters — especially in the south (Peloponnese, Aegean islands). However, northern regions such as Macedonia have a more continental character with colder winters (snowfall is common in Naoussa), higher rainfall and cooler growing seasons. Altitude adds further complexity throughout the country.'
  },
  {
    id: 'gr-oth-020',
    country: 'Greece',
    region: 'Other Greece',
    topic: 'Appellations',
    difficulty: 'Hard',
    question: 'The island of Rhodes produces wine from which two main varieties, one white and one red?',
    options: [
      'Assyrtiko (white) and Xinomavro (red)',
      'Athiri (white) and Mandilaria (red)',
      'Moschofilero (white) and Agiorgitiko (red)',
      'Roditis (white) and Mavrodaphne (red)'
    ],
    answer: 1,
    explanation: 'Rhodes is known for Athiri (an indigenous white grape that produces fresh, dry whites) and Mandilaria (a red variety capable of producing deep-coloured, powerful dry reds). The CAIR cooperative is the major producer on Rhodes. Mandilaria is also grown on Crete and other Aegean islands.'
  },
  {
    id: 'gr-oth-021',
    country: 'Greece',
    region: 'Other Greece',
    topic: 'Appellations',
    difficulty: 'Medium',
    question: 'What is Muscat of Samos, and under which classification does it fall?',
    options: [
      'A dry white wine from Samos island under OPAP',
      'A naturally sweet, unfortified wine made from Muscat Blanc à Petits Grains under OPE (PDO)',
      'A fortified wine made by adding grape spirit to halt fermentation, similar to Port',
      'A sparkling Muscat wine using traditional method'
    ],
    answer: 1,
    explanation: 'Muscat of Samos is one of Greece\'s most famous naturally sweet wines, produced on the Aegean island of Samos from Muscat Blanc à Petits Grains under the OPE designation (now PDO equivalent). It is unfortified — unlike Muscat de Rivesaltes or other VDN-style wines — and produced by the Union of Winemaking Cooperatives of Samos, one of Greece\'s largest co-operatives.'
  },
  {
    id: 'gr-oth-022',
    country: 'Greece',
    region: 'Other Greece',
    topic: 'Topography',
    difficulty: 'Medium',
    question: 'What are the key topographic factors that create diverse microclimates across Greece\'s wine regions?',
    options: [
      'Only latitude matters; all other factors are negligible in Greek viticulture',
      'Altitude (many vineyards at 200–700 m), proximity to sea and orientation of slopes create significant microclimatic variation even within individual appellations',
      'Greece is entirely flat; all climatic variation is due solely to proximity to the sea',
      'The direction of river flow determines climate, as rivers channel cold air from the north'
    ],
    answer: 1,
    explanation: 'Greece has a highly diverse topography with mountain ranges, islands, coastal sites and inland plateaus. Altitude (many quality vineyards sit at 200–700 m or above, like Mantinia at 600–700 m or Amyndeon at 600–700 m+), proximity to the cooling influence of the sea (Aegean or Ionian), and slope orientation all combine to create very diverse microclimates across and within wine regions.'
  },
]
