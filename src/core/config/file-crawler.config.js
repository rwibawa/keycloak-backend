import { EventEmitter } from 'events';
import { FileMatcher } from 'file-matcher';
import * as path from 'path';

export class FileCrawlerConfig extends EventEmitter {
  async _findFiles(fileNamePattern) {
    let options = {
      path: path.resolve('./'),
      recursiveSearch: true,
      fileFilter: { fileNamePattern }
    };

    let fileMatcher = new FileMatcher();
    return await fileMatcher.find(options);
  }
}
