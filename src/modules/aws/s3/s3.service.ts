import { Injectable } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';
import * as AWS from 'aws-sdk';

@Injectable()
export class S3Service {
  private s3: AWS.S3;

  constructor() {
    this.s3 = new AWS.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
    });
  }

  async uploadFile(base64: string) {
    try {
      if (!base64) return null;
      if (base64.startsWith('http')) return base64;

      const bufferImage = Buffer.from(
        base64.replace(/^data:image\/\w+;base64,/, ''),
        'base64',
      );
      const params: AWS.S3.PutObjectRequest = {
        Bucket: process.env.AWS_S3_BUCKET_NAME,
        Key: `${Date.now()}.jpg`,
        Body: bufferImage,
        ContentType: 'image/jpg',
      };

      const { Location } = await this.s3.upload(params).promise();

      return Location;
    } catch (error) {
      throw new BadRequestException('Imagem inválida');
    }
  }
}
