package local.arch.infrastructure.in.controller.rest.endpoint.NewOrder;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.QueryParam;
import jakarta.ws.rs.core.Response;
import local.arch.application.IService;
import local.arch.infrastructure.builder.Built;

@Path("/NewOrder")
public class Controller {

	@Inject
	@Built
	IService service;

	@GET
	@Produces("application/json")
	public Response service(@QueryParam("login") String login,
			@QueryParam("flowers") String flowers,
			@QueryParam("cost") Integer cost,
			@QueryParam("date") String dateString) {
LocalDateTime dateTime = LocalDateTime.parse(dateString, DateTimeFormatter.ISO_LOCAL_DATE_TIME);

		Timestamp timestamp = Timestamp.valueOf(dateTime);
		boolean result = service.newOrder(login, flowers, cost, timestamp);
		ObjectMapper objectMapper = new ObjectMapper();
		String jsonResult = "";
		try {
			jsonResult = objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(result);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return Response.ok(jsonResult).build();
	}
}
