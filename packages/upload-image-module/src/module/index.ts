/**
 * @description uploadImage module
 * @author wangfupeng
 */

import { IModuleConf } from '@suozhao/fork-core'
import withUploadImage from './plugin'
import { uploadImageMenuConf } from './menu/index'

const uploadImage: Partial<IModuleConf> = {
  menus: [uploadImageMenuConf],
  editorPlugin: withUploadImage,
}

export default uploadImage
