/**
 * モジュール読み込み
 */
import gulp from 'gulp';
const { task, watch, series } = gulp;

/**
 * タスクモジュール読み込み
 */
import { IMAGE_MIN } from './tasks/image-min.mjs';
// import { TEST } from './tasks/test.js';

/**
 * タスク定義
 */
task('imageMin', series(IMAGE_MIN));
// task('imageMin', series(TEST));