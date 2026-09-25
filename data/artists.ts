export type Artist = {
  slug: string;
  name: string;
  location?: string;
  genre?: string;
  bio?: string;
  availableForBooking?: boolean;
  image?: string;
  monogram?: string;
  imagePosition?: string;
  releases?: { title: string; credit: string; videoId: string; duration: string; artwork?: string }[];
  links?: {
    spotify?: string;
    appleMusic?: string;
    youtube?: string;
    instagram?: string;
  };
};

// Keep the roster honest. Add real artists here only when their public
// representation by CAOS has been confirmed and you have approved assets.
export const artists: Artist[] = [{
  slug: "forty2",
  name: "Forty2",
  monogram: "42",
  image: "/artists/forty2.png",
  imagePosition: "62% 28%",
  genre: "Trap · Reguetón · Funk",
  bio: "Forty2, también conocido como Isforty2, presenta su proyecto con la expresión «de Cali a Panamá». Su canal reúne canciones con referencias al trap, al reguetón y al funk, además de colaboraciones con AGM, FLASH_HYRO y DQ. Entre sus publicaciones están Sin respeto, ¿Paso por ti?, Una mala y Gritos. Forma parte de CAOS Records.",
  links: { youtube: "https://www.youtube.com/@ISFORTY2", instagram: "https://www.instagram.com/isforty2/" },
  releases: [
    { title: "Sin respeto", credit: "Isforty2", videoId: "Oul0Kv79EJM", duration: "2:20", artwork: "https://i.ytimg.com/vi/Oul0Kv79EJM/hqdefault.jpg?sqp=-oaymwFBCOADEI4CSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AHUBoAC0AOKAgwIABABGHIgVCg9MA8=&rs=AOn4CLC7_ZbFC09kkPTzJhS7j7iZZGc8cQ" },
    { title: "¿Paso por ti?", credit: "Isforty2 y AGM", videoId: "A_jlpKdwnhE", duration: "2:42", artwork: "https://i.ytimg.com/vi/A_jlpKdwnhE/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGFMgZShWMA8=&rs=AOn4CLChOtNyz5WK0xHZfngYX7irI-48Iw" },
    { title: "Una mala", credit: "AGM, FLASH_HYRO y Forty2", videoId: "Zt7HIY6Pb2k", duration: "2:35", artwork: "https://i.ytimg.com/vi/Zt7HIY6Pb2k/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AG-B4AC0AWKAgwIABABGH8gEygWMA8=&rs=AOn4CLC70JPaSR2tFX2T9Hvts4vrUj0nJQ" },
    { title: "Gritos", credit: "Isforty2", videoId: "Ydeh-45Nd20", duration: "3:17" },
    { title: "Deja el drama", credit: "Isforty2 y DQ", videoId: "ZXwZ8q3t9uQ", duration: "2:26" },
    { title: "No contesta", credit: "Isforty2 · Producción de Forty2", videoId: "Qqc4yRpOZRg", duration: "3:08" },
    { title: "Te conviene", credit: "Isforty2", videoId: "ioq975suprA", duration: "3:02" },
    { title: "El cllo", credit: "Isforty2 · Producción de FRANCO", videoId: "8yT0gsr9Nqs", duration: "2:19" },
  ],
}, {
  slug: "ax-tokyo",
  name: "A.X TOKYO",
  monogram: "A.X",
  image: "/artists/ax-tokyo.jpeg",
  imagePosition: "55% 72%",
  releases: [
  {
    "title": "Por los Benja",
    "videoId": "r1y5lVI7IME",
    "duration": "2:44",
    "artwork": "https://i.ytimg.com/vi/r1y5lVI7IME/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBwHZi9qtdm71uRpU2MR5XyRM3uWg",
    "credit": "A.X TOKYO y UZIFER99"
  },
  {
    "title": "Emociones con colores",
    "videoId": "yUB64NGkZ3Y",
    "duration": "2:23",
    "artwork": "https://i.ytimg.com/vi/yUB64NGkZ3Y/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCwZ_o39FMsgeiSYpGi1OpT-ezmJQ",
    "credit": "A.X TOKYO"
  },
  {
    "title": "Deskite",
    "videoId": "P4haP-6Uvd8",
    "duration": "2:24",
    "artwork": "https://i.ytimg.com/vi/P4haP-6Uvd8/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDWczVFG4pQ0Wu-b4iWf3vz85FwCQ",
    "credit": "A.X TOKYO y Sinclair"
  },
  {
    "title": "Trapstar",
    "videoId": "9GH5Zm0x9iI",
    "duration": "2:21",
    "artwork": "https://i.ytimg.com/vi/9GH5Zm0x9iI/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBX05E1k9QbJ32HR8IIAKNihbJNDQ",
    "credit": "A.X TOKYO"
  },
  {
    "title": "7:18",
    "videoId": "iAR9_Q0fv2U",
    "duration": "2:05",
    "artwork": "https://i.ytimg.com/vi/iAR9_Q0fv2U/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAbNGQlHB2C5UtJQQaAQUqjViDSJg",
    "credit": "A.X TOKYO y Tye"
  },
  {
    "title": "Otro feeling",
    "videoId": "2gCobnPsw74",
    "duration": "2:39",
    "artwork": "https://i.ytimg.com/vi/2gCobnPsw74/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBPIA-p9NNzGSk5Xtl4ZYtx55ZRiA",
    "credit": "A.X TOKYO"
  },
  {
    "title": "Pesto",
    "videoId": "H2EEW53hhk4",
    "duration": "1:49",
    "artwork": "https://i.ytimg.com/vi/H2EEW53hhk4/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBekaX64QJ_W0qWrsV-ye2wGIerXw",
    "credit": "A.X TOKYO"
  }
],
  genre: "Voz · Producción musical",
  bio: "A.X TOKYO combina la interpretación y la producción musical, dos facetas que destaca en la presentación de su canal oficial. Su repertorio incluye Por los Benja, Emociones con colores, Trapstar, Otro feeling y Pesto. También reúne colaboraciones con UZIFER99, Sinclair y Tye en canciones como Por los Benja, Deskite y 7:18. Forma parte de CAOS Records y comparte su música en YouTube y Spotify, con novedades en Instagram.",
  links: {
    youtube: "https://www.youtube.com/@a.xtokyo",
    spotify: "https://open.spotify.com/artist/1gU1qfRsyAqrretJtddYUZ",
    instagram: "https://www.instagram.com/2005tokyo/",
  },
}];
