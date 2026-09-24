import Image from "next/image";
import Link from "next/link";

export default function Logo({
  size = 54,
  dark = false,
}: {
  size?: number;
  dark?: boolean;
}) {
  return (
    <Link href="/" aria-label="CAOS RECORDS — Home" className="inline-flex shrink-0">
      <Image
        src={dark ? "/logo-black.png" : "/logo-white.png"}
        alt="CAOS RECORDS"
        width={size}
        height={size}
        className="object-contain"
        priority
      />
    </Link>
  );
}
