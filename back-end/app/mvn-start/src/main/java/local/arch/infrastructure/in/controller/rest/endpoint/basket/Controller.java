package local.arch.infrastructure.in.controller.rest.endpoint.basket;

import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.QueryParam;
import jakarta.ws.rs.core.Response;
import local.arch.application.IService;
import local.arch.infrastructure.builder.Built;

@Path("/Basket")
public class Controller {

    @Inject
    @Built
    IService service;

    @GET
    @Produces("application/json")
    public Response service(@QueryParam("result") Integer result,
            @QueryParam("price") Integer price,
            @QueryParam("symbol") String symbol) {

        double History = service.order(result, price, symbol);
        return Response.ok(History).build();
    }
}
