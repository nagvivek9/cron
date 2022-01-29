const cron=require('cron').CronJob;
new cron('* * * * * *',()=>{
 console.log('cron triggered');
},()=>{
 console.log('cron stopped');
},true);