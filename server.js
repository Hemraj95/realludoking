const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const errorHandler = require('./_helpers/error-handler')
const environment = require('./environment')
const PORT = process.env.PORT || 6001
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express()

app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors({
  origin: '*'
}));
app.get('/', (req, res) => {


  console.log('Welcome to NODE API (Port: ' + PORT + ' , Environment: ' + environment.env + ')')
  res.send('Welcome to NODE API (Port: ' + PORT + ' , Environment: ' + environment.env + ')')
})


app.use('/member', require('./controllers/member.controller'))
app.use('/admin', require('./controllers/admin.controller'))
app.use('/login', require('./controllers/login.controller'))
app.use('/masterLogin', require('./controllers/masterLogin.controller'))
app.use('/role', require('./controllers/role.controller'))
app.use('/email', require('./controllers/emailRoutes'))
app.use('/upi', require('./controllers/upi.controller'))
app.use('/wallet', require('./controllers/wallet.controller'))
app.use('/withdraw', require('./controllers/withdraw.controller'))
app.use('/payment', require('./controllers/payment.controller'))
app.use('/fastParity', require('./controllers/fastParity.controller'))
app.use('/parity', require('./controllers/parity.controller'))
app.use('/sms', require('./controllers/mobileSms.controller'))
app.use('/feedback', require('./controllers/feedback.controller'))
app.use('/packages', require('./controllers/packages.controller'))
app.use('/period', require('./controllers/period.controller'))
app.use('/fastparityResult', require('./controllers/fastParityResult.controller'))
app.use('/parityResult', require('./controllers/parityResult.controller'))
app.use('/profit', require('./controllers/profit.controller'))
app.use('/orderId', require('./controllers/orderId.controller'))



app.use('/roomeCode', require('./service/roomCode'))






app.use('/upload', require('./fileUpload'))



app.use('/masterimport', require('./controllers/masterimport.controller'))


app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT} , Environment: ${environment.env}`)
})









// var request = require('request');
// var options = {
// 'method': 'POST',
// 'url': 'https://cpaas.messagecentral.com/verification/v2/verification/send?countryCode=91&customerId=C-832FE5D64342432&flowType=SMS&mobileNumber=9982777738',
// 'headers': { 'authToken': "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJDLTgzMkZFNUQ2NDM0MjQzMiIsImlhdCI6MTcyMTIyMDAxNCwiZXhwIjoxODc4OTAwMDE0fQ.fT7RuX8RN2eGhGKSVjxStJLHgvrAFYNXrI7AV-1dYVE-UnOPpUr8ClooD2UN-sLAGUqOdBCUOUZvw11qSbpS6w"
// }
// };
// request(options, function (error, response) {
// if (error) throw new Error(error);
// console.log(response.body);
// });



// var request = require('request');
// var options = {
// 'method': 'GET',
// 'url': 'https://cpaas.messagecentral.com/verification/v2/verification/validateOtp?countryCode=91&mobileNumber=9982777738&verificationId=XX&customerId=C-832FE5D64342432&code=7351',
// 'headers': {
// 'authToken': "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJDLTgzMkZFNUQ2NDM0MjQzMiIsImlhdCI6MTcyMTIyMDAxNCwiZXhwIjoxODc4OTAwMDE0fQ.fT7RuX8RN2eGhGKSVjxStJLHgvrAFYNXrI7AV-1dYVE-UnOPpUr8ClooD2UN-sLAGUqOdBCUOUZvw11qSbpS6w"
// }
// };
// request(options, function (error, response) {
// if (error) throw new Error(error);
// console.log(response.body);
// });