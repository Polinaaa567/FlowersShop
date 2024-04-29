package local.arch.infrastructure.out.storage.ws;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.logging.Logger;

import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.json.bind.Jsonb;
import jakarta.json.bind.JsonbBuilder;
import jakarta.websocket.OnClose;
import jakarta.websocket.OnMessage;
import jakarta.websocket.OnOpen;
import jakarta.websocket.Session;
import jakarta.websocket.server.ServerEndpoint;
import local.arch.application.dto.Orders;

@ServerEndpoint("/HistoryOrder")
public class Controller {
    private final static ConcurrentLinkedQueue<Session> queue = new ConcurrentLinkedQueue<>();
    private final static ConcurrentHashMap<String, Session> mapIdSs = new ConcurrentHashMap<>();
    private final static ConcurrentHashMap<Session, String> mapSsId = new ConcurrentHashMap<>();
    // private static Jsonb jsonb = JsonbBuilder.create();
        // 

    public static void send(List<Orders> ordersHistory, String clientToken) {
        // Logger.getLogger("ФФФФФФФФФФФФФФФФФФФФФФФФФФ").info("session " + clientToken);

        try {
            Session session = mapIdSs.get(clientToken);
            Logger.getLogger("send").info("session " + session);

            ObjectMapper objectMapper = new ObjectMapper();
            objectMapper.setDateFormat(new SimpleDateFormat("dd-MM-yyyy HH:mm:ss"));
            String resultJson = objectMapper.writeValueAsString(ordersHistory);

            session.getBasicRemote().sendText(resultJson);
        } catch (IOException ioe) {
        }
    }

    @OnOpen
    public void connSectionOpened(Session session) {
        Logger.getLogger("OnOpen").info("session" + session);
        queue.add(session);
    }

    @OnClose
    public void connectionClosed(Session session) {
        Logger.getLogger("OnClose").info("session" + session);

        queue.remove(session);
        String message = mapSsId.remove(session);
        mapIdSs.remove(message);
    }

    @OnMessage
    public void processMessage(Session session, String message) {

        Logger.getLogger("OnMessage").info("session" + session);

        mapIdSs.put(message, session);
    }
}
