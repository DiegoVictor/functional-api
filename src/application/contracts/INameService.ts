export interface INameService {
  getNames: () => Promise<string[]>;
}
