import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

async function sendEmail(req, res) {
  try {
    console.log('REQ.BODY', req.body)
    await sendgrid.send({
      to: 'jordan@jrobertsweb.dev',
      from: 'jordan@jrobertsweb.dev',
      subject: `Portfolio message from: ${req.body.email}`,
      text: `${req.body.message} from:${req.body.email}`,
    })
  } catch (error) {
    console.log(error)
    return res.status(error.statusCode || 500).json({ error: error.message })
  }

  return res.status(200).json({ error: '' })
}

export default sendEmail
