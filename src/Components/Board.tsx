import React, { useState, useEffect } from "react";
import {
  Piece,
  Status,
  Shape,
  Size,
  Color,
  Player,
  Hole,
  RemPiece,
} from "../Types/Piece";
import cloneDeep from "lodash/cloneDeep";
import "./../Assets/Board.css";

const vertical = ["1", "2", "3", "4"];
const horizontal = ["a", "b", "c", "d"];
const Config = {
  ROWS_SIZE: 4,
  COLUMNS_SIZE: 4,
  WINNING_SCORE: 100000,
};

const pieceCarac = new Map();
pieceCarac.set("-1", {
  shape: Shape.NOTFILLED,
  size: Size.NOTFILLED,
  color: Color.NOTFILLED,
  hole: Hole.NOTFILLED,
});
pieceCarac.set("00", {
  shape: Shape.CIRCLE,
  size: Size.SMALL,
  color: Color.BLACK,
  hole: Hole.FILLED,
});
pieceCarac.set("01", {
  shape: Shape.RECTANGLE,
  size: Size.SMALL,
  color: Color.BLACK,
  hole: Hole.FILLED,
});
pieceCarac.set("02", {
  shape: Shape.CIRCLE,
  size: Size.BIG,
  color: Color.BLACK,
  hole: Hole.FILLED,
});
pieceCarac.set("03", {
  shape: Shape.RECTANGLE,
  size: Size.BIG,
  color: Color.BLACK,
  hole: Hole.FILLED,
});
pieceCarac.set("10", {
  shape: Shape.CIRCLE,
  size: Size.SMALL,
  color: Color.BLACK,
  hole: Hole.HOLLOW,
});
pieceCarac.set("11", {
  shape: Shape.RECTANGLE,
  size: Size.SMALL,
  color: Color.BLACK,
  hole: Hole.HOLLOW,
});
pieceCarac.set("12", {
  shape: Shape.CIRCLE,
  size: Size.BIG,
  color: Color.BLACK,
  hole: Hole.HOLLOW,
});
pieceCarac.set("13", {
  shape: Shape.RECTANGLE,
  size: Size.BIG,
  color: Color.BLACK,
  hole: Hole.HOLLOW,
});
pieceCarac.set("20", {
  shape: Shape.CIRCLE,
  size: Size.SMALL,
  color: Color.WHITE,
  hole: Hole.FILLED,
});
pieceCarac.set("21", {
  shape: Shape.RECTANGLE,
  size: Size.SMALL,
  color: Color.WHITE,
  hole: Hole.FILLED,
});
pieceCarac.set("22", {
  shape: Shape.CIRCLE,
  size: Size.BIG,
  color: Color.WHITE,
  hole: Hole.FILLED,
});
pieceCarac.set("23", {
  shape: Shape.RECTANGLE,
  size: Size.BIG,
  color: Color.WHITE,
  hole: Hole.FILLED,
});
pieceCarac.set("30", {
  shape: Shape.CIRCLE,
  size: Size.SMALL,
  color: Color.WHITE,
  hole: Hole.HOLLOW,
});
pieceCarac.set("31", {
  shape: Shape.RECTANGLE,
  size: Size.SMALL,
  color: Color.WHITE,
  hole: Hole.HOLLOW,
});
pieceCarac.set("32", {
  shape: Shape.CIRCLE,
  size: Size.BIG,
  color: Color.WHITE,
  hole: Hole.HOLLOW,
});
pieceCarac.set("33", {
  shape: Shape.RECTANGLE,
  size: Size.BIG,
  color: Color.WHITE,
  hole: Hole.HOLLOW,
});

const nullPiece = {
  image: `./pieces/piece-00.png`,
  x: -1,
  y: -1,
  status: Status.NOTPLACED,
  carac: {
    shape: Shape.NOTFILLED,
    size: Size.NOTFILLED,
    color: Color.NOTFILLED,
    hole: Hole.NOTFILLED,
  },
};

