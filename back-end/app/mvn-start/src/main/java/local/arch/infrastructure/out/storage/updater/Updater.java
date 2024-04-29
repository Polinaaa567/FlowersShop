package local.arch.infrastructure.out.storage.updater;

import java.util.List;
import java.util.logging.Logger;

import local.arch.application.api.Updatable;
import local.arch.application.dto.Orders;
import local.arch.infrastructure.out.storage.ws.Controller;

public class Updater implements Updatable {
    public void updateStateHistoryOrder(List<Orders> ordersHistory, String clientToken) {
        Logger.getLogger("Updater ИНФА 100%").info("Ошибка есть нет?"+ ordersHistory);
        Logger.getLogger("Updater ИНФА 100%").info("Ошибка есть нет?"+ clientToken);

        Controller.send(ordersHistory, clientToken);
    }
}
