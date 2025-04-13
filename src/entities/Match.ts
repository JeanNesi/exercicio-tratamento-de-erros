import { Logger } from "../utils/Logger";
import { Team } from "./Team";

export class Match {
  constructor(
    public team1: Team,
    public team2: Team,
    public scoreTeam1: number,
    public scoreTeam2: number
  ) {}

  simulateMatch(): void {
    if (this.scoreTeam1 < 0 || this.scoreTeam2 < 0) {
      Logger.logError(`Os gols não podem ser negativos!`);
      return;
    }

    console.log(`Partida entre ${this.team1.name} e ${this.team2.name}:`);
    console.log(`Placar final: ${this.scoreTeam1} x ${this.scoreTeam2}`);

    if (this.scoreTeam1 > this.scoreTeam2) {
      this.team1.updatePoints(3);
      return;
    }

    if (this.scoreTeam1 < this.scoreTeam2) {
      this.team2.updatePoints(3);
      return;
    }

    this.team1.updatePoints(1);
    this.team2.updatePoints(1);
  }
}
