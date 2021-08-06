const NOTIFICATION_TITLE = '通知'
const NOTIFICATION_BODY = '这是一条自定义的系统通知，6不6'
const CLICK_MESSAGE = '你点了这条通知了'

new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY }).onclick = () => console.log(CLICK_MESSAGE)
