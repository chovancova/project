package ite.examples.template.services.rest;

import java.util.logging.Logger;

import ite.examples.template.services.PumpingStationSingletonService;
import ite.examples.template.services.TemperatureSingletonService;

import javax.inject.Inject;
import javax.json.Json;
import javax.json.JsonObject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/temperature")
public class PumpingStationService {
	
	private static final Logger logger = Logger.getLogger(PumpingStationService.class.getName());
	
	@Inject
	private PumpingStationSingletonService ts;

	@GET
	@Produces({MediaType.APPLICATION_JSON})
	public JsonObject getValue() {
		logger.fine("getValue: get current temperature" );
		JsonObject jObj = Json.createObjectBuilder().add("PumpingStation", ts.getHladinaNadrze()).build();
		return jObj;
	}
	
}
