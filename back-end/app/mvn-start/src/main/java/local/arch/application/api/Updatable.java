package local.arch.application.api;

import java.util.List;

import local.arch.application.dto.Orders;

public interface Updatable {
    void updateStateHistoryOrder(List<Orders> ordersHistory, String clientToken );
}
