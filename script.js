// Enable selected tab and disabling the others
function enable(frameId) {
  for (let i = 1; i < 5; i++) {
    if (frameId == i) {
      document.getElementById(`frame${i}`).className = "";
      continue;
    }
    document.getElementById(`frame${i}`).className = "inactive";
  }
}

// Change description text on which step is being focused
function changeDescription(id) {
  switch (id) {
    case 1:
      text = "Database integration";
      break;
    case 2:
      text = "Fetch data";
      break;
    case 3:
      text = "Analytics";
      break;
    case 4:
      text = "Full documentation";
      break;
    default:
      text='';
      break;
  }

  document.getElementById('step-description').innerHTML = text;
}
