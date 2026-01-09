players = api.getPlayers()
for p in players:
    api.showMessage(p['name'] + ' dares incoming')
