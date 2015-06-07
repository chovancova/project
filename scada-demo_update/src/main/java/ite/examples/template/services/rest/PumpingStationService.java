package ite.examples.template.services.rest;

import ite.examples.template.services.PumpingStationSingletonService;

import javax.inject.Inject;
import javax.json.JsonObject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/pumpingstation")
public class PumpingStationService {
	
	@Inject
	private PumpingStationSingletonService pss;
	
	@GET
	@Produces({MediaType.APPLICATION_JSON})
	public JsonObject getValue() {
		return pss.getJSONData();
	}
		

}
