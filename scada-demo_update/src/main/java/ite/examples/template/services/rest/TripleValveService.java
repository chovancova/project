package ite.examples.template.services.rest;

import ite.examples.template.services.TriplevalveSingletonService;

import javax.inject.Inject;
import javax.json.JsonObject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/triplevalve")
public class TripleValveService {
	
	@Inject
	private TriplevalveSingletonService tss;
	
	@GET
	@Produces({MediaType.APPLICATION_JSON})
	public JsonObject getValue() {
		return tss.getJSONData();
	}
		

}
