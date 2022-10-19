/**
 * @description register builtin modules
 * @author wangfupeng
 */

// basic-modules
import '@suozhao/fork-basic-modules/dist/css/style.css'
import basicModules from '@suozhao/fork-basic-modules'

import '@suozhao/fork-list-module/dist/css/style.css'
import wangEditorListModule from '@suozhao/fork-list-module'

// table-module
import '@suozhao/fork-table-module/dist/css/style.css'
import wangEditorTableModule from '@suozhao/fork-table-module'

// video-module
import '@suozhao/fork-video-module/dist/css/style.css'
import wangEditorVideoModule from '@suozhao/fork-video-module'

// upload-image-module
import '@suozhao/fork-upload-image-module/dist/css/style.css'
import wangEditorUploadImageModule from '@suozhao/fork-upload-image-module'

// code-highlight
import '@suozhao/fork-code-highlight/dist/css/style.css'
import { wangEditorCodeHighlightModule } from '@suozhao/fork-code-highlight'

import registerModule from './register'

basicModules.forEach(module => registerModule(module))
registerModule(wangEditorListModule)
registerModule(wangEditorTableModule)
registerModule(wangEditorVideoModule)
registerModule(wangEditorUploadImageModule)
registerModule(wangEditorCodeHighlightModule)
