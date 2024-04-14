package local.arch.infrastructure.in.controller.rest.endpoint.InfoUser;

import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.QueryParam;
import jakarta.ws.rs.core.Response;
import local.arch.application.IService;
import local.arch.application.dto.Persons;
import local.arch.infrastructure.builder.Built;

@Path("/InfoUser")
public class Controller {
    @Inject
    @Built
    IService service;

    @GET
    @Produces("application/json")
    public Response service(@QueryParam("login") String login) {
        Persons History = service.getUserInfo(login);

        return Response.ok(History).build();
    }
}
