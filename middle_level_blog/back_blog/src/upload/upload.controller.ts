import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { storage, limits, fileFilter } from './upload.config';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  //TODO adicionar autenticação

  @Post()
  // @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('file', { storage, limits, fileFilter }))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.uploadService.handleUpload(file);
  }
}
