function humanReadable(seconds) {
  var hours = Math.floor(seconds / 3600);
  var minutes = Math.floor((seconds % 3600) / 60);
  var remainingSeconds = seconds % 60;

  var formattedHours = hours < 10 ? "0" + hours : hours;
  var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  var formattedSeconds =
    remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;

  return formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;
}
