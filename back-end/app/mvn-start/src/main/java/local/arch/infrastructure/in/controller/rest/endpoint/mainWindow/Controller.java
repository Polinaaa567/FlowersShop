package local.arch.infrastructure.in.controller.rest.endpoint.mainWindow;

import java.util.List;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.Response;
import local.arch.application.IService;
import local.arch.application.dto.Flowers;
import local.arch.infrastructure.builder.Built;

@Path("/Products")
public class Controller {

	@Inject
	@Built
	IService service;

	@GET
	@Produces("application/json")
	public Response service() {
		List<Flowers> ListFlowers = service.listFlowers();
		ObjectMapper objectMapper = new ObjectMapper();
		String jsonResult = "";
		try {
			jsonResult = objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(ListFlowers);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return Response.ok(jsonResult).build();
	}
}
