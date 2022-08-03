#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';

import { S3StaticWebsiteStack } from './s3-stactic-website/s3-static-website';
import { getStackProps } from './config/config';

const app = new cdk.App();

new S3StaticWebsiteStack(app, 's3StaticWebsite', getStackProps({}));
