package local.arch.utils;

import java.util.ArrayList;
import java.util.List;

import local.arch.application.dto.Orders;
import local.arch.infrastructure.out.storage.model.EOrders2;

public class OrdersStruct {
    public static List<Orders> toOrder(List<EOrders2> e) {
        List<Orders> orders = new ArrayList<>();
        for (EOrders2 eOrder : e) {
            Orders order = new Orders();
            order.setOrderID(eOrder.getOrderID());
            order.setCost(eOrder.getCost());
            order.setCreated_at(eOrder.getCreated_at());
            order.setDateComplete(eOrder.getDateComplete());
            order.setPersonLogin(eOrder.getPersonLogin());
            order.setFlowers(FlowersStruct.toFlowers(eOrder.getFlowers()));
            orders.add(order);
        }
        return orders;
    }
}
