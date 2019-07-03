import Picker from '../Picker.vue'
import DatePickerPanel from '../panel/Date/date.vue'
import RangeDatePickerPanel from '../panel/Date/date-range.vue'
import { oneOf, prefix } from '../../../utils/common'

const prefixCls = `${prefix}datepicker`

export default {
    name: prefixCls,
    mixins: [Picker],
    props: {
        type: {
            validator (value) {
                return oneOf(value, ['year', 'month', 'date', 'daterange', 'datetime', 'datetimerange'])
            },
            default: 'date'
        }
    },
    components: { DatePickerPanel, RangeDatePickerPanel },
    computed: {
        panel () {
            const isRange = this.type === 'daterange' || this.type === 'datetimerange'
            return isRange ? 'RangeDatePickerPanel' : 'DatePickerPanel'
        },
        ownPickerProps () {
            return this.options
        }
    }
}
