package ite.examples.template.ui.push;

import ite.examples.template.services.EventMessage;

import java.util.logging.Logger;



import org.primefaces.push.Decoder;

public final class MessageDataMessageDecoder implements Decoder<String, EventMessage> {
	
	private static final Logger logger = Logger.getLogger(MessageDataMessageDecoder.class.getName());

	@Override
	public EventMessage decode(String jsonString) {
		//logger.info(jsonString);
		return DataUtils.jsonDecode(jsonString);
	}
}
