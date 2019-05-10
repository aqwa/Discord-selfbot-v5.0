module.exports = (self, message) => {
  
    // Prefix
    if (message.content.indexOf(self.conftoken.prefix) !== 0) return;
  
    // Définition de args et command
    const args = message.content.slice(self.conftoken.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    // Nom des commandes
    const cmd = self.commands.get(command);
  
    // Ne fait rien si la commande n'existe pas
    if (!cmd) return;
  
    // Lance la commande si toute les conditions sont réunis
    cmd.run(self, message, args);
};