import Image from "next/image";

export function Portrait({ preload = false }: { preload?: boolean }) {
  return (
    <span className="portrait">
      <Image
        src="/images/aryan.jpg"
        alt="Aryan at the beach"
        fill
        sizes="(max-width: 560px) 77px, 100px"
        preload={preload}
      />
    </span>
  );
}
