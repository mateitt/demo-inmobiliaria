// Base de datos demo de propiedades — Concordia, Entre Ríos
const PROPIEDADES = [
  {
    id: 1,
    titulo: "Casa familiar en Barrio Pirola",
    tipo: "casa",
    operacion: "venta",
    precio: 92000,
    moneda: "USD",
    direccion: "Estrada 1845, Concordia",
    lat: -31.3895,
    lng: -58.0235,
    m2: 180,
    ambientes: 4,
    comodidades: ["Cochera", "Patio", "Parrilla", "Lavadero"],
    descripcion: "Amplia casa de tres dormitorios sobre lote propio con fondo verde. Living comedor con hogar a leña y cocina independiente. Ideal para familia que busca tranquilidad cerca del centro.",
    fotos: [
      "https://picsum.photos/800/600?random=1",
      "https://picsum.photos/800/600?random=2",
      "https://picsum.photos/800/600?random=3"
    ],
    destacada: true
  },
  {
    id: 2,
    titulo: "Departamento 2 ambientes a estrenar",
    tipo: "departamento",
    operacion: "alquiler",
    precio: 320000,
    moneda: "ARS",
    direccion: "Pellegrini 540, Concordia",
    lat: -31.3925,
    lng: -58.0172,
    m2: 52,
    ambientes: 2,
    comodidades: ["Balcón", "Cocina equipada", "Portero eléctrico"],
    descripcion: "Departamento luminoso a estrenar en pleno centro, a metros de la peatonal. Un dormitorio, balcón al frente y excelente conectividad. Apto profesional.",
    fotos: [
      "https://picsum.photos/800/600?random=4",
      "https://picsum.photos/800/600?random=5"
    ],
    destacada: false
  },
  {
    id: 3,
    titulo: "Casa con pileta en Villa Adela",
    tipo: "casa",
    operacion: "venta",
    precio: 145000,
    moneda: "USD",
    direccion: "Los Tilos 320, Concordia",
    lat: -31.3760,
    lng: -58.0410,
    m2: 240,
    ambientes: 5,
    comodidades: ["Pileta", "Cochera doble", "Quincho", "Parrilla", "Jardín"],
    descripcion: "Excelente propiedad de cuatro dormitorios con pileta y quincho con parrilla. Construcción sólida y prolija en barrio residencial tranquilo. Lista para mudarse.",
    fotos: [
      "https://picsum.photos/800/600?random=6",
      "https://picsum.photos/800/600?random=7",
      "https://picsum.photos/800/600?random=8"
    ],
    destacada: true
  },
  {
    id: 4,
    titulo: "Monoambiente frente a la costanera",
    tipo: "departamento",
    operacion: "alquiler",
    precio: 250000,
    moneda: "ARS",
    direccion: "Costanera 75, Concordia",
    lat: -31.3982,
    lng: -58.0095,
    m2: 38,
    ambientes: 1,
    comodidades: ["Vista al río", "Amoblado", "Aire acondicionado"],
    descripcion: "Monoambiente totalmente amoblado con vista al río Uruguay. Ideal para una persona o pareja. A pasos de la costanera y el parque San Carlos.",
    fotos: [
      "https://picsum.photos/800/600?random=9",
      "https://picsum.photos/800/600?random=10"
    ],
    destacada: false
  },
  {
    id: 5,
    titulo: "Local comercial sobre avenida principal",
    tipo: "comercio",
    operacion: "alquiler",
    precio: 580000,
    moneda: "ARS",
    direccion: "Av. San Lorenzo 1120, Concordia",
    lat: -31.3848,
    lng: -58.0188,
    m2: 95,
    ambientes: 2,
    comodidades: ["Vidriera amplia", "Baño", "Depósito", "Alta circulación"],
    descripcion: "Local a la calle sobre avenida de gran tránsito comercial. Amplia vidriera, depósito en el fondo y baño. Excelente ubicación para todo tipo de rubro.",
    fotos: [
      "https://picsum.photos/800/600?random=11",
      "https://picsum.photos/800/600?random=12"
    ],
    destacada: true
  },
  {
    id: 6,
    titulo: "Terreno en zona de quintas",
    tipo: "terreno",
    operacion: "venta",
    precio: 38000,
    moneda: "USD",
    direccion: "Camino a Yuquerí s/n, Concordia",
    lat: -31.3520,
    lng: -58.0650,
    m2: 600,
    ambientes: 0,
    comodidades: ["Servicios en la zona", "Escritura", "Apto crédito"],
    descripcion: "Lote amplio de 600 m² en zona de quintas en pleno crecimiento. Ideal para construir vivienda con jardín. Todos los servicios disponibles sobre la calle.",
    fotos: [
      "https://picsum.photos/800/600?random=13"
    ],
    destacada: false
  },
  {
    id: 7,
    titulo: "Departamento 3 ambientes con cochera",
    tipo: "departamento",
    operacion: "venta",
    precio: 78000,
    moneda: "USD",
    direccion: "Mitre 980, Concordia",
    lat: -31.3910,
    lng: -58.0205,
    m2: 74,
    ambientes: 3,
    comodidades: ["Cochera", "Balcón", "Baulera", "Ascensor"],
    descripcion: "Departamento de dos dormitorios en edificio con ascensor, cochera cubierta y baulera. Muy bien mantenido y luminoso. A pocas cuadras de la plaza central.",
    fotos: [
      "https://picsum.photos/800/600?random=14",
      "https://picsum.photos/800/600?random=15",
      "https://picsum.photos/800/600?random=16"
    ],
    destacada: false
  },
  {
    id: 8,
    titulo: "Casa quinta con parque y galería",
    tipo: "casa",
    operacion: "alquiler",
    precio: 650000,
    moneda: "ARS",
    direccion: "Las Acacias 410, Concordia",
    lat: -31.3680,
    lng: -58.0520,
    m2: 300,
    ambientes: 5,
    comodidades: ["Pileta", "Galería", "Parque", "Parrilla", "Cochera"],
    descripcion: "Casa quinta sobre amplio parque arbolado con pileta y galería con parrilla. Tres dormitorios y ambientes generosos. Perfecta para disfrutar todo el año.",
    fotos: [
      "https://picsum.photos/800/600?random=17",
      "https://picsum.photos/800/600?random=18",
      "https://picsum.photos/800/600?random=19"
    ],
    destacada: true
  }
];
