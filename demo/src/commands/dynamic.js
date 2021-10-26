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
    content: `cd 〖V社〗`
  },
  {
    type: 'system',
    label: 'System',
    content: '欢迎你的到来，这里是〖V社〗一级市场的灰度基金.'
  },
  {
    time: getTime(),
    type: 'info',
    label: '社区:',
    content: '〖 V 社 〗'
  },
  {
    time: getTime(),
    type: 'info',
    label: '说明:',
    content: '【V社】华人世界与一级市场里的灰度基金，一级市场潜力新币种风向标。'
  },
  {
    time: getTime(),
    type: 'info',
    label: '创建于:',
    content: '2021-9-0'
  },
  // {
  //   time: getTime(),
  //   type: 'info',
  //   label: '邮箱:',
  //   content: '〖V社〗一级市场的灰度基金'
  // },
  {
    time: getTime(),
    type: 'info',
    label: '目标:',
    content: '为币圈鲸鱼部落传播主流投资理念，挖掘价值项目，发展成为最大的社区信息分享部落。'
  },
  {
    time: getTime(),
    type: 'info',
    label: '介绍:',
    content: `V社是以VT为核心（VT是 #BabyDoge 、 $GHC  第一大户）,聚集了一批资金雄厚的个人投资者和机构投资者，共同创建而成。
      团队规模：精英团队规模超百人，且持续发展壮大中,内设社区技术部、宣传营销部、外交部,现于各大社区&平台正在密切合作中。
      社区宗旨：旨在传播主流投资理念，排除各种貔貅盘，挖掘价值项目，实现社区投资者资产稳定增长。
      社区福利：同时不定期在社区内进行白名单私募抽奖，发红包，空投，为V社区共建者谋福利。
      电报链接：https://t.me/BestVCommunity
      推特链接：https://twitter.com/VCChinese
      
      VT推特链接：https://twitter.com/BestNewCoin
      
      欢迎您的关注，也欢迎您的加入`
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
