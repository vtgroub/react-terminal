/*
 * @description: 
 * @Date: 2021-10-26 12:35:00
 * @LastEditors: am
 * @LastEditTime: 2021-10-26 12:49:11
 */
export const systemCmdList = {
  clear: {
    type: 'system',
    label: 'System',
    content: '输入 "clear" 清理屏幕.',
    aliasList: ['clear', 'cls']
  },
  help: {
    type: 'system',
    label: 'System',
    content: '输入 "help" 获取命令列表.',
    aliasList: ['help', 'ls']
  },
  exit: {
    type: 'system',
    label: 'System',
    content: '输入 "exit" 返回.',
    aliasList: ['exit', 'back']
  },
  pwd: {
    type: 'system',
    label: 'System',
    content: 'Print name of current directory.',
    aliasList: ['pwd']
  },
  cd: {
    type: 'system',
    label: 'System',
    content: 'Change current directory.',
    aliasList: ['cd']
  },
  version: {
    type: 'system',
    label: 'System',
    content: 'Print version of the current project.',
    aliasList: ['version']
  }
}

export const tipCmdList = {
  jump: {
    type: 'system',
    label: 'System',
    content: 'Jumping page...'
  },
  unknown: {
    type: 'error',
    label: 'Error',
    contentWithCommand: command => `Command '${command}' not found`
  },
  error: {
    type: 'error',
    label: 'Error',
    content: 'Something went wrong!'
  },
  supporting: 'Here is a list of supporting command.'
}
