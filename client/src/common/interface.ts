export interface IUser {
  id: number;
  createDate: Date;
  email: string;
  password: string;
  role: string;
  updateDate: Date;
}
export interface IValue {
  email: string;
  password: string;
}
export interface IProfileUser {
  email: string;
  id: number;
  role: string;
}
