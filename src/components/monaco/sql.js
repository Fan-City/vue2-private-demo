export default [
  /**   * 内置函数   */
  {
     label: 'if',//触发提示的文本
     kind: monaco.languages.CompletionItemKind.Function,
     insertText: `\n#if()\n\t\n #end`,//补全的文本
     insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
     detail: '流程控制'
   },  {
     label: 'if/else',
     kind: monaco.languages.CompletionItemKind.Function,
     insertText: '\n#if()\n\n #else\n\n #end',
     insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
     detail: '流程控制'
   }
 ]