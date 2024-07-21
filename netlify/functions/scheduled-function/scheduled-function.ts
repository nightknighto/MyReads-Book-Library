import { schedule } from '@netlify/functions'
import { open, write } from 'fs'

// To learn about scheduled functions and supported cron extensions,
// see: https://ntl.fyi/sched-func
export const handler = schedule('@hourly', async (event) => {
  const eventBody = JSON.parse(event.body!)
  console.log(`Hey there! Next function run at ${eventBody.next_run}.`)

  return {
    statusCode: 200,
  }
})
