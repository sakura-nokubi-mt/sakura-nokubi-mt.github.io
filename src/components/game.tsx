//ゲームの履歴をすべて保持するトップレベルのコンポーネント
'use client';
import { useState } from 'react';
import Board from '@/components/board';

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);//現在プレイヤーが見ている盤面を管理
    const xIsNext = currentMove % 2 === 0;//現在の盤面が偶数ならtureである(プレイヤーがXである)

    const currentSquares = history[currentMove];//更新された現在の盤面を代入

    //マス目をクリックしたときに呼ばれる関数
    function handlePlay(nextSquares: string[]) {
        //historyの中で、プレイヤーが見たいと思ってクリックした盤面までを取り出し、次にnextSquaresを追加して新しい配列を作る
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        //historyとCurrentMoveを更新
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }
    
    //戻るボタンをクリックしたときの動作
    function jumpTo(nextMove: number) {
        setCurrentMove(nextMove);//クリックされたら現在プレイヤーが見ている盤面を更新
    }
    
    //戻るボタン作成
    const moves = history.map((squares, move) => {
        let description;
        //履歴が一つ以上あればひとつ前の履歴番号を表示
        if (move > 0) {
        description = 'Go to move #' + move;
        }
        //履歴が一つもなければゲームスタートと表示 
        else {
        description = 'Go to game start';
        }
        //上記いずれかを表示させたボタンを表示
        //クリックされた場合はjumpToを実行
        return (
        <li key = {move}>
            <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
        );
    });


    return (
        <div>
            <div>
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div>
                  <ol>{moves}</ol>
            </div>
        </div>
    );

}