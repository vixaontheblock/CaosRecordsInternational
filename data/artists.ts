export type Artist = {
  slug: string;
  name: string;
  location?: string;
  genre?: string;
  bio?: string;
  availableForBooking?: boolean;
  image?: string;
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
}];
