import { Team } from "./Team";
import { Match } from "./Match";
import { Logger } from "../utils/Logger";

export class Tournament {
  private teams: Team[] = [];

  registerTeam(name: string): void {
    if (!name || name.trim() === "") {
      Logger.logError("Nome do time inválido!");
      return;
    }

    if (this.teams.some((team) => team.name === name)) {
      Logger.logError(`O time "${name}" já está registrado.`);
      return;
    }

    const newTeam = new Team(name);
    this.teams.push(newTeam);
    console.log(`Time "${name}" registrado com sucesso.`);
  }

  createMatch(
    teamName1: string,
    teamName2: string,
    scoreTeam1: number,
    scoreTeam2: number
  ): void {
    const team1 = this.teams.find((team) => team.name === teamName1);
    const team2 = this.teams.find((team) => team.name === teamName2);

    const teamsNotFound = [];

    if (!team1) teamsNotFound.push(teamName1);
    if (!team2) teamsNotFound.push(teamName2);

    if (!team1 || !team2) {
      Logger.logError(
        `Um ou ambos os times não foram encontrados: ${teamsNotFound.join(
          ","
        )}.`
      );
      return;
    }

    const match = new Match(team1, team2, scoreTeam1, scoreTeam2);
    match.simulateMatch();
  }

  displayStandings(): void {
    console.log("\nClassificação final do torneio:");
    this.teams
      .sort((a, b) => b.points - a.points)
      .forEach((team, index) => {
        console.log(`${index + 1}. ${team.name} - ${team.points} pontos`);
      });
  }
}
