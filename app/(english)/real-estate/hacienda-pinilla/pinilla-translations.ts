import type { Locale } from "@/lib/i18n/config"

// Hacienda Pinilla editorial translations: every meaningful visitor-facing string is localized.
// Proper names, prices and numerals remain consistent across locales.
const messages: Record<string, readonly [string, string, string]> = {
  "HOMESITE INVESTMENT OPTIONS": ["OPCIONES DE INVERSIÓN EN TERRENOS", "OPTIONS D’INVESTISSEMENT FONCIER", "住宅用地投资选择"],
  "Select your future homesite": ["Elige el terreno de tu futura residencia", "Choisissez le terrain de votre future maison", "选择未来理想家园的地块"],
  "Las Lapas is a planned golf-front enclave with 49 residential homesites. Explore the published price guidance and request the latest lot-by-lot availability through Marqués.": ["Las Lapas es una comunidad planificada junto al campo de golf con 49 lotes residenciales. Consulta el rango de precios publicado y solicita a Marqués el inventario actualizado por lote.", "Las Lapas est un quartier résidentiel de 49 terrains planifiés à proximité du golf. Consultez les prix indicatifs publiés et demandez à Marqués les disponibilités détaillées.", "Las Lapas 是邻近高尔夫球场的规划住宅社区，共有 49 个地块。查看已公布的参考价格，并向 Marqués 索取最新逐地块库存。"],
  "PUBLISHED STARTING PRICE": ["PRECIO INICIAL PUBLICADO", "PRIX DE DÉPART PUBLIÉ", "公开起价"],
  "PUBLISHED UPPER PRICE RANGE": ["LÍMITE SUPERIOR PUBLICADO", "LIMITE SUPÉRIEURE PUBLIÉE", "公开价格区间上限"],
  "PLANNED HOMESITES": ["LOTES PLANIFICADOS", "TERRAINS PRÉVUS", "规划住宅地块"],
  "Approximately": ["Aproximadamente", "Environ", "约"],
  "average lot area": ["superficie promedio por lote", "superficie moyenne des terrains", "平均地块面积"],
  "The Las Lapas range is from a third-party brokerage listing, not a verified current lot-by-lot price sheet. Exact lot prices, areas, availability and reservation terms must be confirmed before any offer.": ["El rango de Las Lapas procede de un anuncio de una inmobiliaria externa, no de una lista actual verificada por lote. Antes de cualquier oferta deben confirmarse los precios, áreas, disponibilidad y condiciones de reserva.", "La fourchette de Las Lapas provient d’une annonce d’agence tierce et non d’un tarif actualisé et vérifié terrain par terrain. Prix, superficies, disponibilités et modalités de réservation doivent être confirmés avant toute offre.", "Las Lapas 的价格区间来自第三方经纪商广告，并非逐地块核实的最新价格表。报价前须确认具体价格、面积、供应及预订条款。"],
  "Hello Marqués, please send me the current Las Lapas lot-by-lot inventory with prices, areas, plans and reservation details.": ["Hola Marqués, por favor envíenme el inventario actualizado de Las Lapas con precio, área, planos y condiciones de reserva de cada lote.", "Bonjour Marqués, merci de m’envoyer la liste actualisée des lots de Las Lapas avec prix, superficies, plans et modalités de réservation.", "您好，Marqués，请发送 Las Lapas 各地块的最新库存、价格、面积、规划图及预订详情。"],
  "Request current Las Lapas lot selection": ["Solicitar lotes disponibles de Las Lapas", "Demander les terrains disponibles à Las Lapas", "索取 Las Lapas 可选地块"],
  "Find the lot for your vision": ["Encuentra el lote para tu proyecto", "Trouvez le terrain pour votre projet", "寻找理想地块"],
  "Compare 42 individually priced homesites from the official published El Jaguar catalogue. Choose your preferred lot to ask Marqués for a private consultation.": ["Compara 42 lotes residenciales con precios individuales publicados en el catálogo oficial de El Jaguar. Selecciona el lote de tu interés para solicitar asesoría privada a Marqués.", "Comparez 42 terrains résidentiels dont les prix individuels figurent au catalogue officiel publié d’El Jaguar. Choisissez votre terrain et contactez Marqués pour un conseil privé.", "对比 El Jaguar 官方目录公布的 42 个地块及单独标价，选择心仪地块并联系 Marqués 获得私人咨询。"],
  "PUBLISHED PRICE RANGE": ["RANGO DE PRECIOS PUBLICADO", "FOURCHETTE DE PRIX PUBLIÉE", "公开价格区间"],
  "COMMUNITY PHASE": ["SECTOR DEL PROYECTO", "SECTEUR DU PROJET", "社区分区"],
  "All phases": ["Todos los sectores", "Tous les secteurs", "全部区域"],
  "PRICE BAND": ["RANGO DE PRECIO", "TRANCHE DE PRIX", "价格区间"],
  "All prices": ["Todos los precios", "Tous les prix", "全部价格"],
  "Under $550,000": ["Menos de $550.000", "Moins de 550 000 $", "低于 $550,000"],
  "Above $650,000": ["Más de $650.000", "Plus de 650 000 $", "高于 $650,000"],
  "SORT": ["ORDENAR POR", "TRIER PAR", "排序方式"],
  "Price: lowest first": ["Precio: menor a mayor", "Prix croissant", "价格由低到高"],
  "Area: largest first": ["Área: mayor a menor", "Surface décroissante", "面积由大到小"],
  "Lot number": ["Número de lote", "Numéro du terrain", "地块编号"],
  "lot options shown": ["opciones de lote", "terrains affichés", "个地块选择"],
  "Lot": ["Lote", "Lot", "地块"],
  "LOT AREA": ["SUPERFICIE DEL LOTE", "SUPERFICIE DU TERRAIN", "地块面积"],
  "PUBLISHED ASKING PRICE": ["PRECIO DE VENTA PUBLICADO", "PRIX DEMANDÉ PUBLIÉ", "公开挂牌价"],
  "Enquire about": ["Consultar por", "Demander des renseignements sur", "咨询"],
  "Enquire": ["Consultar", "Consulter", "咨询"],
  "Hello Marqués, I am interested in": ["Hola Marqués, me interesa", "Bonjour Marqués, je suis intéressé par", "您好，Marqués，我对以下地块感兴趣："],
  "Please confirm current price and availability.": ["Por favor confirmen precio y disponibilidad actuales.", "Merci de confirmer le prix et la disponibilité actuels.", "请确认当前价格及供应情况。"],
  "Lot sizes and asking prices are reproduced from the published Hacienda Pinilla El Jaguar catalogue for preliminary comparison only. This is not a live inventory. All prices, reservations, availability and development conditions require reconfirmation with Marqués.": ["Las áreas y precios proceden del catálogo publicado por Hacienda Pinilla para El Jaguar y son únicamente orientativos. No es un inventario en tiempo real. Precios, reservas, disponibilidad y normas de construcción deben reconfirmarse con Marqués.", "Superficies et prix proviennent du catalogue publié par Hacienda Pinilla pour El Jaguar et sont fournis à titre indicatif. Il ne s’agit pas d’un inventaire en temps réel. Prix, réservations, disponibilités et règles de construction sont à confirmer auprès de Marqués.", "地块面积及挂牌价摘自 Hacienda Pinilla 发布的 El Jaguar 目录，仅供初步对比，并非实时库存。价格、预订、供应情况及建设条件均需向 Marqués 再次核实。"],
  "From $399,000": ["Desde $399.000", "À partir de 399 000 $", "$399,000 起"],
  "From $325,600": ["Desde $325.600", "À partir de 325 600 $", "$325,600 起"],
  "42 lot price options · individual areas": ["42 opciones de lote con precios y superficies", "42 terrains avec prix et superficies", "42 个地块的价格及面积"],
  "49 planned homesites · price range published": ["49 lotes planificados · rango de precios publicado", "49 terrains prévus · fourchette de prix publiée", "49 个规划地块 · 已公布价格区间"],
  "Pricing varies by individual homesite. Please confirm before making an offer.": ["El precio varía según el lote. Confirma antes de presentar una oferta.", "Les prix varient selon le terrain. À confirmer avant toute offre.", "价格因地块而异，出价前请确认。"],
  "Hello Marqués, I would like to explore Hacienda Pinilla real estate.": [
    "Hola Marqués, quisiera información sobre las propiedades de Hacienda Pinilla.",
    "Bonjour Marqués, je souhaite obtenir des informations sur les biens à Hacienda Pinilla.",
    "您好，Marqués，我想了解 Hacienda Pinilla 的房地产项目。"
  ],
  "Hello Marqués, I would like more information and a private consultation about": [
    "Hola Marqués, quisiera más información y una asesoría privada sobre",
    "Bonjour Marqués, je souhaite plus d’informations et une consultation privée au sujet de",
    "您好，Marqués，我希望进一步了解并预约私人咨询："
  ],
  "at Hacienda Pinilla.": [
    "en Hacienda Pinilla.",
    "à Hacienda Pinilla.",
    "Hacienda Pinilla。"
  ],
  "HACIENDA PINILLA": [
    "HACIENDA PINILLA",
    "HACIENDA PINILLA",
    "HACIENDA PINILLA"
  ],
  "MARQUÉS LUXURY REAL ESTATE": [
    "MARQUÉS · BIENES RAÍCES DE LUJO",
    "MARQUÉS · IMMOBILIER DE PRESTIGE",
    "MARQUÉS 高端房地产"
  ],
  "GUANACASTE, COSTA RICA": [
    "GUANACASTE, COSTA RICA",
    "GUANACASTE, COSTA RICA",
    "哥斯达黎加 · 瓜纳卡斯特"
  ],
  "PRESENTED BY MARQUÉS": [
    "PRESENTADO POR MARQUÉS",
    "PRÉSENTÉ PAR MARQUÉS",
    "由 MARQUÉS 呈现"
  ],
  "Private residences and homesites on Costa Rica’s Pacific coast.": [
    "Residencias privadas y terrenos residenciales en la costa del Pacífico de Costa Rica.",
    "Résidences privées et terrains résidentiels sur la côte pacifique du Costa Rica.",
    "位于哥斯达黎加太平洋海岸的私人豪宅与住宅用地。"
  ],
  "View homes and homesites": [
    "Explorar residencias y terrenos",
    "Découvrir les résidences et terrains",
    "查看豪宅与住宅用地"
  ],
  "Private residences": [
    "Residencias privadas",
    "Résidences privées",
    "私人豪宅"
  ],
  "and homesites": [
    "y terrenos residenciales",
    "et terrains résidentiels",
    "及住宅用地"
  ],
  "Property details, pricing and availability are confirmed privately through Marqués.": [
    "Marqués confirma de forma privada los detalles, precios y disponibilidad de cada propiedad.",
    "Les caractéristiques, les prix et les disponibilités sont confirmés directement par Marqués.",
    "房产详情、价格及供应情况均由 Marqués 私下核实。"
  ],
  "Selected opportunities shown for preliminary review. No representation is made regarding current availability or included amenity memberships.": [
    "Oportunidades presentadas para consideración inicial. La disponibilidad y los derechos de acceso a las amenidades deben confirmarse.",
    "Opportunités présentées à titre indicatif. La disponibilité et les droits d’accès aux équipements restent à confirmer.",
    "所示项目仅供初步参考，实际供应情况及配套设施使用权益须另行确认。"
  ],
  "01": [
    "01",
    "01",
    "01"
  ],
  "THE DESTINATION": [
    "EL DESTINO",
    "LA DESTINATION",
    "目的地"
  ],
  "An entire world,": [
    "Todo un mundo,",
    "Tout un univers,",
    "一方天地，"
  ],
  "within the gates.": [
    "dentro de una comunidad privada.",
    "au cœur d'un domaine privé.",
    "尽在私享社区之中。"
  ],
  "Set along Costa Rica's Pacific coast, Hacienda Pinilla spans more than 4,500 gated acres. Distinct residential neighborhoods, recreational facilities and a natural coastal landscape create a setting designed for a more considered way of life.": [
    "Situada en la costa pacífica de Costa Rica, Hacienda Pinilla comprende más de 4.500 acres con accesos controlados. Sus comunidades residenciales, instalaciones recreativas y paisajes naturales ofrecen un estilo de vida excepcional.",
    "Située sur la côte pacifique du Costa Rica, Hacienda Pinilla s’étend sur plus de 4 500 acres avec des accès contrôlés. Ses quartiers résidentiels, équipements de loisirs et paysages naturels offrent un cadre de vie privilégié.",
    "Hacienda Pinilla 坐落于哥斯达黎加太平洋海岸，占地超过 4,500 英亩，设有受控出入口。独立住宅社区、休闲设施与自然景观共同营造从容优雅的生活方式。"
  ],
  "The estate includes controlled entrances and a security office. Specific access privileges and services vary by community and membership.": [
    "La propiedad cuenta con accesos controlados y oficina de seguridad. Las condiciones de acceso y los servicios dependen de la comunidad y las membresías correspondientes.",
    "Le domaine dispose d’entrées contrôlées et d’un bureau de sécurité. Les droits d’accès et les services varient selon le quartier et les adhésions.",
    "社区设有受控入口和安保办公室。具体使用权限和服务因住宅区及会员资格而异。"
  ],
  "Gated acres": [
    "Acres con acceso controlado",
    "Acres en domaine à accès contrôlé",
    "受控出入英亩数"
  ],
  "Golf holes": [
    "Hoyos de golf",
    "Trous de golf",
    "高尔夫球洞"
  ],
  "Course par": [
    "Par del campo",
    "Par du parcours",
    "球场标准杆"
  ],
  "Pacific": [
    "Pacífico",
    "Pacifique",
    "太平洋"
  ],
  "Coastal setting": [
    "Entorno costero",
    "Environnement côtier",
    "海岸环境"
  ],
  "EXPLORE THE ESTATE": [
    "EXPLORA EL PROYECTO",
    "DÉCOUVRIR LE DOMAINE",
    "探索社区"
  ],
  "See the bigger picture.": [
    "Descubre la dimensión del proyecto.",
    "Découvrez toute l'étendue du domaine.",
    "领略社区全貌。"
  ],
  "Discover the scale of Hacienda Pinilla, from its Pacific coastline and natural corridors to its interconnected residential and recreational areas.": [
    "Descubre la extensión de Hacienda Pinilla: su litoral pacífico, corredores naturales, comunidades residenciales e instalaciones recreativas.",
    "Découvrez l’ampleur d’Hacienda Pinilla, de son littoral pacifique et de ses espaces naturels à ses quartiers résidentiels et espaces de loisirs.",
    "从太平洋海岸线和自然生态廊道，到住宅社区与休闲区域，探索 Hacienda Pinilla 的广阔格局。"
  ],
  "Official estate and mountain-bike trail map. Trail routes are highlighted; this is not a residential lot plan.": [
    "Mapa general y de rutas de ciclismo de montaña. Las rutas aparecen destacadas; no es un plano catastral de lotes.",
    "Plan général du domaine et des pistes de VTT. Les itinéraires sont mis en évidence ; il ne s’agit pas d’un plan de division parcellaire.",
    "社区及山地骑行路线图。图中突出显示骑行线路，并非住宅地块分布图。"
  ],
  "View larger map": [
    "Ampliar mapa",
    "Agrandir le plan",
    "放大地图"
  ],
  "THE SIGNATURE EXPERIENCE": [
    "UNA EXPERIENCIA DISTINTIVA",
    "L’EXPÉRIENCE EMBLÉMATIQUE",
    "标志性体验"
  ],
  "Championship golf.": [
    "Golf de campeonato.",
    "Golf de championnat.",
    "锦标赛级高尔夫。"
  ],
  "Designed by Mike Young.": [
    "Diseñado por Mike Young.",
    "Conçu par Mike Young.",
    "由 Mike Young 设计。"
  ],
  "An 18-hole, par-72 championship course stretching up to 7,200 yards, shaped by acclaimed golf architect Mike Young to follow the natural contours of Hacienda Pinilla.": [
    "Un campo de campeonato de 18 hoyos, par 72 y hasta 7.200 yardas, diseñado por el reconocido arquitecto Mike Young para integrarse con el relieve natural de Hacienda Pinilla.",
    "Un parcours de championnat de 18 trous, par 72, s’étendant jusqu’à 7 200 yards, conçu par l’architecte de golf renommé Mike Young dans le respect du relief naturel d’Hacienda Pinilla.",
    "由知名高尔夫球场建筑师 Mike Young 依照 Hacienda Pinilla 的自然地形设计，拥有 18 洞、标准杆 72 杆、最长 7,200 码的锦标赛级球场。"
  ],
  "HOLES": [
    "HOYOS",
    "TROUS",
    "球洞"
  ],
  "CHAMPIONSHIP COURSE": [
    "CAMPO DE CAMPEONATO",
    "PARCOURS DE CHAMPIONNAT",
    "锦标赛级球场"
  ],
  "YARDS · UP TO": [
    "YARDAS · HASTA",
    "YARDS · JUSQU’À",
    "码 · 最长"
  ],
  "The course has been recognized through the Audubon Cooperative Sanctuary Program.": [
    "El campo ha recibido reconocimiento mediante el programa Audubon Cooperative Sanctuary por sus prácticas ambientales.",
    "Le parcours est reconnu dans le cadre du programme Audubon Cooperative Sanctuary pour ses pratiques environnementales.",
    "该球场因其环境管理实践获得 Audubon Cooperative Sanctuary 项目认可。"
  ],
  "THE LIFESTYLE": [
    "EL ESTILO DE VIDA",
    "L’ART DE VIVRE",
    "生活方式"
  ],
  "A different rhythm": [
    "Otro ritmo",
    "Un autre rythme",
    "另一种节奏，"
  ],
  "of coastal living.": [
    "para vivir junto al mar.",
    "de vie sur la côte.",
    "海岸生活。"
  ],
  "THE BEACH CLUB": [
    "EL BEACH CLUB",
    "LE BEACH CLUB",
    "海滩俱乐部"
  ],
  "Everything, in its own time.": [
    "Todo tiene su momento.",
    "Chaque moment a sa place.",
    "自在享受每一刻。"
  ],
  "Beachfront relaxation, golf, horseback riding, tennis, pickleball, surfing and trails through Guanacaste's distinctive landscapes.": [
    "Descanso frente al mar, golf, cabalgatas, tenis, pickleball, surf y senderos que recorren los paisajes de Guanacaste.",
    "Détente au bord de l’océan, golf, équitation, tennis, pickleball, surf et sentiers au cœur des paysages de Guanacaste.",
    "海滨休闲、高尔夫、骑马、网球、匹克球、冲浪，以及穿越瓜纳卡斯特特色景观的步道。"
  ],
  "Whether you're searching for a family retreat or a lasting connection to Costa Rica, the lifestyle extends well beyond the front door.": [
    "Ya sea como refugio familiar o como hogar en Costa Rica, la experiencia de vida trasciende la residencia.",
    "Pour une retraite familiale ou un lien durable avec le Costa Rica, l’art de vivre se prolonge bien au-delà de votre maison.",
    "无论是寻找家庭度假居所还是长期扎根哥斯达黎加，这里的生活体验远超住宅本身。"
  ],
  "YOUR PRIVATE ADVISOR IN COSTA RICA": [
    "TU ASESOR PRIVADO EN COSTA RICA",
    "VOTRE CONSEILLER PRIVÉ AU COSTA RICA",
    "您在哥斯达黎加的私人顾问"
  ],
  "Discover Hacienda Pinilla": [
    "Descubre Hacienda Pinilla",
    "Découvrez Hacienda Pinilla",
    "探索 Hacienda Pinilla"
  ],
  "through Marqués.": [
    "de la mano de Marqués.",
    "avec Marqués.",
    "与 Marqués 同行。"
  ],
  "For property information, private viewings and a thoughtful introduction to Costa Rica's luxury residential market, begin a conversation with our team.": [
    "Para conocer propiedades, coordinar visitas privadas y explorar el mercado residencial de lujo de Costa Rica, conversa con nuestro equipo.",
    "Pour connaître les propriétés, organiser une visite privée et découvrir le marché résidentiel de prestige du Costa Rica, contactez notre équipe.",
    "如需了解房源、安排私人看房并探索哥斯达黎加高端住宅市场，欢迎与我们的团队联系。"
  ],
  "Private enquiry": [
    "Consulta privada",
    "Demande privée",
    "私人咨询"
  ],
  "Speak with Marqués on WhatsApp": [
    "Habla con Marqués por WhatsApp",
    "Contacter Marqués sur WhatsApp",
    "通过 WhatsApp 联系 Marqués"
  ],
  "Explore Marqués Real Estate": [
    "Explorar inmuebles de Marqués",
    "Découvrir l’immobilier Marqués",
    "浏览 Marqués 房地产"
  ],
  "Hacienda Pinilla Beach Club overlooking the Pacific coast": [
    "Beach Club de Hacienda Pinilla junto al océano Pacífico",
    "Beach Club d’Hacienda Pinilla face à l’océan Pacifique",
    "俯瞰太平洋的 Hacienda Pinilla 海滩俱乐部"
  ],
  "Official Hacienda Pinilla estate trail map, showing the coastline, internal routes and landscape": [
    "Mapa de senderos de Hacienda Pinilla con costa, rutas internas y paisaje",
    "Carte des sentiers d’Hacienda Pinilla, littoral et voies intérieures",
    "显示海岸、内部路线与景观的 Hacienda Pinilla 步道地图"
  ],
  "Enlarged Hacienda Pinilla estate and trails map": [
    "Mapa ampliado de Hacienda Pinilla y sus senderos",
    "Carte agrandie du domaine Hacienda Pinilla et de ses sentiers",
    "Hacienda Pinilla 社区及步道放大地图"
  ],
  "The championship golf course at Hacienda Pinilla": [
    "Campo de golf de campeonato de Hacienda Pinilla",
    "Parcours de golf de championnat d’Hacienda Pinilla",
    "Hacienda Pinilla 锦标赛级高尔夫球场"
  ],
  "Hacienda Pinilla Beach Club at sunset": [
    "Beach Club de Hacienda Pinilla al atardecer",
    "Beach Club d’Hacienda Pinilla au coucher du soleil",
    "日落时的 Hacienda Pinilla 海滩俱乐部"
  ],
  "Private residence": [
    "Residencia privada",
    "Résidence privée",
    "私人住宅"
  ],
  "Homesites · Land investment": [
    "Terrenos residenciales · Inversión en tierra",
    "Terrains résidentiels · Investissement foncier",
    "住宅用地 · 土地投资"
  ],
  "Residential homesites · Build your own residence": [
    "Terrenos residenciales · Construye tu propia residencia",
    "Terrains résidentiels · Construisez votre maison",
    "住宅用地 · 自建理想居所"
  ],
  "ASKING PRICE": [
    "PRECIO DE VENTA",
    "PRIX DEMANDÉ",
    "挂牌价格"
  ],
  "PRICING": [
    "PRECIO",
    "PRIX",
    "价格"
  ],
  "On request": [
    "A consultar",
    "Sur demande",
    "请咨询"
  ],
  "View full details": [
    "Ver todos los detalles",
    "Voir tous les détails",
    "查看完整详情"
  ],
  "View gallery & details": [
    "Ver galería y detalles",
    "Voir photos et détails",
    "查看相册与详情"
  ],
  "Property details": [
    "Detalles de la propiedad",
    "Détails du bien",
    "房产详情"
  ],
  "Close property details": [
    "Cerrar detalles de propiedad",
    "Fermer les détails",
    "关闭房产详情"
  ],
  "Previous photo": [
    "Foto anterior",
    "Photo précédente",
    "上一张照片"
  ],
  "Next photo": [
    "Foto siguiente",
    "Photo suivante",
    "下一张照片"
  ],
  "Photo thumbnails": [
    "Miniaturas de fotografías",
    "Miniatures des photos",
    "照片缩略图"
  ],
  "View photo": [
    "Ver foto",
    "Voir la photo",
    "查看照片"
  ],
  "Property photograph": [
    "Fotografía de la propiedad",
    "Photographie du bien",
    "房产照片"
  ],
  "A place to build your vision.": [
    "El lugar para construir tu visión.",
    "Le lieu pour concrétiser votre vision.",
    "实现理想家园的土地。"
  ],
  "Designed for a remarkable way of life.": [
    "Diseñada para un estilo de vida extraordinario.",
    "Pensée pour un art de vivre exceptionnel.",
    "为非凡生活方式而设计。"
  ],
  "Request homesite information": [
    "Solicitar información del terreno",
    "Demander des informations sur le terrain",
    "咨询住宅用地"
  ],
  "Request a private viewing": [
    "Solicitar una visita privada",
    "Demander une visite privée",
    "预约私人看房"
  ],
  "All property enquiries are handled directly by Marqués Advisory & Investments. Details and availability are subject to confirmation.": [
    "Todas las consultas se gestionan directamente con Marqués Advisory & Investments. Los detalles y la disponibilidad están sujetos a confirmación.",
    "Toutes les demandes sont traitées directement par Marqués Advisory & Investments. Caractéristiques et disponibilité à confirmer.",
    "所有咨询均由 Marqués Advisory & Investments 直接处理。详情及供应情况须经确认。"
  ],
  "SQ FT": [
    "PIES²",
    "PIEDS²",
    "平方英尺"
  ],
  "BEDROOMS": [
    "DORMITORIOS",
    "CHAMBRES",
    "卧室"
  ],
  "FULL + POWDER BATHROOMS": [
    "BAÑOS COMPLETOS + MEDIOS BAÑOS",
    "SALLES DE BAIN + TOILETTES",
    "完整浴室 + 客用卫生间"
  ],
  "SWIMMING POOL": [
    "PISCINA",
    "PISCINE",
    "游泳池"
  ],
  "PARKING SPACES": [
    "ESTACIONAMIENTOS",
    "PLACES DE PARKING",
    "停车位"
  ],
  "FLOORS": [
    "PLANTAS",
    "NIVEAUX",
    "楼层"
  ],
  "FLOOR": [
    "PLANTA",
    "NIVEAU",
    "楼层"
  ],
  "POOL ACCESS": [
    "ACCESO A PISCINAS",
    "ACCÈS AUX PISCINES",
    "泳池使用"
  ],
  "PROPERTY TYPE": [
    "TIPO DE PROPIEDAD",
    "TYPE DE BIEN",
    "房产类型"
  ],
  "RESIDENCE POTENTIAL": [
    "POTENCIAL RESIDENCIAL",
    "POTENTIEL RÉSIDENTIEL",
    "住宅建设潜力"
  ],
  "LOT PRICING": [
    "PRECIO DE TERRENOS",
    "PRIX DES TERRAINS",
    "地块价格"
  ],
  "POOL": [
    "PISCINA",
    "PISCINE",
    "泳池"
  ],
  "SETTING": [
    "ENTORNO",
    "CADRE",
    "环境"
  ],
  "PRICE & PROPERTY DETAILS": [
    "PRECIO Y DETALLES",
    "PRIX ET DÉTAILS",
    "价格及详情"
  ],
  "Private": [
    "Privada",
    "Privée",
    "私人"
  ],
  "Private + shared": [
    "Privada + comunitaria",
    "Privée + commune",
    "私人及共享"
  ],
  "Homesites": [
    "Terrenos residenciales",
    "Terrains résidentiels",
    "住宅用地"
  ],
  "Custom": [
    "A medida",
    "Sur mesure",
    "定制"
  ],
  "Tropical": [
    "Tropical",
    "Tropical",
    "热带"
  ],
  "Casa Ensueño official property gallery photo": [
    "Fotografía oficial de Casa Ensueño",
    "Photo officielle de Casa Ensueño",
    "Casa Ensueño 官方房产照片"
  ],
  "Villa Senderos official property gallery photo": [
    "Fotografía oficial de Villa Senderos",
    "Photo officielle de Villa Senderos",
    "Villa Senderos 官方房产照片"
  ],
  "Illustration of the El Jaguar homesite community": [
    "Ilustración de la comunidad El Jaguar",
    "Illustration de la communauté El Jaguar",
    "El Jaguar 住宅用地社区示意图"
  ],
  "The coastline and grounds of Hacienda Pinilla seen from the El Jaguar virtual tour": [
    "Vista de la costa y el entorno de Hacienda Pinilla",
    "Vue du littoral et des paysages d’Hacienda Pinilla",
    "Hacienda Pinilla 海岸线及周边景观"
  ],
  "Las Lapas site plan showing residential lots within Hacienda Pinilla": [
    "Plano de lotes residenciales de Las Lapas",
    "Plan des terrains résidentiels de Las Lapas",
    "Las Lapas 住宅地块规划图"
  ],
  "Enlarged section of the Las Lapas lot layout beside the golf course": [
    "Detalle ampliado del plano de Las Lapas junto al golf",
    "Détail agrandi du plan de Las Lapas près du golf",
    "靠近高尔夫球场的 Las Lapas 地块规划放大图"
  ],
  "Community illustration": [
    "Ilustración de la comunidad",
    "Illustration de la communauté",
    "社区示意图"
  ],
  "Aerial view from the El Jaguar tour": [
    "Vista aérea de El Jaguar",
    "Vue aérienne d’El Jaguar",
    "El Jaguar 航拍视角"
  ],
  "Community site plan": [
    "Plano general de la comunidad",
    "Plan du quartier",
    "社区规划图"
  ],
  "Site plan detail": [
    "Detalle del plano",
    "Détail du plan",
    "规划图细节"
  ],
  "Previous image of": [
    "Imagen anterior de",
    "Image précédente de",
    "上一张图片"
  ],
  "Next image of": [
    "Siguiente imagen de",
    "Image suivante de",
    "下一张图片"
  ],
  "Completed in 2025 in Los Almendros, this five-bedroom estate pairs expansive glass living spaces with a private pool and covered terrace.": [
    "Terminada en 2025 en Los Almendros, esta residencia de cinco dormitorios combina espacios luminosos con piscina privada y terraza techada.",
    "Achevée en 2025 à Los Almendros, cette demeure de cinq chambres associe de vastes espaces vitrés, piscine privée et terrasse couverte.",
    "Casa Ensueño 于 2025 年竣工，位于 Los Almendros，拥有五间卧室、明亮宽阔的室内空间、私人泳池和带顶露台。"
  ],
  "5 beds · 5 full baths + 2 powder rooms · 5,156 sq ft": [
    "5 dormitorios · 5 baños completos + 2 medios baños · 5.156 pies²",
    "5 chambres · 5 salles de bain + 2 toilettes · 5 156 pieds²",
    "5 间卧室 · 5 间完整浴室 + 2 间客用卫生间 · 5,156 平方英尺"
  ],
  "Completed in 2025, Casa Ensueño is a refined estate set on over half an acre within the Los Almendros enclave at Hacienda Pinilla. Offering 5,156 sq ft, the single-level residence includes five spacious en-suite bedrooms, thoughtfully arranged for privacy and comfortable indoor-outdoor living.": [
    "Terminada en 2025, Casa Ensueño es una elegante propiedad de más de medio acre en Los Almendros, dentro de Hacienda Pinilla. Con 5.156 pies cuadrados en una sola planta y cinco amplios dormitorios con baño privado, está pensada para ofrecer privacidad y una vida interior-exterior cómoda.",
    "Achevée en 2025, Casa Ensueño est une demeure raffinée située sur plus d’un demi-acre à Los Almendros, au sein d’Hacienda Pinilla. Avec 5 156 pieds carrés de plain-pied et cinq chambres avec salle de bain privative, elle privilégie l’intimité et la fluidité entre intérieur et extérieur.",
    "Casa Ensueño 于 2025 年竣工，坐落于 Hacienda Pinilla 的 Los Almendros 社区，占地超过半英亩。单层住宅面积约 5,156 平方英尺，设有五间宽敞套房卧室，兼顾私密性与室内外生活的舒适衔接。"
  ],
  "Expansive glass openings connect the interiors to a private resort-style pool and covered terrace, an inviting setting for gathering with family and friends throughout the year.": [
    "Amplios ventanales conectan los interiores con una piscina privada de estilo resort y una terraza techada, ideales para disfrutar con familiares y amigos durante todo el año.",
    "De larges baies vitrées relient les espaces intérieurs à une piscine privée de style resort et à une terrasse couverte, propices aux moments partagés tout au long de l’année.",
    "宽阔的玻璃门窗将室内与度假式私人泳池及带顶露台相连，适合全年与家人朋友相聚。"
  ],
  "Its location, distinctive architecture and high-end appeal may be attractive to buyers considering rental use as well as personal enjoyment. Any rental projection should be assessed separately; no financial return is represented.": [
    "Su ubicación, arquitectura y acabados de alta gama pueden atraer tanto a compradores que buscan una residencia propia como a quienes evalúan alquileres vacacionales. Toda proyección de renta requiere un análisis independiente; no se garantiza rentabilidad.",
    "Sa situation, son architecture et son positionnement haut de gamme peuvent séduire tant pour un usage personnel que pour un projet locatif. Toute projection de revenus locatifs nécessite une étude distincte ; aucun rendement n’est garanti.",
    "其位置、建筑设计及高端品质既适合自住，也可能吸引考虑度假租赁的买家。任何租金预测均需单独评估，不构成收益保证。"
  ],
  "A refined four-bedroom tropical villa with private pool, generous terrace and access to a community pool.": [
    "Una villa tropical refinada de cuatro dormitorios, con piscina privada, amplia terraza y acceso a una piscina comunitaria.",
    "Une villa tropicale raffinée de quatre chambres, avec piscine privée, grande terrasse et accès à une piscine commune.",
    "一栋精致的四卧室热带别墅，设有私人泳池、宽敞露台，并可使用社区泳池。"
  ],
  "4 bedrooms · 4 full baths + 1 powder room · 4,553 sq ft": [
    "4 dormitorios · 4 baños completos + 1 medio baño · 4.553 pies²",
    "4 chambres · 4 salles de bain + 1 toilette · 4 553 pieds²",
    "4 间卧室 · 4 间完整浴室 + 1 间客用卫生间 · 4,553 平方英尺"
  ],
  "Villa Senderos offers a refined take on tropical luxury within the exclusive Senderos community at Hacienda Pinilla. This move-in-ready, four-bedroom residence combines sophisticated comfort with effortless indoor-outdoor living.": [
    "Villa Senderos ofrece lujo tropical en la exclusiva comunidad Senderos de Hacienda Pinilla. Esta residencia de cuatro dormitorios, lista para habitar, reúne comodidad sofisticada y una conexión natural entre los espacios interiores y exteriores.",
    "Villa Senderos incarne un luxe tropical raffiné au sein du quartier exclusif Senderos d’Hacienda Pinilla. Prête à emménager, cette résidence de quatre chambres allie confort sophistiqué et fluidité entre intérieur et extérieur.",
    "Villa Senderos 坐落于 Hacienda Pinilla 尊贵的 Senderos 社区，呈现精致的热带奢华生活。这栋可随时入住的四卧室别墅兼具现代舒适与流畅的室内外生活体验。"
  ],
  "The home features four full bathrooms, a powder room, private pool, expansive terrace and access to a community pool, framed by lush tropical landscaping. With two floors and parking for two vehicles, the residence is designed for privacy, relaxation and time together.": [
    "Incluye cuatro baños completos, un medio baño, piscina privada, amplia terraza y acceso a piscina comunitaria, rodeados de exuberante vegetación tropical. Sus dos plantas y dos estacionamientos brindan privacidad y comodidad.",
    "La villa comprend quatre salles de bain complètes, des toilettes, une piscine privée, une vaste terrasse et l’accès à une piscine commune, au cœur d’un paysage tropical luxuriant. Deux niveaux et deux places de stationnement complètent l’ensemble.",
    "住宅设有四间完整浴室、一间客用卫生间、私人泳池、宽敞露台，并可使用社区泳池，周围环绕茂盛的热带植被。两层布局及两个停车位兼顾私密与便利。"
  ],
  "Whether enjoyed as a personal retreat, vacation residence or prospective investment property, Villa Senderos provides a sophisticated connection to the natural setting of Hacienda Pinilla. Any financial or rental performance should be evaluated separately.": [
    "Ya sea como refugio privado, casa de vacaciones u oportunidad de inversión, Villa Senderos permite disfrutar del entorno natural de Hacienda Pinilla. Cualquier rendimiento financiero o de alquiler debe evaluarse por separado.",
    "Refuge privé, résidence de vacances ou projet d’investissement, Villa Senderos offre un lien privilégié avec la nature d’Hacienda Pinilla. Toute performance financière ou locative doit être évaluée indépendamment.",
    "无论作为私人度假居所、度假住宅或潜在投资物业，Villa Senderos 都能让业主尽享 Hacienda Pinilla 的自然环境。投资或租赁回报须单独评估。"
  ],
  "An opportunity to acquire a homesite and create a residence tailored to your family.": [
    "Una oportunidad para adquirir un terreno residencial y construir la casa que tu familia imagina.",
    "Une opportunité d’acquérir un terrain résidentiel et de construire une maison pensée pour votre famille.",
    "购置住宅地块，打造专属于家人的理想居所。"
  ],
  "El Jaguar presents a different path to living at Hacienda Pinilla: choosing a residential homesite and developing a residence around your own architectural vision, subject to the applicable community and construction requirements.": [
    "El Jaguar ofrece otra forma de vivir en Hacienda Pinilla: elegir un lote residencial y desarrollar un hogar a medida, sujeto a las normas constructivas y comunitarias aplicables.",
    "El Jaguar propose une autre manière de vivre à Hacienda Pinilla : choisir un terrain résidentiel et concevoir sa maison selon sa vision architecturale, dans le respect des règles de la communauté et de construction.",
    "El Jaguar 提供另一种入住 Hacienda Pinilla 的方式：选择住宅地块，按个人建筑理念打造专属居所，并遵守社区及建筑规定。"
  ],
  "The accompanying images illustrate the community context. Contact Marqués for confirmed lot sizes, pricing, current availability and applicable development guidelines.": [
    "Las imágenes ilustran el entorno de la comunidad. Contacta a Marqués para confirmar superficies, precios, disponibilidad y reglamentos de construcción.",
    "Les images illustrent le cadre de la communauté. Contactez Marqués pour confirmer les superficies, les prix, la disponibilité et les règles de construction.",
    "图片展示社区环境。请联系 Marqués 核实地块面积、价格、供应情况及适用建筑规范。"
  ],
  "Residential land near the golf setting, offering a canvas for a custom-built home.": [
    "Terrenos residenciales cercanos al campo de golf para construir una casa a tu medida.",
    "Terrains résidentiels à proximité du golf, pour créer une maison sur mesure.",
    "毗邻高尔夫环境的住宅用地，适合打造定制住宅。"
  ],
  "Las Lapas offers residential homesites for buyers who prefer to create their own residence rather than purchase an existing home. Its setting within Hacienda Pinilla may appeal to those who value both the coastal lifestyle and proximity to golf.": [
    "Las Lapas ofrece lotes residenciales para quienes prefieren diseñar y construir su propio hogar. Su ubicación en Hacienda Pinilla combina el estilo de vida costero con la cercanía al golf.",
    "Las Lapas propose des terrains résidentiels à ceux qui préfèrent concevoir leur propre demeure plutôt qu’acheter une maison existante. Son cadre au sein d’Hacienda Pinilla unit art de vivre côtier et proximité du golf.",
    "Las Lapas 住宅地块适合希望自行设计并建造住宅的买家。位于 Hacienda Pinilla 内，兼享海岸生活方式与高尔夫便利。"
  ],
  "Review the site plan and its enlarged detail, then speak with Marqués about available lots, dimensions, current prices and any construction or access conditions that apply.": [
    "Explora el plano general y sus detalles ampliados y consulta a Marqués sobre lotes disponibles, dimensiones, precios y condiciones de acceso o construcción.",
    "Consultez le plan et ses détails agrandis, puis contactez Marqués pour connaître les terrains disponibles, leurs dimensions, leurs prix et les conditions d’accès ou de construction.",
    "浏览总体规划图及放大细节后，请咨询 Marqués 了解可售地块、尺寸、当前价格及建造或出入条件。"
  ]
}

const index: Record<Exclude<Locale, "en">, number> = { es: 0, fr: 1, "zh-cn": 2 }

export function pinillaText(message: string, locale: Locale): string {
  if (locale === "en") return message
  const translations = messages[message]
  if (!translations) return message
  return translations[index[locale]]
}

export function pinillaImageAlt(name: string, imageIndex: number, locale: Locale): string {
  return `${name} · ${pinillaText("Property photograph", locale)} ${imageIndex + 1}`
}
