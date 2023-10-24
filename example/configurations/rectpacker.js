import rectpacker from 'customcharts/rectpacker'
import data from '../datasets/rectpacker.csv'

export default {
  chart: rectpacker,
  data,
  dataTypes: {
    imgPath: 'string',
    imgName: 'string',
    aspectRatio: 'number',
    value: 'number',
  },
  mapping: {
    name: { value: ['imgName'] },
    imagePath: { value: ['imgPath'] },
    aspectRatio: { value: ['aspectRatio'] },
    size: { value: ['value'] },
  },
}