const emptyBoard = [
  [nullPiece, nullPiece, nullPiece, nullPiece],
  [nullPiece, nullPiece, nullPiece, nullPiece],
  [nullPiece, nullPiece, nullPiece, nullPiece],
  [nullPiece, nullPiece, nullPiece, nullPiece],
];

const emptyBoard2 = [
  [nullPiece, nullPiece, nullPiece, nullPiece],
  [nullPiece, nullPiece, nullPiece, nullPiece],
  [nullPiece, nullPiece, nullPiece, nullPiece],
  [nullPiece, nullPiece, nullPiece, nullPiece],
];

const emptyBoard3 = [
  [nullPiece, nullPiece, nullPiece, nullPiece],
  [nullPiece, nullPiece, nullPiece, nullPiece],
  [nullPiece, nullPiece, nullPiece, nullPiece],
  [nullPiece, nullPiece, nullPiece, nullPiece],
];

export default function Board(props: any) {
  const { currentPlayer, difficulty, gameOver } = props;
  const [pieceSelected, setPieceSelected] = useState<Piece>(nullPiece);

  // left board UI
  let leftBoardUI = [];

  // left board state
  const [leftBoard, setLeftBoard] = useState({ board: initPieces() });

  // Right board background
  let rightBoardUI = [];

  // Right board state
  const [rightBoard, setRightBoard] = useState({ board: emptyBoard });

  // Set right and left board background
  for (let i = 0; i < Config.ROWS_SIZE; i++) {
    for (let j = 0; j < Config.COLUMNS_SIZE; j++) {
      const number = j + i + 2;
      let imageBoard;
      let imagePiecesBoard;
      let key = `${i}${j}`;
      rightBoard.board.forEach((prow: any) => {
        prow.forEach((p: any) => {
          if (p.x === i && p.y === j) {
            p.status === Status.PLACED
              ? (imageBoard = p.image)
              : (imagePiecesBoard = p.image);
          }
        });
      });

      if (number % 2 === 0) {
        rightBoardUI.push(
          <div id={key} className="cellInv">
            <span className="cellName">
              {horizontal[i]}
              {vertical[j]}
            </span>
            {imageBoard ? (
              <img alt={key} src={imageBoard} className="aPiece" />
            ) : null}
          </div>
        );
      } else {
        rightBoardUI.push(
          <div id={key} className="cell">
            <span className="cellName">
              {horizontal[i]}
              {vertical[j]}
            </span>
            {imageBoard ? (
              <img alt={key} src={imageBoard} className="aPiece" />
            ) : null}
          </div>
        );
      }

      leftBoardUI.push(
        <div className="pieceContainer">
          {leftBoard.board[i][j].status === Status.NOTPLACED ? (
            <img
              alt={key}
              src={leftBoard.board[i][j].image}
              className="aPiece"
            />
          ) : null}
        </div>
      );
    }
  }

  // Init left board
  function initPieces() {
    let varBoard = emptyBoard2;
    for (let i = 0; i < vertical.length; i++) {
      for (let j = 0; j < horizontal.length; j++) {
        varBoard[i][j] = {
          image: `./pieces/piece-${i}${j}.png`,
          x: i,
          y: j,
          status: Status.NOTPLACED,
          carac: pieceCarac.get(`${i}${j}`),
        };
      }
    }
    return varBoard;
  }

  // Handel human piece select
  function selectPiece(e: React.MouseEvent) {
    if (!gameOver.bool) {
      const alt = (e.target as HTMLButtonElement).getAttribute("alt");
      let ij = "-1";
      if (alt != null) {
        ij = alt;
        const i = parseInt(ij.substring(0, 1), 10);
        const j = parseInt(ij.substring(1, 2), 10);
        if (
          leftBoard.board[i][j].status === Status.NOTPLACED &&
          pieceSelected.status !== Status.SELECTED
        ) {
          setLeftBoard((state: any) => ({
            ...state,
            board: state.board.map((arr: Piece[], y: number) =>
              arr.map((item: Piece, z: number) => {
                if (i === y && j === z) {
                  return {
                    ...item,
                    status: Status.UNAVAILABLE,
                  };
                } else return item;
              })
            ),
          }));
          leftBoard.board[i][j].status = Status.SELECTED;
          setPieceSelected(leftBoard.board[i][j]);
          props.setTurn();
        }
      }
    }
  }

  // Handel human place a piece
  function placePiece(e: React.MouseEvent) {
    const id = (e.target as HTMLButtonElement).getAttribute("id");
    let ij = "00";
    if (id != null) {
      ij = id;
      const i = parseInt(ij.substring(0, 1), 10);
      const j = parseInt(ij.substring(1, 2), 10);
      if (pieceSelected.status === Status.SELECTED) {
        setPieceSelected({ ...pieceSelected, status: Status.PLACED });
        setRightBoard((state: any) => ({
          board: state.board.map((arr: Piece[], y: number) =>
            arr.map((item: Piece, z: number) => {
              if (i === y && j === z) {
                return {
                  ...item,
                  image: pieceSelected.image,
                  x: i,
                  y: j,
                  carac: pieceSelected.carac,
                  status: Status.PLACED,
                };
              } else return item;
            })
          ),
        }));
      }
    }
  }

  function placeAIPiece(p: Piece, i: number, j: number) {
    if (pieceSelected.status === Status.SELECTED) {
      setPieceSelected({ ...pieceSelected, status: Status.PLACED });
      setRightBoard((state: any) => ({
        board: state.board.map((arr: Piece[], y: number) =>
          arr.map((item: Piece, z: number) => {
            if (i === y && j === z) {
              return {
                ...item,
                image: pieceSelected.image,
                x: i,
                y: j,
                carac: pieceSelected.carac,
                status: Status.PLACED,
              };
            } else return item;
          })
        ),
      }));
    }
  }

  /*-------------compare pieces--------------------------- */

  function equals4(a: Piece, b: Piece, c: Piece, d: Piece) {
    let win = false;

    if (
      a.status === Status.PLACED &&
      b.status === Status.PLACED &&
      c.status === Status.PLACED &&
      d.status === Status.PLACED
    ) {
      if (
        a.carac.color === b.carac.color &&
        b.carac.color === c.carac.color &&
        c.carac.color === d.carac.color
      ) {
        console.log("equals4 : color");
        win = true;
      }
      if (
        a.carac.shape === b.carac.shape &&
        b.carac.shape === c.carac.shape &&
        c.carac.shape === d.carac.shape
      ) {
        console.log("equals4 : shape");

        win = true;
      }
      if (
        a.carac.size === b.carac.size &&
        b.carac.size === c.carac.size &&
        c.carac.size === d.carac.size
      ) {
        console.log("equals4 : size");

        win = true;
      }
      if (
        a.carac.hole === b.carac.hole &&
        b.carac.hole === c.carac.hole &&
        c.carac.hole === d.carac.hole
      ) {
        console.log("equals4 : hole");

        win = true;
      }
    }

    return win;
  }

  function equals3(a: any, b: any, c: any, d: any) {
    let win = false;
    // d khawya
    if (
      a.status === Status.PLACED &&
      b.status === Status.PLACED &&
      c.status === Status.PLACED
    ) {
      if (a.carac.color === b.carac.color && b.carac.color === c.carac.color) {
        // console.log("equals3 : color");
        win = true;
      }
      if (a.carac.shape === b.carac.shape && b.carac.shape === c.carac.shape) {
        // console.log("equals3 : shape");
        win = true;
      }
      if (a.carac.size === b.carac.size && b.carac.size === c.carac.size) {
        // console.log("equals3 : size");
        win = true;
      }
      if (a.carac.hole === b.carac.hole && b.carac.hole === c.carac.hole) {
        // console.log("equals3 : hole");
        win = true;
      }
    }
    // a khawya
    if (
      d.status === Status.PLACED &&
      b.status === Status.PLACED &&
      c.status === Status.PLACED
    ) {
      if (b.carac.color === c.carac.color && c.carac.color && d.carac.color) {
        win = true;
      }
      if (b.carac.shape === c.carac.shape && c.carac.shape === d.carac.shape) {
        win = true;
      }
      if (b.carac.size === c.carac.size && c.carac.size === d.carac.size) {
        win = true;
      }
      if (b.carac.hole === c.carac.hole && c.carac.hole === d.carac.hole) {
        win = true;
      }
    }
    // b khawya
    if (
      a.status === Status.PLACED &&
      d.status === Status.PLACED &&
      c.status === Status.PLACED
    ) {
      if (a.carac.color === c.carac.color && c.carac.color && d.carac.color) {
        win = true;
      }
      if (a.carac.shape === c.carac.shape && c.carac.shape === d.carac.shape) {
        win = true;
      }
      if (a.carac.size === c.carac.size && c.carac.size === d.carac.size) {
        win = true;
      }
      if (a.carac.hole === c.carac.hole && c.carac.hole === d.carac.hole) {
        win = true;
      }
    }
    // c khawya
    if (
      a.status === Status.PLACED &&
      b.status === Status.PLACED &&
      d.status === Status.PLACED
    ) {
      if (a.carac.color === b.carac.color && b.carac.color && d.carac.color) {
        win = true;
      }
      if (a.carac.shape === b.carac.shape && b.carac.shape === d.carac.shape) {
        win = true;
      }
      if (a.carac.size === b.carac.size && b.carac.size === d.carac.size) {
        win = true;
      }
      if (a.carac.hole === b.carac.hole && b.carac.hole === d.carac.hole) {
        win = true;
      }
    }

    return win;
  }

  function equals2(a: any, b: any, c: any, d: any) {
    let win = false;
    // a et b
    if (a.status === Status.PLACED && Status.PLACED === b.status) {
      if (a.carac.color === b.carac.color) {
        // console.log("equals2 : color");
        win = true;
      }
      if (a.carac.shape === b.carac.shape) {
        // console.log("equals2 : shape");
        win = true;
      }
      if (a.carac.size === b.carac.size) {
        // console.log("equals2 : size");
        win = true;
      }
      if (a.carac.hole === b.carac.hole) {
        // console.log("equals2 : hole");
        win = true;
      }
    }
    // b et c
    if (Status.PLACED === b.status && Status.PLACED === c.status) {
      if (b.carac.color === c.carac.color) {
        // console.log("equals2 : color");
        win = true;
      }
      if (b.carac.shape === c.carac.shape) {
        // console.log("equals2 : shape");
        win = true;
      }
      if (b.carac.size === c.carac.size) {
        // console.log("equals2 : size");
        win = true;
      }
      if (b.carac.hole === c.carac.hole) {
        // console.log("equals2 : hole");
        win = true;
      }
    }
    // a et c
    if (Status.PLACED === a.status && Status.PLACED === c.status) {
      if (a.carac.color === c.carac.color) {
        // console.log("equals2 : color");
        win = true;
      }
      if (a.carac.shape === c.carac.shape) {
        // console.log("equals2 : shape");
        win = true;
      }
      if (a.carac.size === c.carac.size) {
        // console.log("equals2 : size");
        win = true;
      }
      if (a.carac.hole === c.carac.hole) {
        // console.log("equals2 : hole");
        win = true;
      }
    }
    // a et d
    if (Status.PLACED === a.status && Status.PLACED === d.status) {
      if (a.carac.color === d.carac.color) {
        // console.log("equals2 : color");
        win = true;
      }
      if (a.carac.shape === d.carac.shape) {
        // console.log("equals2 : shape");
        win = true;
      }
      if (a.carac.size === d.carac.size) {
        // console.log("equals2 : size");
        win = true;
      }
      if (a.carac.hole === d.carac.hole) {
        // console.log("equals2 : hole");
        win = true;
      }
    }
    // b et d
    if (Status.PLACED === b.status && Status.PLACED === d.status) {
      if (b.carac.color === d.carac.color) {
        // console.log("equals2 : color");
        win = true;
      }
      if (b.carac.shape === d.carac.shape) {
        // console.log("equals2 : shape");
        win = true;
      }
      if (b.carac.size === d.carac.size) {
        // console.log("equals2 : size");
        win = true;
      }
      if (b.carac.hole === d.carac.hole) {
        // console.log("equals2 : hole");
        win = true;
      }
    }
    // c et d
    if (Status.PLACED === c.status && Status.PLACED === d.status) {
      if (c.carac.color === d.carac.color) {
        // console.log("equals2 : color");
        win = true;
      }
      if (c.carac.shape === d.carac.shape) {
        // console.log("equals2 : shape");
        win = true;
      }
      if (c.carac.size === d.carac.size) {
        // console.log("equals2 : size");
        win = true;
      }
      if (c.carac.hole === d.carac.hole) {
        // console.log("equals2 : hole");
        win = true;
      }
    }

    return win;
  }

  /*-------------get score--------------------------- */

  function getScore(argBoard: Piece[][], player: Player) {
    var score = 0;
    let scBoard = cloneDeep(argBoard);
    function updateScore(HumanInRow: any, ComputerInRow: any) {
      var points = 0;
      switch (HumanInRow) {
        case 4:
          points += 100000;
          break;
        case 3:
          points += 20;
          break;
        case 2:
          points += 5;
          break;
        default:
          break;
      }
      switch (ComputerInRow) {
        case 4:
          points -= 100000;
          break;
        case 3:
          points -= 5;
          break;
        case 2:
          points -= 1;
          break;
        default:
          break;
      }
      return points;
    }

    //Check ROWS Columns and diags
    for (var row = 0; row < 4; row++) {
      var HumanInRow = 0,
        ComputerInRow = 0;
      if (
        equals2(
          scBoard[row][0],
          scBoard[row][1],
          scBoard[row][2],
          scBoard[row][3]
        )
      ) {
        if (player === Player.HUMAN) HumanInRow = 2;
        else ComputerInRow = 2;
      }
      if (
        equals3(
          scBoard[row][0],
          scBoard[row][1],
          scBoard[row][2],
          scBoard[row][3]
        )
      ) {
        if (player === Player.HUMAN) HumanInRow = 3;
        else ComputerInRow = 3;
      }
      if (
        equals4(
          scBoard[row][0],
          scBoard[row][1],
          scBoard[row][2],
          scBoard[row][3]
        )
      ) {
        if (player === Player.HUMAN) HumanInRow = 4;
        else ComputerInRow = 4;
      }
      // console.log("Human mn be3d : " + HumanInRow);
      /* console.log(
        "score taysawi : " +
          score +
          "ghaytzad b : " +
          updateScore(HumanInRow, ComputerInRow)
      ); */
      score += updateScore(HumanInRow, ComputerInRow);
      if (
        (score <= -Config.WINNING_SCORE || score >= Config.WINNING_SCORE) &&
        scBoard === rightBoard.board
      ) {
        props.setGameOver({ bool: true, player: player });
        // console.log("setGameOver");
        return score;
      }
    }

    for (var col = 0; col < 4; col++) {
      var HumanInRow = 0,
        ComputerInRow = 0;
      //// console.log("hawhaw : row : " + row + "column : " + column + "offset : " + offset)

      if (
        equals2(
          scBoard[0][col],
          scBoard[1][col],
          scBoard[2][col],
          scBoard[3][col]
        )
      ) {
        if (player === Player.HUMAN) HumanInRow = 2;
        else ComputerInRow = 2;
      }
      if (
        equals3(
          scBoard[0][col],
          scBoard[1][col],
          scBoard[2][col],
          scBoard[3][col]
        )
      ) {
        if (player === Player.HUMAN) HumanInRow = 3;
        else ComputerInRow = 3;
      }
      if (
        equals4(
          scBoard[0][col],
          scBoard[1][col],
          scBoard[2][col],
          scBoard[3][col]
        )
      ) {
        if (player === Player.HUMAN) HumanInRow = 4;
        else ComputerInRow = 4;
      }
      /* console.log(
        "score taysawi : " +
          score +
          "ghaytzad b : " +
          updateScore(HumanInRow, ComputerInRow)
      ); */
      score += updateScore(HumanInRow, ComputerInRow);
      if (
        (score <= -Config.WINNING_SCORE || score >= Config.WINNING_SCORE) &&
        scBoard === rightBoard.board
      ) {
        props.setGameOver({ bool: true, player: player });
        // console.log("setGameOver");
        return score;
      }
    }

    var HumanInRow = 0,
      ComputerInRow = 0;

    if (equals2(scBoard[0][0], scBoard[1][1], scBoard[2][2], scBoard[3][3])) {
      if (player === Player.HUMAN) HumanInRow = 2;
      else ComputerInRow = 2;
    }
    if (equals3(scBoard[0][0], scBoard[1][1], scBoard[2][2], scBoard[3][3])) {
      if (player === Player.HUMAN) HumanInRow = 3;
      else ComputerInRow = 3;
    }
    if (equals4(scBoard[0][0], scBoard[1][1], scBoard[2][2], scBoard[3][3])) {
      if (player === Player.HUMAN) HumanInRow = 4;
      else ComputerInRow = 4;
    }

    /* console.log(
      "score taysawi : " +
        score +
        "ghaytzad b : " +
        updateScore(HumanInRow, ComputerInRow)
    ); */
    score += updateScore(HumanInRow, ComputerInRow);
    if (
      (score <= -Config.WINNING_SCORE || score >= Config.WINNING_SCORE) &&
      scBoard === rightBoard.board
    ) {
      props.setGameOver({ bool: true, player: player });
      // console.log("setGameOver");
      return score;
    }

    var HumanInRow = 0,
      ComputerInRow = 0;
    //// console.log("hawhaw : row : " + row + "column : " + column + "offset : " + offset)

    if (equals2(scBoard[0][3], scBoard[1][2], scBoard[2][1], scBoard[3][0])) {
      if (player === Player.HUMAN) HumanInRow = 2;
      else ComputerInRow = 2;
    }
    if (equals3(scBoard[0][3], scBoard[1][2], scBoard[2][1], scBoard[3][0])) {
      if (player === Player.HUMAN) HumanInRow = 3;
      else ComputerInRow = 3;
    }
    if (equals4(scBoard[0][3], scBoard[1][2], scBoard[2][1], scBoard[3][0])) {
      if (player === Player.HUMAN) HumanInRow = 4;
      else ComputerInRow = 4;
    }
    /* console.log(
      "score taysawi : " +
        score +
        "ghaytzad b : " +
        updateScore(HumanInRow, ComputerInRow)
    ); */
    score += updateScore(HumanInRow, ComputerInRow);
    if (
      (score <= -Config.WINNING_SCORE || score >= Config.WINNING_SCORE) &&
      scBoard === rightBoard.board
    ) {
      props.setGameOver({ bool: true, player: player });
      // console.log("setGameOver");
      return score;
    }

    return score;
  }

  function max(x: any, y: any) {
    return x.score > y.score ? x : y;
  }

  function min(x: any, y: any) {
    return x.score < y.score ? x : y;
  }

  function getRemainingPieces() {
    let remainingPieces: RemPiece[] = [];
    leftBoard.board.forEach((prow: Piece[]) => {
      prow.forEach((p: Piece) => {
        if (p.status === Status.NOTPLACED) {
          remainingPieces.push({ piece: p, score: -1000 });
        }
      });
    });
    return remainingPieces;
  }

  function placeMove(piece: Piece, i: number, j: number, newBoard: any) {
    let posBoard: Piece[][];
    posBoard = newBoard ? cloneDeep(emptyBoard3) : cloneDeep(rightBoard.board);
    let locPiece = cloneDeep(piece);

    if (posBoard[i][j].status === Status.NOTPLACED) {
      locPiece.x = i;
      locPiece.y = j;
      locPiece.status = Status.PLACED;
      posBoard[i][j] = locPiece;
      // console.log(posBoard);
      return posBoard;
    }
    return false;
  }

  interface Board {
    pieces: Piece[][];
  }

  function MinMax(
    board: any,
    depth: number,
    a: any,
    b: any,
    maximizingPlayer: boolean
  ) {
    var nodes: Piece[][][] = [];

    //Check all possible moves
    var player = maximizingPlayer ? Player.HUMAN : Player.AI;

    // Play a move
    if (pieceSelected !== nullPiece) {
      rightBoard.board.forEach((prow: Piece[], i: number) => {
        prow.forEach((p: Piece, j: number) => {
          if (p.status === Status.NOTPLACED) {
            var nextPossibleBoard = placeMove(pieceSelected, i, j, false);
            if (nextPossibleBoard) {
              nodes.push(nextPossibleBoard);
            }
          }
        });
      });

      console.log("Possible moves");
      console.log(nodes);

      let currentScore = getScore(rightBoard.board, currentPlayer);
      let aiMove: Piece[][] = cloneDeep(emptyBoard3);
      let done: boolean = false;
      nodes.forEach((board: Piece[][]) => {
        if (
          getScore(board, currentPlayer) <= -Config.WINNING_SCORE ||
          getScore(board, currentPlayer) >= Config.WINNING_SCORE
        ) {
          console.log(getScore(board, currentPlayer));
          console.log("Winnig move");
          props.setGameOver({ bool: true, player: player });
          console.dir(board);
          aiMove = cloneDeep(board);
          done = true;
        } else {
          if (!done) {
            if (getScore(board, currentPlayer) <= currentScore) {
              currentScore = getScore(board, currentPlayer);
              aiMove = cloneDeep(board);
            }
          }
        }
      });
      setRightBoard({ board: aiMove });
      setPieceSelected({ ...pieceSelected, status: Status.PLACED });

      /*
      let currentScore = getScore(rightBoard.board);
      let aiMove: Piece[][] = cloneDeep(emptyBoard3);
      let done: boolean = false;
      psNodes.forEach((board: Piece[][]) => {
        if (
          getScore(board) <= -Config.WINNING_SCORE ||
          getScore(board) >= Config.WINNING_SCORE
        ) {
          console.log(getScore(board));
          console.log("Winnig move");
          console.dir(board);
          aiMove = cloneDeep(board);
          done = true;
        } else {
          if (!done) {
            console.log("I went fcking there");
            console.log("This board score is : " + getScore(board));
            console.log("Current score : " + currentScore);
            if (getScore(board) <= currentScore) {
              currentScore = getScore(board);
              aiMove = cloneDeep(board);
            }
          }
        }
      });
      setRightBoard({ board: aiMove });
      setPieceSelected(nullPiece);
      */
    }

    /*
      var isDrawn = nodes.length == 0;

    if (
      depth == 0 ||
      isDrawn ||
      currentScore <= -Config.WINNING_SCORE ||
      currentScore >= Config.WINNING_SCORE
    ) {
      console.log("isDrawn");
      var leaf = {
        boardMove: emptyBoard,
        score: currentScore,
      };
      return leaf;
    }

    if (maximizingPlayer) {
      var v = {
        boardMove: cloneDeep(rightBoard.board),
        score: -99999,
      };
      for (var i = 0; i <= nodes.length - 1; i++) {
        if (!nodes[i]) continue;
        var nextmove = MinMax(nodes[i], depth - 1, a, b, false);
        if (nextmove.score > v.score || v.boardMove == null) {
          v.boardMove = nextmove.boardMove;
          v.score = nextmove.score;
        }
        a = max(a, nextmove);
        if (b.score <= a.score) {
          break; //(* b cut-off *)
        }
      }
      return v;
    } else {
      var v = {
        boardMove: cloneDeep(rightBoard.board),
        score: 99999,
      };
      for (var i = 0; i <= nodes.length - 1; i++) {
        if (!nodes[i]) continue;
        var nextmove = MinMax(nodes[i], depth - 1, a, b, true);
        if (nextmove.score < v.score || v.boardMove == null) {
          v.boardMove = nextmove.boardMove;
          v.score = nextmove.score;
        }
        b = min(b, nextmove);
        if (b.score <= a.score) {
          break; //(* a cut-off *)
        }
      }
      console.log("Minmax boardMove");
      console.dir(v.boardMove);
      console.log("Minmax score" + v.score);

      return v;
    }
    */
  }

  function MinMaxChoosePiece(
    board: any,
    depth: number,
    a: any,
    b: any,
    maximizingPlayer: boolean
  ) {
    // Choose a piece
    let remainingPieces = getRemainingPieces();
    // let psNodes: Piece[][][] = [];
    let chosenPiece = {
      piece: cloneDeep(nullPiece),
      score: -100,
    };
    console.log("remainingPieces");
    console.dir(pieceSelected);

    if (pieceSelected.status === Status.PLACED) {
      remainingPieces.forEach((selPiece: RemPiece) => {
        rightBoard.board.forEach((prow: Piece[], i: number) => {
          prow.forEach((p: Piece, j: number) => {
            if (p.status === Status.NOTPLACED) {
              var nextPossibleBoard = cloneDeep(
                placeMove(selPiece.piece, i, j, false)
              );
              if (
                nextPossibleBoard &&
                getScore(nextPossibleBoard, Player.HUMAN) >= selPiece.score
              ) {
                selPiece.score = getScore(nextPossibleBoard, Player.HUMAN);
                selPiece.piece.x = i;
                selPiece.piece.y = j;
              }
            }
          });
        });
      });

      console.log("remainingPieces");
      console.dir(remainingPieces);
      var min = remainingPieces.reduce(function (prev, curr) {
        return prev.score < curr.score ? prev : curr;
      });

      min.piece.status = Status.SELECTED;
      console.log("Selected piece is : ");
      console.dir(min);
      if (min.piece.image != null) {
        let ij = min.piece.image;
        console.dir(min.piece.image);
        const i = parseInt(ij.substring(15, 16), 10);
        const j = parseInt(ij.substring(16, 17), 10);
        console.dir(i);

        setLeftBoard((state: any) => ({
          ...state,
          board: state.board.map((arr: Piece[], y: number) =>
            arr.map((item: Piece, z: number) => {
              if (i === y && j === z) {
                return {
                  ...item,
                  status: Status.UNAVAILABLE,
                };
              } else return item;
            })
          ),
        }));
        leftBoard.board[i][j].status = Status.SELECTED;
        setPieceSelected(min.piece);
        props.setTurn();
      }
    }
  }

  useEffect(() => {
    if (pieceSelected !== nullPiece && currentPlayer === Player.AI) {
      if (pieceSelected.status === Status.SELECTED)
        MinMax(
          rightBoard,
          2,
          { score: -9999999 },
          { score: 9999999 },
          currentPlayer
        );
      if (pieceSelected.status === Status.PLACED)
        MinMaxChoosePiece(
          rightBoard,
          2,
          { score: -9999999 },
          { score: 9999999 },
          currentPlayer
        );
    }
  }, [pieceSelected]);

  return (
    <div className="boardContainer">
      
      <div className="grid grid-cols-4 grid-rows-4 board" onClick={placePiece}>
        {rightBoardUI}
      </div>
      <div className="selectedPieceContainer">
        <span>Selected piece.</span>
        <div className="ml-2 selectedPiece">
          <div className="pieceContainer">
            {pieceSelected.status === Status.SELECTED ? (
              <img alt="" src={pieceSelected.image} className="aPiece" />
            ) : null}
          </div>
        </div>
      </div>
      <div
        className="grid grid-cols-4 grid-rows-4 pieces"
        onClick={selectPiece}
      >
        {leftBoardUI}
      </div>
      

    </div>
  );
}
