import Image from "next/image";
import Navbar from "./Navbar";
export default function NotFound() {
  return (
    <div style={{ textAlign: "center" }}>
      <Image src="/img/404.png" alt="404" width={500} height={500} />
      <Navbar />
    </div>
  );
}
