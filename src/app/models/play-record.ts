export class PlayRecordModel {
    id: string | null = null;
    game: string;
    platform: string;
    start: Date;
    end?: Date | null = null;

    constructor(game: string, platform: string, start: Date) {
        this.game = game;
        this.platform = platform;
        this.start = start;
    }
}