
// ===== 模拟数据 =====
const state = {
  currentRoute: 'dashboard',
  currentTab: {},
  goldPool: [
    { id: 'ai', name: 'AI算力', weekChange: '+8.3%', weekVolume: '1,280', pattern: '周线放量突破', status: 'keep', zhongjun: '寒武纪', reason: '上周周涨幅第2 + 周成交额第1 + 周线放量突破前高' },
    { id: 'robot', name: '机器人', weekChange: '+6.7%', weekVolume: '860', pattern: '周线连阳', status: 'keep', zhongjun: '埃斯顿', reason: '上周周涨幅第4 + 政策催化持续 + 周线MACD金叉' },
    { id: 'fintech', name: '金融科技', weekChange: '+4.1%', weekVolume: '720', pattern: '周线企稳', status: 'watch', zhongjun: '恒生电子', reason: '上周周成交额第5 + 周线缩量止跌 + 低位启动迹象' }
  ],
  blackPool: [
    { id: 'realestate', name: '房地产开发', weekChange: '-5.2%', lineStatus: '跌破20周线', volume: '缩量阴跌', reason: '上周周跌幅第1 + 周线破位 + 龙头连续跌停' },
    { id: 'baijiu', name: '白酒', weekChange: '-3.8%', lineStatus: '周线空头排列', volume: '放量下跌', reason: '上周周跌幅第3 + 周线MACD死叉 + 消费数据不及预期' },
    { id: 'pharma', name: '医药商业', weekChange: '-2.9%', lineStatus: '跌破10周线', volume: '缩量阴跌', reason: '上周周跌幅第5 + 集采预期压制 + 周线趋势走坏' }
  ],
  zhongjun: [
    { name: '寒武纪', code: '688256', sector: 'AI算力', price: '248.50', dayChange: '+3.2%', ma5: 'above', ma10: 'above', ma20: 'above', weekTrend: '周线多头排列', health: 'good' },
    { name: '埃斯顿', code: '002747', sector: '机器人', price: '18.62', dayChange: '+1.5%', ma5: 'above', ma10: 'above', ma20: 'above', weekTrend: '周线连阳', health: 'good' },
    { name: '恒生电子', code: '600570', sector: '金融科技', price: '32.15', dayChange: '-0.8%', ma5: 'below', ma10: 'above', ma20: 'above', weekTrend: '周线企稳', health: 'warn' }
  ],
  dailyVerify: [
    { sector: 'AI算力', dayChange: '+2.8%', limitUp: 5, zjStatus: '寒武纪 +3.2%，5日线上方', loseDays: 0, verdict: 'keep', verdictText: '维持' },
    { sector: '机器人', dayChange: '+1.9%', limitUp: 3, zjStatus: '埃斯顿 +1.5%，5日线上方', loseDays: 0, verdict: 'keep', verdictText: '维持' },
    { sector: '金融科技', dayChange: '-0.5%', limitUp: 1, zjStatus: '恒生电子 -0.8%，跌破5日线', loseDays: 1, verdict: 'watch', verdictText: '观察' }
  ],
  challengers: [
    { name: '数据要素', reason: '突发政策刺激，今日板块涨幅第2', days: 2, target: 3 },
    { name: '低空经济', reason: '行业标准落地，连续2日放量', days: 2, target: 3 },
    { name: '存储芯片', reason: '周期反转预期，今日首板2只', days: 1, target: 3 }
  ],
  dailyAvoid: [
    { sector: '房地产开发', dayChange: '-1.8%', leader: '保利发展 -2.1%', volume: '缩量', result: '确认避雷' },
    { sector: '白酒', dayChange: '+0.3%', leader: '贵州茅台 +0.1%', volume: '无量反弹', result: '反抽不参与' },
    { sector: '医药商业', dayChange: '-1.2%', leader: '上海医药 -1.5%', volume: '缩量阴跌', result: '确认避雷' }
  ],
  stockAggressive: [
    { name: '鸿博股份', code: '002229', sector: 'AI算力', boards: '4连板', auction: '+5.2% 高开', support: '分时承接强', emotion: '高' },
    { name: '中大力德', code: '002896', sector: '机器人', boards: '3连板', auction: '+3.8% 高开', support: '回踩均线有承接', emotion: '中高' },
    { name: '铜牛信息', code: '300895', sector: 'AI算力', boards: '2连板', auction: '+7.1% 高开', support: '分时承接强', emotion: '高' }
  ],
  stockSteady: [
    { name: '寒武纪', code: '688256', sector: 'AI算力', weekAlign: '多头排列', pullback: '回踩10日线', support: '支撑有效', position: '20%' },
    { name: '埃斯顿', code: '002747', sector: '机器人', weekAlign: '多头排列', pullback: '回踩20日线', support: '支撑有效', position: '15%' },
    { name: '浪潮信息', code: '000977', sector: 'AI算力', weekAlign: '多头排列', pullback: '回踩10日线', support: '待确认', position: '10%' }
  ],
  stockCatchup: [
    { name: '云从科技', code: '688327', sector: 'AI算力', cap: '85', position: '低位', volume: '放量首板', space: '中高' },
    { name: '新时达', code: '002527', sector: '机器人', cap: '62', position: '低位', volume: '放量异动', space: '中' },
    { name: '赢时胜', code: '300377', sector: '金融科技', cap: '78', position: '低位', volume: '缩量企稳', space: '中低' }
  ],
  timeline: [
    { date: '08-28 周四', type: 'normal', content: 'AI算力板块续强，<span class="highlight-up">寒武纪大涨3.2%</span>，涨停梯队5只完整。金融科技冲高回落，恒生电子跌破5日线，降级为观察。' },
    { date: '08-27 周三', type: 'info', content: '数据要素板块受政策刺激爆发，<span class="highlight-up">板块涨幅第2</span>，纳入替补观察池。机器人板块中军埃斯顿回踩10日线获支撑。' },
    { date: '08-26 周二', type: 'normal', content: '周金池三板块全线飘红，AI算力领涨。<span class="highlight-down">房地产板块龙头保利发展跌停</span>，确认避雷。' },
    { date: '08-25 周一', type: 'danger', content: '开盘前确认周金池：AI算力、机器人、金融科技。周黑池：房地产、白酒、医药商业。白酒板块竞价核按钮，全周规避。' }
  ],
  checklist: [
    { id: 1, time: '5分钟', title: '看排名', desc: '查看今日板块涨幅榜，比对本周累计涨幅榜，看金池是否掉队。', checked: false },
    { id: 2, time: '10分钟', title: '看中军', desc: '检查持仓板块中军是否在5/10日均线上方运行，破线则预警。', checked: false },
    { id: 3, time: '5分钟', title: '看梯队', desc: '统计金池板块涨停数，若连续减少，注意风险。', checked: false },
    { id: 4, time: '10分钟', title: '记结论', desc: '在表格中给每个金池标注"维持/减仓/剔除"，给新方向标注"观察/试仓"。', checked: false }
  ],
  trackFilter: 'all',
  expandedTrackRows: {},
  historyFilter: 10,
  historySentiment: 'all',
  expandedHistoryRows: {},
  sectorTracking: [
    {
      id: 'ai',
      name: 'AI算力',
      industry: '科技/半导体',
      zhongjun: '寒武纪',
      status: 'keep',
      trend: 'up',
      streak: 3,
      streakType: 'up',
      change20d: 19.8,
      dailyData: [
        { date: '08-15', change: 0.5, change20d: 5.2, limitUp: 1, volume: 620, zjChange: 0.3, rank: 8 },
        { date: '08-18', change: 0.8, change20d: 6.1, limitUp: 2, volume: 720, zjChange: 0.6, rank: 6 },
        { date: '08-19', change: 1.5, change20d: 7.8, limitUp: 3, volume: 880, zjChange: 1.2, rank: 4 },
        { date: '08-20', change: -0.3, change20d: 7.2, limitUp: 1, volume: 760, zjChange: -0.2, rank: 12 },
        { date: '08-21', change: 1.8, change20d: 9.5, limitUp: 3, volume: 950, zjChange: 1.5, rank: 3 },
        { date: '08-22', change: 1.2, change20d: 10.8, limitUp: 2, volume: 980, zjChange: 0.8, rank: 5 },
        { date: '08-25', change: 2.5, change20d: 13.5, limitUp: 4, volume: 1150, zjChange: 2.1, rank: 3 },
        { date: '08-26', change: 3.1, change20d: 16.2, limitUp: 6, volume: 1380, zjChange: 2.8, rank: 1 },
        { date: '08-27', change: 1.8, change20d: 17.5, limitUp: 3, volume: 1200, zjChange: 1.5, rank: 2 },
        { date: '08-28', change: 2.8, change20d: 19.8, limitUp: 5, volume: 1280, zjChange: 3.2, rank: 1 }
      ],
      recommendation: '持续走强，维持高优先级，中军趋势健康'
    },
    {
      id: 'robot',
      name: '机器人',
      industry: '制造/高端装备',
      zhongjun: '埃斯顿',
      status: 'keep',
      trend: 'up',
      streak: 2,
      streakType: 'up',
      change20d: 12.3,
      dailyData: [
        { date: '08-15', change: 0.2, change20d: 3.5, limitUp: 0, volume: 380, zjChange: 0.1, rank: 12 },
        { date: '08-18', change: 0.5, change20d: 4.2, limitUp: 1, volume: 420, zjChange: 0.3, rank: 10 },
        { date: '08-19', change: 0.8, change20d: 5.1, limitUp: 1, volume: 480, zjChange: 0.5, rank: 8 },
        { date: '08-20', change: -0.2, change20d: 4.8, limitUp: 0, volume: 450, zjChange: -0.1, rank: 14 },
        { date: '08-21', change: 1.2, change20d: 6.5, limitUp: 2, volume: 560, zjChange: 0.9, rank: 5 },
        { date: '08-22', change: 0.5, change20d: 7.2, limitUp: 1, volume: 520, zjChange: 0.3, rank: 8 },
        { date: '08-25', change: 1.2, change20d: 8.5, limitUp: 2, volume: 680, zjChange: 0.9, rank: 5 },
        { date: '08-26', change: 2.1, change20d: 10.2, limitUp: 4, volume: 890, zjChange: 1.8, rank: 2 },
        { date: '08-27', change: 1.5, change20d: 11.2, limitUp: 3, volume: 820, zjChange: 1.2, rank: 4 },
        { date: '08-28', change: 1.9, change20d: 12.3, limitUp: 3, volume: 860, zjChange: 1.5, rank: 3 }
      ],
      recommendation: '稳步走强，政策催化持续，可加仓'
    },
    {
      id: 'fintech',
      name: '金融科技',
      industry: '金融/计算机应用',
      zhongjun: '恒生电子',
      status: 'watch',
      trend: 'flat',
      streak: 0,
      streakType: 'flat',
      change20d: 3.2,
      dailyData: [
        { date: '08-15', change: 1.2, change20d: 6.8, limitUp: 2, volume: 520, zjChange: 0.9, rank: 4 },
        { date: '08-18', change: 0.5, change20d: 7.2, limitUp: 1, volume: 480, zjChange: 0.3, rank: 7 },
        { date: '08-19', change: -0.8, change20d: 6.1, limitUp: 0, volume: 420, zjChange: -0.5, rank: 15 },
        { date: '08-20', change: 1.5, change20d: 7.5, limitUp: 2, volume: 560, zjChange: 1.1, rank: 3 },
        { date: '08-21', change: -1.2, change20d: 5.8, limitUp: 1, volume: 490, zjChange: -0.8, rank: 18 },
        { date: '08-22', change: 0.8, change20d: 6.5, limitUp: 1, volume: 420, zjChange: 0.5, rank: 6 },
        { date: '08-25', change: -0.3, change20d: 5.8, limitUp: 0, volume: 380, zjChange: -0.2, rank: 12 },
        { date: '08-26', change: 1.5, change20d: 7.1, limitUp: 2, volume: 560, zjChange: 1.1, rank: 4 },
        { date: '08-27', change: -0.8, change20d: 5.9, limitUp: 1, volume: 480, zjChange: -0.5, rank: 15 },
        { date: '08-28', change: -0.5, change20d: 5.2, limitUp: 1, volume: 450, zjChange: -0.8, rank: 18 }
      ],
      recommendation: '涨跌交替，中军跌破5日线，降级观察'
    },
    {
      id: 'data',
      name: '数据要素',
      industry: '科技/计算机应用',
      zhongjun: '易华录',
      status: 'try',
      trend: 'up',
      streak: 2,
      streakType: 'up',
      change20d: 9.8,
      dailyData: [
        { date: '08-15', change: -0.5, change20d: 1.2, limitUp: 0, volume: 120, zjChange: -0.3, rank: 18 },
        { date: '08-18', change: 0.2, change20d: 1.5, limitUp: 0, volume: 130, zjChange: 0.1, rank: 16 },
        { date: '08-19', change: 0.5, change20d: 2.2, limitUp: 0, volume: 150, zjChange: 0.3, rank: 14 },
        { date: '08-20', change: -0.2, change20d: 1.8, limitUp: 0, volume: 140, zjChange: -0.1, rank: 17 },
        { date: '08-21', change: 0.8, change20d: 2.8, limitUp: 1, volume: 180, zjChange: 0.5, rank: 10 },
        { date: '08-22', change: 0.3, change20d: 3.2, limitUp: 0, volume: 180, zjChange: 0.1, rank: 15 },
        { date: '08-25', change: 0.8, change20d: 4.5, limitUp: 1, volume: 250, zjChange: 0.5, rank: 9 },
        { date: '08-26', change: 2.2, change20d: 6.8, limitUp: 3, volume: 480, zjChange: 1.8, rank: 3 },
        { date: '08-27', change: 3.5, change20d: 9.2, limitUp: 5, volume: 620, zjChange: 2.9, rank: 2 },
        { date: '08-28', change: 2.1, change20d: 10.8, limitUp: 4, volume: 580, zjChange: 1.6, rank: 4 }
      ],
      recommendation: '政策刺激连续走强，替补观察中，可小仓试错'
    },
    {
      id: 'lowair',
      name: '低空经济',
      industry: '制造/航空装备',
      zhongjun: '中信海直',
      status: 'watch',
      trend: 'flat',
      streak: 0,
      streakType: 'flat',
      change20d: 5.6,
      dailyData: [
        { date: '08-15', change: 0.8, change20d: 2.5, limitUp: 1, volume: 180, zjChange: 0.5, rank: 8 },
        { date: '08-18', change: -0.5, change20d: 1.8, limitUp: 0, volume: 160, zjChange: -0.3, rank: 16 },
        { date: '08-19', change: 1.2, change20d: 3.2, limitUp: 1, volume: 220, zjChange: 0.8, rank: 6 },
        { date: '08-20', change: -0.8, change20d: 2.5, limitUp: 0, volume: 200, zjChange: -0.5, rank: 17 },
        { date: '08-21', change: 1.5, change20d: 4.2, limitUp: 2, volume: 280, zjChange: 1.0, rank: 5 },
        { date: '08-22', change: -0.5, change20d: 3.8, limitUp: 0, volume: 150, zjChange: -0.3, rank: 18 },
        { date: '08-25', change: 1.8, change20d: 5.5, limitUp: 2, volume: 320, zjChange: 1.2, rank: 5 },
        { date: '08-26', change: -0.2, change20d: 5.2, limitUp: 1, volume: 280, zjChange: -0.1, rank: 14 },
        { date: '08-27', change: 2.5, change20d: 7.2, limitUp: 3, volume: 410, zjChange: 2.0, rank: 3 },
        { date: '08-28', change: 0.8, change20d: 7.8, limitUp: 1, volume: 350, zjChange: 0.5, rank: 10 }
      ],
      recommendation: '标准落地刺激但持续性待验证，震荡观察'
    },
    {
      id: 'storage',
      name: '存储芯片',
      industry: '科技/半导体',
      zhongjun: '兆易创新',
      status: 'reduce',
      trend: 'down',
      streak: 2,
      streakType: 'down',
      change20d: -4.2,
      dailyData: [
        { date: '08-15', change: 2.1, change20d: 8.5, limitUp: 3, volume: 520, zjChange: 1.5, rank: 2 },
        { date: '08-18', change: 1.2, change20d: 9.2, limitUp: 2, volume: 480, zjChange: 0.8, rank: 4 },
        { date: '08-19', change: 0.5, change20d: 8.8, limitUp: 1, volume: 420, zjChange: 0.3, rank: 8 },
        { date: '08-20', change: -0.5, change20d: 7.5, limitUp: 1, volume: 400, zjChange: -0.3, rank: 14 },
        { date: '08-21', change: -1.2, change20d: 5.8, limitUp: 0, volume: 380, zjChange: -0.8, rank: 18 },
        { date: '08-22', change: 1.5, change20d: 6.5, limitUp: 2, volume: 380, zjChange: 1.1, rank: 4 },
        { date: '08-25', change: 0.2, change20d: 5.8, limitUp: 1, volume: 320, zjChange: 0.1, rank: 12 },
        { date: '08-26', change: -0.8, change20d: 4.2, limitUp: 0, volume: 290, zjChange: -0.5, rank: 16 },
        { date: '08-27', change: -1.2, change20d: 2.5, limitUp: 0, volume: 260, zjChange: -0.9, rank: 19 },
        { date: '08-28', change: -1.5, change20d: 0.8, limitUp: 0, volume: 240, zjChange: -1.2, rank: 21 }
      ],
      recommendation: '连续走弱，涨停数归零，中军破位，建议减仓'
    }
  ],
  historyRecords: [
    {
      date: '08-28',
      weekday: '周四',
      marketIndex: '+0.8%',
      marketVolume: '8500亿',
      marketSentiment: '偏暖',
      goldPoolSummary: 'AI算力+2.8%领涨，机器人+1.9%，金融科技-0.5%',
      zhongjunSummary: '寒武纪+3.2%创新高，埃斯顿+1.5%，恒生电子-0.8%破5日线',
      limitUpCount: 12,
      limitDownCount: 3,
      conclusion: 'AI算力续强维持高优先级，金融科技降级观察，数据要素连续走强纳入替补',
      actions: ['加仓AI算力至20%', '金融科技减仓至5%', '数据要素小仓试仓3%'],
      riskNote: '无重大风险'
    },
    {
      date: '08-27',
      weekday: '周三',
      marketIndex: '+0.3%',
      marketVolume: '7800亿',
      marketSentiment: '中性偏暖',
      goldPoolSummary: '数据要素+3.5%爆发，AI算力+1.8%，机器人+1.5%',
      zhongjunSummary: '寒武纪+1.5%，埃斯顿+1.2%回踩10日线获支撑，恒生电子-0.5%',
      limitUpCount: 9,
      limitDownCount: 5,
      conclusion: '数据要素政策刺激爆发纳入替补观察，金池三板块整体健康',
      actions: ['数据要素纳入替补观察', '机器人持仓不动'],
      riskNote: '金融科技连续走弱需警惕'
    },
    {
      date: '08-26',
      weekday: '周二',
      marketIndex: '+1.2%',
      marketVolume: '9200亿',
      marketSentiment: '偏暖',
      goldPoolSummary: 'AI算力+3.1%领涨两市，机器人+2.1%，金融科技+1.5%',
      zhongjunSummary: '寒武纪+2.8%，埃斯顿+1.8%，恒生电子+1.1%',
      limitUpCount: 15,
      limitDownCount: 2,
      conclusion: '金池三板块全线飘红，AI算力涨停梯队6只完整，确认本周主攻方向',
      actions: ['AI算力加仓至15%', '机器人加仓至10%'],
      riskNote: '房地产龙头跌停确认避雷'
    },
    {
      date: '08-25',
      weekday: '周一',
      marketIndex: '+0.5%',
      marketVolume: '7500亿',
      marketSentiment: '中性',
      goldPoolSummary: 'AI算力+2.5%，机器人+1.2%，金融科技-0.3%',
      zhongjunSummary: '寒武纪+2.1%，埃斯顿+0.9%，恒生电子-0.2%',
      limitUpCount: 8,
      limitDownCount: 4,
      conclusion: '周初确认金池方向，AI算力和机器人开局良好，金融科技偏弱观察',
      actions: ['建立AI算力底仓10%', '建立机器人底仓8%'],
      riskNote: '白酒板块竞价核按钮全周规避'
    },
    {
      date: '08-22',
      weekday: '周五',
      marketIndex: '-0.3%',
      marketVolume: '7200亿',
      marketSentiment: '中性偏冷',
      goldPoolSummary: 'AI算力+1.2%，机器人+0.5%，金融科技+0.8%',
      zhongjunSummary: '寒武纪+0.8%，埃斯顿+0.3%，恒生电子+0.5%',
      limitUpCount: 6,
      limitDownCount: 6,
      conclusion: '周五强制清零复盘，AI算力和机器人入选下周金池，金融科技低位企稳入选观察',
      actions: ['清仓上周旧金池', '制定下周作战计划'],
      riskNote: '存储芯片连续走弱剔除金池'
    },
    {
      date: '08-21',
      weekday: '周四',
      marketIndex: '+0.6%',
      marketVolume: '7800亿',
      marketSentiment: '偏暖',
      goldPoolSummary: 'AI算力+1.8%，存储芯片-1.2%走弱，机器人+1.2%',
      zhongjunSummary: '寒武纪+1.5%，兆易创新-0.8%，埃斯顿+0.9%',
      limitUpCount: 10,
      limitDownCount: 4,
      conclusion: 'AI算力持续走强确认，存储芯片连续走弱降级，机器人稳步上行',
      actions: ['存储芯片减仓至5%', 'AI算力加仓至12%'],
      riskNote: '存储芯片中军破位需警惕'
    },
    {
      date: '08-20',
      weekday: '周三',
      marketIndex: '-0.5%',
      marketVolume: '7100亿',
      marketSentiment: '偏冷',
      goldPoolSummary: 'AI算力-0.3%回调，存储芯片-0.5%，金融科技+1.5%',
      zhongjunSummary: '寒武纪-0.2%，兆易创新-0.3%，恒生电子+1.1%',
      limitUpCount: 5,
      limitDownCount: 8,
      conclusion: '大盘调整日，AI算力小幅回调但中军未破5日线判定为上涨中继，金融科技逆势走强',
      actions: ['AI算力持仓不动', '金融科技纳入观察'],
      riskNote: '大盘调整期控制仓位'
    },
    {
      date: '08-19',
      weekday: '周二',
      marketIndex: '+0.9%',
      marketVolume: '8200亿',
      marketSentiment: '偏暖',
      goldPoolSummary: 'AI算力+1.5%，存储芯片+0.5%，机器人+0.8%',
      zhongjunSummary: '寒武纪+1.2%，兆易创新+0.3%，埃斯顿+0.5%',
      limitUpCount: 11,
      limitDownCount: 3,
      conclusion: 'AI算力连续3日走强确认主攻方向，存储芯片涨势放缓开始观察',
      actions: ['AI算力加仓至10%'],
      riskNote: '无重大风险'
    },
    {
      date: '08-18',
      weekday: '周一',
      marketIndex: '+0.4%',
      marketVolume: '7300亿',
      marketSentiment: '中性',
      goldPoolSummary: 'AI算力+0.8%，存储芯片+1.2%，机器人+0.5%',
      zhongjunSummary: '寒武纪+0.6%，兆易创新+0.8%，埃斯顿+0.3%',
      limitUpCount: 7,
      limitDownCount: 5,
      conclusion: '周初金池三板块均收红，存储芯片开局最强，AI算力稳步上行',
      actions: ['建立存储芯片底仓8%', '建立AI算力底仓8%'],
      riskNote: '无重大风险'
    },
    {
      date: '08-15',
      weekday: '周五',
      marketIndex: '-0.2%',
      marketVolume: '6800亿',
      marketSentiment: '中性偏冷',
      goldPoolSummary: '存储芯片+2.1%领涨，AI算力+0.5%，机器人+0.2%',
      zhongjunSummary: '兆易创新+1.5%，寒武纪+0.3%，埃斯顿+0.1%',
      limitUpCount: 8,
      limitDownCount: 5,
      conclusion: '周五清零复盘，存储芯片周涨幅第一入选下周金池，AI算力和机器人同步入选',
      actions: ['清仓旧金池', '制定下周计划：存储芯片+AI算力+机器人'],
      riskNote: '房地产和白酒确认进入黑池'
    }
  ]
};

