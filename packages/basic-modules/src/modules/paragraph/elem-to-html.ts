/**
 * @description to html
 * @author wangfupeng
 */

import { Element } from 'slate'

function pToHtml(elem: any, childrenHtml: string): string {
  if (childrenHtml === '') {
    return `<p style="${elem.style}"><br></p>`
  }
  return `<p style="${elem.style}">${childrenHtml}</p>`
}

export const pToHtmlConf = {
  type: 'paragraph',
  elemToHtml: pToHtml,
}
