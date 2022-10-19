/**
 * @description render paragraph elem
 * @author wangfupeng
 */

import { Element as SlateElement } from 'slate'
import { jsx, VNode } from 'snabbdom'
import { IDomEditor } from '@suozhao/fork-core'

/**
 * render paragraph elem
 * @param elemNode slate elem
 * @param children children
 * @param editor editor
 * @returns vnode
 */
function renderParagraph(
  elemNode: any,
  children: VNode[] | null,
  editor: IDomEditor
): VNode {
  const vnode = <p style={elemNode.style}>{children}</p>
  return vnode
}

export const renderParagraphConf = {
  type: 'paragraph',
  renderElem: renderParagraph,
}
