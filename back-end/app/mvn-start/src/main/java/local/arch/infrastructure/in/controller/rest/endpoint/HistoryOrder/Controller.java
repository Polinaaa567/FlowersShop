package local.arch.infrastructure.in.controller.rest.endpoint.HistoryOrder;

import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.QueryParam;
import jakarta.ws.rs.core.Response;
import local.arch.application.IService;
import local.arch.infrastructure.builder.Built;

@Path("/HistoryOrder")
public class Controller {

	@Inject
	@Built
	IService service;

	@GET
	@Produces("application/json")
	public Response service(@QueryParam("login") String login) {
		String HistoryOrders = service.listOrder(login);

		return Response.ok(HistoryOrders).build();
	}
}
