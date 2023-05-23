import { Component } from '@angular/core';
import { PlayRecordModel } from 'src/app/models/playRecord';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    private playRecords: PlayRecordModel[] = [];

    start() {
        var gameInputField = (<HTMLInputElement>document.getElementById("gameInput")).value;
        var platformSelectField = (<HTMLInputElement>document.getElementById("platformSelect")).value;
        var playRecordModel = new PlayRecordModel(gameInputField, platformSelectField, new Date());
        this.playRecords.push(playRecordModel);
        console.log("Started playing: ", playRecordModel);
    }

    stop() {
        var activePlayRecordIndex = this.playRecords.findIndex(x => x.end === undefined);
        console.log(activePlayRecordIndex);
        if (activePlayRecordIndex != -1) {
            this.playRecords[activePlayRecordIndex].end = new Date();
            console.log("Stopped playing: ", this.playRecords[activePlayRecordIndex]);
        }
    }

    isActive() {
        if (this.playRecords.length == 0 || this.playRecords.findIndex(x => x.end === undefined) == -1) {
            return false;
        }
        return true;
    }

    getPlayRecords() {
        return this.playRecords;
    }
}
