import { Celltype } from '@/types/notebook';

export interface Cell {
  cellId: string;
  cellName: string;
  cellType: Celltype;
}
export interface Comment {
  commentId: string; 
  cell: Cell; 
  userName: string;
  date: string;
  comment: string;
  replies: Comment[];
  resolved: boolean;
}