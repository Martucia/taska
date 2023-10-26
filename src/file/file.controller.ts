import { Controller, Get, Param, Res } from '@nestjs/common';
import { SkipThrottle } from '@nestjs/throttler';
import { Response } from 'express';
import * as path from 'path';

@Controller('file')
export class FileController {
    @Get(':filename')
    @SkipThrottle()
    getImage(@Param('filename') filename: string, @Res() res: Response) {
        const imagesPath = path.join(__dirname, '../../images');
        const filePath = path.join(imagesPath, filename);
        res.sendFile(filePath);
    }


}