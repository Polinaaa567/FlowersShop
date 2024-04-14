package local.arch.application.dto;

import java.sql.Timestamp;

public class Orders {
    private Integer id;
    private String person_login;
    private Timestamp created_at;
    private Integer cost;
    private Timestamp date_complete;
    private Flowers flowers;
    
    public Flowers getFlowers() {
        return this.flowers;
    }

    public void setFlowers(Flowers flowers) {
        this.flowers = flowers;
    }

    public Integer getOrderID() {
        return this.id;
    }

    public void setOrderID(Integer pID) {
        this.id = pID;
    }

    public String getPersonLogin() {
        return this.person_login;
    }

    public void setPersonLogin(String pPerson_login) {
        this.person_login = pPerson_login;
    }

    public Integer getCost() {
        return this.cost;
    }

    public void setCost(Integer pCost) {
        this.cost = pCost;
    }

    public Timestamp getCreated_at() {
        return this.created_at;
    }

    public void setCreated_at(Timestamp pCreated_at) {
        this.created_at = pCreated_at;
    }

    public Timestamp getDateComplete() {
        return this.date_complete;
    }

    public void setDateComplete(Timestamp date_complete) {
        this.date_complete = date_complete;
    }
}
