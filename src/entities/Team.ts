export class Team {
  constructor(public name: string, public points: number = 0) {}

  updatePoints(points: number): void {
    this.points += points;
  }
}
