// Exemple de commande

exports.run = (self, message, args) => {

    // Ne fait rien si vous n'êtes pas l'auteur du message
    if(message.author.id !== self.user.id) return;

    // Suppression du message si vous en êtes l'auteur
	if (message.author.id === self.user.id) { 			
		message.delete() 		
    }
    
    // Réponse de la commande
    message.channel.send("Message");
}