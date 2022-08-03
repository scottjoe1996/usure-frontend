import { Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';

import { CustomStackProps } from '../config/config';

import { S3StaticWebsiteConstruct } from './s3-static-website-construct';
import { S3StaticWebsiteProps } from './s3-static-website-props';

export class S3StaticWebsiteStack extends Stack {
  constructor(scope: Construct, id: string, props: CustomStackProps<S3StaticWebsiteProps>) {
    super(scope, id, props);

    new S3StaticWebsiteConstruct(this, props);
  }
}
