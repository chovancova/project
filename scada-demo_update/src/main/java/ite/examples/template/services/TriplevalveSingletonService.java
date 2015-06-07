package ite.examples.template.services;

import java.util.logging.Logger;

import javax.annotation.PostConstruct;
import javax.ejb.Schedule;
import javax.ejb.Singleton;
import javax.ejb.Startup;
import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.json.Json;
import javax.json.JsonObject;

@Singleton
@Startup
@ApplicationScoped
public class TriplevalveSingletonService {
	
	private static final Logger logger = Logger.getLogger(TemperatureSingletonService.class.getName());

	private boolean rotor0;
	private boolean rotor1;
	private boolean valve0;

	@Inject
	private EventDispatcher ed;

	@PostConstruct
	private void init() {
		logger.info("init ...");
		rotor0 = true;
		rotor1 = !rotor0;
		valve0 = rotor0;
	}
	
	public JsonObject getJSONData() {
		JsonObject jObj = Json.createObjectBuilder().add("rotor0", rotor0).add("rotor1", rotor1).add("valve0", valve0).build();
		return jObj;
	}

	
	@Schedule(second = "*/3", minute="*", hour="*", persistent=false)
	public void scheduledAction() {
		rotor0 = !rotor0;
		rotor1 = !rotor0;
		valve0 = rotor0;
		ed.fireMessageDataEvent(new EventMessage("tripleValveData", getJSONData().toString()));
	}

}
