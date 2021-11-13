var env = __ENV.MY_HOSTNAME
module.exports = Object.freeze({
    LOGIN: 'https://'+env+'/login_sub.pa',
    CREATE_PROJECT:'https://'+env+'/com.innotas.service.json.entity.detail.content.NewProjectDetailsContent.pa?entityType=project&categoryId=1320597422&pid=0&ptid=0&templateParentId=0&scheduleFromDate=1/20/2020&action=update',
    CREATE_TASK: 'https://'+env+'/com.innotas.service.json.project.task.ProjectTaskNew.pa'
});