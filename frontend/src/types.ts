import { Dispatch, SetStateAction } from "react";

export interface GameTopBarProp {
  theme: string,
  score: number,
  page: number,
}

export interface ImageCardProp {
  imageUrl: string,
  isCorrect: boolean,
  selectedValue: boolean | null,
  setSelectedValue: Dispatch<SetStateAction<boolean | null>>,
}

export type Images = Image[];

export interface Image {
  url: string,
  isCorrect: boolean,
}

export interface ImageError {
  error: string,
}

export function isImageError(obj: any): obj is ImageError {
 return 'error' in obj;
}