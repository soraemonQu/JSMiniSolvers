export class Solver {
  constructor(libFactory: unknown);
  delete(): void;
  nvars(): number;
  nclauses(): number;
  new_var(): number;
  add_clause(clause: number[]): number;
  solve(): number;
  get_model(): Int32Array;
}

export class MinisatSolver extends Solver {
  constructor();
}

export class MinicardSolver extends Solver {
  constructor();
}
