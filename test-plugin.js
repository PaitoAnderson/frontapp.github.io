var conversation;

function unassign() {
  Front.unassign(conversation);
}

function toggleArchive() {
  Front.toggleArchive(conversation);
}

function toggleTrashed() {
  Front.toggleTrashed(conversation);
}

function reply() {
  Front.reply({
    body: 'Template reply',
    subject: 'Template subject',
  }, false, conversation);
}

function alertDialog() {
  Front.alert({
    title: 'I\'m an alert dialog',
    message: 'You are now alerted',
  }, function () {
    console.log('Alert closed');
  });
}

function reportDialog() {
  Front.report({
    title: 'I\'m a report dialog',
    message: 'You have been reported'
  }, function() {
      console.log('Report closed');
  });
}

function confirmDialog() {
  Front.confirm({
    title: 'I\'m a confirm dialog',
    message: 'Do you confirm',
    okTitle: 'OK Button',
    cancelTitle: 'Cancel Button'
  }, function (confirmed) {
    if (confirmed)
      console.log('User confirmed');
    else
      console.log('User cancelled');
  });
}

function promptDialog() {
  Front.prompt({
    title: 'I\'m a prompt dialog',
    message: 'Please enter something'
  }, function (data) {
    if (data)
      console.log('User input :', data);
    else
      console.log('User cancelled');
  });
}

function copyText() {
  Front.copyToClipboard('Front is awesome!');
}

function fetchTeammates() {
  Front.fetchAllowedTeammates(function (teammates) {
    if (!teammates)
      return;

    console.log(teammates);
  });
}

function fetchInboxes() {
  Front.fetchInboxes(function (inboxes) {
    if (!inboxes)
      return;

    console.log(inboxes);
  });
}

Front.on('conversation', function (data) {
  console.log('Conversation', data.conversation);
  console.log('Contact', data.contact);
  console.log('Message', data.message);
  console.log('OtherMessages', data.otherMessages);
  conversation = data.conversation;
});
