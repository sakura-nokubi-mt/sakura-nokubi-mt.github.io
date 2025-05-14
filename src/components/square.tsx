import '../app/globals.css';
import '../../node_modules/tailwindcss/prettier.config.js';

type SquareProps = {
    value: string | null;
    onSquareClick: () => void;
};

export default function Square({ value, onSquareClick }: SquareProps) {
    return (
        <button
            className="float-left -mr-0.5 -mt-0.5 h-9 w-9 border border-[#999] bg-white p-0 text-center text-2xl font-bold leading-10"
            onClick={onSquareClick}
        >
            {value}
        </button>
    );
}
