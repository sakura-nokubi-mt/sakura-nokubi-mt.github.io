import '../app/globals.css';

type SquareProps = {
  value: string | null;
  onSquareClick: () => void;
};

export default function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button className="bg-white border border-[#999] float-left text-2xl font-bold leading-10 h-9 -mr-0.5 -mt-0.5 p-0 text-center w-9"
      onClick={onSquareClick}>
      {value}
    </button>
  );
}

