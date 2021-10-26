const getTime = () => {
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  return `${hours}${minutes < 10 ? ':0' : ':'}${minutes}${seconds < 10 ? ':0' : ':'}${seconds}`
}

const introduction = [
  `Welcome to 〖V社〗一级市场的灰度基金.`,
  {
    type: 'system',
    label: 'System',
    content: `cd 〖V社〗一级市场的灰度基金`
  },
  {
    type: 'system',
    label: 'System',
    content: '欢迎你的到来，这里是〖V社〗一级市场的灰度基金.'
  },
  {
    time: getTime(),
    type: 'info',
    label: '名字:',
    content: '〖V社〗'
  },
  {
    time: getTime(),
    type: 'info',
    label: '性质:',
    content: '一级市场的灰度基金'
  },
  {
    time: getTime(),
    type: 'info',
    label: '创建时:',
    content: '100'
  },
  {
    time: getTime(),
    type: 'info',
    label: '邮箱:',
    content: '〖V社〗一级市场的灰度基金'
  },
  {
    time: getTime(),
    type: 'info',
    label: 'Aim:',
    content: '〖V社〗一级市场的灰度基金:'
  },
]

export default {
  intro: {
    description: '再来一次.',
    run(print) {
      let i = 0
      return new Promise(resolve => {
        const interval = setInterval(() => {
          print(introduction[i])
          i++
          if (!introduction[i]) {
            clearInterval(interval)
            resolve({ type: 'success', label: 'Done', content: '完毕!' })
          }
        }, 500)
      })
    }
  },
  echo: {
    description: 'Echoes input.',
    run(print, input) {
      return new Promise(resolve => {
        print({
          time: getTime(),
          label: 'Echo',
          type: 'success',
          content: input
        })
        resolve({ type: 'success', label: '', content: '' })
      })
    }
  },
  // open: {
  //   description: 'Open a specified url in a new tab.',
  //   run(print, input) {
  //     return new Promise((resolve) => {
  //       if (!input) {
  //         resolve({ type: 'error', label: 'Error', content: 'a url is required!' })
  //         return
  //       }
  //       if (!input.startsWith('http')) {
  //         resolve({ type: 'error', label: 'Error', content: 'Please add `http` prefix!' })
  //         return
  //       }
  //       print({ type: 'success', label: 'Success', content: 'Opening' })

  //       window.open(input, '_blank')
  //       resolve({ type: 'success', label: 'Done', content: 'Page Opened!' })
  //     })
  //   }
  // },
  // blog: {
  //   description: 'Open my blog in a new tab.',
  //   run(print) {
  //     return new Promise((resolve) => {
  //       print({ type: 'success', label: 'Success', content: 'Opening' })

  //       window.open('https://tomotoes.com/blog', '_blank')
  //       resolve({ type: 'success', label: 'Done', content: ':)' })
  //     })
  //   }
  // },
  // resume: {
  //   description: 'Open my resume in a new tab.',
  //   run(print) {
  //     return new Promise((resolve) => {
  //       print({ type: 'success', label: 'Success', content: 'Opening' })

  //       window.open('https://tomotoes.com/blog/resume', '_blank')
  //       resolve({ type: 'success', label: 'Done', content: ':)' })
  //     })
  //   }
  // },
  // 2048: {
  //   description: 'Open a 2048 Game in a new tab.',
  //   run(print) {
  //     return new Promise((resolve) => {
  //       print({ type: 'success', label: 'Success', content: 'Opening' })

  //       window.open('https://tomotoes.com/2048', '_blank')
  //       resolve({ type: 'success', label: 'Done', content: 'Game Start!' })
  //     })
  //   }
  // }
}
