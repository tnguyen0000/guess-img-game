import { Dispatch, SetStateAction } from "react";

export interface GameTopBarProp {
  theme: string,
  score: number,
  page: number,
}

export interface ImageCardProp {
  imageUrl: string,
  isCorrect: boolean,
  score: number,
  setScore: Dispatch<SetStateAction<number>>,
  page: number,
  setPage: Dispatch<SetStateAction<number>>,
}