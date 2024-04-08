package local.arch.infrastructure.in.controller.rest.endpoint.Persons;

import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.Response;
import local.arch.application.IService;
import local.arch.infrastructure.builder.Built;

@Path("/Persons")
public class Controller {
	
    @Inject
	@Built
	IService service;

	@GET
	@Produces("application/json")
	public Response service() {
		String ListPersons = service.listPersons();
        
		return Response.ok(ListPersons).build();
	}
}