// ===== 路由（hash） =====
function navigate(route) {
  state.currentRoute = route;
  document.querySelectorAll('.nav-item').forEach(n => {
    n.classList.toggle('active', n.dataset.route === route);
  });
  document.querySelectorAll('.view').forEach(v => {
    v.classList.toggle('active', v.id === 'view-' + route);
  });
  if (route === 'dashboard') renderDashboard();
  if (route === 'weekly') renderWeekly();
  if (route === 'daily') renderDaily();
  if (route === 'tracking') renderTracking();
  if (route === 'history') renderHistory();
  if (route === 'stock') renderStock();
  if (route === 'checklist') renderChecklist();
}

function handleHashChange() {
  const hash = location.hash.replace('#', '') || 'dashboard';
  const validRoutes = ['dashboard', 'weekly', 'daily', 'tracking', 'history', 'stock', 'checklist'];
  navigate(validRoutes.includes(hash) ? hash : 'dashboard');
}

window.addEventListener('hashchange', handleHashChange);
handleHashChange();

// ===== Tab 切换 =====
function initTabs(container) {
  const tabs = container.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const parent = tab.closest('.view');
      parent.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      parent.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');
      const target = parent.querySelector('#tab-' + tab.dataset.tab);
      if (target) target.style.display = 'block';
    });
  });
}

