/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';

import { MethodsService } from './services/MethodsService';
import { PullingService } from './services/PullingService';
import { WebhooksService } from './services/WebhooksService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class SnappBox {
  public readonly methods: MethodsService;
  public readonly pulling: PullingService;
  public readonly webhooks: WebhooksService;

  public readonly request: BaseHttpRequest;

  constructor(apiKey: string, mode: 'staging' | 'production' = 'staging') {
    this.request = new AxiosHttpRequest({
      BASE:
        mode === 'production'
          ? 'https://customer.snapp-box.com'
          : 'https://customer-stg.snapp-box.com',

      VERSION: '0.1.5',
      WITH_CREDENTIALS: false,
      CREDENTIALS: 'include',
      TOKEN: apiKey,
    });

    this.methods = new MethodsService(this.request);
    this.pulling = new PullingService(this.request);
    this.webhooks = new WebhooksService(this.request);
  }
}
