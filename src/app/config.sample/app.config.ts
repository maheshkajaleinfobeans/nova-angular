import {OpaqueToken} from '@angular/core';

import {IAppConfig} from './iapp.config'

export let APP_CONFIG = new OpaqueToken('app.config');

export const AppConfig: IAppConfig = {
  apiUrl: 'http://127.0.0.1:8000',
  itemLimit: 30
};
