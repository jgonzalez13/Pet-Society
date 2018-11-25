import Firebase from 'firebase'
import app from '../../../db/index'

let db = app.database()
let reportsRef = db.ref('Report')

export default {
    name: 'ReportsView',
    firebase: {
        reports: reportsRef
    }
}