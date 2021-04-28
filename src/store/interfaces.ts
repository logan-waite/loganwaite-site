// export interface RootState {
//   root: boolean;
//   version: string;
// }

export type State = {
  categories: Category[];
};

export type Widget = {
  id: string;
  text: string;
  query: string;
  position: {x: number; y: number} | undefined;
};

export type Category = {
  id: string;
  name: string;
  icon: string;
  widgets: Widget[];
}
