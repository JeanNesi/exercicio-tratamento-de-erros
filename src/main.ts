import { Tournament } from "./entities/Tournament";
import { EnumTeams } from "./enums/EnumTeams";
import { Logger } from "./utils/Logger";

const tournament = new Tournament();

try {
  tournament.registerTeam(EnumTeams.VASCO_DA_GAMA);
  tournament.registerTeam("");
  tournament.registerTeam(EnumTeams.FLUMINENSE);

  tournament.createMatch(EnumTeams.VASCO_DA_GAMA, EnumTeams.FLAMENGO, 2, 1);
  tournament.createMatch(EnumTeams.FLAMENGO, EnumTeams.FLUMINENSE, 0, 0);
  tournament.createMatch(EnumTeams.VASCO_DA_GAMA, EnumTeams.FLUMINENSE, 3, 2);

  tournament.displayStandings();
  Logger.logView();
} catch (error: any) {
  Logger.logError("An unknown error occurred.");
}
