export enum Status {
  NOTPLACED,
  SELECTED,
  PLACED,
  UNAVAILABLE,
}

export enum Niv {
  NIV1,
  NIV2,
  NIV3,
  NIV4,
}

export enum Shape {
  CIRCLE,
  RECTANGLE,
  NOTFILLED,
}

export enum Size {
  SMALL,
  BIG,
  NOTFILLED,
}

export enum Color {
  BLACK,
  WHITE,
  NOTFILLED,
}

export enum Hole {
  FILLED,
  HOLLOW,
  NOTFILLED,
}

export type pieceCarac = {
  shape: Shape;
  size: Size;
  color: Color;
  hole: Hole;
};

export type Piece = {
  image: string;
  x: number;
  y: number;
  carac: pieceCarac;
  status: Status;
};

export enum Player {
  HUMAN,
  AI,
  NOTFILLED,
}

export type RemPiece = {
  piece: Piece;
  score: number;
};
