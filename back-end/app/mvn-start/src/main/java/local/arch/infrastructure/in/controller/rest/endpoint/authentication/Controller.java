package local.arch.infrastructure.in.controller.rest.endpoint.authentication;

import jakarta.inject.Inject;
import jakarta.json.bind.Jsonb;
import jakarta.json.bind.JsonbBuilder;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.Response;
import local.arch.application.api.IService;
import local.arch.infrastructure.builder.Built;


@Path("/Identification")
public class Controller {

	@Inject
	@Built
	IService service;

	private Jsonb jsonb = JsonbBuilder.create();

	@POST
	@Produces("text/plain")
	@Path("/Authentication")
	public Response Authentication(String userJson) {
		UserToken user = jsonb.fromJson(userJson, UserToken.class);
		String check = service.checkUser(user.getLogin(), user.getPassword());

		return Response.ok(check).build();
	}

	@POST
	@Produces("text/plain")
	@Path("/Registration")
	public Response Registration(String userRegJson) {

		UserRegistration userReg = jsonb.fromJson(userRegJson, UserRegistration.class);
		String check = service.newUser(userReg.getLogin(), userReg.getPassword(), userReg.getfirstName(),
				userReg.getlastName());

		return Response.ok(check).build();
	}
}