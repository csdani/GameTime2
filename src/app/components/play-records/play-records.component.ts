import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlayRecordModel } from 'src/app/models/play-record';
import { CommonService } from 'src/app/services/common-service.service';
import { PlayRecordService } from 'src/app/services/play-record.service';

@Component({
  selector: 'app-play-records',
  templateUrl: './play-records.component.html',
  styleUrls: ['./play-records.component.css']
})
export class PlayRecordsComponent implements OnInit, OnDestroy {

    private subscriptionName: Subscription; //important to create a subscription

    private playRecords: PlayRecordModel[] = [];

    constructor(
        private Service: CommonService,
        private playRecordService: PlayRecordService
    ) {
        this.subscriptionName = this.Service.getUpdate()
            .subscribe(message => { //message contains the data sent from service
                this.processMessage(message['text']);
            });
    }

    ngOnInit(): void {
        this.fetchPlayRecords();
    }

    ngOnDestroy() { // It's a good practice to unsubscribe to ensure no memory leaks
        this.subscriptionName.unsubscribe();
    }

    getPlayRecords() {
        return this.playRecords;
    }

    private fetchPlayRecords() {
        this.playRecordService.getPlayRecords()
            .subscribe(playRecords =>  {
                playRecords.forEach((playRecord: { platform: string; }) => {
                    playRecord.platform = this.formatPlatformString(playRecord.platform);
                });
                this.playRecords = playRecords;
                this.sortPlayRecordsByStart();
            });
    }

    private sortPlayRecordsByStart() {
        const arr1 = this.playRecords.map(obj => {
            return {...obj, date: new Date(obj.start)};
          });
          
          const sortedPlayRecords = arr1.sort(
            (objA, objB) => Number(objB.date) - Number(objA.date),
          );

        console.log(sortedPlayRecords)
        this.playRecords = sortedPlayRecords;
    }

    private formatPlatformString(platform: string) {
        if (platform == "xbox") {
            return "Xbox";
        } else if (platform == "playstation") {
            return "PlayStation";
        } else if (platform == "pc") {
            return "PC";
        } else if (platform == "nintendo") {
            return "Nintendo";
        } else if (platform == "other") {
            return "Other";
        }

        return platform;
    }

    private processMessage(message: string) {
        if (message.valueOf() === "fetchPlayRecords".valueOf()) {
            this.fetchPlayRecords();
        }
    }
}
