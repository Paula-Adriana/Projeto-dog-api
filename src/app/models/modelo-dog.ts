import { Raca } from "./raca";
export class ModeloDog {
    message?: Raca[];

    constructor(obj: Partial<ModeloDog>) {
      Object.assign(this, obj);
    }
  }
