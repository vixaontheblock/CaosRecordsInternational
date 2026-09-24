export type Artist = {
  slug: string;
  name: string;
  location?: string;
  genre?: string;
  bio?: string;
  availableForBooking?: boolean;
  image?: string;
  links?: {
    spotify?: string;
    appleMusic?: string;
    youtube?: string;
    instagram?: string;
  };
};

// Keep the roster honest. Add real artists here only when their public
// representation by CAOS has been confirmed and you have approved assets.
export const artists: Artist[] = [];
