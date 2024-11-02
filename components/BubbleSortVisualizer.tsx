import React, { useState } from "react";

interface BubbleSortVisualizerProps {
  array: number[];
}

const BubbleSortVisualizer: React.FC<BubbleSortVisualizerProps> = ({ array }) => {
  const [bars, setBars] = useState<number[]>(array);
  const [isSorting, setIsSorting] = useState<boolean>(false);

  const bubbleSort = async () => {
    setIsSorting(true); // Desabilita o botão enquanto a ordenação ocorre
    const newBars = [...bars];
    for (let i = 0; i < newBars.length; i++) {
      for (let j = 0; j < newBars.length - i - 1; j++) {
        if (newBars[j] > newBars[j + 1]) {
          [newBars[j], newBars[j + 1]] = [newBars[j + 1], newBars[j]];
          setBars([...newBars]);
          await new Promise((resolve) => setTimeout(resolve, 200)); // Atraso para visualização
        }
      }
    }
    setIsSorting(false); // Reabilita o botão após a ordenação
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex space-x-1 mb-5">
        {bars.map((value, idx) => (
          <div
            key={idx}
            style={{ height: `${value * 20}px` }}
            className="w-8 bg-blue-500 text-white flex items-center justify-center"
          >
            {value}
          </div>
        ))}
      </div>
      <button
        onClick={bubbleSort}
        disabled={isSorting}
        className="px-4 py-2 bg-green-500 text-white font-bold rounded disabled:bg-gray-400"
      >
        {isSorting ? "Ordenando..." : "Iniciar Ordenação"}
      </button>
    </div>
  );
};

export default BubbleSortVisualizer;
