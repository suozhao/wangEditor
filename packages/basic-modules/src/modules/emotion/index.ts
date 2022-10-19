/**
 * @description emotion entry
 * @author wangfupeng
 */

import { IModuleConf } from '@suozhao/fork-core'
import { emotionMenuConf } from './menu/index'

const emotion: Partial<IModuleConf> = {
  menus: [emotionMenuConf],
}

export default emotion
