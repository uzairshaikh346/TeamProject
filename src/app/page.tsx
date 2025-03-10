import Image from "next/image";
import AboutBanner from "./components/AboutBanner";
import AboutTestinominal from "./components/AboutTestinominal";

export default function Home() {
  return (
   <div>
    <AboutBanner/>
    <AboutTestinominal/>
   </div>
  );
}
