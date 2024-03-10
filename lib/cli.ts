import args from 'args';

import { logger } from './logger';

/**
 * @description Аргументы командной строки.
 */
export type CLIArguments = {
  /**
   * @description Файл, для которого нужно создать d.ts.
   * @default index.ts
   */
  entry: string;

  /**
   * @description Генерируемый файл d.ts.
   * @default index.d.ts
   */
  output: string;

  /**
   * @description Наименование файла конфигурации TS.
   * @default tsconfig.json
   */
  project: string;
}

/**
 * Класс для сохранения передаваемых аргументов из CLI.
 */
export class CLIStorage {

  private args: CLIArguments = {
    entry: 'index.ts',
    output: 'index.d.ts',
    project: 'tsconfig.json',
  }

  constructor() {
    args
      .option('entry', 'Entry file relative to project root', 'index.ts', (entry) => {
        this.args.entry = entry;
      })
      .option('output', 'Generated from entry d.ts file', 'index.d.ts', (output) => {
        this.args.output = output;
      })
      .option('project', 'Typescript configuration file name', 'tsconfig.json', (project) => {
        this.args.project = project;
      });

    args.parse(process.argv, {
      mainColor: 'yellow',
      mri: {},
      name: 'index-dts',
      subColor: 'dim',
    });
  }

  public logArgs() {
    logger.log('info', JSON.stringify(this.args));
  }

}
