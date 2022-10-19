/**
 * @description maps
 * @author wangfupeng
 */

import { Element as SlateElement } from 'slate'
import { IDomEditor } from '@suozhao/fork-core'

export const ELEM_TO_EDITOR = new WeakMap<SlateElement, IDomEditor>()