// ===== 渲染：总览仪表盘 =====
function renderDashboard() {
  // 金池
  const goldEl = document.getElementById('dash-gold-pool');
  goldEl.innerHTML = state.goldPool.map(s => `
    <div class="data-row">
      <span class="label">${s.name}</span>
      <span style="display:flex;align-items:center;gap:8px;">
        <span class="value" style="color:var(--up-red);">${s.weekChange}</span>
        ${statusBadge(s.status)}
      </span>
    </div>
  `).join('');

  // 黑池
  const blackEl = document.getElementById('dash-black-pool');
  blackEl.innerHTML = state.blackPool.map(s => `
    <div class="data-row">
      <span class="label">${s.name}</span>
      <span style="display:flex;align-items:center;gap:8px;">
        <span class="value" style="color:var(--down-green);">${s.weekChange}</span>
        <span class="badge badge-down"><span class="dot"></span>避雷</span>
      </span>
    </div>
  `).join('');

  // 中军
  const zjEl = document.getElementById('dash-zhongjun');
  zjEl.innerHTML = state.zhongjun.map(z => `
    <div class="sector-card" style="cursor:default;">
      <div class="sector-name">
        ${z.name}
        <span class="badge ${z.health === 'good' ? 'badge-up' : 'badge-warn'}">${z.health === 'good' ? '健康' : '预警'}</span>
      </div>
      <div class="sector-meta">
        <div class="meta-item">
          <span class="meta-label">所属板块</span>
          <span class="meta-value">${z.sector}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">今日</span>
          <span class="meta-value" style="color:${z.dayChange.startsWith('+') ? 'var(--up-red)' : 'var(--down-green)'}">${z.dayChange}</span>
        </div>
      </div>
      <div class="zhongjun-block">
        <div class="ma-indicators">
          <span class="ma-tag ${z.ma5}">MA5 ${z.ma5 === 'above' ? '上方' : '下方'}</span>
          <span class="ma-tag ${z.ma10}">MA10 ${z.ma10 === 'above' ? '上方' : '下方'}</span>
          <span class="ma-tag ${z.ma20}">MA20 ${z.ma20 === 'above' ? '上方' : '下方'}</span>
        </div>
      </div>
    </div>
  `).join('');

  // 时间线
  const tlEl = document.getElementById('dash-timeline');
  tlEl.innerHTML = state.timeline.map(t => `
    <div class="timeline-item ${t.type}">
      <div class="timeline-date">${t.date}</div>
      <div class="timeline-content">${t.content}</div>
    </div>
  `).join('');
}

