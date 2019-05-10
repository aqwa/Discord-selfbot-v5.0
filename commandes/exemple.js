// le nom de la commande sera prefix+nom du fichier ( exemple : !exemple ( vous pouvez changer ça depuis le fichier message.js))
// si vous désirer une commande custom, créez un fichier dans ce même dossié et copiez le code si dessous.

exports.run = (self, message, args) => {

	// Ne fait rien si vous n'êtes pas l'auteur du message
	if(message.author.id !== self.user.id) return;
	
	// Suppression du message si vous en êtes l'auteur
	if (message.author.id === self.user.id) { 			
		message.delete() 		
	}
	
	// le message à envoyer
    message.channel.send("exemple");
}

var desc = "description commande exemple";
exports.desc = desc;