import { Component, OnInit } from '@angular/core';
import { PlayRecordModel } from 'src/app/models/play-record';
import { PlayRecordService } from 'src/app/services/play-record.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    private playRecords: PlayRecordModel[] = [];

    constructor(
        private playRecordService: PlayRecordService
    ) { }

    ngOnInit(): void {
        this.fetchPlayRecords();
    }

    start() {
        var gameInputField = (<HTMLInputElement>document.getElementById("gameInput")).value;
        var platformSelectField = (<HTMLInputElement>document.getElementById("platformSelect")).value;
        var playRecordToCreate = new PlayRecordModel(gameInputField, platformSelectField, new Date());
        
        this.playRecordService.createPlayRecord(playRecordToCreate)
            .subscribe(() => {
                this.fetchPlayRecords();
            })
    }

    stop() {
        var activePlayRecordIndex = this.playRecords.findIndex(x => x.end === null || x.end === undefined);

        if (activePlayRecordIndex != -1) {
            let playRecordToUpdate = this.playRecords[activePlayRecordIndex];
            playRecordToUpdate.end = new Date();

            this.playRecordService.updatePlayRecordById(playRecordToUpdate)
                .subscribe(() => {
                    this.fetchPlayRecords();
                });
        }
    }

    isOngoing() {
        if (this.playRecords.length == 0 || this.playRecords.findIndex(x => x.end === null || x.end === undefined) == -1) {
            return false;
        }
        return true;
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
        } else {
            return "Other";
        }
    }
}

