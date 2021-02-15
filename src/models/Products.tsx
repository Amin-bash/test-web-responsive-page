export interface Products {
  map?(arg0: (product: any) => JSX.Element): import("react").ReactNode;
  name: string;
  id: number;
  img: any;
  lessons: number;
  courseTime: number;
}

export interface TabPanelProps {
  children: string;
  value: number;
  index: number;
}