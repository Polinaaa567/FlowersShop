package local.arch.infrastructure.in.controller.rest.endpoint.Persons;

import java.util.ArrayList;
import java.util.List;

import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.Response;
import local.arch.application.IService;
import local.arch.application.dto.Persons;
import local.arch.infrastructure.builder.Built;

@Path("/Persons")
public class Controller {

	@Inject
	@Built
	IService service;

	@GET
	@Produces("application/json")
	public Response service() {
		List<Persons> ListPersons = service.listPersons();
		List<String> logins = new ArrayList<>();
		for (Persons per : ListPersons) {
			logins.add(per.getLogin());
		}
		return Response.ok(logins).build();
	}
}
