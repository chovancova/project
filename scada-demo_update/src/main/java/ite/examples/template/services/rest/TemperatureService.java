package ite.examples.template.services.rest;

import java.util.logging.Logger;

import ite.examples.template.services.TemperatureSingletonService;

import javax.inject.Inject;
import javax.json.JsonObject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/temperature")
public class TemperatureService {
	
	private static final Logger logger = Logger.getLogger(TemperatureService.class.getName());
	
	@Inject
	private TemperatureSingletonService ts;

	@GET
	@Produces({MediaType.APPLICATION_JSON})
	public JsonObject getValue() {
		logger.fine("getValue: get current temperature" );
		return ts.getJSONData();
	}
	
}
