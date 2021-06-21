PNotify.error({
  title: 'You Will Receive a Side',
  text: 'Too many matches found. Please enter a more specific query!',
  icon: 'fas fa-info-circle',
  hide: false,
  closer: false,
  sticker: false,
  destroy: true,
  modules: new Map([
    ...PNotify.defaultModules,
    [PNotifyConfirm, {
      confirm: true,
      buttons: [{
        text: 'Ok',
        primary: true,
        click: notice => notice.close()
      }]
    }]
  ])
});