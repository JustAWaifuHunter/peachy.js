const TextChannel = require('../structures/TextChannel');

module.exports.handle = function(client, data) {
	if (data.type === 0) {
		const channel = new TextChannel(client, data);
		const oldChannel = client.channels.cache.get(data.id);
		client.emit('channelUpdate', oldChannel, channel);
		client.channels.cache.set(data.id, channel);
	}
};
