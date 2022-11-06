import {setupWorker} from 'msw';
import {handlers} from './handler';

// 指定されたリクエストハンドラを持つサービスワーカーを設定する
export const worker = setupWorker(...handlers);
