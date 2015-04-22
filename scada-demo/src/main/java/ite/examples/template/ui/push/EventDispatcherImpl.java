package ite.examples.template.ui.push;

import ite.examples.template.services.EventDispatcher;
import ite.examples.template.services.EventMessage;

import javax.ejb.Singleton;

import org.primefaces.push.EventBus;
import org.primefaces.push.EventBusFactory;

@Singleton
public class EventDispatcherImpl implements EventDispatcher {
	
	private final EventBus eventBus = EventBusFactory.getDefault().eventBus();

	@Override
	public void fireMessageDataEvent(EventMessage eventMessage) {
		eventBus.publish(PFPUSH_GLOBAL_CHANNEL, eventMessage);
	}

}
