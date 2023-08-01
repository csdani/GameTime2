import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common-service.service';
import { PlayRecordService } from 'src/app/services/play-record.service';
import { PlayRecordModel } from 'src/app/models/play-record';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    private ongoinPlayRecord: PlayRecordModel | undefined;

    constructor(
        private commonService: CommonService,
        private playRecordService: PlayRecordService,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.fetchOngoingPlayRecord();
    }

    start() {
        var gameInputField = (<HTMLInputElement>document.getElementById("gameInput")).value;
        var platformSelectField = (<HTMLInputElement>document.getElementById("platformSelect")).value;
        var playRecordToCreate = new PlayRecordModel(gameInputField, platformSelectField, new Date());

        this.playRecordService.createPlayRecord(playRecordToCreate)
            .subscribe(() => {
                this.sendMessage("fetchPlayRecords");
                this.fetchOngoingPlayRecord();
            })
    }

    stop() {
        if (this.isOngoing()) {
            this.ongoinPlayRecord!.end = new Date();

            this.playRecordService.updatePlayRecordById(this.ongoinPlayRecord!)
                .subscribe(() => {
                    this.sendMessage("fetchPlayRecords");
                    this.fetchOngoingPlayRecord();
                });
        }
    }

    getOngoingPlayRecord() {
        return this.ongoinPlayRecord;
    }

    isOngoing() {
        return this.ongoinPlayRecord != undefined;
    }

    isLoginRoute() {
        return this.router.url == '/login';
    }

    private fetchOngoingPlayRecord() {
        this.playRecordService.getOngoingPlayRecord()
            .subscribe(playRecords => {
                this.ongoinPlayRecord = <PlayRecordModel>playRecords[0];
            });
    }

    private sendMessage(message: string): void {
        this.commonService.sendUpdate(message);
    }
}
