package ite.examples.template.services;

import java.util.Random;

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
public class PumpingStationSingletonService {

	private Random randomGenerator;
	private boolean rotor0;
	private boolean valve0;
	private boolean valve1;
	private int waterLevel;
	
	@Inject
	private EventDispatcher ed;
	
	@PostConstruct
	private void init() {
		randomGenerator = new Random();
		rotor0 = true;
		valve0 = !rotor0;
		valve1 = rotor0;
		waterLevel = randomGenerator.nextInt(100);
	}
	
	public JsonObject getJSONData() {
		JsonObject jObj = Json.createObjectBuilder().add("rotor0", rotor0).add("valve0", valve0).add("valve1", valve1).add("waterLevel", waterLevel).build();
		return jObj;
	}

	@Schedule(second = "*/3", minute="*", hour="*", persistent=false)
	public void scheduledAction() {
		rotor0 = !rotor0;
		valve0 = !rotor0;
		valve1 = rotor0;
		waterLevel = randomGenerator.nextInt(100);
		ed.fireMessageDataEvent(new EventMessage("pumpingStationData", getJSONData().toString()));
	}


}
