import { CfnOutput, RemovalPolicy } from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';
import { Construct } from 'constructs';

import { CustomStackProps } from '../config/config';
import { S3StaticWebsiteProps } from './s3-static-website-props';

export class S3StaticWebsiteConstruct extends Construct {
  constructor(scope: Construct, _props: CustomStackProps<S3StaticWebsiteProps>) {
    super(scope, 'S3StaticWebsiteConstruct');

    const websiteBucket = new Bucket(this, 'Bucket', {
      bucketName: 'usure-static-website-bucket',
      publicReadAccess: true,
      removalPolicy: RemovalPolicy.DESTROY,
      websiteIndexDocument: 'index.html'
    });

    new BucketDeployment(this, 'BucketDeployment', {
      sources: [Source.asset('build')],
      destinationBucket: websiteBucket
    });

    new CfnOutput(this, 'WebsiteS3Url', {
      value: websiteBucket.bucketWebsiteUrl,
      exportName: 'UsureWebsiteS3Url',
      description: 'The url to access the Usure frontend'
    });
  }
}
