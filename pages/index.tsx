import Head from "next/head";
import BubbleSortVisualizer from "../components/BubbleSortVisualizer";

export default function Home() {
  const initialArray = [13, 5, 20, 3, 19, 8, 18, 10, 12, 17, 4, 16, 2, 11, 9, 15, 7, 1, 6, 14]; // Array inicial para o visualizador
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Head>
        <title>Bubble Sort Visualizer</title>
      </Head>
      <h1 className="text-3xl text-black font-bold mb-5">Bubble Sort Visualizer</h1>
      {/* Passa o array como prop para o componente */}
      <BubbleSortVisualizer array={initialArray} />
    </div>
  );
}
