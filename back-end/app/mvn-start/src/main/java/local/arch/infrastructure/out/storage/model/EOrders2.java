package local.arch.infrastructure.out.storage.model;

import java.io.Serializable;
import java.sql.Timestamp;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table(name = "\"orders2\"")
public class EOrders2 implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "orders2_id_seq")
    @SequenceGenerator(name = "orders2_id_seq", sequenceName = "orders2_id_seq", initialValue = 1, allocationSize = 1)
    @Column(name = "\"id\"")
    private Integer id;

    @Column(name = "\"person_login\"")
    private String person_login;

    @Column(name = "\"created_at\"")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd' 'HH:mm:ss")
    private Timestamp created_at;

    @Column(name = "\"cost\"")
    private Integer cost;

    @Column(name = "\"date_complete\"")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd' 'HH:mm:ss")
    private Timestamp date_complete;

    @ManyToOne
    @JoinColumn(name = "flowersid", referencedColumnName = "id")
    private EFlowers flowers;

    public EFlowers getFlowers() {
        return this.flowers;
    }

    public void setFlowers(EFlowers flowers) {
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
