import { Injectable } from '@nestjs/common';
import { IsEmail, IsNotEmpty } from 'class-validator';
import * as Airtable from 'airtable'

export class BingoSubmissonDto {
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    title: string;
    @IsNotEmpty()
    forclass: boolean;
    class?: string;
}

@Injectable()
export class AirtableService {
    base = new Airtable().base('appwoZhCjmpTZfUUM');
    async submitBingoForm(formData: BingoSubmissonDto): Promise<any> {
        return await this.base("BingoSubmission")
            .create({
                ...formData,
            })
    }
    async getStandings(): Promise<any> {
        const results = await this.base('VoteStandings').select({
            maxRecords: 100,
        }).all();
        return results.flatMap((r: { fields: any; }) => r.fields)
    }
}
