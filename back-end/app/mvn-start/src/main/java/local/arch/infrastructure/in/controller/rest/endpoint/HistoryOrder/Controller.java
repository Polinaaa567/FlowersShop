package local.arch.infrastructure.in.controller.rest.endpoint.HistoryOrder;

import java.util.logging.Logger;

import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.HeaderParam;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.QueryParam;
import jakarta.ws.rs.core.Response;
import local.arch.application.api.IService;
import local.arch.infrastructure.builder.Built;
import local.arch.infrastructure.token.ITokenKey;

@Path("/HOHttp")
public class Controller {

	@Inject
	@Built
	IService service;

	@Inject
	ITokenKey usedManager;

	@GET
	@Produces("application/json")
	public Response service(@QueryParam("login") String login,
			@HeaderParam("token") String token) {

		boolean trueToken = usedManager.validate(token);

		if (trueToken) {
			Logger.getLogger("http").info("" + token);
			boolean HistoryOrders = service.listOrder(login, token);
			Logger.getLogger("Controller HOHttp ИНФА 100%").info("Ошибка есть нет?");

			Logger.getLogger("http").info("ok: " + HistoryOrders);
		}
		return Response.ok("Выполняется поиск").build();
		// ObjectMapper objectMapper = new ObjectMapper();
		// objectMapper.setDateFormat(new SimpleDateFormat("dd-MM-yyyy HH:mm:ss"));
		// String jsonResult = "";
		// try {
		// jsonResult =
		// objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(HistoryOrders);
		// } catch (JsonProcessingException e) {
		// e.printStackTrace();
		// }
	}
}
