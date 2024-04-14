package local.arch.infrastructure.in.controller.rest.endpoint.HistoryOrder;

import java.text.SimpleDateFormat;
import java.util.List;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.QueryParam;
import jakarta.ws.rs.core.Response;
import local.arch.application.IService;
import local.arch.application.dto.Orders;
import local.arch.infrastructure.builder.Built;

@Path("/HistoryOrder")
public class Controller {

	@Inject
	@Built
	IService service;

	@GET
	@Produces("application/json")
	public Response service(@QueryParam("login") String login) {
		List<Orders> HistoryOrders = service.listOrder(login);
		ObjectMapper objectMapper = new ObjectMapper();
		objectMapper.setDateFormat(new SimpleDateFormat("dd-MM-yyyy HH:mm:ss"));
		String jsonResult = "";
		try {
			jsonResult = objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(HistoryOrders);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return Response.ok(jsonResult).build();
	}
}
