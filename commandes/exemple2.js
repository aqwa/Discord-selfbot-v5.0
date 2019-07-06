// Exemple de commande
exports.run = (self, message, args) => {

    // Ne fait rien si vous n'êtes pas l'auteur du message
    if(message.author.id !== self.user.id) {

        return;
    }

    // Suppression le message si possible
    if (message.deletable === true) { 			
	message.delete();	
    }
    
    // Réponse de la commande
    message.channel.send("Message");
};
