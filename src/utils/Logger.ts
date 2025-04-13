import winston from "winston";
import fs from "fs";

export class Logger {
  private static logger = winston.createLogger({
    level: "error",
    transports: [
      new winston.transports.File({
        filename: "error.log",
        level: "error",
      }),
      new winston.transports.Console({ format: winston.format.simple() }),
    ],
  });

  static logError(message: string): void {
    this.logger.error(message);
  }

  static logView(): void {
    setTimeout(() => {
      fs.readFile("error.log", "utf8", (err, data) => {
        if (err) {
          this.logError("Erro ao ler error.log: " + err.message);
          console.error("Erro ao ler error.log:", err);
          return;
        }
        console.log("\nConteúdo do error.log:\n", data);
      });
    }, 100);
  }
}
