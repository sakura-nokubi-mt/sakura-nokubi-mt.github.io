"use client"; 
import '../app/globals.css';
import{ useState } from 'react';
import Square from "@/components/square"

export default function Board() {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    //クリックされた時の処理
    function handleClick(i : number) {
        //すでに値が入力済みor勝者がいる場合早期リターン
        if(squares[i] || calculateWinner(squares)){
            return;
        }
        //squares配列にXかOを格納し、2つのuseStatusを更新
        const nextSquares = squares.slice();
        if(xIsNext){
            nextSquares[i] = "X";
        }else{
            nextSquares[i] = "O";
        }
        setXIsNext(!xIsNext)
        setSquares(nextSquares);
    }

    //status(Board上部に表示)を判定
    //勝者判定する関数を呼び出す
    const winner = calculateWinner(squares);
    let status;
    //勝者がいる場合は勝者を表示
    if (winner) {
    status = "Winner: " + winner;
    }
    //勝者がいない場合は次のプレイヤーを表示
    else {
    status = "Next player: " + (xIsNext ? "X" : "O");
    }

    //画面表示
    return (
    <>
        <div className="text-green-800 text-xl">{status}</div>

        <div className="flex">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
        </div>
        <div className="flex">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
        </div>
        <div className="flex">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
        </div>
    </>
    );
}

//勝者がいるかどうかを判定。これなぜ外に書く？Boardコンポーネント以外でもimportしたい？
function calculateWinner(squares: string[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}