function statusBadge(status) {
  const map = {
    keep: '<span class="badge badge-up"><span class="dot"></span>维持</span>',
    reduce: '<span class="badge badge-warn"><span class="dot"></span>减仓</span>',
    remove: '<span class="badge badge-down"><span class="dot"></span>剔除</span>',
    watch: '<span class="badge badge-blue"><span class="dot"></span>观察</span>',
    try: '<span class="badge badge-gold"><span class="dot"></span>试仓</span>'
  };
  return map[status] || '';
}

// ===== 渲染：周度基准锚 =====
function renderWeekly() {
  // 金池卡片
  document.getElementById('weekly-gold-cards').innerHTML = state.goldPool.map(s => `
    <div class="sector-card gold-pool">
      <div class="sector-name">
        ${s.name}
        ${statusBadge(s.status)}
      </div>
      <div class="sector-meta">
        <div class="meta-item">
          <span class="meta-label">周涨幅</span>
          <span class="meta-value" style="color:var(--up-red);">${s.weekChange}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">周成交额(亿)</span>
          <span class="meta-value">${s.weekVolume}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">周线形态</span>
          <span class="meta-value" style="font-size:11px;">${s.pattern}</span>
        </div>
      </div>
      <div class="zhongjun-block">
        <div class="zj-name">中军：${s.zhongjun}</div>
        <div style="font-size:11px;color:var(--text-muted);">${s.reason}</div>
      </div>
    </div>
  `).join('');

  // 金池表格
  document.getElementById('weekly-gold-table').innerHTML = state.goldPool.map(s => `
    <tr>
      <td style="font-weight:600;">${s.name}</td>
      <td style="color:var(--up-red);font-weight:600;">${s.weekChange}</td>
      <td>${s.weekVolume}</td>
      <td><span class="badge badge-up">${s.pattern}</span></td>
      <td style="color:var(--text-secondary);font-size:12px;">${s.reason}</td>
    </tr>
  `).join('');

  // 黑池卡片
  document.getElementById('weekly-black-cards').innerHTML = state.blackPool.map(s => `
    <div class="sector-card black-pool">
      <div class="sector-name">
        ${s.name}
        <span class="badge badge-down"><span class="dot"></span>避雷</span>
      </div>
      <div class="sector-meta">
        <div class="meta-item">
          <span class="meta-label">周跌幅</span>
          <span class="meta-value" style="color:var(--down-green);">${s.weekChange}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">周线状态</span>
          <span class="meta-value" style="font-size:11px;">${s.lineStatus}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">量能</span>
          <span class="meta-value">${s.volume}</span>
        </div>
      </div>
      <div class="zhongjun-block" style="border-top-color:var(--border);">
        <div style="font-size:11px;color:var(--text-muted);">${s.reason}</div>
      </div>
    </div>
  `).join('');

  // 黑池表格
  document.getElementById('weekly-black-table').innerHTML = state.blackPool.map(s => `
    <tr>
      <td style="font-weight:600;">${s.name}</td>
      <td style="color:var(--down-green);font-weight:600;">${s.weekChange}</td>
      <td><span class="badge badge-down">${s.lineStatus}</span></td>
      <td>${s.volume}</td>
      <td style="color:var(--text-secondary);font-size:12px;">${s.reason}</td>
    </tr>
  `).join('');

  // 中军卡片
  document.getElementById('weekly-zj-cards').innerHTML = state.zhongjun.map(z => `
    <div class="sector-card" style="cursor:default;border-left:3px solid var(--accent-gold);">
      <div class="sector-name">
        ${z.name}
        <span class="badge ${z.health === 'good' ? 'badge-up' : 'badge-warn'}">${z.health === 'good' ? '趋势健康' : '注意预警'}</span>
      </div>
      <div class="sector-meta">
        <div class="meta-item">
          <span class="meta-label">代码</span>
          <span class="meta-value">${z.code}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">所属板块</span>
          <span class="meta-value">${z.sector}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">现价</span>
          <span class="meta-value">${z.price}</span>
        </div>
      </div>
      <div class="zhongjun-block">
        <div style="font-size:11px;color:var(--text-muted);margin-bottom:6px;">${z.weekTrend}</div>
        <div class="ma-indicators">
          <span class="ma-tag ${z.ma5}">5日线${z.ma5 === 'above' ? '上方' : '下方'}</span>
          <span class="ma-tag ${z.ma10}">10日线${z.ma10 === 'above' ? '上方' : '下方'}</span>
          <span class="ma-tag ${z.ma20}">20日线${z.ma20 === 'above' ? '上方' : '下方'}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// ===== 渲染：每日复盘 =====
function renderDaily() {
  // 强势验证表格
  document.getElementById('daily-verify-table').innerHTML = state.dailyVerify.map((v, i) => `
    <tr>
      <td style="font-weight:600;">${v.sector}</td>
      <td style="color:${v.dayChange.startsWith('+') ? 'var(--up-red)' : 'var(--down-green)'};font-weight:600;">${v.dayChange}</td>
      <td>${v.limitUp} 只</td>
      <td style="font-size:12px;color:var(--text-secondary);">${v.zjStatus}</td>
      <td>${v.loseDays > 0 ? '<span style="color:var(--warning-orange);font-weight:600;">' + v.loseDays + '天</span>' : '<span style="color:var(--text-muted);">0天</span>'}</td>
      <td>${statusBadge(v.verdict)}</td>
      <td>
        <div class="status-selector">
          <button class="status-btn ${v.verdict === 'keep' ? 'active-keep' : ''}" onclick="setVerifyStatus(${i}, 'keep')">维持</button>
          <button class="status-btn ${v.verdict === 'reduce' ? 'active-reduce' : ''}" onclick="setVerifyStatus(${i}, 'reduce')">减仓</button>
          <button class="status-btn ${v.verdict === 'remove' ? 'active-remove' : ''}" onclick="setVerifyStatus(${i}, 'remove')">剔除</button>
          <button class="status-btn ${v.verdict === 'watch' ? 'active-watch' : ''}" onclick="setVerifyStatus(${i}, 'watch')">观察</button>
        </div>
      </td>
    </tr>
  `).join('');

  // 挑战者列表
  document.getElementById('daily-challenger-list').innerHTML = state.challengers.map(c => {
    const dots = Array.from({length: c.target}, (_, i) => `<span class="day-dot ${i < c.days ? 'lit' : ''}"></span>`).join('');
    const progress = Math.round(c.days / c.target * 100);
    return `
      <div class="challenger-card">
        <div class="challenger-info">
          <div class="challenger-name">${c.name} <span class="badge badge-blue" style="margin-left:6px;">替补观察</span></div>
          <div class="challenger-reason">${c.reason}</div>
        </div>
        <div style="text-align:center;">
          <div class="challenger-days">${dots}</div>
          <div style="font-size:10px;color:var(--text-muted);margin-top:4px;">${c.days}/${c.target}天 · ${progress}%</div>
        </div>
      </div>
    `;
  }).join('');

  // 避雷表格
  document.getElementById('daily-avoid-table').innerHTML = state.dailyAvoid.map(a => `
    <tr>
      <td style="font-weight:600;">${a.sector}</td>
      <td style="color:${a.dayChange.startsWith('+') ? 'var(--up-red)' : 'var(--down-green)'};font-weight:600;">${a.dayChange}</td>
      <td style="font-size:12px;">${a.leader}</td>
      <td>${a.volume}</td>
      <td><span class="badge ${a.result === '确认避雷' ? 'badge-down' : 'badge-warn'}">${a.result}</span></td>
    </tr>
  `).join('');
}

function setVerifyStatus(index, status) {
  state.dailyVerify[index].verdict = status;
  const textMap = { keep: '维持', reduce: '减仓', remove: '剔除', watch: '观察', try: '试仓' };
  state.dailyVerify[index].verdictText = textMap[status];
  renderDaily();
}

// ===== 渲染：个股选择 =====
function renderStock() {
  // 激进型
  document.getElementById('stock-aggressive-table').innerHTML = state.stockAggressive.map(s => `
    <tr>
      <td><span class="stock-name">${s.name}</span><span class="stock-code">${s.code}</span></td>
      <td><span class="badge badge-gold">${s.sector}</span></td>
      <td style="color:var(--up-red);font-weight:700;">${s.boards}</td>
      <td style="color:var(--up-red);">${s.auction}</td>
      <td style="font-size:12px;color:var(--text-secondary);">${s.support}</td>
      <td><span class="badge ${s.emotion === '高' ? 'badge-up' : 'badge-warn'}">${s.emotion}</span></td>
    </tr>
  `).join('');

  // 稳健型
  document.getElementById('stock-steady-table').innerHTML = state.stockSteady.map(s => `
    <tr>
      <td><span class="stock-name">${s.name}</span><span class="stock-code">${s.code}</span></td>
      <td><span class="badge badge-gold">${s.sector}</span></td>
      <td><span class="badge badge-up">${s.weekAlign}</span></td>
      <td style="font-weight:600;">${s.pullback}</td>
      <td><span class="badge ${s.support === '支撑有效' ? 'badge-up' : 'badge-warn'}">${s.support}</span></td>
      <td style="color:var(--accent-gold);font-weight:700;">${s.position}</td>
    </tr>
  `).join('');

  // 补涨型
  document.getElementById('stock-catchup-table').innerHTML = state.stockCatchup.map(s => `
    <tr>
      <td><span class="stock-name">${s.name}</span><span class="stock-code">${s.code}</span></td>
      <td><span class="badge badge-gold">${s.sector}</span></td>
      <td>${s.cap}</td>
      <td><span class="badge badge-blue">${s.position}</span></td>
      <td style="font-size:12px;">${s.volume}</td>
      <td><span class="badge ${s.space === '中高' ? 'badge-up' : s.space === '中' ? 'badge-warn' : 'badge-muted'}">${s.space}</span></td>
    </tr>
  `).join('');
}

// ===== 渲染：板块跟踪 =====
function renderTracking() {
  const list = state.sectorTracking;

  // 统计
  const upCount = list.filter(s => s.trend === 'up').length;
  const downCount = list.filter(s => s.trend === 'down').length;
  const flatCount = list.filter(s => s.trend === 'flat').length;
  document.getElementById('track-up-count').textContent = upCount;
  document.getElementById('track-down-count').textContent = downCount;
  document.getElementById('track-flat-count').textContent = flatCount;

  // 筛选按钮状态
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === state.trackFilter);
  });

  // 过滤
  const filtered = state.trackFilter === 'all'
    ? list
    : list.filter(s => s.trend === state.trackFilter);

  // 渲染表格
  const tbody = document.getElementById('tracking-tbody');
  tbody.innerHTML = filtered.map(s => {
    const isExpanded = state.expandedTrackRows[s.id];
    const last3 = s.dailyData.slice(-3);
    const cum3 = last3.reduce((sum, d) => sum + d.change, 0);
    const cum3Str = (cum3 >= 0 ? '+' : '') + cum3.toFixed(1) + '%';
    const today = s.dailyData[s.dailyData.length - 1];
    const prev = s.dailyData[s.dailyData.length - 2];
    const limitChange = today.limitUp - prev.limitUp;
    const limitStr = today.limitUp + '只' + (limitChange > 0 ? ' ↑' + limitChange : limitChange < 0 ? ' ↓' + Math.abs(limitChange) : '');
    const zjStr = (today.zjChange >= 0 ? '+' : '') + today.zjChange.toFixed(1) + '%';

    // 迷你趋势图
    const maxAbs = Math.max(...s.dailyData.map(d => Math.abs(d.change)), 1);
    const sparkline = s.dailyData.map(d => {
      const h = Math.max(4, Math.round(Math.abs(d.change) / maxAbs * 28));
      const cls = d.change >= 0 ? 'up' : 'down';
      const tip = d.date + ': ' + (d.change >= 0 ? '+' : '') + d.change.toFixed(1) + '%';
      return `<div class="bar ${cls}" style="height:${h}px;"><span class="bar-tip">${tip}</span></div>`;
    }).join('');

    // 连续天数标签
    let streakHtml = '';
    if (s.streak > 0) {
      const streakCls = s.streakType === 'up' ? 'up' : 'down';
      const streakText = (s.streakType === 'up' ? '走强' : '走弱') + s.streak + '天';
      streakHtml = `<span class="streak-tag ${streakCls}">${streakText}</span>`;
    } else {
      streakHtml = `<span class="streak-tag flat">震荡</span>`;
    }

    // 趋势判定
    const trendMap = {
      up: '<span class="trend-indicator up"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"/></svg>走强</span>',
      down: '<span class="trend-indicator down"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>走弱</span>',
      flat: '<span class="trend-indicator flat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/></svg>震荡</span>'
    };

    // 详情行
    const detailDates = s.dailyData.map(d => `<th>${d.date}</th>`).join('');
    const detailChanges = s.dailyData.map(d => {
      const color = d.change >= 0 ? 'var(--up-red)' : 'var(--down-green)';
      return `<td style="color:${color};font-weight:600;">${(d.change >= 0 ? '+' : '') + d.change.toFixed(1)}%</td>`;
    }).join('');
    const detailLimits = s.dailyData.map(d => `<td>${d.limitUp}只</td>`).join('');
    const detailVolumes = s.dailyData.map(d => `<td>${d.volume}亿</td>`).join('');
    const detail20d = s.dailyData.map(d => {
      const color = d.change20d >= 0 ? 'var(--up-red)' : 'var(--down-green)';
      return `<td style="color:${color};font-weight:600;">${(d.change20d >= 0 ? '+' : '') + d.change20d.toFixed(1)}%</td>`;
    }).join('');
    const detailZj = s.dailyData.map(d => {
      const color = d.zjChange >= 0 ? 'var(--up-red)' : 'var(--down-green)';
      return `<td style="color:${color};">${(d.zjChange >= 0 ? '+' : '') + d.zjChange.toFixed(1)}%</td>`;
    }).join('');
    const detailRanks = s.dailyData.map(d => `<td>第${d.rank}名</td>`).join('');

    const detailRow = `
      <tr class="tracking-detail-row ${isExpanded ? 'show' : ''}" id="detail-${s.id}">
        <td colspan="11">
          <div class="detail-grid">
            <div>
              <div class="detail-section-title">每日涨幅</div>
              <table class="detail-table">
                <thead><tr><th>指标</th>${detailDates}</tr></thead>
                <tbody>
                  <tr><td style="color:var(--text-secondary);">板块涨幅</td>${detailChanges}</tr>
                  <tr><td style="color:var(--text-secondary);">20日涨幅</td>${detail20d}</tr>
                  <tr><td style="color:var(--text-secondary);">涨停数</td>${detailLimits}</tr>
                  <tr><td style="color:var(--text-secondary);">成交额</td>${detailVolumes}</tr>
                </tbody>
              </table>
            </div>
            <div>
              <div class="detail-section-title">中军与排名</div>
              <table class="detail-table">
                <thead><tr><th>指标</th>${detailDates}</tr></thead>
                <tbody>
                  <tr><td style="color:var(--text-secondary);">中军(${s.zhongjun})</td>${detailZj}</tr>
                  <tr><td style="color:var(--text-secondary);">板块排名</td>${detailRanks}</tr>
                </tbody>
              </table>
            </div>
          </div>
        </td>
      </tr>
    `;

    return `
      <tr>
        <td>
          <button class="expand-btn ${isExpanded ? 'expanded' : ''}" onclick="toggleTrackDetail('${s.id}')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
        </td>
        <td style="font-weight:600;">
          ${s.name}
          <div style="margin-top:3px;">${statusBadge(s.status)}</div>
        </td>
        <td style="font-size:12px;color:var(--text-secondary);">${s.industry}</td>
        <td><div class="sparkline">${sparkline}</div></td>
        <td style="color:${cum3 >= 0 ? 'var(--up-red)' : 'var(--down-green)'};font-weight:700;">${cum3Str}</td>
        <td style="color:${s.change20d >= 0 ? 'var(--up-red)' : 'var(--down-green)'};font-weight:700;">${(s.change20d >= 0 ? '+' : '') + s.change20d.toFixed(1)}%</td>
        <td style="font-size:12px;color:${limitChange >= 0 ? 'var(--up-red)' : 'var(--down-green)'};">${limitStr}</td>
        <td style="color:${today.zjChange >= 0 ? 'var(--up-red)' : 'var(--down-green)'};font-weight:600;">${zjStr}</td>
        <td>${streakHtml}</td>
        <td>${trendMap[s.trend]}</td>
        <td style="font-size:12px;color:var(--text-secondary);max-width:180px;line-height:1.4;">${s.recommendation}</td>
      </tr>
      ${detailRow}
    `;
  }).join('');
}

function setTrackFilter(filter) {
  state.trackFilter = filter;
  renderTracking();
}

function toggleTrackDetail(id) {
  state.expandedTrackRows[id] = !state.expandedTrackRows[id];
  renderTracking();
}

// ===== 渲染：历史记录 =====
function renderHistory() {
  const records = state.historyRecords;

  // 统计
  const totalDays = records.length;
  const upDays = records.filter(r => r.marketIndex.startsWith('+')).length;
  const avgLimit = Math.round(records.reduce((sum, r) => sum + r.limitUpCount, 0) / totalDays * 10) / 10;
  const totalActions = records.reduce((sum, r) => sum + r.actions.length, 0);

  document.getElementById('hist-total-days').textContent = totalDays;
  document.getElementById('hist-up-days').textContent = upDays;
  document.getElementById('hist-avg-limit').textContent = avgLimit;
  document.getElementById('hist-actions').textContent = totalActions;

  // 筛选按钮状态
  document.querySelectorAll('[data-hist-filter]').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.dataset.histFilter) === state.historyFilter);
  });
  document.querySelectorAll('[data-hist-sentiment]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.histSentiment === state.historySentiment);
  });

  // 过滤
  let filtered = records.slice(0, state.historyFilter);
  if (state.historySentiment !== 'all') {
    filtered = filtered.filter(r => r.marketSentiment.includes(state.historySentiment));
  }

  // 渲染列表
  const list = document.getElementById('history-list');
  list.innerHTML = filtered.map((r, i) => {
    const isExpanded = state.expandedHistoryRows[r.date];
    const isUp = r.marketIndex.startsWith('+');
    const sentimentBadge = r.marketSentiment.includes('偏暖')
      ? '<span class="badge badge-up">偏暖</span>'
      : r.marketSentiment.includes('偏冷')
      ? '<span class="badge badge-down">偏冷</span>'
      : '<span class="badge badge-blue">中性</span>';

    const actionsHtml = r.actions.map(a => `<div style="padding:4px 0;border-bottom:1px solid var(--border-light);font-size:12px;"><span style="color:var(--accent-gold);margin-right:6px;">▸</span>${a}</div>`).join('');

    return `
      <div class="card" style="margin-bottom:10px;padding:0;overflow:hidden;">
        <div style="padding:14px 18px;cursor:pointer;" onclick="toggleHistoryDetail('${r.date}')">
          <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
            <div style="font-size:15px;font-weight:700;min-width:90px;">${r.date} <span style="font-size:12px;color:var(--text-muted);font-weight:400;">${r.weekday}</span></div>
            <div style="font-size:13px;font-weight:600;color:${isUp ? 'var(--up-red)' : 'var(--down-green)'};">大盘 ${r.marketIndex}</div>
            <div style="font-size:12px;color:var(--text-secondary);">成交 ${r.marketVolume}</div>
            ${sentimentBadge}
            <span class="badge badge-gold" style="margin-left:auto;">涨停 ${r.limitUpCount} / 跌停 ${r.limitDownCount}</span>
            <button class="expand-btn ${isExpanded ? 'expanded' : ''}" style="margin-left:8px;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
          </div>
          <div style="margin-top:10px;font-size:12px;color:var(--text-secondary);line-height:1.6;">
            <div><span style="color:var(--text-muted);">金池表现：</span>${r.goldPoolSummary}</div>
            <div style="margin-top:4px;"><span style="color:var(--text-muted);">中军状态：</span>${r.zhongjunSummary}</div>
          </div>
        </div>
        <div class="tracking-detail-row ${isExpanded ? 'show' : ''}" style="display:${isExpanded ? 'block' : 'none'};background:var(--bg-tertiary);border-top:1px solid var(--border);">
          <div style="padding:14px 18px;">
            <div class="detail-grid">
              <div>
                <div class="detail-section-title">复盘结论</div>
                <div style="font-size:13px;color:var(--text-primary);line-height:1.7;padding:10px 12px;background:var(--bg-secondary);border-radius:6px;border-left:3px solid var(--accent-gold);">${r.conclusion}</div>
                <div class="detail-section-title" style="margin-top:14px;">操作记录</div>
                <div style="padding:4px 12px;background:var(--bg-secondary);border-radius:6px;">${actionsHtml}</div>
              </div>
              <div>
                <div class="detail-section-title">市场情绪</div>
                <div class="data-row"><span class="label">情绪等级</span><span class="value">${r.marketSentiment}</span></div>
                <div class="data-row"><span class="label">涨停家数</span><span class="value" style="color:var(--up-red);">${r.limitUpCount} 家</span></div>
                <div class="data-row"><span class="label">跌停家数</span><span class="value" style="color:var(--down-green);">${r.limitDownCount} 家</span></div>
                <div class="data-row"><span class="label">成交额</span><span class="value">${r.marketVolume}</span></div>
                <div class="detail-section-title" style="margin-top:14px;">风险提示</div>
                <div style="font-size:12px;color:${r.riskNote === '无重大风险' ? 'var(--text-muted)' : 'var(--warning-orange)'};line-height:1.6;padding:8px 12px;background:var(--bg-secondary);border-radius:6px;">${r.riskNote}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (filtered.length === 0) {
    list.innerHTML = '<div class="card" style="text-align:center;padding:40px;color:var(--text-muted);">当前筛选条件下暂无历史记录</div>';
  }
}

function setHistoryFilter(days) {
  state.historyFilter = days;
  renderHistory();
}

function setHistorySentiment(sentiment) {
  state.historySentiment = sentiment;
  renderHistory();
}

function toggleHistoryDetail(date) {
  state.expandedHistoryRows[date] = !state.expandedHistoryRows[date];
  renderHistory();
}

// ===== 渲染：执行清单 =====
function renderChecklist() {
  const container = document.getElementById('checklist-container');
  container.innerHTML = state.checklist.map(item => `
    <div class="checklist-item ${item.checked ? 'checked' : ''}" onclick="toggleChecklist(${item.id})">
      <div class="checkbox">
        <svg viewBox="0 0 24 24" fill="none" stroke="#0d1117" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <div class="cl-content">
        <div class="cl-title">
          ${item.title}
          <span class="cl-time">${item.time}</span>
        </div>
        <div class="cl-desc">${item.desc}</div>
      </div>
    </div>
  `).join('');

  const done = state.checklist.filter(i => i.checked).length;
  const total = state.checklist.length;
  document.getElementById('cl-progress-text').textContent = `${done} / ${total} 完成`;
  document.getElementById('cl-progress-fill').style.width = (done / total * 100) + '%';
}

function toggleChecklist(id) {
  const item = state.checklist.find(i => i.id === id);
  if (item) {
    item.checked = !item.checked;
    renderChecklist();
  }
}

// ===== 初始化 =====
document.querySelectorAll('.view').forEach(v => initTabs(v));
// handleHashChange 已在路由部分调用，会根据初始 hash 渲染对应视图
