import {OpaqueToken} from '@angular/core';

export let APP_CONFIG = new OpaqueToken('app.config');

export const AppConfig = {
  itemLimit: 2,
  apiUrl: 'http://127.0.0.1:8000'
};
