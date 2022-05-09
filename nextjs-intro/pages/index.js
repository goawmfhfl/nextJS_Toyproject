import { useState } from "react";
import Navbar from "../components/Navbar";
export default function Home() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Hellow Next.js</h1>
      <Navbar />
    </div>
  );
}
