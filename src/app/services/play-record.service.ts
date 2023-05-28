import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CustomHttpService } from './helper-services/custom-http.service';
import { PlayRecordModel } from '../models/play-record';
import { URLHelperService } from './helper-services/urlHelper.service';

@Injectable({
  providedIn: 'root'
})
export class PlayRecordService {

  constructor(
    private urlHelper: URLHelperService,
    private httpService: CustomHttpService
  ) { }

  getPlayRecords() {
    return this.httpService.get(this.urlHelper.PlayRecord);
  }

  createPlayRecord(playRecord: PlayRecordModel) {
    let jsonPlayRecord = JSON.stringify(playRecord);
    return this.httpService.post(this.urlHelper.PlayRecord, jsonPlayRecord);
  }

  updatePlayRecordById(playRecord: PlayRecordModel) {
    let id = playRecord.id;
    let jsonPlayRecord = JSON.stringify(playRecord);
    return this.httpService.put(this.urlHelper.PlayRecord + id, jsonPlayRecord);
  }
}
