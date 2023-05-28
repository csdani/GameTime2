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
        var playRecordModel = new PlayRecordModel(gameInputField, platformSelectField, new Date());
        this.playRecords.push(playRecordModel);
        console.log("Started playing: ", playRecordModel);
    }

    stop() {
        var activePlayRecordIndex = this.playRecords.findIndex(x => x.end === null || x.end === undefined);

        if (activePlayRecordIndex != -1) {
            let playRecordToUpdate = this.playRecords[activePlayRecordIndex];
            playRecordToUpdate.end = new Date();

            this.playRecordService.updatePlayRecordById(playRecordToUpdate)
                .subscribe(() => {
                    this.fetchPlayRecords;
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
                this.playRecords = playRecords;
                //this.sortPlayRecordsByStart();
            });
    }

    // private sortPlayRecordsByStart() {
    //     this.playRecords = this.playRecords.sort((a: { start: { getTime: () => number; }; },b: { start: { getTime: () => number; }; })=>a.start.getTime()-b.start.getTime());
    // }
}

