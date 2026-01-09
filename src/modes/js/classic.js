export default function(api) {
  const p = api.getCurrentPlayer();
  const dare = api.parseDare(api.getRandomTemplate());
  api.showMessage(p.name + ': ' + dare);
}
