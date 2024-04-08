package local.arch.infrastructure.in.controller.rest.endpoint.authentication;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.inject.Inject;
import jakarta.json.bind.Jsonb;
import jakarta.json.bind.JsonbBuilder;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.Response;
import local.arch.application.IService;
import local.arch.infrastructure.builder.Built;

@Path("/Authentication")
public class Controller {

	@Inject
	@Built
	IService service;

	private Jsonb jsonb = JsonbBuilder.create();

	@POST
	@Produces("text/plain")
	public Response service(String userJson) { 
		UserToken user = jsonb.fromJson(userJson, UserToken.class);
		String check = service.checkUser(user.getLogin(), user.getPassword());
		ObjectMapper objectMapper = new ObjectMapper();
		String jsonResult = "";
		try {
			jsonResult = objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(check);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return Response.ok(jsonResult).build();
	}
}