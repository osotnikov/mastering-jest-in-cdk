#!/usr/bin/env node

import 'source-map-support/register';

import * as cdk from 'aws-cdk-lib';

import { GilmoreEvProductsStatefulStack } from '../stateful/stateful';
import { GilmoreEvProductsStatelessStack } from '../stateless/stateless';

const app = new cdk.App();

// we are going to statically build the dev app in this example
const statefulStack = new GilmoreEvProductsStatefulStack(
  app,
  'GilmoreEvProductsStatefulStack',
  {
    stage: 'dev',
  }
);

new GilmoreEvProductsStatelessStack(app, 'GilmoreEvProductsStatelessStack', {
  stage: 'dev',
  table: statefulStack.table,
});
