export const visualOptions = {
  heuristic: {
    type: 'text',
    label: 'Heuristic',
    group: 'chart',
    options: ['first', 'best'],
    default: 'first',
  },

  metric: {
    type: 'text',
    label: 'Metric',
    group: 'chart',
    options: ['euclidean', 'chessboard', 'manhattan'],
    default: 'euclidean',
  },

  closeFactor: {
    type: 'number',
    label: 'Close Factor',
    group: 'chart',
    default: 0.3,
    step: 0.1,
    min: 0,
    max: 1,
  },

  minSize : {
    type: 'number',
    label: 'Minimum Size',
    group: 'chart',
    default: 100,
    step: 1,
    min: 0,
    max: 10000,
  },

  maxSize : {
    type: 'number',
    label: 'Maximum Size',
    group: 'chart',
    default: 10000,
    step: 1,
    min: 0,
    max: 10000,
  },

}
